(function () {
  'use strict';

  // Cursor-responsive lighting — skip if user prefers reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var panels = document.querySelectorAll('.panel-professional, .panel-relationships');
  if (!panels.length) return;

  // Pending rAF handle and per-panel update queue
  var rafPending = false;
  var pendingUpdates = [];

  panels.forEach(function (panel) {
    // Initialise variables so CSS gradient renders from center before first move
    panel.style.setProperty('--mouse-x', '50%');
    panel.style.setProperty('--mouse-y', '50%');

    panel.addEventListener('mousemove', function (e) {
      var rect = panel.getBoundingClientRect();
      pendingUpdates.push({
        el: panel,
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });

      if (!rafPending) {
        rafPending = true;
        requestAnimationFrame(flush);
      }
    });
  });

  function flush() {
    rafPending = false;
    // Apply only the latest position per panel (drop stale intermediate events)
    var seen = new Set();
    for (var i = pendingUpdates.length - 1; i >= 0; i--) {
      var u = pendingUpdates[i];
      if (!seen.has(u.el)) {
        seen.add(u.el);
        u.el.style.setProperty('--mouse-x', u.x + 'px');
        u.el.style.setProperty('--mouse-y', u.y + 'px');
      }
    }
    pendingUpdates = [];
  }
})();
