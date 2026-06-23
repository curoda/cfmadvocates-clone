#!/usr/bin/env node
/*
 * Reusable capture script for site cloning.
 * Usage: node capture.js <url> <outdir> [--mobile-only] [--desktop-only]
 *
 * Guarantees on screenshots:
 *  - deviceScaleFactor = 1 (saved pixels == CSS pixels)
 *  - fixed viewport 1440x900 (desktop) / 390x844 (mobile)
 *  - segmented scroll-capture, each segment <= 1500px tall
 *  - every saved PNG downscaled so longest side <= 1500px (via sharp)
 *  - prints final pixel dimensions of every saved file
 *
 * Also writes: page.html, styles.json, assets.txt, fonts.txt,
 *  embeds.txt, meta.txt, links.txt
 */
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const SEG_MAX = 1500;      // max segment height in CSS px
const DOWNSCALE = 1500;    // longest side cap for attachable images

function sh(cmd) { return execSync(cmd, { stdio: ['ignore', 'pipe', 'pipe'] }).toString(); }

async function autoScroll(page, step) {
  // Scroll through the whole page to trigger lazy loading
  await page.evaluate(async (step) => {
    await new Promise((resolve) => {
      let y = 0;
      const timer = setInterval(() => {
        const h = document.body.scrollHeight;
        window.scrollTo(0, y);
        y += step;
        if (y >= h) { clearInterval(timer); resolve(); }
      }, 120);
    });
  }, step);
  await page.waitForTimeout(800);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(400);
}

function downscale(file) {
  // Downscale longest side to <= DOWNSCALE, never enlarge
  try {
    sh(`mogrify -resize ${DOWNSCALE}x${DOWNSCALE}\\> "${file}"`);
  } catch (e) { console.error('mogrify failed', file, e.message); }
  const dims = sh(`identify -format "%wx%h" "${file}"`).trim();
  console.log(`   ${path.basename(file)} -> ${dims}`);
  return dims;
}

async function segmentCapture(page, prefix, vw, vh) {
  // full page height (settled after autoScroll). Step by viewport height so
  // captured segments tile the page with no gaps. Each segment <= vh (<1500px).
  const totalH = await page.evaluate(() => Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight));
  let idx = 0;
  let y = 0;
  const files = [];
  while (y < totalH) {
    const h = Math.min(vh, totalH - y);
    await page.evaluate((yy) => window.scrollTo(0, yy), y);
    await page.waitForTimeout(250);
    const file = `${prefix}-seg${String(idx).padStart(2, '0')}.png`;
    // capture the current viewport region (top-left, height h)
    await page.screenshot({ path: file, clip: { x: 0, y: 0, width: vw, height: h } });
    downscale(file);
    files.push(file);
    y += vh;
    idx++;
    if (idx > 60) break; // safety
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  return files;
}

async function run() {
  const url = process.argv[2];
  const outdir = process.argv[3];
  const desktopOnly = process.argv.includes('--desktop-only');
  const mobileOnly = process.argv.includes('--mobile-only');
  if (!url || !outdir) { console.error('usage: node capture.js <url> <outdir>'); process.exit(1); }
  fs.mkdirSync(outdir, { recursive: true });

  const browser = await chromium.launch();

  // ---------- DESKTOP ----------
  if (!mobileOnly) {
    const ctx = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      deviceScaleFactor: 1,
      ignoreHTTPSErrors: true,
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36',
    });
    const page = await ctx.newPage();
    await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 }).catch(async () => {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
    });
    await page.waitForTimeout(1500);
    await autoScroll(page, 600);

    // page.html (rendered)
    const html = await page.content();
    fs.writeFileSync(path.join(outdir, 'page.html'), html);

    // ---- data extraction ----
    const data = await page.evaluate(() => {
      const props = ['font-family','font-size','font-weight','line-height','letter-spacing','color',
        'background-color','background-image','text-align','margin-top','margin-right','margin-bottom','margin-left',
        'padding-top','padding-right','padding-bottom','padding-left','display','flex-direction','justify-content',
        'align-items','gap','grid-template-columns','max-width','border-radius','box-shadow','position','width','height'];
      const out = { styles: [], assets: new Set(), fonts: new Set(), embeds: [], links: [], meta: {} };
      const all = document.querySelectorAll('*');
      let i = 0;
      all.forEach((el) => {
        const r = el.getBoundingClientRect();
        const cs = getComputedStyle(el);
        const visible = (r.width > 0 && r.height > 0 && cs.display !== 'none' && cs.visibility !== 'hidden');
        // collect background images regardless
        const bg = cs.backgroundImage;
        if (bg && bg !== 'none') {
          const m = bg.match(/url\(["']?([^"')]+)["']?\)/g);
          if (m) m.forEach((u) => { const uu = u.replace(/url\(["']?/, '').replace(/["']?\)$/, ''); out.assets.add(uu); });
        }
        if (cs.fontFamily) out.fonts.add(cs.fontFamily);
        if (visible && i < 4000) {
          const o = { tag: el.tagName.toLowerCase(), cls: el.className && typeof el.className === 'string' ? el.className : '' };
          props.forEach((p) => { o[p] = cs.getPropertyValue(p); });
          out.styles.push(o); i++;
        }
      });
      // images
      document.querySelectorAll('img').forEach((img) => {
        if (img.src) out.assets.add(img.src);
        if (img.srcset) img.srcset.split(',').forEach((s) => { const u = s.trim().split(/\s+/)[0]; if (u) out.assets.add(u); });
      });
      document.querySelectorAll('picture source').forEach((s) => {
        if (s.srcset) s.srcset.split(',').forEach((x) => { const u = x.trim().split(/\s+/)[0]; if (u) out.assets.add(u); });
      });
      document.querySelectorAll('video, audio, video source, audio source').forEach((v) => { if (v.src) out.assets.add(v.src); });
      document.querySelectorAll('link[rel*="icon"], link[rel="apple-touch-icon"], link[rel="mask-icon"]').forEach((l) => { if (l.href) out.assets.add(l.href); });
      // embeds
      document.querySelectorAll('iframe, embed, object').forEach((e) => { out.embeds.push({ tag: e.tagName.toLowerCase(), src: e.src || e.data || '' }); });
      // links
      document.querySelectorAll('a[href]').forEach((a) => { out.links.push({ href: a.getAttribute('href'), text: (a.textContent || '').trim().slice(0, 80) }); });
      // meta
      const m = out.meta;
      m.title = document.title;
      const gm = (sel, attr) => { const e = document.querySelector(sel); return e ? e.getAttribute(attr) : null; };
      m.description = gm('meta[name="description"]', 'content');
      m.canonical = gm('link[rel="canonical"]', 'href');
      m.robots = gm('meta[name="robots"]', 'content');
      m.viewport = gm('meta[name="viewport"]', 'content');
      m.og = {}; document.querySelectorAll('meta[property^="og:"]').forEach((e) => { m.og[e.getAttribute('property')] = e.getAttribute('content'); });
      m.twitter = {}; document.querySelectorAll('meta[name^="twitter:"]').forEach((e) => { m.twitter[e.getAttribute('name')] = e.getAttribute('content'); });
      m.scripts = []; document.querySelectorAll('script[src]').forEach((s) => { m.scripts.push(s.src); });
      // fontfaces
      const ff = [];
      for (const sheet of document.styleSheets) {
        try { for (const rule of sheet.cssRules) { if (rule.constructor.name === 'CSSFontFaceRule' || rule.type === 5) { ff.push(rule.cssText); } } } catch (e) {}
      }
      out.fontfaces = ff;
      out.assets = Array.from(out.assets);
      out.fonts = Array.from(out.fonts);
      return out;
    });

    fs.writeFileSync(path.join(outdir, 'styles.json'), JSON.stringify(data.styles, null, 1));
    fs.writeFileSync(path.join(outdir, 'assets.txt'), data.assets.join('\n'));
    fs.writeFileSync(path.join(outdir, 'fonts.txt'), data.fonts.join('\n') + '\n\n=== @font-face ===\n' + (data.fontfaces || []).join('\n'));
    fs.writeFileSync(path.join(outdir, 'embeds.txt'), data.embeds.map((e) => `${e.tag}\t${e.src}`).join('\n'));
    fs.writeFileSync(path.join(outdir, 'meta.txt'), JSON.stringify(data.meta, null, 2));
    const links = data.links.map((l) => {
      let kind = 'EXTERNAL';
      const h = l.href || '';
      if (h.startsWith('#') || h.startsWith('/') || h.includes('cfmadvocates.com')) kind = 'INTERNAL';
      if (h.startsWith('mailto:') || h.startsWith('tel:') || h.startsWith('sms:')) kind = 'EXTERNAL';
      return `${kind}\t${l.href}\t${l.text}`;
    });
    fs.writeFileSync(path.join(outdir, 'links.txt'), links.join('\n'));

    console.log('DESKTOP screenshots:');
    await segmentCapture(page, path.join(outdir, 'screenshot-desktop'), 1440, 900);
    // primary single hero shot
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(300);
    await page.screenshot({ path: path.join(outdir, 'screenshot-desktop.png'), clip: { x: 0, y: 0, width: 1440, height: 900 } });
    downscale(path.join(outdir, 'screenshot-desktop.png'));

    await ctx.close();
  }

  // ---------- MOBILE ----------
  if (!desktopOnly) {
    const ctx = await browser.newContext({
      viewport: { width: 390, height: 844 },
      deviceScaleFactor: 1,
      ignoreHTTPSErrors: true,
      isMobile: true,
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1',
    });
    const page = await ctx.newPage();
    await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 }).catch(async () => {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
    });
    await page.waitForTimeout(1200);
    await autoScroll(page, 500);
    console.log('MOBILE screenshots:');
    await segmentCapture(page, path.join(outdir, 'screenshot-mobile'), 390, 844);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(300);
    await page.screenshot({ path: path.join(outdir, 'screenshot-mobile.png'), clip: { x: 0, y: 0, width: 390, height: 844 } });
    downscale(path.join(outdir, 'screenshot-mobile.png'));
    await ctx.close();
  }

  await browser.close();
  console.log('DONE', url);
}
run().catch((e) => { console.error(e); process.exit(1); });
