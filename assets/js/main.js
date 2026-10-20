// Mobile menu
(function () {
  var menu = document.getElementById('mobileMenu');
  var toggle = document.getElementById('menuToggle');
  var closeBtn = document.getElementById('menuClose');
  if (!menu || !toggle) return;

  function open() {
    menu.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    if (closeBtn) closeBtn.focus();
  }

  function close(returnFocus) {
    if (!menu.classList.contains('open')) return;
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    if (returnFocus) toggle.focus();
  }

  toggle.addEventListener('click', open);
  if (closeBtn) closeBtn.addEventListener('click', function () { close(true); });
  menu.addEventListener('click', function (e) {
    if (e.target.closest && e.target.closest('a')) close(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close(true);
  });
})();

// Reading progress bar — essay pages only
(function () {
  if (!document.querySelector('.article')) return;

  var bar = document.createElement('div');
  bar.className = 'reading-progress';
  document.body.appendChild(bar);

  function updateBar() {
    var scrolled = window.scrollY;
    var total = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = total > 0 ? Math.min((scrolled / total) * 100, 100) + '%' : '0';
  }

  window.addEventListener('scroll', updateBar, { passive: true });
  updateBar();
})();

// Essay share buttons
(function () {
  var rail = document.querySelector('.article-share');
  if (!rail) return;

  var native = rail.querySelector('[data-share="native"]');
  if (native && navigator.share) {
    native.hidden = false;
    native.addEventListener('click', function () {
      navigator.share({ title: document.title, url: location.href }).catch(function () {});
    });
  }

  var copy = rail.querySelector('[data-share="copy"]');
  if (copy) {
    copy.addEventListener('click', function () {
      var done = function () {
        copy.classList.add('is-done');
        copy.title = 'Link copied';
        setTimeout(function () { copy.classList.remove('is-done'); copy.title = 'Copy link'; }, 1600);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(location.href).then(done, function () {});
      }
    });
  }
})();
