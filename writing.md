---
layout: page
title: Writing & Research
page_class: writing
---

<section class="page-hero">
  <div class="container">
    <span class="eyebrow">Writing & Research</span>
    <h1>Analysis &amp; Ideas</h1>
    <p>Essays, reports, and structured thinking across professional work and relationship economics.</p>
  </div>
</section>

<!-- Professional Reports -->
<section class="section" id="reports">
  <div class="container">
    {% include section-header.html
      eyebrow="Professional"
      heading="Reports &amp; Research"
      text="Structured analysis on strategy, data systems, and applied thinking across sectors."
    %}
    <div class="entry-list">
      {% for report in site.reports %}
        {% include report-card.html report=report %}
      {% endfor %}
    </div>
  </div>
</section>

<div class="section-divider"></div>

<!-- Relationship Essays -->
<section class="section" id="essays">
  <div class="container">
    {% include section-header.html
      eyebrow="Intimacy Economics"
      heading="Essays"
      text="Long-form writing on dating, mate choice, incentives, and relationship dynamics."
    %}
    <div class="entry-list">
      {% for essay in site.essays %}
        {% if essay.status != 'draft' %}
          {% include essay-card.html essay=essay %}
        {% endif %}
      {% endfor %}
    </div>
  </div>
</section>

<div class="section-divider"></div>

<!-- Relationship Ideas -->
<section class="section" id="ideas">
  <div class="container">
    {% include section-header.html
      eyebrow="Frameworks"
      heading="Short Ideas"
      text="Concise observations and working models for understanding attraction and relational behavior."
    %}
    <div class="entry-list">
      {% for idea in site.ideas %}
        {% if idea.status != 'draft' %}
          {% include idea-card.html idea=card %}
        {% endif %}
      {% endfor %}
    </div>
  </div>
</section>
