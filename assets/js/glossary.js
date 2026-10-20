(function () {
  'use strict';
  var dataEl = document.getElementById('glossary-data');
  var body = document.querySelector('.article-body');
  if (!dataEl || !body) return;
  var terms;
  try { terms = JSON.parse(dataEl.textContent); } catch (e) { return; }
  if (!terms || !terms.length) return;

  var SKIP = 'A,CODE,PRE,ABBR,BLOCKQUOTE,H1,H2,H3,H4,H5,H6,FIGURE,FIGCAPTION,SCRIPT,STYLE,BUTTON'.split(',');
  var tip = document.createElement('div');
  tip.className = 'gloss-tip'; tip.id = 'gloss-tip'; tip.setAttribute('role', 'tooltip'); tip.hidden = true;
  document.body.appendChild(tip);
  var current = null;


  function allowed(node) {
    for (var p = node.parentNode; p && p !== body; p = p.parentNode) {
      if (p.nodeType === 1 && (SKIP.indexOf(p.tagName) > -1 || /pull|takeaway/.test(p.className || ''))) return false;
    }
    var el = node.parentNode;
    while (el && el !== body && !/^(P|LI)$/.test(el.tagName)) el = el.parentNode;
    return !!el && el !== body;
  }

  var pending = terms.map(function (t) {
    var re;
    try { re = new RegExp('(^|[^A-Za-z0-9])(' + t.match + ')(?![A-Za-z0-9])', 'i'); } catch (e) { return null; }
    return { def: t.definition, term: t.term, re: re };
  }).filter(Boolean);

  var walker = document.createTreeWalker(body, NodeFilter.SHOW_TEXT, null);
  var nodes = [], n;
  while ((n = walker.nextNode())) { if (n.nodeValue.trim() && allowed(n)) nodes.push(n); }

  nodes.forEach(function (node) {
    for (var i = 0; i < pending.length; i++) {
      var p = pending[i];
      if (!node.parentNode) return;
      var m = p.re.exec(node.nodeValue);
      if (!m) continue;
      var start = m.index + m[1].length, word = m[2];
      var after = node.splitText(start);
      var rest = after.splitText(word.length);
      var abbr = document.createElement('abbr');
      abbr.className = 'gloss'; abbr.tabIndex = 0;
      abbr.setAttribute('data-def', p.def);
      abbr.setAttribute('aria-describedby', 'gloss-tip');
      abbr.textContent = after.nodeValue;
      after.parentNode.replaceChild(abbr, after);
      pending.splice(i, 1);
      node = rest; i = -1;
      if (!pending.length) return;
    }
  });

  function show(el) {
    current = el;
    tip.textContent = el.getAttribute('data-def');
    tip.hidden = false;
    var r = el.getBoundingClientRect(), tw = tip.offsetWidth, th = tip.offsetHeight;
    var left = Math.max(8, Math.min(window.innerWidth - tw - 8, r.left + r.width / 2 - tw / 2));
    var top = r.top - th - 8;
    if (top < 8) top = r.bottom + 8;
    tip.style.left = (left + window.scrollX) + 'px';
    tip.style.top = (top + window.scrollY) + 'px';
  }
  function hide() { current = null; tip.hidden = true; }

  body.addEventListener('mouseover', function (e) { var a = e.target.closest && e.target.closest('abbr.gloss'); if (a) show(a); });
  body.addEventListener('mouseout', function (e) { var a = e.target.closest && e.target.closest('abbr.gloss'); if (a && a !== document.activeElement) hide(); });
  body.addEventListener('focusin', function (e) { var a = e.target.closest && e.target.closest('abbr.gloss'); if (a) show(a); });
  body.addEventListener('focusout', hide);
  body.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('abbr.gloss');
    if (a) { if (current === a && !tip.hidden) hide(); else show(a); }
  });
  document.addEventListener('click', function (e) { if (!e.target.closest || !e.target.closest('abbr.gloss')) hide(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') hide(); });
  window.addEventListener('scroll', function () { if (current) show(current); }, { passive: true });
})();
