#!/usr/bin/env node
// Phase 6 comparison: for each path, load ORIGINAL and CLONE, compare rendered
// full-page height at desktop+mobile, and pixel-diff the hero (first 1440x900) segment.
const { chromium } = require('playwright');
const fs = require('fs');
const { execSync } = require('child_process');

const ORIG = 'https://cfmadvocates.com';
const CLONE = process.argv[2] || 'https://cfmadvocates-clone.vercel.app';
const paths = fs.readFileSync(process.argv[3], 'utf8').split('\n').map(s => s.trim()).filter(Boolean);
const CONC = 2;
fs.mkdirSync('compare/diffs', { recursive: true });

async function grab(ctx, url, file, w, h) {
  const page = await ctx.newPage();
  let height = -1;
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
    await page.waitForTimeout(1200);
    await page.evaluate(async () => { await new Promise(r => { let y = 0; const t = setInterval(() => { window.scrollTo(0, y); y += 700; if (y > document.body.scrollHeight) { clearInterval(t); r(); } }, 50); }); });
    await page.waitForTimeout(600);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(300);
    height = await page.evaluate(() => Math.max(document.body.scrollHeight, document.documentElement.scrollHeight));
    if (file) { await page.screenshot({ path: file, clip: { x: 0, y: 0, width: w, height: h } }); }
  } catch (e) { /* ignore */ }
  await page.close();
  return height;
}

function pixelDiff(a, b, out) {
  try {
    // normalize sizes
    execSync(`convert "${a}" -resize 720x450! /tmp/a.png; convert "${b}" -resize 720x450! /tmp/b.png`);
    const res = execSync(`compare -metric AE -fuzz 5% /tmp/a.png /tmp/b.png "${out}" 2>&1 || true`).toString().trim();
    const n = parseInt(res.split(/\s+/)[0]) || 0;
    return n / (720 * 450);
  } catch (e) { return -1; }
}

(async () => {
  const browser = await chromium.launch();
  const ctxD = await browser.newContext({ ignoreHTTPSErrors: true, viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1,
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36' });
  const ctxM = await browser.newContext({ ignoreHTTPSErrors: true, viewport: { width: 390, height: 844 }, deviceScaleFactor: 1, isMobile: true,
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1' });
  const rows = [];
  let idx = 0;
  async function worker() {
    while (idx < paths.length) {
      const p = paths[idx++];
      const slug = (p.replace(/^\/+|\/+$/g, '') || 'home').replace(/\//g, '__');
      const oD = `/tmp/cmp_o_${slug}.png`, cD = `/tmp/cmp_c_${slug}.png`;
      const ohD = await grab(ctxD, ORIG + p, oD, 1440, 900);
      const chD = await grab(ctxD, CLONE + p, cD, 1440, 900);
      const ohM = await grab(ctxM, ORIG + p, null, 390, 844);
      const chM = await grab(ctxM, CLONE + p, null, 390, 844);
      let diff = -1;
      if (fs.existsSync(oD) && fs.existsSync(cD)) diff = pixelDiff(oD, cD, `compare/diffs/${slug}.png`);
      const hPctD = ohD > 0 ? Math.abs(ohD - chD) / ohD * 100 : -1;
      const hPctM = ohM > 0 ? Math.abs(ohM - chM) / ohM * 100 : -1;
      rows.push({ path: p, origHd: ohD, cloneHd: chD, hDiffDpct: +hPctD.toFixed(1), origHm: ohM, cloneHm: chM, hDiffMpct: +hPctM.toFixed(1), heroDiffPct: +(diff * 100).toFixed(2) });
      console.log(`${p}  Hd:${ohD}/${chD}(${hPctD.toFixed(1)}%) Hm:${ohM}/${chM}(${hPctM.toFixed(1)}%) hero:${(diff*100).toFixed(2)}%`);
    }
  }
  await Promise.all(Array.from({ length: CONC }, worker));
  await browser.close();
  fs.writeFileSync('compare/results.json', JSON.stringify(rows, null, 2));
  console.log('\nWROTE compare/results.json');
})();
