// Cookie consent for whclips.co.za. Our own, no third party. Loaded by nav.js on every page.
// Necessary storage is always on (cart, checkout details, offer timer, this choice). Statistics (Microsoft Clarity)
// loads only after the visitor allows it and is stopped, and its cookies cleared, if they withdraw.
(function () {
  'use strict';
  var KEY = 'whc_consent_v1';
  var CLARITY_ID = 'xhn6f6xk36';
  var clarityLoaded = false;
  var mem = null;   // used if browser storage is blocked: the banner then asks again on each page

  function read() {
    try { var s = localStorage.getItem(KEY); if (s) { var o = JSON.parse(s); if (o && o.v === 1) return o; } } catch (e) {}
    return mem;
  }
  function save(stats) {
    var o = { v: 1, statistics: !!stats, ts: new Date().toISOString() };
    mem = o;
    try { localStorage.setItem(KEY, JSON.stringify(o)); } catch (e) {}
    return o;
  }

  function loadClarity() {
    if (clarityLoaded) return;
    clarityLoaded = true;
    (function (c, l, a, r, i, t, y) {
      c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
      t = l.createElement(r); t.async = 1; t.src = 'https://www.clarity.ms/tag/' + i;
      y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
    })(window, document, 'clarity', 'script', CLARITY_ID);
  }

  function clearClarityCookies() {
    var names = ['_clck', '_clsk', 'CLID', 'ANONCHK', 'MR', 'SM'];
    var host = location.hostname, parts = host.split('.'), domains = ['', host];
    if (parts.length > 2) domains.push(parts.slice(-3).join('.'));   // whclips.co.za
    if (parts.length > 1) domains.push(parts.slice(-2).join('.'));
    names.forEach(function (n) {
      domains.forEach(function (d) {
        document.cookie = n + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/' + (d ? '; domain=' + d : '');
        if (d) document.cookie = n + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.' + d;
      });
    });
  }

  var CSS =
    '#whc-consent{position:fixed;left:50%;bottom:16px;transform:translateX(-50%);z-index:99999;width:min(720px,calc(100vw - 24px));' +
    'max-height:calc(100vh - 32px);overflow:auto;background:#0a0a0a;color:#fff;border:1px solid #2a2a2a;border-radius:14px;' +
    'box-shadow:0 12px 48px rgba(0,0,0,.65);font-family:"Inter",-apple-system,BlinkMacSystemFont,sans-serif;font-size:14px;line-height:1.5;padding:20px 22px}' +
    '#whc-consent h2{margin:0 0 6px;font-size:16px;font-weight:600;color:#fff}' +
    '#whc-consent p{margin:0 0 12px;color:rgba(255,255,255,.75)}' +
    '#whc-consent a{color:#a5a8ff;text-decoration:underline}' +
    '#whc-consent .whc-c-actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:6px}' +
    '#whc-consent button{flex:1 1 150px;min-height:44px;padding:10px 16px;border-radius:8px;border:1px solid #6366f1;background:#6366f1;color:#fff;' +
    'font:600 14px "Inter",-apple-system,sans-serif;cursor:pointer}' +
    '#whc-consent button:hover{background:#7b7ef5;border-color:#7b7ef5}' +
    '#whc-consent button:focus-visible,.whc-c-switch input:focus-visible+span{outline:2px solid #fff;outline-offset:2px}' +
    '#whc-consent button.whc-c-ghost{background:transparent;color:#fff;border-color:#4a4a55}' +
    '#whc-consent button.whc-c-ghost:hover{background:#17171c}' +
    '#whc-consent .whc-c-details{border-top:1px solid #2a2a2a;margin:12px 0 14px}' +
    '#whc-consent .whc-c-row{display:flex;align-items:flex-start;gap:14px;justify-content:space-between;padding:12px 0;border-bottom:1px solid #1d1d22}' +
    '#whc-consent .whc-c-row:last-child{border-bottom:0}' +
    '#whc-consent .whc-c-row b{display:block;color:#fff;font-weight:600;margin-bottom:2px}' +
    '#whc-consent .whc-c-row span.whc-c-txt{color:rgba(255,255,255,.65);font-size:13px}' +
    '#whc-consent .whc-c-state{color:rgba(255,255,255,.55);font-size:13px;white-space:nowrap;padding-top:2px}' +
    '.whc-c-switch{position:relative;flex:0 0 auto;width:46px;height:26px;display:inline-block}' +
    '.whc-c-switch input{position:absolute;inset:0;width:100%;height:100%;margin:0;opacity:0;cursor:pointer}' +
    '.whc-c-switch span{position:absolute;inset:0;border-radius:26px;background:#3a3a44;transition:background .15s;pointer-events:none}' +
    '.whc-c-switch span:before{content:"";position:absolute;left:3px;top:3px;width:20px;height:20px;border-radius:50%;background:#fff;transition:transform .15s}' +
    '.whc-c-switch input:checked+span{background:#6366f1}' +
    '.whc-c-switch input:checked+span:before{transform:translateX(20px)}' +
    '@media (max-width:520px){#whc-consent{bottom:8px;padding:16px}#whc-consent .whc-c-actions button{flex:1 1 100%}}';

  function el(tag, attrs, html) {
    var e = document.createElement(tag);
    if (attrs) for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (html != null) e.innerHTML = html;
    return e;
  }

  function open(showDetails) {
    var old = document.getElementById('whc-consent');
    if (old) old.remove();
    var cur = read();
    var box = el('div', { id: 'whc-consent', role: 'dialog', 'aria-labelledby': 'whc-c-title', 'aria-describedby': 'whc-c-desc' });
    box.innerHTML =
      '<h2 id="whc-c-title">Cookies on this website</h2>' +
      '<p id="whc-c-desc">We use cookies and similar browser storage. Some are necessary for the site and the shop to work. ' +
      'We would also like to use Statistics cookies (Microsoft Clarity) to see how pages are used. They stay off unless you allow them. ' +
      'You can change your choice at any time under Cookie settings in the footer. <a href="/privacy.html">Privacy policy</a></p>' +
      '<div class="whc-c-details" id="whc-c-details" hidden>' +
        '<div class="whc-c-row"><div><b>Necessary</b><span class="whc-c-txt">Your shop cart, checkout details and offer timer, kept in your browser until you check out or clear them, and this cookie choice. The site cannot work without them.</span></div><span class="whc-c-state">Always on</span></div>' +
        '<div class="whc-c-row"><div><b>Preferences</b><span class="whc-c-txt">Not used on this site.</span></div><span class="whc-c-state">Not used</span></div>' +
        '<div class="whc-c-row"><div><b>Statistics</b><span class="whc-c-txt">Microsoft Clarity records how pages are used (clicks, scrolling, page views) so we can improve the site. It sets the cookies _clck and _clsk.</span></div>' +
          '<label class="whc-c-switch"><input type="checkbox" id="whc-c-stats" aria-label="Statistics"><span></span></label></div>' +
        '<div class="whc-c-row"><div><b>Marketing</b><span class="whc-c-txt">Not used. We run no advertising or tracking cookies.</span></div><span class="whc-c-state">Not used</span></div>' +
      '</div>' +
      '<div class="whc-c-actions">' +
        '<button type="button" class="whc-c-ghost" id="whc-c-decline">Decline</button>' +
        '<button type="button" class="whc-c-ghost" id="whc-c-custom">Customize</button>' +
        '<button type="button" id="whc-c-all">Allow all</button>' +
      '</div>';
    document.body.appendChild(box);
    var details = box.querySelector('#whc-c-details'), stats = box.querySelector('#whc-c-stats');
    var custom = box.querySelector('#whc-c-custom');
    stats.checked = !!(cur && cur.statistics);
    function showDetails_() {
      details.hidden = false;
      custom.textContent = 'Allow selection';
      custom.setAttribute('aria-expanded', 'true');
    }
    if (showDetails) showDetails_();
    box.querySelector('#whc-c-decline').addEventListener('click', function () { apply(false); });
    box.querySelector('#whc-c-all').addEventListener('click', function () { apply(true); });
    custom.addEventListener('click', function () {
      if (details.hidden) { showDetails_(); stats.focus(); } else { apply(stats.checked); }
    });
    (showDetails ? stats : box.querySelector('#whc-c-all')).focus({ preventScroll: true });
  }

  function apply(stats) {
    var before = read();
    var wasOn = !!(before && before.statistics);
    save(stats);
    var box = document.getElementById('whc-consent');
    if (box) box.remove();
    if (stats) { loadClarity(); return; }
    if (wasOn || clarityLoaded) {
      clearClarityCookies();
      if (clarityLoaded) location.reload();   // stops a recording already running on this page
    }
  }

  function addFooterLink() {
    var link = document.querySelector('footer a[href$="privacy.html"]');
    var a = el('a', { href: '#', class: 'whc-cookie-link' }, 'Cookie settings');
    a.addEventListener('click', function (e) { e.preventDefault(); open(true); });
    if (link && link.parentNode) { link.parentNode.insertBefore(a, link.nextSibling); return; }
    var foot = document.querySelector('footer');
    if (foot) { a.style.cssText = 'display:inline-block;margin:8px 0;'; foot.appendChild(a); }
  }

  function init() {
    var st = el('style', { id: 'whc-consent-css' }); st.textContent = CSS; document.head.appendChild(st);
    addFooterLink();
    var cur = read();
    if (cur) { if (cur.statistics) loadClarity(); return; }
    // checkout has nothing optional on it: do not put a banner over the pay button
    if (/(^|\/)checkout\.html$/.test(location.pathname)) return;
    open(false);
  }

  window.whcConsentOpen = function () { open(true); };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
