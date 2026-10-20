---
layout: page
title: Glossary
section: writing
page_class: glossary
---

<section class="page-hero">
  <div class="container">
    <span class="eyebrow">Intimacy Economics</span>
    <h1>Glossary</h1>
    <p>Plain-English definitions of the game theory and economics terms used across the essays.</p>
  </div>
</section>

{%- assign terms = site.data.glossary | sort_natural: "term" -%}
{%- assign all_essays = site.essays | where_exp: "e", "e.status != 'draft'" -%}
<section class="section">
  <div class="container">
    <nav class="gloss-index" aria-label="Jump to term">
      {% for g in terms %}<a href="#{{ g.term | slugify }}">{{ g.term }}</a>{% endfor %}
    </nav>
    <dl class="gloss-list">
      {% for g in terms %}
      <div class="gloss-entry" id="{{ g.term | slugify }}">
        <dt>{{ g.term }}{% if g.aka %} <span class="gloss-aka">also: {{ g.aka }}</span>{% endif %}</dt>
        <dd>
          <p>{{ g.definition }}</p>
          {% if g.essays and g.essays.size > 0 %}
          <p class="gloss-essays">Used in:
            {% assign first = true %}{% for e in all_essays %}{% assign slug = e.path | split: "/" | last | remove: ".md" %}{% if g.essays contains slug %}{% unless first %}, {% endunless %}<a href="{{ e.url | relative_url }}">{{ e.title }}</a>{% assign first = false %}{% endif %}{% endfor %}
          </p>
          {% endif %}
        </dd>
      </div>
      {% endfor %}
    </dl>
  </div>
</section>
