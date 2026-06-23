# Discrepancy Report — cfmadvocates.com clone

- **Original:** https://cfmadvocates.com/
- **Clone (live):** https://cfmadvocates-clone.vercel.app
- **Pages compared:** 64 (all same-domain pages)
- **Method:** Each page loaded in headless Chromium at desktop (1440×900) and mobile
  (390×844), `deviceScaleFactor=1`, scrolled to bottom to trigger lazy assets. We compare
  the rendered full-page height at both widths and run an ImageMagick pixel diff on the
  hero (first 1440×900) segment. Full per-page visual spec captured in `captures/<slug>/`.

## Final discrepancy table

After the build+verify passes below, **no HIGH or MEDIUM discrepancies remain**. The only
residual differences are sub-pixel/animation noise (LOW) plus source-side gaps that are
faithfully reproduced rather than substituted.

| page | element | original | clone | severity | proposed fix |
|------|---------|----------|-------|----------|--------------|
| / (home) | RevSlider hero | animated banner | same banner, different animation frame at capture instant | LOW | none — slider animates client-side; static frame differs only by timing |
| /get-in-touch/ | contact form submit | POSTs to admin-ajax.php | inert on static host | MANUAL | see Manual-handling list |
| all pages | footer newsletter form | POSTs to admin-ajax.php | inert on static host | MANUAL | see Manual-handling list |
| /critique-crisis-response-to-improve-crisis/ | 2 inline images | 404 on origin (empty caption boxes) | identical empty boxes | LOW | none — broken on source; not substituted per ground rules |
| /get-in-touch/ | contact-us-banner.jpg bg | 404 on origin (hidden behind RevSlider) | identical | LOW | none — broken on source |

## Manual-handling list (dynamic features that cannot be static)

1. **Gravity Forms — footer newsletter signup** (present on every page). Renders pixel-identically;
   submit POSTs to `/wp-admin/admin-ajax.php` which has no backend on a static host. To make it
   functional, wire the form to a form service (e.g. Formspree/Vercel serverless) — markup and
   styling are already in place.
2. **Gravity Forms — contact form** on `/get-in-touch/`. Same as above.
3. **Google Analytics / gtag** (`UA-229652972-1`, `G-5DYDP5V9E6`) tags are preserved in markup so
   metadata matches; they collect nothing meaningful from the clone domain.

## Source-side gaps (flagged, NOT substituted)

These assets return **404 on the original site itself**, so they could not be captured. The clone
reproduces the original's exact (broken) rendering rather than inserting placeholders:
- `/wp-content/uploads/2022/09/Crisis-communication-1-1.jpg`
- `/wp-content/uploads/2022/09/Hinda-Mitchell-300x300.jpg`
- `/wp-content/uploads/2022/04/contact-us-banner.jpg`

## Per-pass log

**Pass 0 — Build.** Discovered 64 same-domain pages via sitemap_index.xml + link crawl. Built a
static mirror (raw HTML + all wp-content CSS/JS/img assets, URLs rewritten root-relative,
Adobe Typekit kit + Lato fonts self-hosted under `/_ext/`). Deployed to Vercel.

**Pass 1 — Verify & fix.** Ran asset audit across all pages: only 3 broken requests, all of which
are 404 on the origin too (source-side gaps above) — zero clone-introduced breakage. Discovered 2
real pagination pages (`/case-studies/page/2`, `/3`) not in the first crawl → mirrored and
redeployed. Visual spot-check (original vs clone) of 10 representative page types — home
(desktop+mobile), about, team, federal-affairs, news, case-studies gallery, staff bio, case-study
detail, get-in-touch, critique-crisis — all pixel-identical. Verified the off-canvas mobile
hamburger menu opens identically (toggles `is-off-canvas-open`, same submenu).
Result: 0 HIGH, 0 MEDIUM.

**Pass 2 — Full automated compare (all 64 pages).** Desktop height diff = 0.0% on every page;
mobile height diff = 0.0% on every page; hero pixel diff mean 0.022%, max 0.36% (homepage
RevSlider animation frame). No load failures. Result: 0 HIGH, 0 MEDIUM, 0 actionable LOW.

**Stopping condition met:** *no HIGH or MEDIUM discrepancies remain (only LOW/manual).*

## Per-page comparison (rendered full-page height: original/clone)

| page | desktop height O/C | mobile height O/C | hero pixel diff |
|------|--------------------|-------------------|-----------------|
| / | 2776/2776 EXACT | 7039/7039 EXACT | 0.36% |
| /30-years-and-counting/ | 14437/14437 EXACT | 44692/44692 EXACT | 0.02% |
| /about/ | 3208/3208 EXACT | 8075/8075 EXACT | 0.01% |
| /amanda-delapena-joins-cfm/ | 2510/2510 EXACT | 5020/5020 EXACT | 0.02% |
| /case-studies/ | 5736/5736 EXACT | 12020/12020 EXACT | 0.03% |
| /case-studies/page/2/ | 5736/5736 EXACT | 12020/12020 EXACT | 0.03% |
| /case-studies/page/3/ | 5736/5736 EXACT | 12020/12020 EXACT | 0.03% |
| /case_studies/barging-solid-waste-containers-into-the-future/ | 2507/2507 EXACT | 5438/5438 EXACT | 0.01% |
| /case_studies/building-the-case-for-completing-rail-corridor-2/ | 2243/2243 EXACT | 4946/4946 EXACT | 0.01% |
| /case_studies/building-the-case-for-completing-rail-corridor/ | 2262/2262 EXACT | 4812/4812 EXACT | 0.01% |
| /case_studies/creating-a-new-veterans-center-in-lacey/ | 2357/2357 EXACT | 5315/5315 EXACT | 0.01% |
| /case_studies/erickson-inc/ | 2195/2195 EXACT | 4687/4687 EXACT | 0.01% |
| /case_studies/heading-off-a-veto-for-critical-infrastructure/ | 2410/2410 EXACT | 5340/5340 EXACT | 0.01% |
| /case_studies/helping-beaverton-revitalize-its-downtown/ | 1765/1765 EXACT | 3412/3412 EXACT | 0.01% |
| /case_studies/highlighting-challenges-facing-older-adults/ | 2055/2055 EXACT | 4600/4600 EXACT | 0.01% |
| /case_studies/making-the-case-for-transit-funding-statewide/ | 2154/2154 EXACT | 4820/4820 EXACT | 0.01% |
| /case_studies/marketing-a-pioneering-public-retirement-savings-plan/ | 2285/2285 EXACT | 4941/4941 EXACT | 0.01% |
| /case_studies/navigating-school-labor-talks-and-avoiding-a-strike/ | 2171/2171 EXACT | 4656/4656 EXACT | 0.01% |
| /case_studies/preserving-critical-support-for-child-abuse-victims/ | 2261/2261 EXACT | 5293/5293 EXACT | 0.01% |
| /case_studies/preventing-a-tax-on-broadcaster-fcc-licenses/ | 2262/2262 EXACT | 4963/4963 EXACT | 0.01% |
| /case_studies/responding-to-catastrophic-flood-prevention/ | 2568/2568 EXACT | 5295/5295 EXACT | 0.01% |
| /case_studies/restoring-county-funding-for-search-and-rescue/ | 2582/2582 EXACT | 5723/5723 EXACT | 0.01% |
| /case_studies/restoring-tax-credits-to-buy-zero-emission-buses/ | 2424/2424 EXACT | 5343/5343 EXACT | 0.01% |
| /case_studies/securing-funding-for-a-state-road-in-tigard/ | 2257/2257 EXACT | 4730/4730 EXACT | 0.01% |
| /case_studies/securing-funding-for-electric-buses-in-salem/ | 2497/2497 EXACT | 5615/5615 EXACT | 0.01% |
| /case_studies/securing-funding-to-replace-aging-county-courthouse/ | 2307/2307 EXACT | 5078/5078 EXACT | 0.01% |
| /case_studies/sharing-communication-tips-with-city-lobbyists/ | 2225/2225 EXACT | 4582/4582 EXACT | 0.01% |
| /case_studies/training-young-lawyers-to-represent-defendants/ | 2497/2497 EXACT | 5552/5552 EXACT | 0.01% |
| /cfm-adds-dc-staff-member-to-federal-team/ | 3036/3036 EXACT | 6047/6047 EXACT | 0.01% |
| /cfm-adds-experienced-new-team-member/ | 3810/3810 EXACT | 7579/7579 EXACT | 0.01% |
| /cfm-adds-three-new-equity-partners/ | 3953/3953 EXACT | 7700/7700 EXACT | 0.02% |
| /critique-crisis-response-to-improve-crisis/ | 3324/3324 EXACT | 6142/6142 EXACT | 0.01% |
| /federal-affairs/ | 4310/4310 EXACT | 14192/14192 EXACT | 0.03% |
| /former-dot-special-assistant-joins-team-cfm/ | 3443/3443 EXACT | 7018/7018 EXACT | 0.01% |
| /former-senator-cantwell-aide-naseem-mehyar-joins-cfm-advocates-as-vice-president-of-federal-affairs/ | 3170/3170 EXACT | 6362/6362 EXACT | 0.02% |
| /get-in-touch/ | 2071/2071 EXACT | 3007/3007 EXACT | 0.01% |
| /madelynn-sakay-joins-cfms-federal-affairs-team-to-help-advance-client-priorities/ | 2829/2829 EXACT | 5445/5445 EXACT | 0.01% |
| /news/ | 3430/3430 EXACT | 5580/5580 EXACT | 0.01% |
| /privacy-policy/ | 2151/2151 EXACT | 4536/4536 EXACT | 0.01% |
| /public-affairs/ | 3952/3952 EXACT | 11792/11792 EXACT | 0.04% |
| /retired-cfm-research-partner-tom-eiland-dies/ | 4494/4494 EXACT | 9410/9410 EXACT | 0.01% |
| /staff/amanda-delapena/ | 1642/1642 EXACT | 3021/3021 EXACT | 0.02% |
| /staff/dale-penn-ii/ | 1415/1415 EXACT | 2334/2334 EXACT | 0.01% |
| /staff/david-hodges/ | 1415/1415 EXACT | 2334/2334 EXACT | 0.02% |
| /staff/elena-molau/ | 1444/1444 EXACT | 2420/2420 EXACT | 0.02% |
| /staff/gary-conkling/ | 1444/1444 EXACT | 2449/2449 EXACT | 0.02% |
| /staff/jessica-adamson/ | 1415/1415 EXACT | 2391/2391 EXACT | 0.02% |
| /staff/joel-rubin/ | 1415/1415 EXACT | 2362/2362 EXACT | 0.02% |
| /staff/kamron-brant/ | 1386/1386 EXACT | 2247/2247 EXACT | 0.02% |
| /staff/kate-travis/ | 1415/1415 EXACT | 2362/2362 EXACT | 0.02% |
| /staff/katie-whittier/ | 1502/1502 EXACT | 2593/2593 EXACT | 0.02% |
| /staff/kirby-garrett/ | 1530/1530 EXACT | 2823/2823 EXACT | 0.02% |
| /staff/legislative-assistant/ | 1358/1358 EXACT | 2161/2161 EXACT | 0.02% |
| /staff/madelynn-sakay/ | 1530/1530 EXACT | 2766/2766 EXACT | 0.01% |
| /staff/michael-skipper/ | 1386/1386 EXACT | 2247/2247 EXACT | 0.01% |
| /staff/naseem-mehyar/ | 1595/1595 EXACT | 2773/2773 EXACT | 0.02% |
| /staff/norm-eder/ | 1502/1502 EXACT | 2622/2622 EXACT | 0.01% |
| /staff/page-strickler/ | 1473/1473 EXACT | 2593/2593 EXACT | 0.02% |
| /staff/ryann-gleason/ | 1415/1415 EXACT | 2362/2362 EXACT | 0.02% |
| /staff/waylon-buchan/ | 1502/1502 EXACT | 2650/2650 EXACT | 0.02% |
| /staff/zach-reeves/ | 1332/1332 EXACT | 2116/2116 EXACT | 0.02% |
| /state-affairs/ | 3881/3881 EXACT | 11971/11971 EXACT | 0.02% |
| /team/ | 3877/3877 EXACT | 11149/11149 EXACT | 0.02% |
| /thank-you/ | 1865/1865 EXACT | 4594/4594 EXACT | 0.1% |