#!/usr/bin/env node
// Loads each page and reports failed/404 network requests (broken assets).
const { chromium } = require('playwright');
const fs = require('fs');

const base = process.argv[2] || 'http://localhost:8099';
const paths = fs.readFileSync(process.argv[3], 'utf8').split('\n').map(s => s.trim()).filter(Boolean);

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ ignoreHTTPSErrors: true, viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
  const allBad = {};
  for (const p of paths) {
    const page = await ctx.newPage();
    const bad = [];
    page.on('response', (resp) => {
      const s = resp.status();
      if (s >= 400) bad.push(`${s} ${resp.url()}`);
    });
    page.on('requestfailed', (req) => {
      const u = req.url();
      // ignore external analytics that may be blocked
      if (/google-analytics|googletagmanager|doubleclick|linkedin|licdn/.test(u)) return;
      bad.push(`FAIL ${u} (${req.failure() && req.failure().errorText})`);
    });
    const url = base + p;
    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
      await page.waitForTimeout(1500);
      await page.evaluate(async () => { await new Promise(r => { let y = 0; const t = setInterval(() => { window.scrollTo(0, y); y += 800; if (y > document.body.scrollHeight) { clearInterval(t); r(); } }, 60); }); });
      await page.waitForTimeout(800);
    } catch (e) { bad.push(`PAGEERR ${e.message}`); }
    // filter same-domain (local) failures of interest
    const local = bad.filter(b => !/google|gstatic|doubleclick|linkedin|licdn|facebook|twitter|typekit\.net\/p\.css/.test(b));
    if (local.length) { allBad[p] = local; }
    await page.close();
  }
  await browser.close();
  console.log(JSON.stringify(allBad, null, 2));
  const total = Object.values(allBad).reduce((a, b) => a + b.length, 0);
  console.log('TOTAL problem responses:', total, 'on', Object.keys(allBad).length, 'pages');
})();
