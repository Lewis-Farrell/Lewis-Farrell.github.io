# Lewis Farrell — Wireframe Specification

## Purpose

This document defines the **layout wireframes** for each page of the site. It translates the product architecture and design system into concrete visual structures so an AI coding assistant can implement layouts consistently.

All layouts assume:

* responsive design
* card-based UI
* dark theme
* product-style aesthetic

The wireframes are described in **structural blocks** rather than pixel-perfect layouts so they remain flexible.

---

# Global Layout Rules

## Container

All main sections use a centered container.

Desktop:

* max width: 1200px
* horizontal padding: 24–32px

Tablet:

* max width: 960px

Mobile:

* full width
* padding: 16–20px

---

# Homepage Wireframe

File:

```
/index.md
```

## Layout Overview

Sections from top to bottom:

1. Navigation
2. Hero
3. Identity Statement
4. Track Split
5. Featured Professional Work
6. Featured Relationship Thinking
7. Reports
8. Credibility Strip
9. Footer

---

## Navigation

Structure:

```
[ Lewis Farrell ]                [Home Professional Relationships Reports CV]
```

Behavior:

* sticky navigation
* subtle background blur
* becomes solid after scrolling

Mobile:

* hamburger menu

---

## Hero Section

Centered content block.

```
                Lewis Farrell

        Build systems. Understand people.

Oxford economist, consultant, and builder.

     [ Explore Professional ]  [ Explore Relationships ]
```

Rules:

* large headline
* short supporting text
* two CTA buttons
* generous vertical spacing

---

## Identity Section

Two or three-column conceptual statement.

Example structure:

```
Systems
Consulting and technical infrastructure.

Products
Tools and experiments.

Human Systems
Dating and relationship thinking.
```

Each column is a minimal card or text block.

---

## Track Split Section

Two large cards side-by-side.

```
[ Professional Work ]        [ Relationships & Affinity ]

Consulting, engineering     Essays and tools for
systems, and products.      understanding relationships.

[ Explore ]                 [ Explore ]
```

Cards should:

* be visually prominent
* include subtle hover animation
* clearly indicate two distinct paths

On mobile they stack vertically.

---

## Featured Professional Work

Three-card grid.

```
[ Project ]   [ Project ]   [ Project ]
```

Card contents:

* title
* category badge
* short summary
* link to project page

---

## Featured Relationship Thinking

Two or three cards drawn from essays or ideas.

```
[ Essay ]   [ Essay ]   [ Idea ]
```

Cards include:

* title
* preview text
* date

---

## Reports Section

Two-column layout.

```
[ Report Card ]    [ Report Card ]
```

Each card:

* title
* description
* download button

---

## Credibility Strip

Simple horizontal band.

Example:

```
Oxford Economics & Management
Management Consultant
Data Strategy
Product Builder
```

Displayed as evenly spaced items.

---

# Professional Page Wireframe

File:

```
/professional.md
```

## Layout

Sections:

1. Page Hero
2. Career Timeline
3. Projects Grid
4. Reports
5. CV Download

---

## Page Hero

```
Professional Work

Consulting, systems engineering, and product development.
```

Short introduction paragraph.

---

## Career Timeline

Vertical timeline.

Example:

```
• Management Consultant — Woodhurst Consulting
  Focus: Data strategy, cloud architecture

• Oxford University
  Economics & Management
```

Nodes connected by a vertical line.

---

## Projects Grid

Three-column card grid.

Cards contain:

* title
* category
* short summary
* explore link

---

## Reports

Report cards similar to homepage report section.

---

## CV Download

Centered block:

```
Download CV

[ Download PDF ]
```

---

# Relationships Page Wireframe

File:

```
/relationships.md
```

## Layout

Sections:

1. Page Hero
2. Affinity Product Section
3. Essays Grid
4. Ideas Grid
5. Dating Book
6. Coaching

---

## Page Hero

```
Relationships

Ideas and tools for understanding dating and relationships.
```

Short introductory text.

---

## Affinity Section

Product-style layout.

Two-column split:

Left:

* title
* explanation
* bullet features

Right:

* product visual
* UI mockup
* diagram

Example:

```
Affinity
Understand your relationships through structured reflection.

• Relationship analysis
• Behavioural insights
• Dating decision frameworks
```

CTA button:

```
Explore Affinity
```

---

## Essays Grid

Two or three-column layout.

Essay card contains:

* title
* excerpt
* reading time
* date

---

## Ideas Grid

Compact card layout.

Cards contain:

* short title
* preview sentence

Designed for quick scanning.

---

## Dating Book Section

Single-column block.

```
Dating Book

Long-form exploration of modern dating dynamics.

[ Learn More ]
```

---

## Coaching Section

Simple information card.

```
Dating Coaching

Private sessions focused on relationship strategy and decision-making.

[ Learn More ]
```

---

# Project Page Wireframe

Route:

```
/projects/{slug}
```

Layout:

1. Project Header
2. Overview
3. Problem
4. Solution
5. Architecture
6. Demo
7. Links

---

## Project Header

```
Project Title
Category Badge

Short summary
```

Optional hero image or animation.

---

## Content Sections

Each section is stacked vertically with clear headings.

Example:

```
Problem

Explanation text.

Solution

Explanation text.
```

---

# Essay Page Wireframe

Route:

```
/essays/{slug}
```

Layout:

1. Title
2. Metadata row
3. Article body
4. Related content

---

## Metadata Row

Example:

```
Date • Reading Time • Tags
```

---

## Article Body

Rules:

* narrow reading width
* generous line spacing
* minimal distractions

---

## Related Content

Cards linking to other essays or ideas.

---

# Idea Page Wireframe

Route:

```
/ideas/{slug}
```

Layout:

Minimal reading page.

```
Title
Date

Idea content
```

Should feel concise and quick to read.

---

# Report Page Wireframe

Route:

```
/reports/{slug}
```

Layout:

1. Title
2. Description
3. Audience
4. Key Topics
5. Download Button

Example:

```
Download Report

[ Download PDF ]
```

---

# Mobile Behaviour

Global rules:

* grids collapse to single column
* cards expand full width
* navigation becomes hamburger menu
* hero buttons stack vertically

Spacing should remain generous to maintain readability.

---

# Implementation Goal

Using this wireframe specification alongside the design system and content model, an AI coding assistant should be able to:

* construct page layouts
* place components consistently
* generate responsive HTML structure
* render content collections correctly
* maintain visual hierarchy across pages

The result should resemble a modern startup product website rather than a traditional portfolio.
