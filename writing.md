---
layout: page
title: Writing & Research
section: writing
page_class: writing
---

<section class="page-hero">
  <div class="container">
    <span class="eyebrow">Writing & Research</span>
    <h1>Analysis &amp; Ideas</h1>
    <p>Essays, reports, and structured thinking across professional work and relationship economics.</p>
  </div>
</section>

{% if site.reports and site.reports.size > 0 %}
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
{% endif %}

<!-- Relationship Essays: full archive -->
{%- assign essays = site.essays | where_exp: "e", "e.status != 'draft'" | sort: "order" -%}
{%- assign topics = essays | map: "topic" | uniq | sort -%}
<section class="section" id="essays">
  <div class="container">
    {% include section-header.html
      eyebrow="Intimacy Economics"
      heading="Essays"
      text="Long-form writing on dating, mate choice, incentives, and relationship dynamics."
    %}

    <div class="essay-filter" data-essay-filter>
      <div class="essay-filter-chips" role="group" aria-label="Filter essays by topic">
        <button type="button" class="essay-chip is-active" data-topic="all" aria-pressed="true">All</button>
        {% for t in topics %}{% if t != "" %}
        <button type="button" class="essay-chip" data-topic="{{ t | slugify }}" aria-pressed="false">{{ t }}</button>
        {% endif %}{% endfor %}
      </div>
      <p class="essay-count" aria-live="polite"><span data-essay-count>{{ essays.size }}</span><span data-essay-noun> essays</span></p>
    </div>

    {% if essays.size > 0 %}
    <div class="essay-lead" data-essay-lead>
      {% include essay-card.html essay=essays.first lead=true %}
    </div>
    <div class="essay-grid" data-essay-grid>
      {% for essay in essays offset: 1 %}
        {% include essay-card.html essay=essay %}
      {% endfor %}
    </div>
    {% endif %}
    <p class="essay-empty" data-essay-empty hidden>No essays in this topic yet.</p>
  </div>
</section>

{% assign ideas = site.ideas | where_exp: "i", "i.status != 'draft'" %}
{% if ideas.size > 0 %}
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
      {% for idea in ideas %}
        {% include idea-card.html idea=idea %}
      {% endfor %}
    </div>
  </div>
</section>
{% endif %}

<script src="{{ '/assets/js/essay-filter.js' | relative_url }}?v={{ site.time | date: '%s' }}" defer></script>
