---
layout: page
title: Relationships
page_class: relationships
---

<section class="page-hero">
  <div class="container">
    <span class="eyebrow">Intimacy Economics</span>
    <h1>Dating &amp; Relationships</h1>
    <p>An economic approach to understanding the interplay of incentives, markets, and strategies within modern dating.</p>
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
      <div class="product-module-visual"></div>
    </div>
  </div>
</section>

