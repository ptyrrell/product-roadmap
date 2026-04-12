/**
 * The Meridian — Shared Authentication Guard
 * Protects all pages behind Google OAuth (@fieldinsight.com only)
 * Include as a synchronous <script> in <head> on every protected page.
 */
(function () {
  var ALLOWED_DOMAIN = 'fieldinsight.com';
  var SESSION_KEY    = 'meridian_session';
  var RETURN_KEY     = 'meridian_return';

  /* ── Resolve base path (works on GitHub Pages /product-roadmap/) ── */
  function basePath() {
    var p = window.location.pathname;
    return p.substring(0, p.lastIndexOf('/') + 1);
  }

  function loginUrl() {
    return window.location.origin + basePath() + 'meridian-login.html';
  }

  /* ── Session read (synchronous, localStorage) ── */
  function getSession() {
    try {
      var stored = localStorage.getItem(SESSION_KEY);
      if (!stored) return null;
      var s = JSON.parse(stored);
      if (!s || !s.email) return null;
      var domain = s.email.split('@')[1];
      if (domain !== ALLOWED_DOMAIN) { localStorage.removeItem(SESSION_KEY); return null; }
      var now = Math.floor(Date.now() / 1000);
      if (s.exp && s.exp < now) { localStorage.removeItem(SESSION_KEY); return null; }
      return s;
    } catch (e) { return null; }
  }

  var session = getSession();

  /* ── Not authenticated: save return URL and redirect to login ── */
  if (!session) {
    localStorage.setItem(RETURN_KEY, window.location.href);
    window.location.replace(loginUrl());
    /* Throw to halt any inline scripts that follow on this page */
    throw new Error('[Meridian] Unauthenticated — redirecting to login.');
  }

  /* ── Authenticated: expose session globally ── */
  window.meridianSession = session;

  /* ── Global sign-out (callable from any page) ── */
  window.meridianSignOut = function () {
    localStorage.removeItem(SESSION_KEY);
    window.location.href = loginUrl();
  };

  /* ── Inject the Meridian nav bar after DOM is ready ── */
  document.addEventListener('DOMContentLoaded', function () {
    /* Skip injection if the page opts out (e.g. login page itself) */
    if (document.documentElement.hasAttribute('data-meridian-no-bar')) return;
    injectBar(session);
  });

  function injectBar(user) {
    var base = basePath();
    var current = window.location.pathname.split('/').pop() || 'index.html';

    var navLinks = [
      { href: 'index.html',            label: 'Roadmap' },
      { href: 'ai-conquest.html',      label: 'AI Conquest' },
      { href: 'sdr-dashboard.html',    label: 'SDR Board' },
      { href: 'business-dashboard.html', label: 'Business' },
      { href: 'cashflow-growth.html',  label: 'Cashflow' },
    ];

    var navHtml = navLinks.map(function (l) {
      var active = (l.href === current)
        ? ' style="color:rgba(232,234,246,0.95);border-bottom-color:#a78bfa"'
        : '';
      return '<a href="' + base + l.href + '"' + active + '>' + l.label + '</a>';
    }).join('');

    var avatarHtml = user.picture
      ? '<img src="' + user.picture + '" class="m-bar-avatar" onerror="this.style.display=\'none\'">'
      : '';

    var bar = document.createElement('div');
    bar.id = 'meridian-bar';
    bar.innerHTML =
      '<div class="m-bar-inner">' +
        '<a href="' + base + 'index.html" class="m-bar-brand">' +
          '<span class="m-bar-gem">◈</span>' +
          '<span class="m-bar-name">The Meridian</span>' +
        '</a>' +
        '<nav class="m-bar-nav">' + navHtml + '</nav>' +
        '<div class="m-bar-user">' +
          avatarHtml +
          '<span class="m-bar-email">' + user.email + '</span>' +
          '<button class="m-bar-signout" onclick="meridianSignOut()">Sign out</button>' +
        '</div>' +
      '</div>';

    var style = document.createElement('style');
    style.textContent = [
      '#meridian-bar{',
        'position:sticky;top:0;z-index:99999;',
        'background:rgba(4,5,9,0.96);',
        'border-bottom:1px solid rgba(167,139,250,0.15);',
        'backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);',
        'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,sans-serif;',
      '}',
      '.m-bar-inner{',
        'display:flex;align-items:center;gap:1rem;',
        'padding:0 1.5rem;height:42px;',
      '}',
      '.m-bar-brand{',
        'display:flex;align-items:center;gap:0.45rem;',
        'text-decoration:none;flex-shrink:0;',
        'padding-right:1rem;border-right:1px solid rgba(167,139,250,0.15);',
      '}',
      '.m-bar-gem{font-size:0.9rem;color:#a78bfa;line-height:1;}',
      '.m-bar-name{',
        'font-size:0.7rem;font-weight:700;letter-spacing:0.15em;',
        'text-transform:uppercase;color:#a78bfa;white-space:nowrap;',
      '}',
      '.m-bar-nav{display:flex;gap:0;flex:1;overflow:hidden;}',
      '.m-bar-nav a{',
        'font-size:0.71rem;font-weight:500;',
        'color:rgba(232,234,246,0.4);',
        'text-decoration:none;',
        'padding:0 0.8rem;height:42px;',
        'display:flex;align-items:center;',
        'transition:color 0.15s;',
        'border-bottom:2px solid transparent;',
        'white-space:nowrap;flex-shrink:0;',
      '}',
      '.m-bar-nav a:hover{color:rgba(232,234,246,0.85);}',
      '.m-bar-user{',
        'display:flex;align-items:center;gap:0.55rem;',
        'margin-left:auto;flex-shrink:0;',
      '}',
      '.m-bar-avatar{',
        'width:22px;height:22px;border-radius:50%;',
        'border:1px solid rgba(255,255,255,0.12);object-fit:cover;',
      '}',
      '.m-bar-email{font-size:0.67rem;color:rgba(232,234,246,0.35);}',
      '.m-bar-signout{',
        'font-size:0.67rem;font-weight:600;',
        'background:rgba(167,139,250,0.1);',
        'color:rgba(167,139,250,0.8);',
        'border:1px solid rgba(167,139,250,0.2);',
        'border-radius:5px;padding:3px 10px;cursor:pointer;',
        'transition:all 0.15s;letter-spacing:0.02em;',
        'font-family:inherit;',
      '}',
      '.m-bar-signout:hover{',
        'background:rgba(167,139,250,0.18);',
        'color:#c4b5fd;border-color:rgba(167,139,250,0.4);',
      '}',
      '@media(max-width:720px){',
        '.m-bar-nav{display:none;}',
        '.m-bar-email{display:none;}',
      '}',
    ].join('');

    document.head.appendChild(style);
    document.body.insertBefore(bar, document.body.firstChild);
  }

})();
