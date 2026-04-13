---
layout: page
title: Professional
page_class: professional
---

<section class="page-hero">
  <div class="container">
    <span class="eyebrow">Professional</span>
    <h1>Strategy &amp; Systems</h1>
    <p>I design and deliver data systems — spanning strategy, architecture, and implementation — to drive measurable organisational change.</p>
  </div>
</section>

<!-- Experience -->
<section class="section" id="experience">
  <div class="container">
    {% include section-header.html
      eyebrow="Career"
      heading="Experience"
      text="A foundation in economics, applied through consulting."
    %}
    <div class="timeline">
      <div class="timeline-item fade-in">
        <p class="timeline-date">2024 — Present</p>
        <h3 class="timeline-title">Management Consultant</h3>
        <p class="timeline-org">Woodhurst Consulting</p>
        <p class="timeline-desc">Leading data modernisation and cloud transformation across financial services — from strategy and vendor selection through to architecture, implementation, and insight delivery.</p>
      </div>
      <div class="timeline-item fade-in">
        <p class="timeline-date">2021 — 2024</p>
        <h3 class="timeline-title">Economics &amp; Management</h3>
        <p class="timeline-org">University of Oxford</p>
        <p class="timeline-desc">Specialised in Microeconomics and its application to business. Modules in Game Theory, Strategy, Marketing, and Organisational Behaviour.</p>
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
      text="Selected work across data systems, implementation, and product thinking."
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

