---
layout: page
title: Professional
page_class: professional
---

<section class="page-hero">
  <div class="container">
    <span class="eyebrow">Professional</span>
    <h1>Strategy &amp; Systems</h1>
    <p>I design and implement data systems for organisations — combining strategy, architecture, and technical delivery to create lasting change.</p>
  </div>
</section>

<!-- Experience -->
<section class="section" id="experience">
  <div class="container">
    {% include section-header.html
      eyebrow="Career"
      heading="Experience"
      text="A background spanning economics, consulting, and applied systems design."
    %}
    <div class="timeline">
      <div class="timeline-item fade-in">
        <p class="timeline-date">2022 — Present</p>
        <h3 class="timeline-title">Management Consultant</h3>
        <p class="timeline-org">Woodhurst Consulting</p>
        <p class="timeline-desc">Leading data modernisation, cloud architecture, and transformation work for financial services clients — from strategy and vendor selection through to data models, implementation, and insight generation.</p>
      </div>
      <div class="timeline-item fade-in">
        <p class="timeline-date">2018 — 2022</p>
        <h3 class="timeline-title">Economics &amp; Management</h3>
        <p class="timeline-org">University of Oxford</p>
        <p class="timeline-desc">Studied economics, management, and quantitative methods, with a particular interest in incentives, strategy, and how complex systems behave.</p>
      </div>
    </div>
  </div>
</section>

<div class="section-divider"></div>

<!-- Projects -->
<section class="section" id="projects">
  <div class="container">
    {% include section-header.html
      eyebrow="Projects"
      heading="Systems &amp; Products"
      text="Technical systems, implementation work, and products built around complex problem-solving."
    %}
    <div class="entry-list">
      {% for project in site.projects %}
        {% if project.status != 'draft' %}
          {% include project-card.html project=project %}
        {% endif %}
      {% endfor %}
    </div>
  </div>
</section>

