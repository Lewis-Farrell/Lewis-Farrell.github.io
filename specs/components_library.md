# Lewis Farrell — Component Library Specification

## Purpose

This document defines the reusable UI components for the website.

It should be used alongside:

* `website.md`
* `design-system.md`
* `content-model.md`
* `wireframe-spec.md`

The goal is to ensure the site feels like a coherent product, with consistent patterns reused across pages rather than one-off layouts.

All components should be implemented in a modular way so they can be reused throughout the site.

---

# Global Component Principles

## 1. Reuse over reinvention

The same structural patterns should appear across the site wherever possible.

## 2. Product-grade consistency

Cards, buttons, headers, and content blocks should feel clearly related.

## 3. Flexible content slots

Each component should be able to render different content without structural changes.

## 4. Lightweight implementation

Components should be simple enough to work in a static GitHub Pages setup.

---

# Component List

The site should include the following reusable components:

```text
Navbar
MobileMenu
HeroSection
SectionHeader
TrackCard
ProjectCard
EssayCard
IdeaCard
ReportCard
Badge
Button
Timeline
ContentPreviewBlock
Footer
TagList
MetadataRow
FeaturedGrid
ReadingLayout
CTASection
```

---

# 1. Navbar

## Purpose

Primary global navigation.

## Used On

* homepage
* professional page
* relationships page
* project pages
* essay pages
* idea pages
* report pages

## Structure

```text
[ Name / wordmark ]      [ Nav links ]
```

Links:

* Home
* Professional
* Relationships
* Reports
* CV

## Behaviour

* sticky or fixed
* transparent or lightly blurred at top
* solid background after scrolling
* active link state for current page

## Mobile Variant

Desktop navbar collapses into `MobileMenu`.

---

# 2. MobileMenu

## Purpose

Mobile navigation overlay or drawer.

## Structure

```text
[ Close ]
Home
Professional
Relationships
Reports
CV
```

## Behaviour

* opens from hamburger button
* full-screen or slide-down panel
* large tap targets
* must be keyboard accessible

---

# 3. HeroSection

## Purpose

Primary page introduction.

## Used On

* homepage
* professional page
* relationships page
* project pages (adapted)

## Props / Content Slots

* eyebrow
* title
* subtitle
* description
* primary CTA
* secondary CTA
* optional supporting metadata

## Structure

```text
Eyebrow
Title
Subtitle / description
[Primary CTA] [Secondary CTA]
```

## Notes

Homepage hero should be centered and larger than interior page heroes.

---

# 4. SectionHeader

## Purpose

Reusable header for content sections.

## Props / Content Slots

* eyebrow
* heading
* supporting text
* optional action link

## Structure

```text
Eyebrow
Heading
Supporting text                    [Optional link]
```

## Used For

* featured work
* essays
* ideas
* reports
* credibility sections

---

# 5. TrackCard

## Purpose

Represents one of the two homepage track choices.

## Used On

* homepage

## Props / Content Slots

* title
* description
* CTA label
* link
* optional icon

## Structure

```text
Title
Description
[ Explore ]
```

## Behaviour

* visually prominent
* hover elevation
* clickable card and button

---

# 6. ProjectCard

## Purpose

Preview card for a project.

## Used On

* homepage
* professional page
* related content sections

## Props / Content Slots

* title
* category
* summary
* image or animation preview (optional)
* link
* featured flag (optional)

## Structure

```text
[ Optional preview visual ]
Category badge
Title
Summary
[ Explore project ]
```

## Notes

Should feel like a mini product tile or case-study preview.

---

# 7. EssayCard

## Purpose

Preview card for long-form relationship writing.

## Used On

* homepage
* relationships page
* essay listings
* related content blocks

## Props / Content Slots

* title
* excerpt
* date
* reading time
* tags
* link

## Structure

```text
Title
Excerpt
Date • Reading time
Tags
[ Read essay ]
```

---

# 8. IdeaCard

## Purpose

Compact preview card for short ideas.

## Used On

* homepage
* relationships page
* idea listings

## Props / Content Slots

* title
* preview sentence
* date
* link

## Structure

```text
Title
Preview sentence
Date
```

## Notes

This should be smaller and more lightweight than `EssayCard`.

---

# 9. ReportCard

## Purpose

Preview and download card for reports.

## Used On

* homepage
* professional page
* reports listing page

## Props / Content Slots

* title
* summary
* audience
* file link
* thumbnail (optional)

## Structure

```text
Title
Summary
Audience
[ Download report ]
```

---

# 10. Badge

## Purpose

Small visual label used for metadata.

## Used For

* project category
* featured label
* content type
* tags

## Props / Content Slots

* label
* variant

## Variants

* default
* accent
* featured
* muted

## Structure

```text
[ Label ]
```

---

# 11. Button

## Purpose

Standardized CTA component.

## Variants

* primary
* secondary
* text-link

## Props / Content Slots

* label
* href
* variant
* icon (optional)

## Notes

Buttons should map to the design system styles.

---

# 12. Timeline

## Purpose

Structured career and education display.

## Used On

* professional page

## Props / Content Slots

* list of entries

Each entry should contain:

* title
* organization
* date range (optional)
* short description

## Structure

```text
• Title
  Organization
  Description
```

## Visual Style

* vertical line
* node markers
* clean spacing

---

# 13. ContentPreviewBlock

## Purpose

Flexible product-style content module.

## Used On

* Affinity section
* project pages
* feature callouts

## Props / Content Slots

* title
* description
* bullet list
* visual content
* CTA

## Structure

```text
Title
Description
- feature
- feature
- feature
[ CTA ]
[ Visual ]
```

## Notes

This component should support two-column layout on desktop and stacked layout on mobile.

---

# 14. Footer

## Purpose

Global footer.

## Structure

```text
Lewis Farrell
Short brand line
Links
```

Links:

* Professional
* Relationships
* Reports
* CV
* GitHub
* LinkedIn

## Notes

Should feel minimal and polished, not dense.

---

# 15. TagList

## Purpose

Renders a row or wrapped group of tags.

## Used On

* essays
* ideas
* project pages

## Props / Content Slots

* list of tags

## Structure

```text
[ tag ] [ tag ] [ tag ]
```

---

# 16. MetadataRow

## Purpose

Renders compact metadata.

## Used On

* essay pages
* project pages
* report pages

## Props / Content Slots

* date
* reading time
* category
* tags

## Example

```text
March 2026 • 6 min read • Dating
```

---

# 17. FeaturedGrid

## Purpose

Shared grid wrapper for featured content.

## Used On

* homepage featured projects
* homepage relationship thinking
* listings on track pages

## Props / Content Slots

* heading
* items
* card type
* max columns

## Behaviour

* responsive grid
* 3 columns on desktop where appropriate
* 1 column on mobile

---

# 18. ReadingLayout

## Purpose

Reusable article layout wrapper.

## Used On

* essay pages
* idea pages

## Structure

```text
Title
Metadata
Body
Related content
```

## Rules

* constrained width
* high readability
* large vertical spacing
* no distracting sidebars unless lightweight

---

# 19. CTASection

## Purpose

Reusable call-to-action band.

## Used On

* homepage
* professional page
* relationships page
* end of project pages

## Props / Content Slots

* heading
* supporting text
* primary button
* secondary button (optional)

## Structure

```text
Heading
Supporting text
[ Primary CTA ] [ Secondary CTA ]
```

---

# Component Relationships

Recommended reuse model:

```text
Navbar -> all pages
HeroSection -> homepage + track pages + project headers
SectionHeader -> all listing sections
TrackCard -> homepage split section
FeaturedGrid -> wraps ProjectCard / EssayCard / IdeaCard / ReportCard
ReadingLayout -> essays + ideas
Timeline -> professional page
ContentPreviewBlock -> Affinity + project callouts
Footer -> all pages
```

---

# Responsive Rules by Component

## Navbar

* collapses into mobile menu

## HeroSection

* CTA buttons stack or wrap on mobile

## TrackCard

* cards stack vertically on smaller screens

## FeaturedGrid

* reduce columns from 3 to 2 to 1

## Timeline

* keep readable in single-column layout

## ContentPreviewBlock

* move from side-by-side to stacked layout

---

# Accessibility Requirements

All components must:

* use semantic HTML
* support keyboard navigation
* maintain sufficient contrast
* have visible focus states
* provide descriptive link/button labels
* respect reduced-motion preferences where animation is used

---

# Implementation Guidance for Claude Code

Claude Code should:

* build components as reusable templates or includes
* avoid duplicating markup patterns across pages
* apply shared CSS classes and tokens from the design system
* keep card structures consistent across different content types
* ensure all listing pages are rendered from collection data

The final site should feel like one coherent product system, not a stitched-together set of pages.
