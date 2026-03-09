---
layout: essay
title: "Markdown Rendering Stress Test"
date: 2026-03-08
reading_time: 3
tags: [test, formatting, design]
summary: "A stress test of every markdown element to validate rendering across the essay layout."
---

This is a normal paragraph of body text. It sits at the top of the content area with no special formatting. The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

---

## Headings

# H1 — The largest heading
## H2 — Section heading
### H3 — Subsection
#### H4 — Minor heading

---

## Text formatting

This paragraph contains **bold text**, *italic text*, ***bold and italic text***, and ~~strikethrough text~~. You can also write `inline code` within a sentence.

Here is a [hyperlink to Google](https://google.com) and here is some plain text after it.

---

## Blockquotes

> The incentive structure of modern dating is not broken — it is behaving exactly as you would expect given the constraints each side faces.

> Nested quote level one.
>> Nested quote level two — rarely used but worth testing.

---

## Lists

### Unordered

- First item
- Second item
  - Nested item
  - Another nested item
    - Deeply nested
- Third item
- Fourth item

### Ordered

1. First step
2. Second step
   1. Sub-step A
   2. Sub-step B
3. Third step
4. Fourth step

### Mixed

1. Top-level ordered
   - Unordered sub-item
   - Another unordered sub-item
2. Back to ordered

---

## Tables

| Variable | Type | Description |
|---|---|---|
| Attraction | Signal | The initial draw toward a potential partner |
| Selection | Filter | The process of narrowing from a pool of candidates |
| Commitment | Equilibrium | The point at which both parties exit the market |
| Exit cost | Asymmetric | Differs substantially between men and women |

### Wider table

| Concept | Economic analogy | Dating context | Implication |
|---|---|---|---|
| Search cost | Transaction cost | Time spent on apps | Higher for high-earners |
| Signal quality | Information asymmetry | Physical vs. stated preferences | Hard to verify |
| Market clearing | Supply = demand | Matched couples | Rarely efficient |
| Reservation price | Minimum threshold | Baseline attractiveness filter | Varies by context |

---

## Code blocks

### Inline

The function `calculateCompatibility(a, b)` returns a score between 0 and 1.

### Fenced block (no language)

```
name: Lewis Farrell
role: Systems consultant
interests:
  - Intimacy economics
  - Data architecture
  - Game theory
```

### Python

```python
def attraction_asymmetry(risk_tolerance: float, investment_capacity: float) -> dict:
    """
    Models baseline attraction strategy from evolutionary constraints.
    """
    female_selectivity = 1 / risk_tolerance
    male_volume_preference = investment_capacity * 0.6

    return {
        "female_strategy": f"selectivity index: {female_selectivity:.2f}",
        "male_strategy": f"volume preference: {male_volume_preference:.2f}",
        "equilibrium": female_selectivity == male_volume_preference
    }
```

### JavaScript

```javascript
const scoreDateQuality = (signals) => {
  const weights = { reliability: 0.4, compatibility: 0.35, chemistry: 0.25 };
  return Object.entries(signals)
    .reduce((score, [key, val]) => score + (weights[key] ?? 0) * val, 0);
};
```

---

## Horizontal rules

Above this line is a paragraph.

---

Below this line is another paragraph. The horizontal rule creates a visual break.

---

## Images

*(No image file included — testing alt text fallback)*

![A diagram showing attraction asymmetry between male and female reproductive strategies](/assets/images/nonexistent-test-image.png)

---

## Long paragraph stress test

Selection criteria in romantic markets operate very differently from explicit preference lists. Most people, if asked, will describe a partner in terms of personality traits — kindness, humour, ambition — yet reveal through their actual choices a much stronger weighting toward physical attractiveness, social status, and behavioural reliability. This gap between stated and revealed preference is not unique to dating; it mirrors what economists observe in consumer markets, where purchase behaviour consistently diverges from survey responses. The implication for anyone trying to understand dating dynamics is significant: you cannot take self-reported preferences at face value. The system you are navigating is shaped by incentives and constraints that operate largely below conscious awareness.

---

## Emphasis edge cases

**All bold sentence. Every word is bold. Does it hold up?**

*All italic. Every word in italic. How does it look at length?*

A sentence with a `very long inline code block that contains spaces and goes on for a while to see how it wraps`.

---

## Final paragraph

This is the last paragraph of the stress test. If everything above has rendered cleanly — headings at the right scale, tables aligned, code blocks with correct background, lists properly indented, blockquotes visually distinct — then the essay layout is working correctly.
