---
layout: page
title: Professional
page_class: professional
---

<section class="page-hero">
  <div class="container">
    <span class="eyebrow">Professional</span>
    <h1>Strategy &amp; Systems</h1>
    <p>I design and implement systems for organisations, combining strategy, data architecture, and execution to deliver lasting change.</p>
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
      heading="Systems and Products"
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

<div class="section-divider"></div>

<!-- Reports -->
<section class="section" id="reports">
  <div class="container">
    {% include section-header.html
      eyebrow="Reports"
      heading="Research &amp; Analysis"
      text="Research, analysis, and structured thinking on strategy, systems, and technology."
    %}
    <div class="entry-list">
      {% for report in site.reports %}
        {% include report-card.html report=report %}
      {% endfor %}
    </div>
  </div>
</section>

<div class="section-divider"></div>

<!-- CV -->
<section class="section" id="cv">
  <div class="container">
    <h2 style="font-size:28px;letter-spacing:-0.02em;margin-bottom:var(--space-4);">Curriculum Vitae</h2>
    <p style="font-size:16px;color:var(--text-secondary);max-width:460px;margin-bottom:var(--space-6);">A detailed overview of my experience across consulting, systems design, technical delivery, and product thinking.</p>
    <div style="display:flex;gap:var(--space-4);flex-wrap:wrap;">
      <a href="/assets/pdfs/lewis-farrell-cv.pdf" class="btn btn-primary" download>Download PDF</a>
      <a href="/cv" class="btn btn-secondary">View CV Page</a>
    </div>
  </div>
</section>
