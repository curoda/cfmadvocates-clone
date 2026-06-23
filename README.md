# cfmadvocates.com — Static Clone

A high-fidelity static clone of **https://cfmadvocates.com/** (CFM Advocates — a state/federal
lobbying and public-affairs firm in the Pacific Northwest).

- **Live clone:** https://cfmadvocates-clone.vercel.app
- **Source:** https://cfmadvocates.com/

## Approach

The source is a WordPress site (theme `stellartheme`) using RevSlider (homepage hero),
Gravity Forms, WPBakery/js_composer, and Adobe Typekit (Lato). It is cloned as a **static
mirror**: the real server HTML for every page is downloaded, and every same-domain asset
(CSS, JS, images, fonts) is downloaded with its original path preserved. All
`cfmadvocates.com` / protocol-relative URLs are rewritten to root-relative paths, and the
Adobe Typekit kit + font binaries are self-hosted under `site/_ext/` so fonts render
off-domain. Because the original CSS/JS ships unchanged, client-side behaviour
(RevSlider hero, off-canvas mobile menu, hover states) is reproduced exactly.

## Repository layout

```
capture.js          Reusable bounded-screenshot + spec capture (Playwright).
                    deviceScaleFactor=1, fixed 1440x900 / 390x844 viewports,
                    segmented scroll-capture (<=900px/seg), every PNG downscaled
                    to <=1500px longest side.
mirror.py           Static-mirror builder (downloads HTML+assets, rewrites URLs,
                    self-hosts Typekit).
batch_capture.js    Runs capture.js for every URL into captures/<slug>/.
audit.js            Loads every page and reports >=400 / failed asset requests.
compare.js          Phase-6 original-vs-clone comparison (page height + hero pixel diff).
urls.txt            Full deduplicated same-domain URL list (64 pages).
captures/<slug>/    Per-page capture spec: screenshots (desktop+mobile, segmented),
                    page.html, styles.json, assets.txt, fonts.txt, embeds.txt,
                    meta.txt, links.txt.
site/               Deployable static mirror (one folder per page -> index.html).
site/_ext/          Self-hosted external assets (Adobe Typekit CSS + Lato fonts).
DISCREPANCIES.md    Final discrepancy table + manual-handling list + per-pass log.
```

## Pages (64 total)

13 main pages, 20 staff bios, 21 case studies (index + 20 details + 2 pagination),
8 news posts + news index. Auto-generated WordPress taxonomy archives
(`/tag/*`, `/category/*`, `/team_classifications/*`, `/case_study_categories/*`) are
canonical-collapsed duplicates and out of the user-facing nav; they are recorded in
`urls.txt` history but not rebuilt as distinct pages.

## Known gaps (faithful to source)

- **Gravity Forms** (footer newsletter on every page; contact form on `/get-in-touch/`)
  post to `/wp-admin/admin-ajax.php`, which does not exist on a static host. The forms
  render pixel-identically but submission is inert — flagged for manual handling.
- Three images are **404 on the original site itself** and therefore cannot be captured:
  `contact-us-banner.jpg`, `Crisis-communication-1-1.jpg`, `Hinda-Mitchell-300x300.jpg`.
  The clone reproduces the original's exact (broken) state rather than substituting
  placeholders.
- Google Analytics / gtag tags are preserved (IDs `UA-229652972-1`, `G-5DYDP5V9E6`) so the
  markup matches; they send no meaningful data from the clone.

## Deploy

```
cd site && vercel deploy --prod --yes --token "$VERCEL_TOKEN"
```
