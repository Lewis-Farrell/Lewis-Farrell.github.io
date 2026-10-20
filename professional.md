---
layout: page
title: Professional
page_class: professional
section: professional
---

<section class="page-hero">
  <div class="container">
    <span class="eyebrow">Professional</span>
    <h1>Strategy &amp; Systems</h1>
    <p>Management consultant in Data and AI for financial services. I build production data platforms on Databricks and Azure, and the strategy and operating models that let teams run them.</p>
    <p class="cv-links"><a href="{{ '/contact' | relative_url }}" class="btn-text">Get in touch</a></p>
  </div>
</section>

<!-- Selected work -->
<section class="section" id="work">
  <div class="container">
    {% include section-header.html
      eyebrow="Selected work"
      heading="Case studies"
      text="Client engagements and internal builds, described without the client names."
    %}
    <div class="essay-grid case-grid">
      {% assign projects = site.projects | where_exp: "p", "p.status != 'draft'" | sort: "order" %}
      {% for project in projects %}
        {% include project-card.html project=project %}
      {% endfor %}
    </div>
  </div>
</section>

<!-- Capabilities -->
<section class="section" id="capabilities">
  <div class="container">
    {% include section-header.html
      eyebrow="Capabilities"
      heading="What I work with"
      text="Strategy and delivery across the modern data stack."
    %}
    <div class="capabilities">
      <div class="capability">
        <h3>Data platforms</h3>
        <ul class="chips">
          <li>Databricks (PySpark, Delta Lake, DLT, Asset Bundles)</li>
          <li>Unity Catalog</li>
          <li>Dimensional modelling</li>
          <li>SCD1/SCD2</li>
          <li>Change data capture</li>
        </ul>
      </div>
      <div class="capability">
        <h3>Azure</h3>
        <ul class="chips">
          <li>Data Factory</li>
          <li>ADLS</li>
          <li>Functions</li>
          <li>Event Grid</li>
          <li>Synapse</li>
          <li>Container App Jobs</li>
          <li>Terraform</li>
        </ul>
      </div>
      <div class="capability">
        <h3>Engineering practice</h3>
        <ul class="chips">
          <li>Python</li>
          <li>SQL</li>
          <li>Git</li>
          <li>CI/CD on Azure DevOps</li>
          <li>SDLC and Agile</li>
          <li>Environment-controlled deployments</li>
        </ul>
      </div>
      <div class="capability">
        <h3>Strategy &amp; AI</h3>
        <ul class="chips">
          <li>Data strategy and maturity assessment</li>
          <li>Cloud target-architecture evaluation</li>
          <li>Business cases</li>
          <li>Agentic AI tooling (Genie, Codex, Claude Code)</li>
        </ul>
      </div>
    </div>
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
      <div class="timeline-item">
        <p class="timeline-date">Jun 2024 — Present</p>
        <h3 class="timeline-title">Management Consultant, Data and AI</h3>
        <p class="timeline-org">Woodhurst · London</p>
        <p class="timeline-desc">Early employee at a start-up management consultancy, through its PE-backed exit and acquisition by Finyx. Building the Data and AI practice for financial services clients, leading junior hiring and development, and running the firm's technical innovation function.</p>
      </div>
      <div class="timeline-item">
        <p class="timeline-date">Oct — Dec 2022</p>
        <h3 class="timeline-title">Senior Consultant</h3>
        <p class="timeline-org">CapitOx · Oxford</p>
        <p class="timeline-desc">Pricing and UX research for a remittance client.</p>
      </div>
      <div class="timeline-item">
        <p class="timeline-date">2021 — 2024</p>
        <h3 class="timeline-title">Economics &amp; Management</h3>
        <p class="timeline-org">University of Oxford</p>
        <p class="timeline-desc">BA (Hons), 2:1. Game Theory, Quantitative Economics, Microeconomics, Strategy and Finance. Crankstart Scholar.</p>
      </div>
    </div>
  </div>
</section>

{% include cta-section.html heading="Work with me" text="Data and AI consulting for financial services, from strategy through to production delivery." cta1_label="Get in touch" cta1_link="/contact" %}
