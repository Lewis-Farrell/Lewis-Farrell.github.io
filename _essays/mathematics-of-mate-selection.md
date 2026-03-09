---
layout: essay
title: "The Mathematics of Mate Selection"
date: 2026-03-08
reading_time: 6
math: true
tags: [economics, game theory, systems]
summary: "A formal treatment of mate selection using search theory, signalling models, and equilibrium analysis."
---

Romantic markets can be modelled with surprising precision. This essay applies formal tools from economics — search theory, signalling, and game theory — to the structure of mate selection. The goal is not to reduce relationships to arithmetic, but to make the underlying logic visible.

---

## 1. The Search Problem

Finding a partner is a **sequential search problem**. At each period $t$, an agent samples one candidate from a distribution of quality $q \sim F(q)$ and decides whether to accept or continue searching.

The agent's continuation value $V$ satisfies the Bellman equation:

$$
V = \int_{\bar{q}}^{\infty} q \, dF(q) + F(\bar{q}) \cdot \delta V
$$

where $\bar{q}$ is the **reservation quality** — the minimum acceptable partner — and $\delta \in (0,1)$ is a discount factor reflecting the cost of continued search (time, energy, opportunity cost).

The optimal stopping rule sets $\bar{q}$ such that:

$$
\bar{q} = \frac{\delta}{1 - \delta} \int_{\bar{q}}^{\infty} (q - \bar{q}) \, dF(q)
$$

This means the agent should **accept any offer above their reservation quality**, regardless of how the search has gone so far. Past rejections are irrelevant — a clean example of the sunk cost principle in action.

---

## 2. Asymmetric Search Costs

Let $c_f$ and $c_m$ denote per-period search costs for women and men respectively. The reservation quality for each type is:

$$
\bar{q}_i = \mathbb{E}[q \mid q \geq \bar{q}_i] - \frac{c_i}{\lambda_i (1 - \delta)}
$$

where $\lambda_i$ is the arrival rate of potential partners. If $c_f > c_m$ — as evolutionary models predict — then $\bar{q}_f > \bar{q}_m$, meaning **women set a higher acceptance threshold**.

The ratio of thresholds satisfies:

$$
\frac{\bar{q}_f}{\bar{q}_m} = \frac{\lambda_m \cdot c_f}{\lambda_f \cdot c_m}
$$

Selectivity scales with the ratio of search costs to arrival rates. This is the formal basis of the attraction asymmetry.

---

## 3. Signalling and the Credibility Constraint

Potential partners differ in **type** $\theta \in \{\theta_H, \theta_L\}$ where $\theta_H > \theta_L$. Types are private information. High types wish to signal quality; low types wish to mimic them.

A signal $s$ (effort, investment, display) is credible only if it satisfies the **incentive compatibility constraint**:

$$
U(\theta_H, s^*) \geq U(\theta_H, s') \quad \text{for all } s' \neq s^*
$$

$$
U(\theta_L, s^*) < U(\theta_L, 0)
$$

The signal cost must be structured so that mimicry is unprofitable. Denoting the cost of signalling as $c(s, \theta)$ with $\frac{\partial^2 c}{\partial s \, \partial \theta} < 0$ (the **Spence-Mirrlees condition**), a separating equilibrium exists where:

$$
s^* = \frac{U(\theta_H) - U(\theta_L)}{c_L - c_H}
$$

In plain terms: **reliable signals must be costly enough that low types cannot fake them**.

---

## 4. The Matching Function

Let $u_f(q)$ and $u_m(q)$ be the measures of unmatched women and men of quality $q$. The matching rate for a woman of quality $q_f$ meeting a man of quality $q_m$ is:

$$
M(q_f, q_m) = \mu \cdot u_f(q_f) \cdot u_m(q_m)
$$

where $\mu$ is the meeting technology parameter. In a **positive assortative equilibrium**, the matching function is monotone: higher quality agents match with higher quality partners. The equilibrium condition is:

$$
\frac{d\,q_m^*}{d\,q_f} > 0 \quad \Longleftrightarrow \quad \frac{\partial^2 \pi}{\partial q_f \, \partial q_m} > 0
$$

where $\pi(q_f, q_m)$ is the joint surplus from a match. Complementarity in types drives assortative matching — similar people pair up not by preference alone, but because the surplus from a well-matched pair exceeds that of a mismatched one.

---

## 5. Commitment as Equilibrium

Consider a two-stage game. In stage 1, both parties invest in relationship-specific capital $k_i \geq 0$ at cost $\frac{k_i^2}{2}$. In stage 2, they negotiate over joint surplus $S(k_f, k_m)$ via Nash bargaining.

Nash bargaining gives each party their **outside option** $d_i$ plus half the surplus:

$$
U_i^* = d_i + \frac{1}{2}\left[S(k_f, k_m) - d_f - d_m\right]
$$

The problem is **hold-up**: each party underinvests in anticipation of surplus extraction by the other. The privately optimal investment $k_i^*$ satisfies:

$$
k_i^* = \frac{1}{2} \frac{\partial S}{\partial k_i}
$$

whereas the socially optimal level requires:

$$
k_i^{**} = \frac{\partial S}{\partial k_i}
$$

This means $k_i^* = \frac{1}{2} k_i^{**}$ — each party invests at exactly half the socially efficient level. **Commitment mechanisms** (marriage, cohabitation, shared assets) exist precisely to close this gap by increasing the cost of exit and reducing the value of the outside option $d_i$.

---

## 6. Summary

The key results, compactly:

| Result | Expression | Interpretation |
|--------|-----------|----------------|
| Optimal stopping | $\bar{q} = \mathbb{E}[q \mid q \geq \bar{q}] - \frac{c}{\lambda(1-\delta)}$ | Accept above reservation quality; ignore history |
| Selectivity gap | $\bar{q}_f / \bar{q}_m = \lambda_m c_f / \lambda_f c_m$ | Higher costs → higher threshold |
| Signal credibility | Spence-Mirrlees: $\partial^2 c / \partial s \, \partial \theta < 0$ | Reliable signals must hurt low types more |
| Assortative matching | $\partial^2 \pi / \partial q_f \, \partial q_m > 0$ | Complementarity drives like-with-like pairing |
| Hold-up underinvestment | $k_i^* = \frac{1}{2} k_i^{**}$ | Commitment mechanisms exist to solve this |

Each of these results has a plain-English implication for how people behave in romantic markets — not because people consciously solve differential equations, but because evolutionary and social pressures have pushed behaviour toward these equilibria over time.

---

## Further reading

- Mortensen (1988) — job search theory applied to marriage markets
- Spence (1973) — the original signalling model
- Becker (1973) — the economics of marriage and assortative matching
- Shimer & Smith (2000) — matching with heterogeneous agents
