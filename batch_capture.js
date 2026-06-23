#!/usr/bin/env node
// Runs capture.js spec for every URL into captures/<slug>/ with limited concurrency.
const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const urls = fs.readFileSync(process.argv[2], 'utf8').split('\n')
  .map(s => s.trim()).filter(s => s && !s.startsWith('#'));
const CONC = parseInt(process.argv[3] || '3', 10);

function slugFor(u) {
  const p = new URL(u);
  let s = p.pathname.replace(/^\/+|\/+$/g, '');
  if (s === '') s = 'home';
  s = s.replace(/\//g, '__');
  return s;
}

let i = 0, active = 0, done = 0;
const results = [];
function next() {
  if (i >= urls.length && active === 0) {
    fs.writeFileSync('captures/_capture_status.json', JSON.stringify(results, null, 2));
    console.log('ALL DONE', done, '/', urls.length);
    return;
  }
  while (active < CONC && i < urls.length) {
    const u = urls[i++];
    const slug = slugFor(u);
    const out = path.join('captures', slug);
    active++;
    const env = Object.assign({}, process.env, { PLAYWRIGHT_BROWSERS_PATH: '/opt/pw-browsers' });
    const child = spawn('node', ['capture.js', u, out], { env });
    let err = '';
    child.stderr.on('data', d => { err += d; });
    child.on('exit', (code) => {
      active--; done++;
      results.push({ url: u, slug, code });
      console.log(`[${done}/${urls.length}] ${slug} exit=${code}`);
      if (code !== 0) console.log('   ERR:', err.slice(0, 300));
      next();
    });
  }
}
next();
