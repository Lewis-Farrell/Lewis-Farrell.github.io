---
layout: page
title: Relationships
page_class: relationships
---

<section class="page-hero">
  <div class="container">
    <span class="eyebrow">Relationships</span>
    <h1>Intimacy Economics</h1>
    <p>I explore dating and relationships through economics, game theory, and systems thinking — turning modern intimacy into something more explainable, and more useful.</p>
  </div>
</section>

<!-- Affinity Product Module -->
<section class="section" id="affinity">
  <div class="container">
    {% include section-header.html
      eyebrow="Product"
      heading="Affinity"
      text="A practical tool for thinking more clearly about dating and relationships."
    %}
    <div class="product-module fade-in">
      <div class="product-module-text">
        <p class="product-tagline">Dating decisions improve when you understand the incentives shaping them.</p>
        <p class="product-desc">Affinity is a reflection and decision-making tool built on the idea that romantic choices are shaped by incentives, preferences, constraints, and behavioural patterns. It is designed to help individuals better understand their experiences and make better decisions.</p>
        <ul>
          <li>Structured reflection for individuals</li>
          <li>Behavioural insight from relationship patterns</li>
          <li>Practical frameworks for dating decisions</li>
        </ul>
        <a href="#" class="btn btn-secondary" style="align-self:flex-start;">Explore Affinity</a>
      </div>
      <div class="product-module-visual"></div>
    </div>
  </div>
</section>

<div class="section-divider"></div>

<!-- Essays -->
<section class="section" id="essays">
  <div class="container">
    {% include section-header.html
      eyebrow="Essays"
      heading="Intimacy Economics Essays"
      text="Long-form writing on dating, mate choice, incentives, and the market dynamics of modern relationships."
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

<!-- Ideas / Frameworks -->
<section class="section" id="frameworks">
  <div class="container">
    {% include section-header.html
      eyebrow="Ideas"
      heading="Short Frameworks"
      text="Concise observations and working models for understanding attraction, selection, and relational behaviour."
    %}
    <div class="entry-list">
      {% for idea in site.ideas %}
        {% if idea.status != 'draft' %}
          {% include idea-card.html idea=idea %}
        {% endif %}
      {% endfor %}
    </div>
  </div>
</section>

<div class="section-divider"></div>

<!-- Book + Advisory -->
<section class="section" id="book">
  <div class="container">
    <div class="text-section">
      <span class="section-eyebrow">In Progress</span>
      <h2>Book Project</h2>
      <p>A book on Intimacy Economics: how incentives, markets, and behavioural dynamics shape modern dating and relationships — and how understanding them can improve the utility we get from intimacy.</p>
    </div>
    <div class="text-section">
      <span class="section-eyebrow">Advisory</span>
      <h2>Relationship Strategy</h2>
      <p>Private advisory grounded in behavioural data, economic reasoning, and practical frameworks for dating more effectively.</p>
      <a href="#" class="btn btn-secondary">Learn More</a>
    </div>
  </div>
</section>
