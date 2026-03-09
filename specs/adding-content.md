# Adding Content

All content is written as Markdown files dropped into the correct folder. Jekyll picks them up automatically — no code changes needed.

---

## Essays

**Folder:** `_essays/`
**URL:** `lewis-farrell.github.io/essays/{slug}/`

```markdown
---
id: your-essay-slug
slug: your-essay-slug
title: Your Essay Title
date: YYYY-MM-DD
summary: One sentence describing the essay — used in cards and previews.
reading_time: 6
tags:
  - dating
  - psychology
status: published
featured: false
---

## Introduction

Opening argument or context.

## Main Argument

Primary essay content.

## Implications

Why the ideas matter.

## Conclusion

Closing thought or takeaway.
```

**Notes:**
- `status: draft` hides it from listings; `status: published` shows it
- `featured: true` surfaces it on the homepage
- `reading_time` is in minutes — set manually

---

## Ideas

**Folder:** `_ideas/`
**URL:** `lewis-farrell.github.io/ideas/{slug}/`

```markdown
---
id: your-idea-slug
slug: your-idea-slug
title: Your Idea Title
date: YYYY-MM-DD
tags:
  - relationships
  - behaviour
status: published
featured: false
---

Short insight or argument. 100–400 words. No headers needed.
```

---

## Projects

**Folder:** `_projects/`
**URL:** `lewis-farrell.github.io/projects/{slug}/`

```markdown
---
id: your-project-slug
slug: your-project-slug
title: Project Name
category: product | engineering | framework | research
status: active | archived | experimental
featured: false
summary: One sentence used in project cards.
date: YYYY-MM-DD
technologies:
  - Python
  - React
links:
  github:
  demo:
  documentation:
hero_image:
---

## Overview

Short explanation of the project.

## Problem

What problem the system addresses.

## Solution

High level explanation of the solution.

## Architecture

Technical architecture description.

## Demo

How the system works, or link to a demo.
```

---

## Reports

**Folder:** `_reports/`
**URL:** `lewis-farrell.github.io/reports/{slug}/`

PDF files go in: `assets/pdfs/`

```markdown
---
id: your-report-slug
slug: your-report-slug
title: Report Title
date: YYYY-MM-DD
summary: One sentence describing the report — used in cards.
audience: Financial Services | General | Technical
featured: false
file: /assets/pdfs/your-report.pdf
thumbnail:
---

## Overview

Short description of the report.

## Who This Is For

Target audience.

## Key Topics

- Topic one
- Topic two
- Topic three

## Download

[Download PDF](/assets/pdfs/your-report.pdf)
```

---

## Workflow

1. Create a `.md` file in the correct folder using the template above
2. Fill in the frontmatter fields
3. Write the content
4. `git add`, `git commit`, `git push`
5. GitHub Pages rebuilds automatically — live in ~1 minute

---

## File Naming

Use the same value for the filename and the `slug` field.

```
_essays/why-dating-is-a-systems-problem.md   →  slug: why-dating-is-a-systems-problem
_ideas/the-90-day-test.md                    →  slug: the-90-day-test
_projects/affinity.md                        →  slug: affinity
_reports/cloud-migration-playbook.md         →  slug: cloud-migration-playbook
```
