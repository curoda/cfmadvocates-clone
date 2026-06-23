#!/usr/bin/env python3
"""
Static-mirror builder for cfmadvocates.com.
- Downloads raw HTML for each page URL (preserving server output so client JS
  like revslider initialises identically).
- Recursively downloads every same-domain asset (css/js/img/font), preserving
  the original path under site/.
- Recursively processes CSS for url() and @import.
- Self-hosts the Adobe Typekit kit + font binaries.
- Rewrites cfmadvocates.com / //cfmadvocates.com URLs to root-relative.
- Writes pages to site/<slug>/index.html (home -> site/index.html).
"""
import os, re, sys, time, hashlib
import urllib.parse as up
import requests

DOMAIN = "cfmadvocates.com"
ROOT = "https://cfmadvocates.com"
SITE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "site")
TYPEKIT_KIT = "https://use.typekit.net/ido2tyy.css"

session = requests.Session()
session.verify = False
session.headers.update({
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
    "Referer": ROOT + "/",
})
import urllib3
urllib3.disable_warnings()

downloaded_assets = set()
failed = []

def fetch(url, binary=True, tries=3):
    for i in range(tries):
        try:
            r = session.get(url, timeout=45)
            if r.status_code == 200:
                return r.content if binary else r.text
            else:
                if i == tries - 1:
                    print(f"  HTTP {r.status_code}: {url}")
            return None if r.status_code != 200 else (r.content if binary else r.text)
        except Exception as e:
            if i == tries - 1:
                print(f"  ERR {url}: {e}")
                failed.append(url)
            time.sleep(1)
    return None

def local_path_for(url):
    """Map a same-domain asset URL to a local path under SITE, preserving path."""
    p = up.urlparse(url)
    path = p.path
    if not path or path == "/":
        path = "/index.html"
    # keep query as part of filename to disambiguate (e.g. css?ver=)
    if p.query:
        # sanitize query into filename
        base, ext = os.path.splitext(path)
        q = re.sub(r'[^a-zA-Z0-9]+', '_', p.query)[:40]
        path = f"{base}__{q}{ext}"
    local = os.path.join(SITE, path.lstrip("/"))
    return local

def is_same_domain(url):
    p = up.urlparse(url)
    return p.netloc == "" or p.netloc.endswith(DOMAIN)

def normalize(url, base):
    if url.startswith("//"):
        url = "https:" + url
    elif url.startswith("/"):
        url = ROOT + url
    elif url.startswith(("http://", "https://", "data:", "mailto:", "tel:", "sms:", "#")):
        pass
    else:
        url = up.urljoin(base, url)
    return url

def download_asset(url, base=ROOT+"/"):
    """Download a same-domain asset and (if css) recurse. Returns local root-relative path or None."""
    url = normalize(url, base)
    if url.startswith(("data:", "mailto:", "tel:", "sms:", "#")):
        return None
    if not is_same_domain(url):
        return None
    # strip fragment
    url = url.split("#")[0]
    if url in downloaded_assets:
        return to_rootrel(url)
    downloaded_assets.add(url)
    data = fetch(url, binary=True)
    if data is None:
        return to_rootrel(url)
    local = local_path_for(url)
    os.makedirs(os.path.dirname(local), exist_ok=True)
    # If CSS, process url()/@import then save as text
    if local.endswith(".css") or "text/css" in (url,):
        try:
            css = data.decode("utf-8", "replace")
            css = process_css(css, url)
            with open(local, "w", encoding="utf-8") as f:
                f.write(css)
        except Exception:
            with open(local, "wb") as f:
                f.write(data)
    else:
        with open(local, "wb") as f:
            f.write(data)
    return to_rootrel(url)

def to_rootrel(url):
    """Convert a same-domain absolute URL to its root-relative local path."""
    local = local_path_for(url)
    rel = "/" + os.path.relpath(local, SITE).replace(os.sep, "/")
    return rel

CSS_URL_RE = re.compile(r'url\(\s*([\'"]?)([^\'")]+)\1\s*\)')
CSS_IMPORT_RE = re.compile(r'@import\s+([\'"])([^\'"]+)\1')

def process_css(css, css_url):
    base = css_url
    def repl_url(m):
        q, u = m.group(1), m.group(2)
        if u.startswith(("data:",)):
            return m.group(0)
        full = normalize(u, base)
        if is_same_domain(full):
            rel = download_asset(full, base)
            if rel:
                return f"url({q}{rel}{q})"
            return m.group(0)
        else:
            # external font/asset (e.g. typekit font binaries) -> download & self-host
            rel = download_external(full)
            if rel:
                return f"url({q}{rel}{q})"
            return m.group(0)
    def repl_import(m):
        q, u = m.group(1), m.group(2)
        full = normalize(u, base)
        if is_same_domain(full):
            rel = download_asset(full, base)
        else:
            rel = download_external(full, as_css=True)
        return f'@import "{rel}"' if rel else m.group(0)
    css = CSS_IMPORT_RE.sub(repl_import, css)
    css = CSS_URL_RE.sub(repl_url, css)
    return css

EXT_DIR = "_ext"
ext_map = {}

def download_external(url, as_css=False):
    """Download an external asset (typekit fonts/css) into site/_ext/ with a hashed name."""
    url = url.split("#")[0]
    if url in ext_map:
        return ext_map[url]
    p = up.urlparse(url)
    ext = os.path.splitext(p.path)[1]
    if as_css and not ext:
        ext = ".css"
    if not ext:
        # guess from content-type later; default bin
        ext = ".bin"
    h = hashlib.md5(url.encode()).hexdigest()[:16]
    name = f"{h}{ext}"
    local = os.path.join(SITE, EXT_DIR, name)
    os.makedirs(os.path.dirname(local), exist_ok=True)
    data = fetch(url, binary=True)
    if data is None:
        return None
    rel = f"/{EXT_DIR}/{name}"
    if as_css or ext == ".css":
        try:
            css = data.decode("utf-8", "replace")
            css = process_css(css, url)
            with open(local, "w", encoding="utf-8") as f:
                f.write(css)
        except Exception:
            with open(local, "wb") as f:
                f.write(data)
    else:
        with open(local, "wb") as f:
            f.write(data)
    ext_map[url] = rel
    return rel

# ---------------- HTML processing ----------------
def slug_to_path(url):
    """Return local file path for a page URL."""
    p = up.urlparse(url)
    path = p.path.strip("/")
    if path == "":
        return os.path.join(SITE, "index.html")
    return os.path.join(SITE, path, "index.html")

ATTR_URL_RE = re.compile(r'(\s(?:href|src|data-lazyload|data-src|poster|content)\s*=\s*)(["\'])(.*?)\2', re.I)
SRCSET_RE = re.compile(r'(\ssrcset\s*=\s*)(["\'])(.*?)\2', re.I)
STYLE_URL_RE = re.compile(r'(style\s*=\s*)(["\'])(.*?)\2', re.I)
INLINE_CSS_BLOCK_RE = re.compile(r'(<style[^>]*>)(.*?)(</style>)', re.I | re.S)

def rewrite_html(html, page_url):
    # 1) inline <style> blocks: process url()
    def repl_style_block(m):
        return m.group(1) + process_css(m.group(2), page_url) + m.group(3)
    html = INLINE_CSS_BLOCK_RE.sub(repl_style_block, html)

    # 2) typekit kit link -> self-host
    # handled generically below via download for external css in <link>

    # 3) attributes with single URL
    def repl_attr(m):
        pre, q, val = m.group(1), m.group(2), m.group(3)
        nv = rewrite_single_url(val, page_url, attr=pre)
        return f"{pre}{q}{nv}{q}"
    html = ATTR_URL_RE.sub(repl_attr, html)

    # 4) srcset
    def repl_srcset(m):
        pre, q, val = m.group(1), m.group(2), m.group(3)
        parts = []
        for item in val.split(","):
            item = item.strip()
            if not item:
                continue
            seg = item.split()
            u = seg[0]
            rest = " ".join(seg[1:])
            nu = rewrite_single_url(u, page_url)
            parts.append((nu + (" " + rest if rest else "")))
        return f"{pre}{q}{', '.join(parts)}{q}"
    html = SRCSET_RE.sub(repl_srcset, html)

    # 5) inline style="" url()
    def repl_inline_style(m):
        pre, q, val = m.group(1), m.group(2), m.group(3)
        nv = process_css(val, page_url)
        return f"{pre}{q}{nv}{q}"
    html = STYLE_URL_RE.sub(repl_inline_style, html)

    return html

ANALYTICS_KEEP = ("google-analytics.com", "googletagmanager.com", "google.com", "gstatic.com",
                  "linkedin.com", "licdn.com", "doubleclick.net", "facebook", "twitter", "x.com")

def rewrite_single_url(val, page_url, attr=""):
    v = val.strip()
    if v == "" or v.startswith(("data:", "mailto:", "tel:", "sms:", "#", "javascript:")):
        return val
    full = normalize(v, page_url)
    host = up.urlparse(full).netloc
    # page navigation links to same domain -> root-relative clean path
    if is_same_domain(full):
        # asset?
        pth = up.urlparse(full).path
        if re.search(r'\.(css|js|png|jpe?g|gif|svg|webp|ico|woff2?|ttf|eot|otf|mp4|webm|mp3|pdf|json|xml|avif)(\?|$)', pth, re.I):
            rel = download_asset(full, page_url)
            return rel or val
        else:
            # internal page link -> keep path (clean URL)
            pr = up.urlparse(full)
            path = pr.path
            if not path.endswith("/") and "." not in os.path.basename(path):
                path = path + "/"
            q = ("?" + pr.query) if pr.query else ""
            frag = ("#" + pr.fragment) if pr.fragment else ""
            return (path or "/") + q + frag
    else:
        # typekit kit css -> self-host so fonts work off-domain
        if "use.typekit.net" in host or "typekit.net" in host:
            rel = download_external(full, as_css=full.endswith(".css") or "/k/" in full or full.endswith("ido2tyy.css") or ".css" in full)
            return rel or val
        if "fonts.googleapis.com" in host or "fonts.gstatic.com" in host:
            rel = download_external(full, as_css="googleapis" in host)
            return rel or val
        # keep analytics/social/external as-is
        return full
    return val

def process_page(url):
    print(f"PAGE: {url}")
    html = fetch(url, binary=False)
    if html is None:
        print(f"  FAILED to fetch page {url}")
        failed.append(url)
        return False
    html = rewrite_html(html, url)
    out = slug_to_path(url)
    os.makedirs(os.path.dirname(out), exist_ok=True)
    with open(out, "w", encoding="utf-8") as f:
        f.write(html)
    return True

if __name__ == "__main__":
    urls_file = sys.argv[1]
    with open(urls_file) as f:
        urls = [l.strip() for l in f if l.strip() and not l.startswith("#")]
    os.makedirs(SITE, exist_ok=True)
    ok = 0
    for u in urls:
        if process_page(u):
            ok += 1
    print(f"\nPages OK: {ok}/{len(urls)}")
    print(f"Assets downloaded: {len(downloaded_assets)}")
    print(f"External self-hosted: {len(ext_map)}")
    if failed:
        print("FAILED:")
        for x in failed:
            print("  ", x)
