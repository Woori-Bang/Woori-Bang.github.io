/* 밍밍 낚시 공통 메뉴: 각 페이지 맨 위에 붙어요. <script src="/menu.js"></script> */
(function () {
  if (document.getElementById('mm-nav')) return;
  var LINKS = [
    { href: '/', label: '🎣 밍밍 낚시', home: true },
    { href: '/jjugap/', label: '📒 쭈갑 가계부' },
    { href: '/jjugap/counter/', label: '🦑 방울 카운터' },
    { href: 'https://claude.ai/artifact/MKVLmhrCEpQm58ejMvpfUq', label: '🐙 영맨 카운터', ext: true }
  ];
  var path = location.pathname.replace(/index\.html$/, '');
  function active(l) {
    if (l.ext) return false;
    if (l.href === '/') return path === '/';
    if (l.href === '/jjugap/') return path === '/jjugap/';
    return path.indexOf(l.href) === 0;
  }
  var css = '#mm-nav{position:sticky;top:0;z-index:40;background:#0f3d47;color:#fff;font-family:"Noto Sans KR","IBM Plex Sans KR","Apple SD Gothic Neo","Malgun Gothic",system-ui,sans-serif;box-shadow:0 1px 6px rgba(0,0,0,.18);padding-top:env(safe-area-inset-top,0px)}' +
    '#mm-nav .in{max-width:960px;margin:0 auto;display:flex;gap:4px;overflow-x:auto;scrollbar-width:none;padding:6px max(10px,env(safe-area-inset-left,0px))}' +
    '#mm-nav .in::-webkit-scrollbar{display:none}' +
    '#mm-nav a{flex:0 0 auto;color:#d6eef0;text-decoration:none;font-size:14px;font-weight:700;padding:8px 12px;border-radius:999px;white-space:nowrap;line-height:1.2}' +
    '#mm-nav a.home{color:#fff}' +
    '#mm-nav a:hover{background:rgba(255,255,255,.1)}' +
    '#mm-nav a[aria-current=page]{background:#fff;color:#0f3d47}' +
    '#mm-nav a:focus-visible{outline:2px solid #ffd36e;outline-offset:1px}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  var nav = document.createElement('nav'); nav.id = 'mm-nav'; nav.setAttribute('aria-label', '밍밍 낚시 메뉴');
  nav.innerHTML = '<div class="in">' + LINKS.map(function (l) {
    return '<a href="' + l.href + '"' + (l.home ? ' class="home"' : '') + (active(l) ? ' aria-current="page"' : '') + '>' + l.label + '</a>';
  }).join('') + '</div>';
  function mount() { document.body.insertBefore(nav, document.body.firstChild); }
  if (document.body) mount(); else document.addEventListener('DOMContentLoaded', mount);
})();
