---
layout: default
title: Lewis Farrell
page_class: home
---

<section class="home-hero">
  <div class="container">
    <div class="home-hero-grid">
      <h1>Build systems.<br><em>Understand people.</em></h1>
      <div class="home-bio">
        <div class="home-bio-person">
          <img src="{{ '/assets/images/headshot.jpg' | relative_url }}" alt="Lewis Farrell" onerror="this.style.display='none'">
          <div>
            <p class="home-bio-name">Lewis Farrell</p>
            <p class="home-bio-role">Consultant · Intimacy Economist</p>
          </div>
        </div>
        <p class="home-bio-text">I design data systems for organisations. I study relationships as systems — shaped by incentives, strategy, and human behaviour.</p>
        <p class="home-bio-cred">Oxford · Management Consultant · Woodhurst</p>
      </div>
    </div>
  </div>
</section>

<div class="container">
  <div class="tracks">
    <a href="{{ '/professional' | relative_url }}" class="track">
      <span class="eyebrow">Professional</span>
      <h2>Strategy &amp; Systems</h2>
      <p>I design and deliver data systems — spanning strategy, architecture, and implementation — to drive measurable organisational change.</p>
      <span class="track-link">View professional work &rarr;</span>
    </a>
    <a href="{{ '/relationships' | relative_url }}" class="track">
      <span class="eyebrow">Intimacy Economics</span>
      <h2>Dating &amp; Relationships</h2>
      <p>Frameworks, essays, and products exploring how modern relationships actually work — beneath the surface.</p>
      <span class="track-link">Explore essays &rarr;</span>
    </a>
  </div>
</div>

<section class="section">
  <div class="container">
    <div class="section-bar">
      <h2>Latest essays</h2>
      <a href="{{ '/relationships' | relative_url }}#essays">All essays &rarr;</a>
    </div>
    {% assign essays = site.essays | where_exp: "e", "e.status != 'draft'" | sort: "date" | reverse %}
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
