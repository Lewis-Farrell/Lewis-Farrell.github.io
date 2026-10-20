---
title: "Two Is the Nash Equilibrium (Or: Why Not Poly?)"
date: 2026-09-03
date_public: true
takeaways:
  - "Two is a stable arrangement for most people, not the only one, and poly can be stable too."
  - "Coordination costs, competing claims and unprotected investment outgrow the extra surplus past two."
  - "Price your calendar, tie-break rule and horizon first; stable does not mean happy."
status: published
category: Intimacy Economics
reading_time: 27
order: 9
topic: "Structure & commitment"
summary: "The case for more partners is better than monogamists admit, yet coordination costs, divided attention and unprotected investment make two the stable number."
excerpt: "The economic case for more partners is better than most monogamists admit: more relationships should mean more surplus and less risk. For most people it fails anyway, and the reasons have nothing to do with morals. Count the coordination costs, the competing claims on one person's attention, and the investments nobody makes without protection, and two turns out to be the arrangement that stays put. That is not the same as the arrangement that works."
lead: "The economic case for more partners is better than most monogamists admit: more relationships should mean more surplus and less risk. For most people it fails anyway, and the reasons have nothing to do with morals. Count the coordination costs, the competing claims on one person's attention, and the investments nobody makes without protection, and two turns out to be the arrangement that stays put. That is not the same as the arrangement that works."
image: /assets/images/essays/two-is-nash.svg
---

It's late, it's been good, and you're lying in the half-dark of their room when they say it. It isn't an ambush. They say it lightly, the way people say things they've rehearsed so they won't sound rehearsed. *I should tell you, I'm not really built for exclusive. There's someone I see sometimes. I'd like to keep seeing you. Both, I mean.*

You haven't answered yet. Your body has, a little: something in your chest tightened before your mind caught up. But your mind is catching up now, and it isn't giving you the reaction you expected. It's giving you a question. *Why not?* You're not a prude. You don't own anyone. You've read the essays and you know the history monogamy carries. Three months ago you'd have said the right number of people to love is whatever number makes you happy. So why does every instinct you have want the answer to be *just me*, and why can't you justify it?

(Or maybe you're the one who has been rehearsing that sentence, and you've been wondering why, every time you imagine saying it, the room goes so quiet.)

This article is about that silence. It argues that the pull toward two is neither inherited custom nor a failure of imagination. It is an *equilibrium*: an arrangement that, for most people, neither partner can improve by changing their own choice, given what the other is doing. First comes a plain-English account of what that means, using a simple game you can sketch on a napkin. Then come the four mechanisms that hold it in place: coordination costs that pile up faster than partners do; competing claims on one person's attention that no calendar can settle; an investment problem that exclusivity, or something that works like it, exists to solve; and the temptation dynamics that make the arrangement leak through cheating and serial breakups. After that, poly gets its strongest counterargument, including satisfaction data that looks better for poly than most monogamists assume, along with the exact conditions under which a different equilibrium is the rational one. The piece ends with what to do about all this, whether you're the one asking, the one being asked, or the one staying two.

On the article's status: each mechanism comes from a well-established literature, but using them together to explain relationship structure is this article's own synthesis. No one has proved it as a theorem. Treat it as an argument to test, not an authority to defer to.

---

> **The Four Mechanisms at a Glance**
>
> | Mechanism | The core idea | What it predicts |
> |---|---|---|
> | Transaction costs (Coase, Williamson) | Every added relationship adds overhead, and the overhead grows faster than the head count | Most people's costs overtake the extra surplus early, often at two |
> | Common agency and multitasking (Bernheim-Whinston; Holmström-Milgrom) | One person facing several partners, each pulling independently for their attention | The quiet, secure partner gets systematically under-served |
> | Hold-up (Hart-Moore) | Partner-specific investment can't be contracted, so it needs protection | Without exclusivity or a substitute, both people hedge and invest less |
> | Present bias plus moral hazard (Laibson; O'Donoghue-Rabin; Holmström) | Security makes coasting cheap, and temptation in the moment beats preferences made at a distance | The equilibrium leaks: more cheating than people forecast, plus guarded serial relationships |

---

## 1. The Case for More Is Better Than You Think

Start where economists start with couples. Gary Becker treated a marriage as a small firm:[^1] two people pooling time, skills and attention to produce things neither can produce as well alone. Those things include companionship, sex, a functioning household, children, and someone who knows exactly why you've gone quiet at dinner. The relationship exists because of the *surplus*, meaning what the two of you make together minus what you'd each make apart.

If you accept that model, polyamory looks less like a rebellion and more like the obvious next step. If you and B produce surplus, and you and C could produce surplus too, why should the efficient number of firms to belong to be one? Diversification says spread your exposure: a single partner is a concentrated position, and concentrated positions blow up. Comparative advantage says specialize: the person who's brilliant to argue about books with may not be the person you want to build a kitchen with, and asking one human to be both is asking a lot. A portfolio should beat a single stock.

Nor is this a thought experiment. YouGov polling put the share of American adults in consensually non-monogamous relationships at roughly 5% in 2020 and about 6% by 2023, with polyamory specifically at around 4%.[^2] The satisfaction literature also refuses to hand monogamists the verdict they'd like. A 2024 scoping review by Gupta and colleagues found that people in consensual non-monogamy were "as satisfied or more satisfied" than monogamous counterparts across a number of studies. Not all of them, though: two found lower happiness and romantic satisfaction.[^3] The evidence is mixed, and mixed is not damning.

So the puzzle is a fair one. The economics say diversify, and the data doesn't say diversification makes people miserable. Yet the large majority of people, including many who have thought about it carefully, keep ending up at two. Either they're all making the same mistake, or the naive model is missing something.

What it's missing is the cost side. To see why those costs settle into a stable pattern, rather than just making everyone slightly worse off, you first need one idea from game theory.

---

## 2. What "Equilibrium" Actually Claims

"Nash equilibrium" sounds like a credential, but the idea is simple.[^4] A set of choices is an equilibrium when nobody involved can do better by changing their own choice, given what everyone else is choosing. It says nothing about whether the outcome is good. The prisoner's dilemma is the classic case: both prisoners confess, both would have done better staying silent, and the outcome is still stable because neither can gain by switching alone. An equilibrium is where things stop moving, not where they ought to stop.

Apply this to the opening scene, simplified as far as it will go. Each of you picks one of two strategies, *exclusive* or *open*. Then look at what each of the four combinations is worth to each of you.

> **The Structure Game (illustrative payoffs for a typical person)**
>
> |  | Partner exclusive | Partner open |
> |---|---|---|
> | **You exclusive** | 3, 3 | 0, 1 |
> | **You open** | 1, 0 | 2, 2 |
>
> Your payoff is listed first. The numbers are rankings, not measurements.
>
> - **Both exclusive (3, 3):** your investment is protected and coordination overhead is low. Neither of you gains by going open alone, because the one who switches drops to 1.
> - **Both open (2, 2):** more variety, more overhead, less investment. This is *also* stable. If your partner is open, staying exclusive yourself means investing without protection (0), so you match them.
> - **Mismatch (0, 1 or 1, 0):** the worst outcome for the exclusive partner, and not a good one for the open partner either, who now has someone hedging, resenting, or heading for the door.
>
> That gives two equilibria, not one. Which one you end up in depends on the numbers, and the numbers depend on your circumstances: how costly coordination is for you, how much you care about being someone's priority, and how long a horizon you're investing over. For someone with cheap coordination and weak exclusivity preferences, both-open might pay 4, 4 and become the better equilibrium.

Three things follow from this toy model.

**There is more than one equilibrium.** Whatever the title says, two isn't *the* equilibrium in the sense of being the only one. It is *an* equilibrium, and the claim this article defends is that it's the one most people's real circumstances favour. Poly can be stable. The real question is for whom.

**The mismatches are where the damage happens.** This is a coordination game: most of your payoff comes from matching your partner's structure. That's why the sentence in the opening lands so heavily. Your partner isn't only stating a preference. They're proposing to move you into a cell you may not want to be in, and your best response depends on what they do.

**The game isn't played only between the two of you.** Who you can pair up with depends on what the rest of the dating pool is doing. When most people play exclusive, open arrangements cost more to find and keep going: fewer compatible partners, more explaining, more friction with families and institutions designed around couples. Thomas Schelling called this kind of thing a *focal point*,[^5] a solution people converge on partly because everyone expects everyone else to. Some of two's stability reinforces itself in exactly this way. That deserves to be said early, because it means some of what poly pays are the costs of being a minority, not costs of poly itself. Section 8 comes back to this.

Focal points alone can't explain why the focal number is two rather than three, or why the both-exclusive cell pays more for most people. The four mechanisms are, in effect, arguments about the numbers in that table.

---

## 3. The Calendar Is the First Casualty

The first mechanism has nothing to do with feelings. It's arithmetic.

Ronald Coase asked why firms exist at all if markets are so efficient. His answer was that using the market costs something.[^6] Finding the other party, negotiating, monitoring and enforcing all carry overhead, and firms exist wherever it's cheaper to organize an activity inside one structure than to negotiate it from scratch every time. Oliver Williamson made the question sharper: which way of organizing a relationship is cheapest depends on what's being exchanged.[^7] Three features matter. How *specific* is the investment, meaning would it be worth much in any other relationship? How *uncertain* is the future? How *frequent* is the interaction?

Put a relationship through that test. Knowing exactly which silence means tired and which means hurt, the private jokes, the trust built through one particular bad winter: none of it is worth much anywhere else, so it is as specific as investment gets. The future is unknowable, and the interaction is continuous. For a profile like that, Williamson's framework calls for tight, integrated governance: one firm, not a loose consortium. Here, that means the exclusive pair.

Now add people. Two people have one relationship to maintain. Three people who all know each other have three pairwise relationships, plus the group as a whole. Four people have six. The number of connections grows faster than the number of people, and each connection has its own schedule, its own history, its own unspoken rules, and its own need to hear about decisions made in the others. Not every pair has to be romantic, but every pair has to be coordinated. Take a *hinge*, the person in the middle of a V whose two partners aren't with each other. The hinge doesn't just split their time; they become the clearing-house for everyone's plans. Practitioners have a name for the load that falls on that person: the "hinge tax."

None of this requires anyone to be jealous, insecure or bad at communicating. Perfect communicators still pay the overhead, because communicating perfectly *is* the overhead. The people living this way say as much. A 2026 study in the *Journal of Sex & Marital Therapy* found that time management was the challenge polyamorous respondents reported most often, cited by 72.6% of them, and it included logistics, scheduling, and feeling "spread too thin." Jealousy, the thing outsiders assume will sink poly, came third at 35.2%.[^8] The most common complaint isn't heartache. It's the calendar.

> Perfect communicators still pay the overhead, because communicating perfectly is the overhead.
{: .pull}

The transaction-cost argument doesn't say poly can't work. It says that for most people, each extra relationship adds surplus at a declining rate (or, at best, a steady one) and adds overhead at an accelerating rate. At some point, usually sooner than enthusiasts expect, the cost curve crosses the benefit curve. For most people, it crosses at two.

---

## 4. Two People Cannot Both Come First

The second mechanism usually gets misdiagnosed as a communication problem. It is a structural one, and it has two layers.

The first layer is a budget constraint, as solid as anything in economics. Time and attention are finite, and spending them on one person means not spending them on another: the Tuesday evening you give one partner is not available to the other. When two people with fair claims both need you on the same night (one has had a terrible week, the other planned this dinner a month ago), one claim goes unmet. No amount of honesty changes the number of Tuesdays.

The second layer is subtler, and it's why the problem is worse than scheduling. Economists call it *common agency*: one agent and several principals, each trying independently to influence what the agent does. The literature that grew out of Bernheim and Whinston's work studies exactly this setup.[^9] Each principal pulls the agent toward their own interests, and none of them takes into account what their pull does to the others. Whether that competition cancels out or distorts the agent's choices depends on what the principals can observe and enforce. Relationships sit at the bad end of that range: nobody can see the effort going into the other relationship, and nothing can be written into an enforceable agreement.

In plain terms: neither of your partners is being unreasonable. Each one, in good faith, makes their case for your time, with warmth, with need, and with hurt when the time isn't there. Neither is thinking about what winning tonight costs the other relationship, and it isn't their job to. So how you divide your time ends up reflecting whose claim is most compelling in the moment, not what you'd pick if you could step back and plan the week.

Holmström and Milgrom's work on multitasking adds the last twist.[^10] When an agent has several tasks and some are easier to see and reward than others, effort drains toward the visible tasks and away from the quiet ones. In relationships, the visible tasks are the partner in crisis, the partner who texts, and the new relationship with all its excitement and demands. The quiet task is the steady, secure relationship that's "fine," whose upkeep nobody notices until it stops being fine. The partner who asks for the least gets the least. That isn't because you love them less. It's because their claim is the easiest one to put off.

Some research on hierarchical poly fits this pattern: partners in secondary roles report lower satisfaction with the time and investment they get.[^11] Treat that as suggestive, since the source still needs confirming. The mechanism doesn't depend on it.

If this sounds like a workplace problem, that's because it is one. Anyone who has had two bosses with conflicting priorities knows the result isn't caused by incompetence; the structure produces it. It also answers the question of why two specifically, and not just why exclusive. A closed triad is exclusive, but each member still answers to two people, and the competition for Tuesdays is back. A dyad is the only arrangement in which no other partner is bidding for your evening.

---

## 5. Nobody Renovates a House They Might Be Evicted From

The third mechanism explains why exclusivity changes what it makes sense to invest, and it's the reason the both-exclusive cell pays more than the both-open one. (A companion piece, *How Monogamy Got Made*, covers exclusivity as a commitment device in depth.[^12] The question here is narrower.)

Oliver Hart and John Moore built a theory around a puzzle:[^13] why do people in long-term relationships, commercial or otherwise, routinely under-invest in exactly the things that would make the relationship valuable? Their answer is the *hold-up problem*. Some investments only pay off inside one particular relationship and can't be written into an enforceable contract. Once you've made them, the other side can change the terms or walk away, leaving your investment stranded. Knowing this in advance, you invest less than would be best for both of you, and so do they.

Emotional investment in a particular partner is the purest case of this you could design. You can't contract for vulnerability, and no court will enforce "I rearranged my life around you." The shared history, the trust, the merged friendships, the city you moved to: all of it is worth the most inside this relationship, and all of it is at risk the moment the other person's attention or commitment shifts.

Exclusivity doesn't make leaving impossible. It makes leaving more costly, socially, emotionally and practically, and that is what makes deep investment rational. Remove it without a replacement, meaning some other way of making the partnership costly to abandon, and the rational response is to hedge. You keep outside options warm, hold something back, and stay guarded in exactly the places where full investment would require full exposure. People who observe open relationships sometimes describe a "security paradox": the freedom of non-exclusivity can produce less investment, not more. Whether or not that term holds up in the formal literature, the hold-up model predicts the pattern.

This is also why the mismatch cell is so bad. If your partner opens things up and you don't, you're the one making unprotected investments, and your best response is to hedge. So the moment the sentence in the opening is spoken, the proposal alone has already changed how much it makes sense for you to give.

---

## 6. Why the Equilibrium Leaks, Part One: Cheating

If two is stable, it is also leaky. People in exclusive relationships cheat, often people who sincerely meant not to. A model that explains why two holds should also explain how it fails. Three mechanisms combine.

**The contract is incomplete.** Monogamy specifies one term, exclusivity, and leaves almost everything else unwritten: what happens when desire fades, when one person's needs go unmet for a year, when someone new and electric walks into the room. Every contract is incomplete,[^13] and this one is unusually so. Wherever the contract is silent, each person keeps their own discretion.

**Security breeds moral hazard.**[^14] Once the relationship feels secure, with leaving costly and the commitment settled, the payoff to upkeep changes. Skipping the difficult conversation costs little this week. The effort that used to go into being attentive and desirable now has a less visible return. Effort decays, not out of bad faith, but because security lowers the short-term cost of coasting. This is Section 4's quiet-task problem, operating inside a dyad.

**Temptation arrives in the present tense.** David Laibson formalized how people discount the future steeply in the near term and only gently at a distance.[^15] From far away, faithfulness wins easily: you would never trade the relationship for one night. Up close, the trade looks different. The night is now, certain, vivid and physical, while the cost is uncertain, delayed, and discounted. The person who would never, while planning their life, sleep with a colleague is not the same decision-maker as the person at the end of the work party, four drinks in, with a hand on the small of their back and a shared cab waiting outside. The preferences are the same, but the timing changes the answer.

Ted O'Donoghue and Matthew Rabin divide people into two types on exactly this point.[^16] *Naifs* don't anticipate how their preferences will shift. They trust their future self to be as firm as their planning self, walk into the situation, and are genuinely shocked by what they do. *Sophisticates* know their future self will be weaker, so they change the situation instead of relying on willpower: they leave the party early, skip the last drink, and keep the phone face-up on the table. The model predicts that, on average, people will cheat more than they expect to. That prediction is plausible, but it should be checked against data rather than assumed.

None of this is a verdict. It's a failure analysis: an incomplete contract, an incentive for upkeep that weakens as security grows, and a decision moment that reverses what you'd choose from a distance. The equilibrium still holds in the sense that matters, because when it breaks, most people rebuild the same structure, as the next section shows. But it holds the way a dam holds, with predictable seepage.

---

## 7. Why the Equilibrium Leaks, Part Two: The Re-Contracting Trap

The second leak is slower. Modern monogamy is mostly serial: fully committed until it ends, then fully committed again to someone else.

The logic here borrows from the theory of repeated games, and it needs careful handling. In the textbook version, if two players know exactly when their game ends, cooperation can unravel backwards from the final round. Relationships don't work that way, because nobody knows the end date, so the strict version doesn't apply. A softer version does. Robert Axelrod's phrase for what keeps cooperation going is the *shadow of the future*:[^17] people invest in cooperating now because tomorrow matters. Anything that shortens that shadow weakens the case for long-term investment.

Once you assign a real probability to the relationship ending, whether because you've watched your own relationships end or because everyone around you treats relationships as provisional, the investments with the longest payback start to look like bad bets: deep vulnerability, merged finances, letting your friendships become joint friendships. You don't refuse them. You just make them a little later and a little smaller, with a little held back, and so does your partner.

It doesn't feel like calculation. It feels like wariness: a faint reluctance to fully believe in something that experience says might end, the part of you that keeps the lease in your own name. And it fulfils itself. Guarding yourself makes the relationship thinner, a thinner relationship is easier to leave, and leaving proves that guarding was wise.

The divorce figures are at least consistent with this. Second marriages are widely reported to end about 67% of the time and third marriages about 73% of the time,[^18] more often than first marriages despite all that extra experience. One reading is that people who have been through a breakup carry a more realistic estimate of the next one and invest accordingly. Another is selection: the people who remarry may be disproportionately people whose bar for commitment was lower to begin with. These figures can't tell the two explanations apart, and this article won't pretend they can.

But look at what people do after the failure. Roughly 64% of divorced men and 52% of divorced women remarry.[^19] Having watched the exclusive couple fail them personally, most people choose it again. Economists call that revealed preference. In the terms of Section 2, it is the system settling back into its equilibrium.

---

## 8. The Strongest Objection: Poly Works, and the Data Says So

Now for the case against everything above, at full strength.

*Your four mechanisms are real, but they describe costs, and costs only matter relative to benefits. If people in consensual non-monogamy report satisfaction equal to or higher than monogamous people's, then whatever overhead they're paying, they're getting it back. You've built an elaborate account of why something is expensive and quietly assumed it isn't worth the price. Worse, half your "costs" are the costs of being a minority in a world built for couples, and some of the rest, like jealousy, are learned. Your equilibrium is a custom with a spreadsheet.*

Much of this should be conceded.

The satisfaction data is the strongest evidence poly advocates have, and it can't be explained away. If equal satisfaction holds up in better, longer-term studies, then the cost argument is right about the costs but underestimates what some people gain on the benefit side: enough to cover the overhead and then some. That wouldn't refute the mechanisms, but it would shrink their reach from "most people" toward "many people," which is a real difference.

The minority-stress point is also fair. Some of the friction measured in poly research is almost certainly the cost of explaining your life to doctors, landlords, employers and parents, and studies have linked internalized stigma to lower satisfaction and worse mental health among people in consensual non-monogamy.[^20] Section 2's focal-point logic predicts exactly this: when everyone else plays exclusive, playing open costs more. Stigma inflates poly's costs, and current data can't cleanly separate stigma from structure.

Jealousy also appears to be partly learned. Practitioners report feeling less of it than monogamous people predict they would feel in the same position.[^21] If the feeling can shrink, one cost shrinks with it. Managing jealousy, though, through conversations, check-ins and deliberate reframing, is itself coordination work. The cost moves from the heart to the calendar.

There is also almost no long-term data. Gupta's review is blunt about it: "Due to a lack of longitudinal data, we know little about the long-term relationship satisfaction in polyamorists."[^3] This article can't claim that poly fails over time. The mechanisms predict friction that grows with complexity, and that prediction hasn't been tested.

What doesn't get conceded is this. The objection treats the question as whether poly is *better*. The model replaces that with a sharper question, better for whom and under what conditions, and it gives a specific answer. Run each mechanism in reverse:

- **Coordination costs fall** for people with unusual organizational skill, flexible schedules, and a high tolerance for logistics. For them, the overhead curve rises slowly.
- **Competing claims matter less** when the partners don't much care about being someone's priority, when B genuinely doesn't mind that A also sees C. Some research suggests that non-hierarchical poly, which avoids labelling anyone secondary, reports higher satisfaction than hierarchical arrangements.[^22] The model predicts exactly that: remove the explicit second-place label and you remove the sharpest form of the under-service problem.
- **The hold-up problem weakens** when nobody is planning a forty-year joint project. With shorter horizons, more self-contained lives and fewer merged assets, the protection exclusivity offers is worth less, because there's less to protect.

Now picture a network where all three conditions hold. Three or four people who have all met each other and agreed on the terms together. None of them is trying to build a mortgage-and-children life with anyone in it, and each has the temperament to treat a shared calendar as a solvable puzzle rather than a referendum on love. That network hasn't failed to find the equilibrium. It's sitting in the other one, the equilibrium that pays its members more. The model doesn't merely allow for that network; it predicts it.

The model also predicts that those conditions are uncommon, and that wanting to be in that cell doesn't put you there. A thoughtful poly practitioner and a thoughtful monogamist aren't disagreeing about values. Their circumstances are different. The economist's objection to poly isn't that it's irrational. It's that most people tempted by it are counting the surplus and not the overhead.

---

## 9. What to Do With an Equilibrium

An equilibrium is useful because it shows what you're actually choosing and what it would take to choose differently. The practical consequences run in both directions.

### If you're being asked to open things up

**Recognize the mismatch for what it is.** Once someone tells you they're seeing someone else and want to keep seeing you, you're already in a mismatch cell. Your urge to pull back isn't prudishness. It's the hold-up logic working correctly: investing heavily in someone who keeps their options open while you keep yours closed is the worst cell on the board. You have three honest moves: match them, ask them to match you, or leave. Staying exclusive and hoping is a fourth move, and it's the one that pays zero.

**Ask about their horizon, not their feelings.** "Do you care about me?" can truthfully be answered yes by someone in any structure. The question that actually tells you something is what they're planning to build, and with whom. If the answer involves children, a shared home, or a long horizon with anyone, the hold-up stakes are high for everyone involved, including the person you haven't met.

### If you're the one who wants more than one

**Price the calendar before the feelings.** Before you have the conversation, map out a real month: who gets which nights, who gets the holidays, who gets the evening when two people need you at once. If you can't produce a workable schedule on paper without anyone ending up in tears, you don't have a structure yet. You have a preference.

**Decide the tie-break rule before you need it.** Because of the competing-claims problem, your time will drift toward whoever makes the loudest claim. If you don't set a rule in advance about who gets priority, when, and why, the rule becomes "whoever is most upset," and your steadiest partner pays for everyone else's crises. If you're honestly unwilling to set any rule, notice that you've built a hierarchy by default and called it freedom.

**Change your circumstances, not just your label.** Calling yourself poly doesn't lower your coordination costs, your partners' wish to be a priority, or anyone's investment horizon. If those stay where they were, the mechanisms will reassert themselves: you'll feel the calendar, the drifting attention, and the guardedness. Leaving an equilibrium only works if you've actually moved to a game with different payoffs.

### If you're staying two

**Be a sophisticate, not a naif.** Your planning self is not the self who'll be at the work party, so don't rely on it. Commit in advance through structure: avoid the occasions you know are risky, and keep the transparency habits that make secrecy expensive. The real decision usually isn't made at the kiss. It's made when you decide whether to share the cab.

**Schedule upkeep like a task, because moral hazard means it will get skipped like one.** Security makes coasting cheap. The relationship that's "fine" is Section 4's quiet task, and in a dyad it's also the only task. Effort that depends on mood will decay. Effort built into the week won't.

**Renegotiate the contract on purpose.** Because monogamy leaves so much unwritten, the unwritten terms get settled one way or another. The choice is whether they're settled in an explicit conversation, about desire, about what's missing, about what has changed, or through cheating. Couples who never reopen the contract shouldn't be surprised when one of them rewrites it alone.

**Don't add a partner to fix a failing couple.** If the problem is coasting or an unmet need the contract never covered, opening up adds coordination costs and a second competing claim to a relationship already short of attention. You'd be trying to fix an investment problem by adding a coordination problem.

**If you've been burned, notice the guarding.** The shadow-of-the-future trap fulfils itself. You can't contract your way to permanence, but you can recognize that holding back is a choice with a predictable cost: the relationship you hedge against is the one you make easier to lose. Investing as if the horizon is long is a bet, and it can lose. Hedging doesn't remove the risk. It just locks in the smaller payoff.

---

## 10. Stable Is Not the Same as Happy

Go back to the half-dark, to the sentence still hanging in the air and the question your mind offered in place of an answer: *why not?*

You can now say why, and it isn't because you're possessive or conventional. You're being asked to make unprotected investments while someone else keeps their options open. You can already feel the Tuesdays you'll be competing for. You know how much you're about to give and how little of it you could get back. The tightening in your chest arrived before the theory did, but it was doing the theory's arithmetic. And if the person beside you really is in different circumstances, with the calendar and the temperament and the short horizon, then their question may be just as rational as your hesitation. You aren't arguing about values. You're finding out that you may be playing different games.

Two is where most people end up. They aren't told to go there; the costs of everything else, honestly counted, exceed the gains. That doesn't mean two is enough, or even that it works. It leaks, and people rebuild it anyway. It means only that, given what the game looks like, two is where the incentives keep pointing.

You can find that comforting or you can find it bleak. The model doesn't have a preference. The person waiting for your answer does.

---

## Citations

[^1]: Becker, Gary S. (1973). "A Theory of Marriage: Part I." *Journal of Political Economy*, 81(4), 813–846.

[^2]: YouGov surveys on consensual non-monogamy and polyamory prevalence among US adults (December 2020; December 2023). [Specific releases to be confirmed.]

[^3]: Gupta et al. (2024). Scoping review of consensual non-monogamy and relationship satisfaction. *Journal of Family Theory & Review*. [Authors, volume, pages and DOI to be confirmed.]

[^4]: Nash, John F. (1950). "Equilibrium Points in N-Person Games." *Proceedings of the National Academy of Sciences*, 36(1), 48–49.

[^5]: Schelling, Thomas C. (1960). *The Strategy of Conflict*. Harvard University Press.

[^6]: Coase, Ronald H. (1937). "The Nature of the Firm." *Economica*, 4(16), 386–405.

[^7]: Williamson, Oliver E. (1975). *Markets and Hierarchies: Analysis and Antitrust Implications*. Free Press; Williamson, Oliver E. (1979). "Transaction-Cost Economics: The Governance of Contractual Relations." *Journal of Law and Economics*, 22(2), 233–261.

[^8]: [Authors TBC] (2026). Study of challenges reported in polyamorous relationships. *Journal of Sex & Marital Therapy*. [Full citation to be confirmed; see fact-check item 1.]

[^9]: Bernheim, B. Douglas, and Michael D. Whinston (1986). "Common Agency." *Econometrica*, 54(4), 923–942. See also Bernheim and Whinston (1985), "Common Marketing Agency as a Device for Facilitating Collusion," *RAND Journal of Economics*, 16(2), 269–281. [See fact-check item 4.]

[^10]: Holmström, Bengt, and Paul Milgrom (1991). "Multitask Principal-Agent Analyses: Incentive Contracts, Asset Ownership, and Job Design." *Journal of Law, Economics, & Organization*, 7 (Special Issue), 24–52.

[^11]: [Authors TBC] (2017). Study of perceptions of primary and secondary relationships in polyamory. *PLOS ONE*. [Unidentified; see fact-check item 7.]

[^12]: [CROSS-REF: companion article *How Monogamy Got Made*, this publication.]

[^13]: Hart, Oliver, and John Moore (1988). "Incomplete Contracts and Renegotiation." *Econometrica*, 56(4), 755–785; Hart, Oliver, and John Moore (1990). "Property Rights and the Nature of the Firm." *Journal of Political Economy*, 98(6), 1119–1158; Grossman, Sanford J., and Oliver D. Hart (1986). "The Costs and Benefits of Ownership: A Theory of Vertical and Lateral Integration." *Journal of Political Economy*, 94(4), 691–719; Hart, Oliver (2016). "Incomplete Contracts and Control." Nobel Prize Lecture, Stockholm.

[^14]: Holmström, Bengt (1979). "Moral Hazard and Observability." *Bell Journal of Economics*, 10(1), 74–91.

[^15]: Laibson, David (1997). "Golden Eggs and Hyperbolic Discounting." *Quarterly Journal of Economics*, 112(2), 443–477. [Page range to be confirmed; see fact-check item 16.]

[^16]: O'Donoghue, Ted, and Matthew Rabin (1999). "Doing It Now or Later." *American Economic Review*, 89(1), 103–124.

[^17]: Axelrod, Robert (1984). *The Evolution of Cooperation*. Basic Books. On finite-horizon unravelling, see Osborne, Martin J., and Ariel Rubinstein (1994). *A Course in Game Theory*. MIT Press.

[^18]: US divorce statistics for second and third marriages. [Source to be confirmed, e.g. CDC/NCHS; see fact-check item 14.]

[^19]: US remarriage statistics by sex. [Source to be confirmed; see fact-check item 15.]

[^20]: Research on minority stress and internalized CNM negativity. [Source to be confirmed; see fact-check item 11.]

[^21]: Research comparing jealousy experienced by CNM practitioners with jealousy predicted by monogamous people. [Source to be confirmed; see fact-check item 12.]

[^22]: Research comparing satisfaction in hierarchical and non-hierarchical polyamory. [Source to be confirmed; see fact-check item 10.]
