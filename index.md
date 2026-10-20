---
layout: default
title: Lewis Farrell
page_class: home
section: home
---

<section class="home-hero">
  <div class="container">
    <h1>Build systems.<br><em>Understand people.</em></h1>
    <div class="home-band">
      <div class="home-id">
        <img src="{{ '/assets/images/headshot.jpg' | relative_url }}" alt="Lewis Farrell" onerror="this.style.display='none'">
        <div>
          <p class="home-card-name">Lewis Farrell</p>
          <p class="home-card-role">Consultant &middot; Intimacy economist</p>
        </div>
      </div>
      <p class="home-card-text">I design data systems for organisations. I study relationships as systems &mdash; shaped by incentives, strategy, and human behaviour.</p>
      <div class="home-cta">
        <a href="{{ '/professional' | relative_url }}#work" class="btn btn-primary">See case studies</a>
        <a href="{{ '/relationships' | relative_url }}#essays" class="btn btn-secondary">Read the essays</a>
      </div>
    </div>
  </div>
</section>

{% assign projects = site.projects | where_exp: "p", "p.status != 'draft'" | sort: "order" %}
{% assign essays = site.essays | where_exp: "e", "e.status != 'draft'" | sort: "date" | reverse %}



<div class="container">
  <div class="tracks">
    <a href="{{ '/professional' | relative_url }}" class="track">
      <span class="eyebrow">Professional</span>
      <h2>Strategy &amp; Systems</h2>
      <p>I design and deliver data systems — spanning strategy, architecture, and implementation — to drive measurable organisational change.</p>
      <span class="track-count">{{ projects.size }} case studies</span>
      <span class="track-link">View professional work &rarr;</span>
    </a>
    <a href="{{ '/relationships' | relative_url }}" class="track">
      <span class="eyebrow">Intimacy Economics</span>
      <h2>Dating &amp; Relationships</h2>
      <p>Frameworks, essays, and products exploring how modern relationships actually work — beneath the surface.</p>
      <span class="track-count">{{ essays.size }} essays</span>
      <span class="track-link">Explore essays &rarr;</span>
    </a>
  </div>
</div>

{% assign featured = projects.first %}
{% if featured %}
<section class="section featured-case">
  <div class="container">
    <div class="section-bar">
      <h2>Featured case study</h2>
      <a href="{{ '/professional' | relative_url }}#work">All case studies &rarr;</a>
    </div>
    <a href="{{ featured.url | relative_url }}" class="featured-row">
      {% if featured.image %}<div class="essay-card-media"><img src="{{ featured.image | relative_url }}" alt="" loading="lazy"></div>{% endif %}
      <div class="featured-body">
        <span class="essay-card-kicker">{{ featured.client }} &middot; {{ featured.period }}</span>
        <h3 class="featured-title">{{ featured.title }}</h3>
        <p class="featured-dek">{{ featured.summary }}</p>
        {% if featured.metric %}<p class="project-metric"><strong>{{ featured.metric }}</strong><span>{{ featured.metric_label }}</span></p>{% endif %}
        <span class="track-link">Read the case study &rarr;</span>
      </div>
    </a>
  </div>
</section>
{% endif %}

<section class="section home-essays">
  <div class="container">
    <div class="section-bar">
      <h2>Latest essays</h2>
      <a href="{{ '/relationships' | relative_url }}#essays">All essays &rarr;</a>
    </div>
    {% if essays.size > 0 %}
    <div class="essay-lead">
      {% include essay-card.html essay=essays.first lead=true %}
    </div>
    <div class="essay-grid">
      {% for essay in essays offset: 1 limit: 3 %}
        {% include essay-card.html essay=essay %}
      {% endfor %}
    </div>
    {% endif %}
  </div>
</section>

<section class="proof-strip" aria-label="Background and platforms">
  <div class="container">
    <div class="proof-inner">
      <span class="proof-label">Educated at &middot; Working with</span>
      <ul class="proof-logos">
        <li class="logo-tile"><img class="logo-oxford" src="{{ '/assets/images/logos/oxford.svg' | relative_url }}" alt=""><span>University of Oxford</span></li>
        <li class="logo-tile"><img class="logo-woodhurst" src="{{ '/assets/images/WoodhurstLogo.png' | relative_url }}" alt=""><span>Woodhurst</span></li>
        <li class="logo-tile"><img class="logo-databricks" src="{{ '/assets/images/logos/databricks.svg' | relative_url }}" alt="Databricks"></li>
      </ul>
    </div>
  </div>
</section>
