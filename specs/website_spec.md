# Lewis Farrell — Website Specification

## Overview

This document specifies the architecture, structure, and design requirements for a personal website for **Lewis Farrell**.

The site serves three primary purposes:

1. Professional portfolio and CV
2. Showcase of projects, code, and reports
3. Publishing platform for relationship essays and ideas

The site should feel like a **product-style personal platform**, not a traditional résumé website.

It should communicate that Lewis Farrell:

* Builds technical systems
* Thinks deeply about human systems
* Publishes tools, ideas, and products

The site must be **fully static and compatible with GitHub Pages**.

---

# Core Brand Positioning

The site represents a single identity operating across two domains:

**Systems**

* Consulting
* Data infrastructure
* Technical architecture
* Product development

**Human Systems**

* Dating
* Relationships
* Behavioural frameworks
* The Affinity product

The website must make this dual identity clear while keeping each domain cleanly separated.

---

# Site Objectives

The website should allow visitors to:

* View professional background and CV
* Explore technical projects and tools
* Download reports
* Read relationship essays and ideas
* Learn about the Affinity product
* Discover Lewis's thinking about relationships

---

# Target Audiences

Primary audiences:

**Hiring Managers**

* Want credibility and evidence of capability
* Interested in projects, consulting work, and CV

**Readers interested in relationships**

* Interested in essays and ideas
* Interested in the Affinity product
* Interested in dating frameworks

---

# Design Philosophy

The design aesthetic should resemble **modern startup product sites** such as:

* Stripe
* Linear
* Vercel

Characteristics:

* clean typography
* minimal clutter
* card-based layout
* subtle animation
* strong visual hierarchy
* fast loading
* mobile responsive

The site must feel:

* intelligent
* modern
* product-oriented

---

# Technology Constraints

The site must be compatible with **GitHub Pages static hosting**.

Allowed technologies:

* HTML
* CSS
* JavaScript
* Markdown
* Jekyll-compatible content structure

Avoid:

* backend services
* databases
* authentication systems
* dynamic server-side code

All content must be stored as files within the repository.

---

# Site Architecture

```
/
index.md
professional.md
relationships.md
cv.md
reports.md

_projects/
_reports/
_essays/
_ideas/

assets/
css/
js/
images/
pdfs/
```

---

# Navigation Structure

Top navigation bar:

```
Home
Professional
Relationships
Reports
CV
```

Dropdown navigation should be scoped within each track page.

---

# Homepage

File:

```
index.md
```

Purpose:

Introduce Lewis Farrell and route users to the correct track.

Sections:

---

## Hero Section

Content:

Name:

Lewis Farrell

Headline:

Build systems.
Understand people.

Subheadline:

Oxford economist, consultant, and builder.
I create tools and ideas for understanding complex systems — technical and human.

Primary buttons:

```
Explore Professional Work
Explore Relationships
```

---

## Identity Section

Short explanation of intellectual focus.

Example text:

I build tools and ideas for understanding complex systems.

Sometimes those systems are technical.
Sometimes they are human.

---

## Track Split

Two large cards.

### Professional

Description:

Consulting, engineering systems, and technical work.

Button:

Explore Professional

Link:

```
/professional
```

---

### Relationships

Description:

Ideas, essays, and products for understanding dating and relationships.

Button:

Explore Relationships

Link:

```
/relationships
```

---

## Featured Professional Work

Displays selected projects from `_projects`.

Each project card shows:

* project title
* short description
* category
* link to project page

Example categories:

* Product
* Engineering
* Research
* Framework

---

## Featured Relationship Thinking

Displays items from:

```
_essays
_ideas
```

Card shows:

* title
* category
* date
* short preview

---

## Reports

Displays items from `_reports`.

Each card shows:

* report title
* description
* download button

Downloads link to PDF files.

---

## Credibility Strip

Displays key credentials:

Oxford Economics & Management
Management Consultant
Data Strategy
Product Builder

---

# Professional Track

File:

```
professional.md
```

Purpose:

Serve as landing page for professional work.

Sub-navigation:

```
Overview
Career
Education
Projects
Reports
CV
```

Sections:

---

## Career Timeline

Visual timeline showing roles.

Example entries:

```
Management Consultant — Woodhurst Consulting
Oxford — Economics & Management
```

---

## Projects

Grid displaying projects from `_projects`.

Each card:

* title
* category
* short description
* link to project page

---

## Reports

List reports from `_reports`.

---

## CV

Link to:

```
/cv
```

Also provide downloadable PDF.

---

# Relationships Track

File:

```
relationships.md
```

Purpose:

Serve as hub for relationship-related thinking and products.

Sub-navigation:

```
Overview
Affinity
Blog
Essays
Short Ideas
Dating Book
Coaching
```

---

## Affinity

Dedicated product section describing the Affinity project.

Content structure:

Problem
Solution
Product overview
Screenshots or diagrams
Future vision

---

## Blog

Blog index page containing both essays and short ideas.

---

## Essays

Long-form writing.

Pulled from:

```
_essays/
```

Each card displays:

* title
* date
* preview
* reading time

---

## Short Ideas

Short conceptual pieces.

Pulled from:

```
_ideas/
```

Displayed as smaller cards.

---

# Project Page Template

Projects stored in:

```
_projects/
```

Template structure:

```
Title
Category
Date

Overview

Problem

Solution

Architecture

Demo

Links
```

Each project may include:

* images
* animations
* diagrams
* GitHub links

---

# Essay Template

Stored in:

```
_essays/
```

Structure:

```
Title
Date
Excerpt

Introduction

Main content

Conclusion
```

---

# Idea Template

Stored in:

```
_ideas/
```

Structure:

```
Title
Date

Short insight or argument
```

Ideas should be concise and readable in under one minute.

---

# Report Template

Stored in:

```
_reports/
```

Structure:

```
Title
Description
Audience
Download link
```

Reports should link to PDF files in:

```
assets/pdfs
```

---

# Styling Requirements

Typography:

Primary font: Inter

Layout principles:

* wide margins
* readable text width
* card-based components
* strong spacing

Color palette suggestion:

Background: dark slate or off-white
Primary accent: electric blue
Secondary accent: muted grey

---

# Animations

Allowed animations:

* hover elevation
* subtle fade-in on scroll
* card hover effects
* smooth anchor scrolling

Animations must be lightweight and not block page rendering.

---

# Responsiveness

The site must be fully responsive.

Breakpoints:

* desktop
* tablet
* mobile

Navigation should collapse into a mobile menu on small screens.

---

# Performance Requirements

* fast loading
* minimal JavaScript
* optimized images
* no heavy libraries

Target: sub-second page load on standard broadband.

---

# Content Strategy

Professional content emphasizes:

* capability
* systems thinking
* technical execution

Relationship content emphasizes:

* intellectual exploration
* frameworks for understanding dating
* essays and insights

Affinity content should feel like a **product landing page**.

---

# Future Expansion

The architecture must allow easy addition of:

* new projects
* essays
* ideas
* reports

Adding new content should only require creating new Markdown files within the correct folder.

No structural redesign should be required.

---

# Implementation Goal

Using this specification, an AI coding assistant should be able to:

* generate the full static site
* create reusable templates
* implement navigation
* render Markdown collections
* apply consistent styling
* produce a deployable GitHub Pages site
