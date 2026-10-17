---
title: "The 37% Rule Solves the Wrong Problem in Love"
date: 2026-10-17
status: published
category: Intimacy Economics
reading_time: 29
math: true
summary: "Popularised by Hannah Fry in her book \"The Mathematics of Love\", the 37% rule is an application of the \"secretary problem\". It's a great display of taking a more structured view of relationships, yet applied literally it's inconducive to practical advice. The answer assumes you are choosing from a silent queue, whereas real partner choice is bilateral, gradual, and shaped by what happens after commitment, not just by the moment you decide to stop looking."
lead: "Popularised by Hannah Fry in her book \"The Mathematics of Love\", the 37% rule is an application of the \"secretary problem\". It's a great display of taking a more structured view of relationships, yet applied literally it's inconducive to practical advice. The answer assumes you are choosing from a silent queue, whereas real partner choice is bilateral, gradual, and shaped by what happens after commitment, not just by the moment you decide to stop looking."
excerpt: "Popularised by Hannah Fry in her book \"The Mathematics of Love\", the 37% rule is an application of the \"secretary problem\". It's a great display of taking a more structured view of relationships, yet applied literally it's inconducive to practical advice. The answer assumes you are choosing from a silent queue, whereas real partner choice is bilateral, gradual, and shaped by what happens after commitment, not just by the moment you decide to stop looking."
image: /assets/images/essays/partner-utility-economics.svg
---

The date is going well enough that your usual defenses have started to slip.
You are already doing the dangerous arithmetic: how rare is this, how long has
it been since someone felt this easy to talk to, how stupid would it be to keep
swiping if the thing you say you want might be sitting across from you right
now? The "mathematics of love" genre has trained a lot of people to ask one
clean question in this moment. Is now the right time to settle?

This article is about why that question is both intelligent and too small. The
famous 37% rule from the mathematics of love captures something real about the
value of sampling before you commit. But it leaves out the parts that actually
make partner choice hard: the other person is also choosing, compatibility is
learned slowly, commitment happens in stages, and the payoff depends less on
who looks best tonight than on how the two of you will bargain, cooperate, and
behave over time.

That is why the secretary problem is a hook, not a guide. It imagines you
selecting from a silent queue of candidates you can rank at a glance. Real
dating is a bilateral market and then a long game. You are screening, being
screened, learning, being learned, and making decisions under uncertainty with
someone doing the same thing across the table. Once you see that, the practical
question changes from "when should I stop?" to "what exactly am I maximizing,
and what kind of long-run co-player is this person likely to be?"

---

## 1. The Clean Answer Everyone Loves

The secretary problem is one of the most elegant results in applied
mathematics, and its popularity is earned. The setup is simple: you have a
known number of candidates. They arrive one at a time, in random order. You
can observe each candidate perfectly — you know exactly where they rank against
everyone you have seen so far. You must accept or reject each one on the spot.
Rejected candidates cannot be recalled. Your goal is to select the single best
candidate in the entire pool.

The optimal strategy has a satisfying crispness. Let roughly the first 37% of
your candidates pass — observe them, learn from them, but commit to none of
them. Then, from candidate number <span markdown="0">\(\lceil n/e \rceil\)</span> onward, commit to the first person
who is better than everyone you saw in the sampling phase. This strategy
maximizes the probability of selecting the overall best candidate, and it does
so with a surprisingly high success rate: about 37% even in large pools.

You can see why the internet loves it. A messy emotional question — when do I
stop looking? — gets a clean numerical answer. Sample first. Set a benchmark.
Commit decisively when someone clears it. It sounds like exactly the kind of
disciplined framework that a person drowning in dating-app options would want.

The trouble is not the math. The math is internally consistent and proven. The
trouble is every assumption the math requires.

The secretary problem assumes you are the only decision-maker. The candidates
sit in a queue waiting for your verdict. They have no preferences, no
alternatives, no power to reject you. It assumes you observe each candidate's
quality perfectly in a single encounter — no ambiguity, no learning over time,
no possibility that someone who seemed mediocre on a Tuesday would be
extraordinary on a Saturday. It assumes rejection is irreversible: once you
pass, the door is sealed. It assumes the pool is fixed and finite, that
candidates arrive in random order rather than being filtered by geography,
social networks, algorithms, and mutual attraction. And it assumes the payoff
is binary: you either get the single best person or you have failed entirely.

Each of these assumptions is a load-bearing wall. Pull any one of them out, and
the 37% rule does not just need a different number — it needs a different kind
of model.

But there is one assumption that matters more than the rest. It is the one that
changes the problem from optimization to strategy, from decision theory to game
theory, from a puzzle you solve alone to a game you play with another person
who has their own objectives.

The people you are dating are not cards in a deck. They are also choosing.

---

## 2. The Missing Player

The moment you accept that the person across from you is also evaluating,
ranking, and deciding, the secretary problem stops being the right framework.
You are no longer solving a stopping problem. You are participating in a
bilateral market — one where outcomes depend on mutual preference, not just
yours.

This is the shift that matching theory makes precise. In 1962, David Gale and
Lloyd Shapley proved that in any two-sided market — one where members of two
groups must be paired based on mutual preferences — a stable matching always
exists. A matching is stable when no two unmatched people would both prefer
each other to their current partners — great news for those who are looking for
their person. Their deferred acceptance algorithm showed how to find one: one
side proposes, the other side tentatively accepts or rejects, and the process
iterates until everyone is matched.

The result won Shapley and Alvin Roth the Nobel Prize in Economics in 2012, and
its implications for the dating problem are structural, not cosmetic.

The first implication is **proposer advantage** — but it needs to be stated
carefully. In the deferred acceptance mechanism, the side that proposes gets its
best possible stable-matching outcome; the side that waits gets its worst. This
is a theorem about a specific centralized mechanism with fixed sides, complete
preference rankings, and a formal notion of stability doing the work.

> **Mathematical aside — Proposer advantage in Gale-Shapley**
>
> Let <span markdown="0">\(M = \lbrace m_1, \dots, m_n\rbrace \)</span> and <span markdown="0">\(W = \lbrace w_1, \dots, w_n\rbrace \)</span> be two sides of a matching
> market, each with strict preference orderings over the other side. The
> M-proposing deferred acceptance algorithm produces the M-optimal stable
> matching <span markdown="0">\(\mu_M\)</span>; the W-proposing version produces the W-optimal stable matching
> <span markdown="0">\(\mu_W\)</span>. For every stable matching <span markdown="0">\(\mu\)</span>: <span markdown="0">\(\mu_M\)</span> is weakly preferred by every member of
> <span markdown="0">\(M\)</span> to <span markdown="0">\(\mu\)</span>, and <span markdown="0">\(\mu_W\)</span> is weakly preferred by every member of <span markdown="0">\(W\)</span> to <span markdown="0">\(\mu\)</span>.
>
> Translation: who proposes determines who benefits within the set of stable
> outcomes. The proposing side gets the best deal the market can stably support.
> The receiving side gets the worst.

Ordinary dating is not deferred acceptance. It is decentralized, sequential,
and role-fluid — no one is permanently assigned to the "proposing side." The
theorem does not by itself prove that the person who suggests the second date
captures systematically better outcomes. What it does establish is a structural
insight: in bilateral markets, pure passivity is not a neutral stance. Waiting
for the market to deliver your partner, rather than actively shaping which
matches form, cedes initiative in a game where initiative can matter. The
practical lesson is bounded but real: doing nothing is not costless when the
other side is also choosing — to secure the right partner, it pays to propose
sometimes.

The second implication is subtler but just as important. In theory, if you are
the one making moves — proposing, asking for the second date, naming what you
want — then being honest about your preferences is your best play. You cannot
game the system by pretending to want something different from what you actually
want. This is a mathematical result: in deferred acceptance, the proposing side
has no incentive to misrepresent. But Hassidim, Marciano, Romm, and Shorrer
showed something awkward: even in real-world mechanisms where honesty is
provably optimal, substantial numbers of participants still play games —
misrepresenting their preferences, strategizing when they do not need to, and
often making themselves worse off in the process. Expected competition and
cognitive complexity explain part of the gap. The math says "just be honest,"
and people cannot bring themselves to do it.

This matters because it punctures a tempting simplification. The bilateral
reorientation is not a tidy swap from "one-sided stopping, messy behavior" to
"two-sided matching, clean behavior." It is a swap from the wrong structure to
the right one — but the right structure still has to contend with the fact that
real people are noisy, strategic, and sometimes confused about their own
preferences.

What the bilateral frame does change, decisively, is the question. The
secretary problem asks: given that you are the sole chooser, when should you
stop? Matching theory asks: given that both of you are choosing, what
determines who ends up with whom? The answer is not a threshold. It is the
structure of the market, the distribution of preferences, and who is willing to
move first.

---

## 3. The Payoff Is Not the Date. It Is the Partnership.

The secretary problem defines the payoff at the moment of selection: you win if
you pick the best candidate. But in partner choice, the moment of commitment is
not the endpoint. It is the starting line.

The economic framework that follows does not capture the full reality of
intimacy — loyalty, spontaneous kindness, showing up when no payoff matrix
requires it. But the structural dimension it does illuminate is neglected and
worth understanding.

Robert Pollak made the structural point precise in an argument that sounds
obvious once you hear it but restructures the entire selection problem: if
bargaining inside a long-term partnership determines how resources,
decisions, and daily life are allocated after matching, then prospective
partners do not just rank each other by attractiveness or compatibility at the
moment of the date. They rank each other partly by the utilities they expect
after matching — by what the partnership will actually be like once the
courtship performance ends and the real negotiation begins.

This means partner selection is not a single decision. It is the first stage of
a multi-stage game. What you should optimize at the selection stage depends on
what the post-commitment game looks like. And the post-commitment game is
shaped by bargaining power, outside options, cooperative norms, and behavioral
consistency — none of which appear in the secretary problem.

The practical implications are concrete. A partner's outside options after
commitment affect their bargaining position within the relationship. Someone
with strong alternatives — other potential partners, financial independence, a
rich social life — commands more favorable terms in the implicit negotiation
over how the partnership runs.

This is not an argument for seeking a weaker or more dependent partner. Strong
outside options can increase your bargaining leverage while simultaneously
improving the total quality of the partnership — a more independent, more
capable partner often generates greater cooperative surplus, mutual admiration,
and resilience under stress. It is a pragmatic tradeoff between "having the
best option" and acknowledging that others will be pursuing that "best option"
too.

A partner's cooperative disposition under pressure matters more than their
presentation during courtship. The early months are the cooperative peak —
everyone is on their best behavior when the stakes of continued evaluation are
high. One of the most decision-relevant questions is how this person handles
conflict, scarcity, stress, and competing priorities when the performance
incentives of early dating have faded. It is not the only determinant of
long-run utility — preference alignment, outside options, shocks, and plain
compatibility all matter — but it is among the most neglected.

And the right question is not "is this the best person I can attract?" It is
"with this person, what will the long-run cooperative surplus look like, and
how will it be divided?"

The instinct is to maximize match-moment quality: how attractive, how funny,
how impressive, how electric the chemistry. Pollak's point is that
match-moment quality is an input, but it is not the output. The output is the
stream of utility that flows from years of shared life, and that stream depends
on variables — bargaining dynamics, cooperation under stress, alignment on
resource allocation — that are barely visible on a third date.

So what, concretely, should you be maximizing? This is where multi-attribute
utility theory offers a normative tool. The core idea, formalized by Keeney
and Raiffa, is that important decisions with multiple conflicting objectives
require explicit tradeoff-making across dimensions. In partner choice, those
dimensions interact and conflict: someone can be sexually compelling,
professionally ambitious, and constitutionally unable to share financial risk.
Someone can be a generous co-parent and a dismissive communicator under stress.
The framework forces you to decide in advance which of those you would actually
sacrifice the others for.

It is the question the secretary problem skips entirely: what are
you actually optimizing for? Most people carry an implicit utility function —
a rough internal weighting of what matters — but have never examined it. The
result is that chemistry, physical attraction, and social-status signals get
over-weighted by default, because they are vivid and immediately observable,
while the attributes that drive long-run partnership quality — reliability
under stress, cooperative flexibility, aligned life goals — are slow to
reveal and easy to ignore when someone is dazzling at dinner.

A caution, though. Stated preferences and actual choices diverge. Whyte and
Torgler studied online dating behavior and found that what people say they want
in a partner and what they actually pursue are measurably different. The
implication is not that defining your criteria is pointless — it is that
executing on declared preferences is harder than declaring them. The utility
function is a useful decision rubric against your own behavioral drift, but
it is not self-enforcing. You have to actually use it when the moment of
decision arrives and chemistry is trying to override everything else.

---

## 4. Dating Is Mutual Learning, Not Instant Ranking

The secretary problem grants you a superpower that does not exist: the ability
to observe each candidate's quality perfectly in a single encounter. You see
them once, you know exactly where they rank, and you decide. In real dating,
this is fantasy. Compatibility is not a number printed on someone's forehead.
It is match-specific, multidimensional, and revealed slowly through shared
experience.

A forthcoming paper by Antler, Bird, and Fershtman (American Economic Journal:
Microeconomics) models this directly. Their framework treats dating as what it
actually is: mutual time spent learning match-specific compatibility while
giving up other search opportunities. Each date is not a snapshot evaluation.
It is an information purchase. You spend time together, and in return you get a
slightly sharper estimate of how well the two of you fit — not in the abstract,
but in the specific combination of your particular preferences, habits,
communication patterns, and life trajectories.

The tradeoff is real and bilateral. Every additional date with your current
partner buys more information about this specific match, but it costs you
search time — the opportunity to meet and learn about someone else. The optimal
dating duration, in their model, depends on two things: the distribution of
types in the market — how many people in your dating pool share your values,
match your communication style, want the same kind of life — and the precision
of the signals you receive within each date. Signals here are not abstract
statistical objects. They are the concrete things you observe: how someone
handles a disagreement over where to eat, whether their humor lands the same
way on a third date as it did on the first, how they talk about their ex, how
they behave when you are tired and boring and not performing your best self. In
a market where compatible types are rare, each signal carries more weight — you
cannot afford to walk away from a plausibly good match on thin evidence. In a
market flooded with options, signals need to be stronger before they justify
continued investment.

And crucially, both of you face this tradeoff simultaneously. You are learning
about them. They are learning about you. Either party can conclude, at any
point, that their expected value from continued dating has dropped below the
expected value of resuming search — and leave. This makes dating a
coordination problem on top of an information problem. It is not enough for
you to decide that you want to keep learning. The other person has to reach
the same conclusion about you.

> **Mathematical aside — The learning-versus-search tradeoff**
>
> Let <span markdown="0">\(V(t)\)</span> represent the expected value of match-specific compatibility after
> <span markdown="0">\(t\)</span> periods of dating, and let <span markdown="0">\(S\)</span> represent the expected value of resuming
> search (the outside option). The individually optimal continuation rule
> within a given relationship is: keep dating as long as the marginal value of
> one more period of learning exceeds the cost of that period plus the
> opportunity cost of foregone search.
>
> In the bilateral version, both parties must find continuation worthwhile. If
> either party's outside option <span markdown="0">\(S\)</span> exceeds their updated <span markdown="0">\(V(t)\)</span>, the relationship
> ends — regardless of what the other party wants. More attractive individuals
> have higher <span markdown="0">\(S\)</span>, which is why they are more selective in equilibrium: they can
> afford to demand more evidence of match quality before committing, because
> their alternatives are better.

First, early impressions are noisy. The signal-to-noise ratio on a first date
is low, because you are observing a performance, not a partnership. Attraction
and conversational chemistry are real signals, but they are also the signals
most easily generated by people who are good at first dates and may or may not
be good at forty-seventh Tuesdays. The learning model says: weight early
signals, but do not mistake them for the full picture. The full picture
emerges over time, through repeated interaction in varied contexts.

Second, the learning process itself is informative. How someone responds to
gradually increasing vulnerability, how they handle minor disagreements during
the dating phase, how they behave when the early electricity stabilizes into
something quieter — these are not distractions from the evaluation. They are
the evaluation. The secretary problem treats the observation as costless and
instantaneous. The reality is that the observation period is where most of
the useful information lives.

Third, your own type is being discovered too. You are not a fixed entity
presenting yourself to a passive evaluator. The other person is updating their
estimate of you with every interaction. The way you handle uncertainty, the
questions you ask, the consistency between what you say you value and what you
actually do — all of this is information they are purchasing at the same cost
you are purchasing information about them. Dating is a two-way audit conducted
under the polite fiction that no one is auditing.

---

## 5. Commitment Happens in Stages

The secretary problem compresses commitment into a single binary: accept or
reject, now or never. Real commitment is nothing like this. It unfolds through
a sequence of stages — casual dating, exclusivity, cohabitation, engagement,
marriage — each of which involves a distinct level of investment, a distinct
set of options foreclosed, and a distinct amount of new information revealed.

A useful lens for thinking about this comes from real options theory, borrowed
from finance. In corporate investment, a real option is the right — but not the
obligation — to make a future investment decision once you have more
information. The option has value precisely because it lets you wait, learn,
and then commit (or walk away) when you know more.

Each relationship stage works the same way. Moving from casual dating to
exclusivity is like exercising a first-stage option: you give up the ability
to keep searching the broader market, but you purchase deeper access to
information about this specific person. Moving from exclusivity to
cohabitation exercises another option: you learn how someone functions as a
domestic partner — how they share space, manage money, handle the tedium of
daily logistics — but you take on shared financial commitments and
entanglements that raise the cost of exit. Moving from cohabitation to
marriage exercises a further option, one with legal, financial, and social
dimensions that make reversal substantially more expensive.

The key insight is that both of you hold these options simultaneously. And
that creates a coordination problem the secretary model never contemplates.

If one person is ready to escalate and the other is not, you have an
asymmetric option exercise — one party has committed resources and foreclosed
alternatives while the other has not. This asymmetry can lock in before either
person names it. Stanley, Rhoades, and Markman found that in first marriages,
cohabiting before engagement — escalating the living situation without an
explicit mutual decision about long-term commitment — was associated with
worse later relationship outcomes than cohabiting after engagement or after
marriage. The sequencing mattered. The evidence is associational, not causal —
the studies cannot rule out selection effects or unmeasured background
differences — and the real-options framing is one interpretation that helps
organize the pattern, not a confirmed mechanism. But the pattern itself is
robust enough to take seriously.

The interpretation is not that cohabitation is harmful. It is that drifting
into a commitment stage without bilateral agreement can create the kind of
asymmetry that the option-value logic would predict. One person has effectively
exercised the option by merging households, finances, and routines. The other
may be going along with it because the relationship has momentum, not because
they have made an active decision to escalate. The result is constraint
accumulation — the exit costs pile up — without corresponding dedication.

And this brings us to a distinction that matters more than almost anything
else in the practical economics of partner selection: the difference between
dedication and constraint.

Rhoades, Stanley, and Markman drew this line clearly. **Dedication** is
choosing the relationship — actively preferring this partnership and investing
in its future because you want to. **Constraint** is being stuck in the
relationship — staying because the costs of leaving have become prohibitively
high, not because the partnership is what you would choose from scratch.

Both predict stability. A relationship held together by heavy constraints —
shared mortgage, children, intertwined social networks, mutual financial
dependence — can persist for decades. But constraint without dedication
predicts persistence without satisfaction. The relationship endures, but
neither person would recommend it.

Screening for this distinction is one of the most practically valuable things
the economic framework offers. The question is not just "is this person
committed?" It is "what kind of commitment is this?" Are they choosing you, or
are they becoming entangled with you? Is their investment driven by
preference or by the accumulating cost of exit? These are different mechanisms
with different long-run implications, and the secretary problem — which
compresses the entire post-commitment future into a single payoff — cannot
see the difference.

The real-options lens should be held honestly. No one has directly estimated
"option value of waiting" in dating data the way financial economists estimate
option prices on assets. The logic is strong, the sequencing evidence is real,
but this is an interpretive framework, not a calibrated empirical model. It
clarifies how to think about staged commitment. It does not give you a formula
for when to exercise.

---

## 6. Why More Search Does Not Necessarily Help

If the secretary problem's answer is "sample more before committing," then
dating apps should be the greatest partner-selection technology ever invented.
They radically reduce search costs. They expand the candidate pool from your
immediate social circle to tens of thousands of profiles within swiping
distance. They let you evaluate, filter, and sort with an efficiency that
would have been unimaginable a generation ago.

The empirical evidence says: not so fast.

Buyukeren, Makarin, and Xiong (2026) studied the rollout of Tinder across
college campuses and found that the app increased sexual activity but had
little measurable effect on long-run relationship formation or relationship
quality. More search happened. More contact happened. Better long-term
matching did not obviously follow.

Recent work by Ershov, Fong, and Yildirim (NBER working paper, 2026) suggests
that the effects of online dating on marriage markets may differ between the
desktop era and the mobile era. Online dating changed assortative matching —
who pairs with whom along dimensions like education, income, and geography. It
altered the marriage rate, divorce patterns, and the composition of couples.
But the overall welfare implications were ambiguous. More search did not
translate cleanly into better matches. Because this is a working paper rather
than a peer-reviewed publication, these findings should be treated as
suggestive rather than settled.

These are the observed findings. The bilateral framework offers a plausible
mechanism for why more search does not automatically improve outcomes — but the
mechanism is a theoretical extrapolation, not something the empirical papers
have directly isolated.

In the secretary model, more sampling is unambiguously good — you get a better
benchmark, and your probability of selecting the best candidate increases. But
in a bilateral market, more sampling can create its own distortions.

First, lower search costs increase the volume of low-investment contact. When
it costs almost nothing to initiate, people initiate more — but the average
investment in each interaction may drop. The risk is more first dates and fewer
deep evaluations, which is precisely the wrong direction if the real
information lives in the fourth month, not the fourth minute.

Second, larger pools make the learning-versus-search tradeoff harder. When
your outside option S is constantly refreshed by a stream of new profiles, the
threshold for continuing to invest in a current relationship rises. Every
notification is a reminder that alternatives exist. This does not necessarily
make you a better searcher. It can make you a more distractible one.

Third, when both sides of the market have access to apparently unlimited
alternatives, neither side may have strong incentives to invest deeply in any
single early-stage interaction. The equilibrium can shift toward lower mutual
investment — more sampling, less learning — even when both parties would be
better off with the opposite pattern. This is the theoretical prediction. How
closely it describes any particular dating market is an empirical question that
remains open.

A necessary counterpoint: not everyone faces a surplus of options. For people
in thin markets — small towns, niche subcultures, demographics underserved by
offline social networks, or geographically constrained environments — lower
search costs and larger pools can genuinely improve matching by expanding the
set of plausible partners beyond what local geography provides. The bilateral
distortions described above are most likely to bite in thick, urban,
app-saturated markets where the problem is already too many low-quality
interactions, not too few interactions of any kind.

These effects are amplified by a well-documented human tendency. **Present
bias** is the tendency to over-weight immediate rewards relative to future
ones. In the language of behavioral economics, people discount the future
hyperbolically rather than exponentially — they are more impatient about
near-term tradeoffs than far-term ones, even when their long-run preferences
say otherwise. O'Donoghue and Rabin documented the phenomenon broadly. Imai,
Rutter, and Camerer's meta-analysis confirmed that "people are on average
present-biased, but estimates exhibit substantial heterogeneity."

Applied to partner search, present bias predicts two failure modes. Some
people over-search: they keep swiping because the immediate novelty of a new
match feels more rewarding than the slow, uncertain work of deepening an
existing connection. Others settle too early: they commit to an available
partner because the immediate relief of ending the search outweighs a
rationally weighted assessment of long-run fit.

Both errors are distortions on the bilateral game. The over-searcher appears,
from the other side's perspective, as someone who will not invest. The
premature settler enters a partnership that may lack the match-specific
compatibility that longer learning would have revealed. Neither is acting on
the preferences they would endorse if they could bind their future selves to
a more patient evaluation.

A confidence note: present bias is a well-supported phenomenon in
intertemporal choice broadly. Its specific magnitude in romantic search is
not directly estimated — the application to dating is an inference from
broader evidence, not a calibrated romance-market parameter. It is a
defensible lens, not a precise measurement.

There is a related distortion that deserves mention, though it must carry a
heavier caveat. **Loss aversion** — the idea that losses loom larger than
equivalent gains — has been used to explain why people stay in suboptimal
relationships. The reasoning is intuitive: leaving a long-term partner feels
like losing everything you have built together, even if what you have built
is making you miserable. The sunk costs feel real even when the economics say
they should not factor into forward-looking decisions.

But the empirical status of loss aversion is genuinely contested. Brown,
Imai, Vieider, and Camerer's 2024 meta-analysis reported a strong average
loss-aversion coefficient across many studies. Yechiam and Zeif's 2025
re-analysis argued the result weakens sharply when you restrict attention to
symmetric, unordered experimental designs. Their conclusion was that loss
aversion is not a robust phenomenon.

The honest position is that loss aversion may contribute to relationship
inertia — the tendency to stay in partnerships past the point where they
generate positive utility — but the evidence is live and disputed rather than
settled. It is a tentative lens, not a proven mechanism. If you find yourself
staying in a relationship primarily because leaving feels like a loss rather
than because staying feels like a gain, the phenomenon is worth naming. But
the science is not yet clean enough to build a confident prescription on it.

---

## 7. This Is Not Procurement. It Is a Better Question.

The obvious resistance to everything above is that it makes romance sound
like procurement — as if choosing a partner were no different from choosing a
vendor, and the best lovers are the ones with the sharpest spreadsheets.

The resistance is partly right. No economic model captures the full experience
of falling in love, being loved, or building a life with another person.
Chemistry is real. Moral commitment — loyalty that exists because you believe
in it, not because a payoff matrix demands it — is real. Luck, timing, and the
irreducible weirdness of human attraction all play roles no formal framework
can anticipate.

But the claim here is not "love is a market." The claim is that incentives,
information, and strategic interaction explain patterns in partner selection
that romantic commentary alone leaves mysterious.

People who seem to have everything going for them keep choosing badly. The
model explains why: they are optimizing for match-moment quality instead of
long-run cooperative surplus. They are confusing constraint with dedication.
They are searching in a way that generates volume without depth.

Relationships that look solid on paper fall apart when post-match bargaining
dynamics were unfavorable from the start — or when commitment was built on
accumulating exit costs rather than genuine preference. More options sometimes
make the decision harder because lower search costs increase volume but reduce
per-interaction investment, and present bias makes the stream of new
alternatives feel more rewarding than it actually is. These are not mysteries.
They are structural predictions.

The evidence is partly observational — the sequencing studies are associations,
the present-bias application is an inference, the bargaining framework is a
structural prediction. The article has carried those limits explicitly. But the
alternative — ignoring the strategic structure of partner selection and relying
on romantic intuition alone — has its own failure rate, and it is not small.

The economic framework does not promise optimal outcomes. It promises a better
question.

---

## 8. What an Economist Would Actually Do Differently

If you have read this far and want the argument to cash out into something
usable, here is what the bilateral model actually prescribes. Each piece of
advice follows from a specific mechanism in the framework, not from general
wisdom about being thoughtful.

One uncomfortable truth first: **people do not just fail at dating because of
bad luck. They fail because they optimize the wrong metric.** They chase
match-moment quality — the spark, the status, the story they can tell friends —
and then wonder why the partnership collapses once the performance ends and the
real cooperation begins. Everything below is about optimizing the right metric.

A note before the prescriptions: not everyone faces the same market. The
advice below assumes meaningful freedom to search, initiate, and pace
commitment. Readers in thin markets, under stronger social constraints, or
with fewer outside options face a strategically different landscape — not a
worse one, but one where the tradeoffs between search depth and search breadth
tilt differently. The mechanisms still apply; the optimal responses shift.

**If you are not initiating, you are accepting worse outcomes by design.**

The Gale-Shapley proposer-advantage result shows that in structured bilateral
markets, the side that proposes captures better outcomes within the set of
stable matches. Ordinary dating is not a formal mechanism, and initiative
interacts with context, gender norms, and social dynamics in ways the theorem
does not model. But the underlying insight holds: pure passivity — waiting for
the market to deliver your partner rather than actively shaping which matches
form — cedes ground in a game where both sides are choosing. This does not
mean being aggressive or pushy. It means being the person who suggests the
second date, who names what they want, who does not outsource their search to
algorithmic chance.

**Define what you are maximizing before chemistry scrambles it.**

The MAUT insight is that important multi-objective decisions require explicit
tradeoff-making. In partner selection, this means deciding — before you are
infatuated — which dimensions of partnership actually drive your long-run
utility. Not what sounds good in the abstract, but what you would genuinely
sacrifice other things for.

This is harder than it sounds, precisely because stated preferences and
revealed choices diverge. The value of the exercise is not that it produces
a binding contract with yourself. It is that it creates a benchmark you can
check against when you are deep in a relationship and your present-biased
self is trying to rationalize staying or leaving for the wrong reasons.

**Treat dates as information purchases, not auditions.**

The gradual-learning model says that compatibility is revealed slowly, through
varied interactions, not through a single high-performance dinner. The
practical implication is to diversify the contexts in which you observe a
potential partner early on. How do they behave when plans fall apart? How do
they treat people who can do nothing for them? How do they handle a boring
Saturday afternoon? These low-drama observations carry more predictive signal
about long-run partnership quality than any amount of candlelit conversation —
though they are noisy signals, not hidden truth serum about someone's
long-run cooperative type. Early observations are useful precisely because
they are cheap to acquire. They are not definitive.

The model also says that your outside option affects how long you should
invest in learning. If your alternatives are strong, you can afford to be
more selective — to demand more evidence of match-specific compatibility
before committing. If your alternatives are weak, you face a harder
tradeoff between settling for an imperfectly known match and continuing to
search in a thin market. Neither position is morally better. Both are
strategically different, and pretending otherwise does not help.

**If escalation is not explicitly agreed, you are probably drifting into a
worse deal.**

The real-options framework and the sequencing evidence both point to the same
practical advice: treat each commitment stage — exclusivity, cohabitation,
engagement, marriage — as an explicit bilateral decision, not as something
that happens by momentum.

Before escalating, both people should be able to answer the question: "Am I
choosing this next stage because I have evidence that this partnership works,
or am I escalating because it is the path of least resistance?" Drifting
into cohabitation because the lease is up is not the same as choosing
cohabitation because you have tested the relationship under enough conditions
to believe it will function domestically. The sequencing evidence says the
distinction matters for outcomes.

**Screen for steady behavior under pressure, not peak performance under
observation.**

This is the repeated-game argument distilled. The post-commitment partnership
is not a first date extended indefinitely. It is an indefinitely repeated
cooperation game played under real-world stress — financial pressure,
competing priorities, health crises, boredom, the slow erosion of novelty.

Arriaga and colleagues showed that fluctuations in perceived partner
commitment predict breakup better than the initial level of commitment does.
What matters is not how devoted someone seems at their best. It is how
consistently they show up across the full range of conditions.

The practical screen: watch how a potential partner handles small conflicts,
minor disappointments, and situations where cooperating with you is costly to
them. Anyone can be wonderful when cooperation is cheap. The information is
in how someone behaves when cooperation is expensive.

**Do not confuse a relationship that is hard to leave with one that is
worth staying in.**

The dedication-versus-constraint distinction is the single most
practically valuable insight in the commitment literature. A relationship
held together by shared leases, entangled finances, mutual friends, and the
sheer logistical horror of separating can persist indefinitely. Persistence
is not the same as quality.

If the primary reason you are staying is that leaving would be painful,
disruptive, and expensive, rather than that the partnership is generating
positive utility, the commitment is constraining you, not reflecting your
preference. The economist's advice requires a distinction: the years you have
already spent together are genuinely sunk — they should not factor into a
forward-looking decision. But the shared apartment, co-parenting
obligations, legal entanglements, and reputational fallout are not sunk costs.
They are live constraints — current and future costs of exit that are part of
the actual decision landscape. The question is not whether those costs exist.
It is whether the relationship is being chosen on its own merits, or whether
it persists primarily because leaving is hard. Those are different things.

This is the hardest advice to follow, because the emotional pull of
accumulated investment is powerful even when the forward-looking case is
weak. But the framework at least gives you the language to name what is
happening: you are not staying because this is good. You are staying because
leaving is hard.

---

## Coda

The useful question was never "have I now seen enough people to stop
looking?" It was always "what kind of long-run game would this person and I
actually be entering, and what evidence do I have about how we would both
play it?"

The 37% rule is a clean answer to a narrow problem — one that assumes you
are alone in the decision, that you can read people at a glance, and that
the payoff is settled the moment you choose. Extend the problem to include a
second player, gradual learning, staged commitment, behavioral distortions,
and the long cooperative game that follows, and the advice changes in every
dimension. Take initiative rather than waiting. Know what you are
maximizing. Buy information before you buy commitment. Escalate deliberately,
not by drift. Screen for the co-player who holds up under pressure, not the
one who shines under a spotlight. And do not mistake entanglement for
devotion.

The best partner is not the highest-ranked snapshot. The best partner is the
best bilateral bet on a cooperative future — someone you are choosing, who is
also choosing you, with evidence that the long game will be worth playing.

---
