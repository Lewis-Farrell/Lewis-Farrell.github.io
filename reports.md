---
layout: page
title: Reports
page_class: reports
---

<section class="page-hero">
  <div class="container">
    <span class="eyebrow">Reports</span>
    <h1>Research &amp; Analysis</h1>
    <p>Downloadable writing on systems, strategy, technology, and applied thinking.</p>
  </div>
</section>

<section class="section" id="reports">
  <div class="container">
    {% include section-header.html
      eyebrow="Research"
      heading="Published Reports"
      text="Structured analysis on strategy, data systems, and applied thinking across sectors."
    %}
    <div class="entry-list">
      {% for report in site.reports %}
        {% include report-card.html report=report %}
      {% endfor %}
    </div>
  </div>
</section>
