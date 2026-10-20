(function () {
  var bar = document.querySelector('[data-essay-filter]');
  if (!bar) return;
  var cards = Array.prototype.slice.call(document.querySelectorAll('#essays .essay-card'));
  var chips = bar.querySelectorAll('.essay-chip');
  var countEl = bar.querySelector('[data-essay-count]');
  var nounEl = bar.querySelector('[data-essay-noun]');
  var lead = document.querySelector('[data-essay-lead]');
  var grid = document.querySelector('[data-essay-grid]');
  var empty = document.querySelector('[data-essay-empty]');

  function apply(topic) {
    var shown = 0, first = null;
    cards.forEach(function (c) {
      var show = topic === 'all' || c.getAttribute('data-topic') === topic;
      c.hidden = !show;
      c.classList.remove('essay-card--lead-filtered');
      if (show) { shown++; if (!first) first = c; }
    });
    // Lead wrapper only holds the original lead card; hide it when filtered out.
    var leadCard = lead && lead.querySelector('.essay-card');
    if (lead && leadCard) lead.hidden = leadCard.hidden;
    if (grid) grid.hidden = !grid.querySelector('.essay-card:not([hidden])');
    if (empty) empty.hidden = shown !== 0;
    if (countEl) countEl.textContent = shown;
    if (nounEl) nounEl.textContent = shown === 1 ? ' essay' : ' essays';
    chips.forEach(function (ch) {
      var on = ch.getAttribute('data-topic') === topic;
      ch.classList.toggle('is-active', on);
      ch.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  }

  chips.forEach(function (ch) {
    ch.addEventListener('click', function () {
      var t = ch.getAttribute('data-topic');
      apply(t);
      try { history.replaceState(null, '', t === 'all' ? location.pathname : '#' + t); } catch (e) {}
    });
  });

  var h = (location.hash || '').slice(1);
  if (h && bar.querySelector('.essay-chip[data-topic="' + h + '"]')) apply(h);
})();
