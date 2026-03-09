# Lewis Farrell — Content Model Specification

## Purpose

This document defines the **content schema** for the website. It ensures all content (projects, essays, ideas, reports) follows a consistent structure so the static site generator can render pages automatically.

All content should be written in **Markdown with frontmatter metadata**.

The schema should be followed exactly so that templates can reliably read fields.

---

# Global Frontmatter Fields

These fields may appear in multiple content types.

```yaml
id: unique-content-id
slug: url-slug
title: display-title
date: YYYY-MM-DD
summary: short-preview-text
featured: true | false
status: draft | published
```

Notes:

* `slug` determines the URL path
* `summary` is used in preview cards
* `featured` determines whether content appears on homepage sections

---

# Projects

Projects represent **technical work, products, frameworks, or experiments**.

Location:

```
/_projects/
```

Each project must contain structured sections describing the system.

## Frontmatter

```yaml
id:
slug:
title:
category: product | engineering | framework | research
status: active | archived | experimental
featured: true | false
summary:
date:
technologies:
  - item
  - item
links:
  github:
  demo:
  documentation:
hero_image:
```

## Markdown Structure

```markdown
## Overview

Short explanation of the project.

## Problem

What problem the system addresses.

## Solution

High level explanation of the solution.

## Architecture

Technical architecture description.

## Demo

Explain how the system works or provide embedded demo media.

## Links

Relevant links such as GitHub or documentation.
```

---

# Essays

Essays represent **long-form relationship writing**.

Location:

```
/_essays/
```

## Frontmatter

```yaml
id:
slug:
title:
date:
summary:
reading_time:
tags:
  - dating
  - psychology
featured: true | false
```

## Markdown Structure

```markdown
## Introduction

Opening argument or context.

## Main Argument

Primary essay content.

## Implications

Why the ideas matter.

## Conclusion

Closing thought or takeaway.
```

---

# Ideas

Ideas represent **short insights or arguments**. These are faster to read than essays.

Location:

```
/_ideas/
```

## Frontmatter

```yaml
id:
slug:
title:
date:
tags:
  - relationships
  - behaviour
featured: true | false
```

## Markdown Structure

```markdown
Short insight or idea.

This section should typically be 100–400 words.
```

---

# Reports

Reports represent **downloadable research documents**.

Location:

```
/_reports/
```

## Frontmatter

```yaml
id:
slug:
title:
date:
summary:
audience:
featured: true | false
file:
thumbnail:
```

## Markdown Structure

```markdown
## Overview

Short description of the report.

## Who This Is For

Target audience.

## Key Topics

Bullet list of report themes.

## Download

Direct link to PDF.
```

PDF files should be stored in:

```
/assets/pdfs/
```

---

# Navigation Metadata

Content items can optionally define navigation behaviour.

```yaml
nav_group:
order:
```

Example:

```yaml
nav_group: featured-projects
order: 1
```

This allows templates to sort or group content dynamically.

---

# Tag System

Tags allow cross-linking between essays and ideas.

Example tags:

* dating
* attraction
* relationships
* behaviour
* psychology

Templates should render tag badges on content cards.

---

# Featured Content Rules

Content marked with:

```
featured: true
```

may appear in:

* homepage highlights
* featured project sections
* relationship thinking highlights

Templates should limit homepage featured items to a maximum of 3–4.

---

# URL Structure

Suggested routes:

```
/projects/{slug}
/essays/{slug}
/ideas/{slug}
/reports/{slug}
```

Example:

```
/projects/affinity
/essays/why-dating-is-a-systems-problem
```

---

# Content Creation Workflow

To add new content:

1. Create a new Markdown file in the correct folder.
2. Add required frontmatter fields.
3. Write content sections.
4. Commit to repository.
5. Site rebuild automatically renders the page.

No template modification should be required.

---

# Future Extensions

The content model should support possible future additions such as:

* talks
* newsletters
* datasets
* tools

These should follow the same pattern: folder collection + frontmatter schema.

---

# Implementation Goal

Using this specification, Claude Code should be able to:

* parse Markdown frontmatter
* generate listing pages
* generate detail pages
* display metadata correctly
* sort content chronologically
* highlight featured items

The site should scale smoothly as new content is added without structural changes.
