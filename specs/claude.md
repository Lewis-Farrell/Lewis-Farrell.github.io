# Claude Code Build Prompt — Lewis Farrell Website

You are building a **static personal website** using the specification files provided in this repository.

Your task is to implement the site exactly according to the following documents:

* `website.md`
* `design-system.md`
* `content-model.md`
* `wireframe-spec.md`
* `component-library.md`

These documents together define the architecture, design system, content schema, layout wireframes, and UI components.

Your job is to translate these specifications into a **fully functioning GitHub Pages compatible static website**.

---

# Implementation Requirements

## 1. Technology

The site must work with **GitHub Pages static hosting**.

Use:

* HTML
* CSS
* minimal JavaScript
* Markdown content

Preferred stack:

* **Jekyll-compatible static structure**
* Markdown collections
* reusable layouts
* includes / partials for components

Do NOT introduce:

* backend services
* databases
* authentication
* server-side frameworks

---

# Repository Structure

Create the following structure:

```
/
index.md
professional.md
relationships.md
reports.md
cv.md

_projects/
_essays/
_ideas/
_reports/

_layouts/
_includes/
assets/
css/
js/
images/
pdfs/

specs/
```

The `_projects`, `_essays`, `_ideas`, and `_reports` directories must behave as **content collections**.

---

# Page Templates

Create reusable layouts:

```
_layouts/
  default.html
  page.html
  project.html
  essay.html
  idea.html
  report.html
```

Each layout should render content according to the schema in **content-model.md**.

---

# Component System

Components defined in `component-library.md` must be implemented as reusable partials.

Place them in:

```
_includes/
```

Required components include:

```
navbar.html
mobile-menu.html
hero.html
section-header.html
track-card.html
project-card.html
essay-card.html
idea-card.html
report-card.html
timeline.html
footer.html
cta-section.html
metadata-row.html
tag-list.html
```

These components should follow the design system and wireframe specification.

---

# Design System

Implement styles according to `design-system.md`.

Create:

```
css/
  variables.css
  layout.css
  components.css
  typography.css
  animations.css
```

Use CSS variables for:

* colors
* spacing
* radii
* container widths

Typography must use **Inter**.

Dark theme should be default.

---

# Homepage Implementation

File:

```
index.md
```

Sections must follow the order defined in **wireframe-spec.md**:

1. Navbar
2. Hero
3. Identity section
4. Track split cards
5. Featured professional work
6. Featured relationship thinking
7. Reports
8. Credibility strip
9. Footer

Featured content should be pulled dynamically from collections where `featured: true`.

---

# Professional Page

File:

```
professional.md
```

Sections:

* Page hero
* Career timeline
* Projects grid
* Reports
* CV download

Projects should render dynamically from `_projects`.

Timeline should be implemented using the `timeline` component.

---

# Relationships Page

File:

```
relationships.md
```

Sections:

* Page hero
* Affinity product block
* Essays grid
* Ideas grid
* Dating book section
* Coaching section

Essays pulled from `_essays`.

Ideas pulled from `_ideas`.

---

# Blog Rendering

Essays and ideas should be rendered using their own layouts:

```
/essays/{slug}
/ideas/{slug}
```

Essay layout should use the **ReadingLayout** pattern.

Idea pages should be minimal reading pages.

---

# Project Pages

Route:

```
/projects/{slug}
```

Use `project.html` layout.

Sections must include:

* overview
* problem
* solution
* architecture
* demo
* links

---

# Reports

Reports must:

* display report metadata
* provide download links to PDFs

PDFs located in:

```
assets/pdfs/
```

---

# Responsiveness

The site must be fully responsive.

Breakpoints:

```
desktop
tablet
mobile
```

Rules:

* grids collapse progressively
* cards expand full width on mobile
* navigation becomes mobile menu

---

# Animations

Implement subtle animation using CSS.

Allowed:

* card hover lift
* fade-in on scroll
* smooth scrolling

Avoid heavy animation libraries.

---

# Accessibility

Ensure:

* semantic HTML
* visible focus states
* sufficient contrast
* keyboard navigability
* reduced motion support

---

# Performance

The site must:

* load quickly
* avoid large JS bundles
* optimize images
* minimize CSS duplication

---

# Content Extensibility

The system must allow adding new content simply by creating Markdown files in:

```
_projects
_essays
_ideas
_reports
```

No template modification should be required.

---

# Final Output

The final repository should contain:

* a fully working static website
* reusable layout templates
* reusable UI components
* content collections
* responsive design
* clean visual hierarchy
* GitHub Pages compatibility

The site should feel like a **modern product website**, not a simple portfolio.
