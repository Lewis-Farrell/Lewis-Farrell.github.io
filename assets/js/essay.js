// Essay table of contents with scroll-spy
(function () {
  var body = document.querySelector('.article-body');
  var desktop = document.querySelector('[data-toc-desktop]');
  var mobile = document.querySelector('[data-toc-mobile]');
  if (!body || (!desktop && !mobile)) return;
  var heads = Array.prototype.slice.call(body.querySelectorAll('h2, h3'));
  if (heads.length < 3) return;

  var used = {};
  Array.prototype.forEach.call(document.querySelectorAll('[id]'), function (el) { used[el.id] = true; });
  heads.forEach(function (h) {
    if (h.id) return;
    var base = (h.textContent || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'section';
    var id = base, n = 2;
    while (used[id]) id = base + '-' + n++;
    used[id] = true; h.id = id;
  });

  function build(list) {
    var current = null;
    heads.forEach(function (h) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = '#' + h.id; a.textContent = h.textContent;
      a.setAttribute('data-target', h.id);
      li.appendChild(a);
      if (h.tagName === 'H3' && current) {
        var sub = current.querySelector('ol');
        if (!sub) { sub = document.createElement('ol'); current.appendChild(sub); }
        sub.appendChild(li);
      } else {
        list.appendChild(li);
        if (h.tagName === 'H2') current = li;
      }
    });
  }
  [desktop, mobile].forEach(function (c) {
    if (!c) return;
    build(c.querySelector('.toc-list'));
    c.hidden = false;
  });
  if (mobile) mobile.addEventListener('click', function (e) {
    if (e.target.closest && e.target.closest('a')) mobile.open = false;
  });

  var links = Array.prototype.slice.call(document.querySelectorAll('.toc-list a'));
  var offset = 120, ticking = false;
  function spy() {
    ticking = false;
    var active = heads[0].id;
    for (var i = 0; i < heads.length; i++) {
      if (heads[i].getBoundingClientRect().top - offset <= 0) active = heads[i].id; else break;
    }
    links.forEach(function (a) {
      var on = a.getAttribute('data-target') === active;
      a.classList.toggle('is-active', on);
      if (on) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current');
    });
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(spy); }
  }, { passive: true });
  window.addEventListener('resize', spy);
  spy();
})();

// Wrap tables so small screens get an edge-fade scroll affordance
(function () {
  var tables = document.querySelectorAll('.article-body table');
  Array.prototype.forEach.call(tables, function (t) {
    var wrap = document.createElement('div');
    wrap.className = 'table-wrap';
    t.parentNode.insertBefore(wrap, t);
    wrap.appendChild(t);
    function update() {
      var max = t.scrollWidth - t.clientWidth;
      wrap.classList.toggle('can-scroll-right', max > 2 && t.scrollLeft < max - 2);
      wrap.classList.toggle('can-scroll-left', t.scrollLeft > 2);
    }
    t.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  });
})();

// Reading progress bar (tracks scroll through the article body)
(function () {
  var body = document.querySelector('.article-body');
  if (!body) return;
  var bar = document.createElement('div');
  bar.className = 'read-progress';
  bar.setAttribute('aria-hidden', 'true');
  var fill = document.createElement('div');
  fill.className = 'read-progress-fill';
  bar.appendChild(fill);
  document.body.appendChild(bar);
  var ticking = false;
  function update() {
    ticking = false;
    var rect = body.getBoundingClientRect();
    var total = rect.height - window.innerHeight * 0.5;
    var p = total > 0 ? (-rect.top + window.innerHeight * 0.25) / total : 0;
    p = Math.max(0, Math.min(1, p));
    fill.style.transform = 'scaleX(' + p.toFixed(4) + ')';
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  window.addEventListener('resize', update);
  update();
})();
