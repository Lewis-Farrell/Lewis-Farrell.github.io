---
layout: page
title: Relationships
page_class: relationships
---

<section class="page-hero">
  <div class="container">
    <span class="eyebrow">Intimacy Economics</span>
    <h1>Dating &amp; Relationships</h1>
    <p>Exploring modern intimacy through economics, game theory, and systems thinking — making relationships more explainable and decisions more useful.</p>
  </div>
</section>

<!-- Essays -->
<section class="section" id="essays">
  <div class="container">
    {% include section-header.html
      eyebrow="Essays"
      heading="Long-Form Writing"
      text="In-depth analysis on dating, mate choice, incentives, and the market dynamics of modern relationships."
    %}

    <!-- Horizontal scrolling essay cards -->
    <div class="essay-scroll-container">
      <div class="essay-scroll-track">
        {% for essay in site.essays %}
          {% if essay.status != 'draft' %}
            <a href="{{ essay.url | relative_url }}" class="essay-card-horizontal">
              <div class="essay-card-image" style="background-image: url('{{ essay.image }}');"></div>
              <div class="essay-card-content">
                <p class="essay-card-date">{{ essay.date | date: "%B %d, %Y" }}</p>
                <h3 class="essay-card-title">{{ essay.title }}</h3>
                <p class="essay-card-excerpt">{{ essay.excerpt }}</p>
                <span class="essay-card-link">Read Essay →</span>
              </div>
            </a>
          {% endif %}
        {% endfor %}
      </div>
    </div>

    <!-- View More Section -->
    <div class="view-more-section">
      <a href="/writing#essays" class="btn btn-secondary">View All Essays</a>
    </div>
  </div>
</section>


<!-- Affinity Product Module -->
<section class="section" id="affinity">
  <div class="container">
    {% include section-header.html
      eyebrow="Product"
      heading="Affinity"
      text="A practical tool for thinking more clearly about dating and relationship decisions."
    %}
    <div class="product-module fade-in">
      <div class="product-module-text">
        <p class="product-tagline">Dating decisions improve when you understand the incentives shaping them.</p>
        <p class="product-desc">Affinity is a reflection and decision-making tool built on the idea that romantic choices are shaped by incentives, preferences, constraints, and behavioral patterns. It helps individuals understand their experiences and make better decisions.</p>
        <ul>
          <li>Structured reflection for individuals</li>
          <li>Behavioral insight from relationship patterns</li>
          <li>Practical frameworks for dating decisions</li>
        </ul>
        <a href="#" class="btn btn-secondary" style="align-self:flex-start;">Explore Affinity</a>
      </div>
      <div class="product-module-visual"></div>
    </div>
  </div>
</section>

