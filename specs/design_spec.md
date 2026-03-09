# Lewis Farrell — Design System Specification

## Purpose

This document defines the design system for Lewis Farrell’s website.

It should be used alongside `website.md` to ensure the site is visually coherent, scalable, and easy for an AI coding assistant to implement consistently.

The design language should feel like a **modern startup product site** with strong personal-brand clarity.

The visual outcome should feel:

* sharp
* intelligent
* modern
* slightly premium
* structured rather than decorative

---

# Design Principles

## 1. Product-first, not portfolio-first

The site should feel like a well-designed digital product, not a generic CV template.

## 2. Clarity over ornament

Visual design should support hierarchy, navigation, and credibility.

## 3. Motion should explain, not distract

Animation should reinforce structure and interactivity.

## 4. Two-track identity, one system

The professional and relationships tracks should feel distinct in content but unified in visual language.

---

# Visual Tone

The site should take inspiration from:

* Stripe
* Linear
* Vercel
* modern startup launch sites

Keywords:

* crisp
* confident
* minimal
* product-led
* polished
* dark-mode friendly

The design should avoid looking:

* corporate and bland
* overly playful
* influencer-style
* blog-heavy
* cluttered or ornamental

---

# Color System

## Primary Recommendation

Use a dark theme as the default.

### Core Colors

```text
Background Primary: #0B1020
Background Secondary: #121A2B
Surface: #161F33
Surface Hover: #1D2942
Border: rgba(255,255,255,0.08)
Text Primary: #F5F7FB
Text Secondary: #B7C0D1
Text Muted: #7F8AA3
Accent Primary: #4DA3FF
Accent Hover: #78B8FF
Accent Soft: rgba(77,163,255,0.12)
Success: #3DDC97
Warning: #FFB84D
```

## Usage Rules

* Backgrounds should be dark and clean
* Accent color should be used sparingly for buttons, links, highlights, and active states
* Body text should be high contrast and easy to read
* Muted text should be used only for metadata and secondary descriptions

## Relationship Track Accent Variation

Optional subtle secondary accent for relationships content:

```text
Secondary Accent: #A78BFA
Secondary Accent Soft: rgba(167,139,250,0.12)
```

This should be used very lightly, mainly for badges or section markers, not as a full second brand.

---

# Typography

## Font Stack

Primary font:

```text
Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
```

Optional display font for large headings only if needed:

```text
Inter Tight
```

If added, it should be limited to hero headings and major section titles.

## Type Scale

```text
Display XL: 72px / 1.0 / 700
Display L: 56px / 1.05 / 700
Heading 1: 40px / 1.1 / 700
Heading 2: 32px / 1.15 / 700
Heading 3: 24px / 1.2 / 650
Heading 4: 20px / 1.3 / 650
Body L: 20px / 1.6 / 400
Body: 16px / 1.7 / 400
Body S: 14px / 1.6 / 400
Meta: 12px / 1.4 / 500
```

## Typography Rules

* Headings should be short and punchy
* Long paragraphs should be avoided on landing sections
* Line length should remain readable, ideally 60–75 characters for prose
* Bold should be used intentionally, not constantly
* Metadata such as dates, categories, and labels should use Meta or Body S

---

# Spacing System

Use a consistent spacing scale.

```text
4px
8px
12px
16px
24px
32px
48px
64px
96px
128px
```

## Layout Rhythm

* Tight internal spacing within cards
* Generous spacing between major sections
* Homepage sections should usually have 96px to 128px vertical padding on desktop
* Mobile should reduce padding proportionally while preserving hierarchy

---

# Grid and Layout

## Container Widths

```text
Max width large: 1200px
Max width medium: 960px
Reading width: 720px
```

## Grid Rules

* Use a 12-column layout for desktop
* Collapse to 6 or 4 columns on tablet
* Collapse to 1 column on mobile where needed

## Layout Patterns

Preferred patterns:

* centered hero with constrained width
* two-column split sections
* three-card feature grids
* single-column reading layout for essays
* modular card rows for projects and reports

---

# Component System

## 1. Navigation Bar

### Desktop

* fixed or sticky top nav
* transparent or lightly blurred background at top
* becomes solid on scroll
* logo/name on left
* nav links on right

Links:

* Home
* Professional
* Relationships
* Reports
* CV

### Mobile

* hamburger menu
* full-screen or slide-down panel
* large tap targets

### Style

* compact
* high contrast
* understated

---

## 2. Buttons

### Primary Button

Usage:

* main CTAs

Style:

* filled accent background
* rounded corners
* medium weight text
* subtle hover lift

### Secondary Button

Usage:

* lower priority CTAs

Style:

* dark surface with border
* lighter hover state

### Text Link Button

Usage:

* inline navigation
* read more / explore

Style:

* accent text
* underline or arrow treatment on hover

### Button Size

```text
Height: 44px to 52px
Padding X: 16px to 24px
Border Radius: 12px to 16px
```

---

## 3. Cards

Cards are the core UI unit.

### Card Types

#### Project Card

Contains:

* title
* category badge
* short summary
* optional preview image or animation
* link

#### Essay Card

Contains:

* title
* excerpt
* date
* reading time
* category

#### Idea Card

Contains:

* short title
* one-line preview
* date

#### Report Card

Contains:

* title
* summary
* audience label
* download CTA

### Card Style

```text
Background: Surface
Border: subtle
Border radius: 20px to 24px
Shadow: soft, low opacity
Padding: 20px to 28px
```

### Card Hover Behaviour

* slight elevation
* border brightening
* optional small upward translate

Hover should feel polished, not bouncy.

---

## 4. Section Headers

Each major section should use a consistent pattern:

```text
Eyebrow label
Main heading
Supporting text
```

Example:

```text
Professional Work
Selected projects, systems, and reports.
```

### Eyebrow Style

* uppercase or small caps
* small size
* muted or accented color
* generous letter spacing

---

## 5. Badges / Tags

Used for:

* categories
* project types
* status labels

Style:

```text
Small pill shape
Soft background tint
Muted text or accent text
Border optional
```

Examples:

* Product
* Framework
* Essay
* Idea
* Report
* Featured

---

## 6. Timeline Component

Used on Professional page for career and education.

### Style

* vertical line with nodes
* role title prominent
* institution/company below
* optional date on side or above

Should feel modern, not like a LinkedIn export.

---

## 7. Content Preview Blocks

Used for Affinity and project pages.

### Structure

* title
* short explanation
* screenshot, diagram, or looping visual
* CTA link

These blocks should feel like mini product modules.

---

# Motion System

Motion should be subtle and consistent.

## Allowed Motion Patterns

### 1. Fade-in on scroll

Used for:

* section reveals
* cards appearing in sequence

Duration:

* 400ms to 700ms

### 2. Hover lift

Used for:

* cards
* buttons

Transform:

* translateY(-2px) to translateY(-4px)

### 3. Border glow / accent highlight

Used for:

* focused cards
* active nav states
* featured items

### 4. Smooth scrolling

Used for:

* anchor links
* in-page subnav

## Avoid

* parallax-heavy effects
* long animation delays
* autoplay motion that competes with reading
* flashy loaders
* exaggerated spring animations

---

# Page-Specific Visual Rules

## Homepage

Should feel like a product landing page.

Priority:

* strong hero
* clean track split
* selected highlights
* fast scanning

Use more visual contrast here than on interior pages.

## Professional Page

Should feel:

* sharp
* credible
* system-oriented
* outcome-driven

Use clearer structure, grids, timeline, and case-study cards.

## Relationships Page

Should feel:

* thoughtful
* essay-led
* intellectually serious
* slightly softer than professional, but still product-quality

Affinity subsection may use more product visuals.

## Essay Pages

Should prioritize readability.

Rules:

* narrow reading width
* generous line-height
* minimal distractions
* sticky back navigation optional

## Project Pages

Should feel like mini case studies or product pages.

Use:

* strong header
* architecture sections
* visuals
* structured content blocks

---

# Imagery and Visual Assets

## Preferred Asset Types

* product mockups
* screenshots
* diagrams
* animated previews
* subtle background gradients
* grid textures

## Avoid

* generic stock photos
* cheesy lifestyle imagery
* overused tech illustrations
* decorative icons without function

Images should feel deliberate and product-relevant.

---

# Iconography

Use a lightweight modern icon set if needed.

Recommended:

* Lucide
* Heroicons

Rules:

* thin or medium stroke icons
* use sparingly
* icons should support navigation or information, not decorate empty space

---

# Responsive Behaviour

## Mobile Priorities

* clear typography
* strong spacing
* simplified grids
* easy tap targets
* clean nav menu

## Mobile Card Behaviour

* cards become full width
* hover effects degrade gracefully
* text truncation should be avoided where possible

## Mobile Hero

* stack content vertically
* keep headline impactful
* buttons should stack or wrap cleanly

---

# Accessibility Requirements

* sufficient text contrast
* visible keyboard focus states
* semantic heading hierarchy
* descriptive link text
* buttons must be clearly identifiable
* motion should respect reduced-motion preferences

Minimum contrast should meet WCAG AA where practical.

---

# Reusable CSS Tokens

Suggested CSS variables:

```css
:root {
  --bg-primary: #0B1020;
  --bg-secondary: #121A2B;
  --surface: #161F33;
  --surface-hover: #1D2942;
  --border: rgba(255,255,255,0.08);
  --text-primary: #F5F7FB;
  --text-secondary: #B7C0D1;
  --text-muted: #7F8AA3;
  --accent-primary: #4DA3FF;
  --accent-hover: #78B8FF;
  --accent-soft: rgba(77,163,255,0.12);
  --radius-sm: 12px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --container-lg: 1200px;
  --container-md: 960px;
  --reading-width: 720px;
}
```

---

# Section Templates

## Hero Template

Contains:

* name
* headline
* subheadline
* primary CTA row
* optional credibility strip

## Split-Track Template

Contains:

* two feature cards
* each with heading, description, CTA

## Grid Section Template

Contains:

* section header
* 2 to 3 column grid
* responsive card layout

## Reading Template

Contains:

* title
* metadata row
* constrained body width
* optional related content footer

---

# Tone Through Design

The visual system should communicate:

* competence
* range
* control
* seriousness
* product thinking

It should not feel like a personal scrapbook.

It should feel like the digital front-end of a sharp mind with two clear operating domains.

---

# Implementation Guidance for Claude Code

Claude Code should:

* build reusable layout components
* define consistent card variants
* create shared spacing and typography tokens
* implement dark-mode-first styling
* ensure all templates use the same grid and container rules
* apply subtle, consistent motion across pages
* prioritize readability on writing pages
* make project and Affinity sections feel product-grade

The result should be visually coherent across all current and future content.
