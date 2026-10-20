---
layout: page
title: Relationships
section: relationships
page_class: relationships
---

<section class="page-hero">
  <div class="container">
    <img class="brand-mark" src="{{ '/assets/brand_assets/27-mark-transparent.svg' | relative_url }}" alt="Intimacy Economics" width="120" height="92">
    <span class="eyebrow">Intimacy Economics</span>
    <h1>Dating &amp; Relationships</h1>
    <p>An economic approach to understanding the interplay of incentives, markets, and strategies within modern dating.</p>
  </div>
</section>

{%- assign all_essays = site.essays | where_exp: "e", "e.status != 'draft'" | sort: "order" -%}
{%- assign start_slugs = "why-relationships,your-type,friends-and-third-parties" | split: "," -%}

<!-- Start here -->
<section class="section start-here" id="start-here">
  <div class="container">
    <div class="section-header fade-in">
      <p class="eyebrow">New here?</p>
      <h2>Start with these three</h2>
    </div>
    <div class="start-grid">
      {% for slug in start_slugs %}
        {%- assign want = "/essays/" | append: slug | append: "/" -%}
        {%- assign e = all_essays | where: "url", want | first -%}
        {% if e %}
        <a href="{{ e.url | relative_url }}" class="start-card">
          <span class="essay-card-kicker">{{ e.topic | default: "Intimacy Economics" }}</span>
          <h3 class="essay-card-title">{{ e.title }}</h3>
          <p class="essay-card-dek">{{ e.summary | strip_html }}</p>
          <span class="essay-card-meta">{{ e.reading_time | default: 8 }} min read</span>
        </a>
        {% endif %}
      {% endfor %}
    </div>
  </div>
</section>

<!-- Essays -->
<section class="section" id="essays">
  <div class="container">
    {% include section-header.html
      eyebrow="Essays"
      heading="Long-Form Writing"
      text="Articles that apply economic theory to explain modern dating."
    %}

    {% if all_essays.size > 0 %}
    {%- assign themes = all_essays | group_by: "topic" -%}
    {% for theme in themes %}
    <div class="theme-block">
      <h3 class="theme-heading">{% if theme.name != "" %}{{ theme.name }}{% else %}More essays{% endif %} <span class="theme-count">{{ theme.items.size }} {% if theme.items.size == 1 %}essay{% else %}essays{% endif %}</span></h3>
      <div class="essay-grid">
        {% for essay in theme.items limit: 3 %}
          {% include essay-card.html essay=essay %}
        {% endfor %}
      </div>
      {% if theme.items.size > 3 %}
      {%- assign rest = theme.items.size | minus: 3 -%}
      <p class="theme-more">+ {{ rest }} more in this theme on the <a href="{{ '/writing' | relative_url }}">writing page</a>.</p>
      {% endif %}
    </div>
    {% endfor %}
    <p class="essay-all"><a href="{{ '/writing' | relative_url }}">View all {{ all_essays.size }} essays &rarr;</a></p>
    {% endif %}

  </div>
</section>


<!-- Affinity Product Module -->
<section class="section" id="affinity">
  <div class="container">
    {% include section-header.html
      eyebrow="Product"
      heading="Affinity"
      text="A decision system for clearer thinking in dating and relationships."
    %}
    <div class="product-module fade-in">
      <div class="product-module-text">
        <p class="product-tagline">Better decisions come from understanding the incentives behind them.</p>
        <p class="product-desc">Affinity helps you interpret your dating experiences through structure — mapping preferences, constraints, and behavioural patterns to improve how you choose and act.</p>
        <ul>
          <li>Structured reflection and decision frameworks</li>
          <li>Insight from behavioural patterns over time</li>
          <li>Applied thinking for real dating situations</li>
        </ul>
        <a href="#" class="btn btn-secondary" style="align-self:flex-start;">Explore Affinity</a>
      </div>
      <div class="product-module-visual"><img src="{{ '/assets/brand_assets/27-mark-transparent.svg' | relative_url }}" alt="" aria-hidden="true"></div>
    </div>
  </div>
</section>

