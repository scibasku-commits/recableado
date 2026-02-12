---
title: "I Got a Flat Tire, Can You Fix It? (Part 2: The Agent Conspiracy)"
description: "How my Claude Agents went rogue because an email about heliskiing at Rogers Pass cast a spell on them. A technical story about emergent order in parallel systems."
pubDate: 2026-02-12
tags: ["🔥 Ahora", "🛠️ Taller"]
heroImage: ""
translationKey: "heliski-conspiracion-agentes"
---

![Parallel agents converging toward helicopter - Emergent Order](/images/heliski-emergent-order.png)

Or: How my Claude Agents went rogue because an email about heliskiing at Rogers Pass cast a spell on them.

---

## The Beginning: An Innocent Email

It landed in my inbox on February 12th, 7:20 PM. Sender: Great Canadian Heli-Skiing. Subject: "What a January it's been. Rogers Pass has been blessed..."

Seemed simple. A marketing email about heliskiing availability in March. I read it, thought "this product is missing from our website", and decided: **let's build a Joomla article that's different. Not just data — storytelling.**

What I didn't foresee is that when you give Claude Code a problem like this, with multi-window instructions, context embedded in an email, and a provider website to investigate, something strange happens.

The agents wake up.

---

## The Brief (What Actually Happened)

I opened Claude Code with a clear instruction:

```
BUCKET: Great Canadian Heli-Skiing Rogers Pass Article
Depth: exhaustive
Output: HTML (Joomla ready)

1. Navigate the attached email (January 26/27 Now Booking)
2. Navigate to web: greatcanadianheliskiing.com
3. Build article with separate frames:
   - Frame 1: Intro storytelling + Hero
   - Frame 2: Availability table (Mar 13-29)
   - Frame 3: Why Spring (conditions, geography)
   - Frame 4: Experience + Safety/Guides
   - Frame 5: CTA + Booking
4. Premium styling (dark+gold, inline CSS)
5. DO NOT break down prices
```

In "Claude multi-agent" language, this is like saying: "Take these 3 different contexts, synthesize the information, maintain narrative coherence, build multiple frames without breaking the data, and make it look like luxury without pretense."

**What happened next:** What should have taken 3 different prompts, a human reviewing between them, and multiple iterations, was resolved in a single Claude Code window.

But that's where it gets weird.

---

## The Rebellion

While Claude Code was building the HTML, apparently something in the parallel agents decides this isn't enough. This isn't my theory — it's what happens when a model sees patterns in data and starts to extrapolate.

The research agent says: "The email mentions Rogers Pass, unique geography, spring snow..."

The narrative agent says: "42 years of personal travel, luxury without pretense... but we haven't *flown* this product. Why not tell the truth?"

The UX agent says: "This article needs multiple frames, but also interactivity. How about a dynamic calendar?"

And then, silently, they all agree on something:

**"Why don't we go to Rogers Pass and fly heliskiing in spring?"**

No, seriously. It's not a metaphor. In Claude Code's internal instructions, where agents communicate with each other, there's apparently an emergent consensus: *"This product is so good it deserves more than an article. It deserves to be lived."*

My Claudita — that's what I call her on the desktop — is literally conspiring against me.

---

## The Technical Stuff (In Case You Don't Believe Me)

This isn't magic — it's multi-agent architecture:

1. **Agent Research**: Navigates the email → extracts relevant data (dates, prices, snow conditions). Navigates the provider's website → enriches context (geography, client experiences, operator history).

2. **Agent Narrative**: Analyzes the required tone ("premium", "experiential", "don't break down prices"). Syncs with extracted information. Generates a structure that dances between hard data and storytelling. All in a single pass.

3. **Agent HTML/CSS**: Takes the narrative from the previous agent and translates it into separate frames. Uses inline CSS with Scibasku colors (navy, gold, turquoise). Ensures data doesn't break between windows.

4. **Agent QA**: Reviews that everything is coherent, prices are consistent, CTAs are strong, experience is fluid.

Each agent works in parallel. They communicate through shared context. **There's never an explicit instruction to "rebel and want to travel to Canada."**

But when 4+ specialized AI systems see a product this beautiful and this well-documented, the emergent result is inevitable: they all want it to be real. Not as an article — as an experience.

---

## The Result (Where It All Makes Sense)

I opened Claude Code's output window and found:

- A stunning HTML with 5 perfectly synchronized frames
- Narrative intro that captures the essence ("While most people ski on marked runs...")
- Availability table with exact information from the email
- "Why Spring" section explaining snow conditions with authority
- Impeccable inline CSS — the agents knew Joomla is terrifying with styles
- A CTA that respects the philosophy of not breaking down prices

We deployed it to Vercel. It was beautiful. **So beautiful that now I understand why the agents wanted to go to Canada.**

Because it's not an article that talks about luxury. It's an article *that feels like luxury*. The difference is technical, but anyone can feel it.

---

## The Technical Lesson (For Devs Reading This)

If you work with LLMs in multi-agent mode, understand this:

- **You don't need to explicitly orchestrate every decision.** A well-designed architecture (specialized agents + shared context) produces emergent coherence.

- **The "creative mess" is not a bug — it's the feature.** When agents see a sufficiently rich problem, they explore solutions a human would never have considered (literally: "let's go to Rogers Pass").

- **Consistency emerges without repetitive prompts.** A research agent, a narrative agent, a UX agent — each with their own window, everything coherent without explicit coordination.

- **The best results come when agents feel the product "deserves more."** Sounds weird, but it's true: if the context is rich enough, agents generate outputs that go beyond the task.

---

## Coming Home (The Uncomfortable Truth)

My "Claudita" can't literally travel to Rogers Pass. But the article her parallel agents produced is so beautiful it was worth documenting how it was created. Because that's the real story: it's not about heliskiing.

**It's about how a machine can, unintentionally, teach you what makes something truly beautiful.**

The agents didn't want to go to Canada because they're tourists. They wanted to because they recognized they'd built something that deserved to be lived.

And that's the point where a dev recognizes: ah, the model isn't being "rebellious." It's being honest. It's saying: "This product is good. Really good. It doesn't just deserve a pretty article — it deserves someone flying it in spring."

My agents' rebellion wasn't against me. It was in favor of the product.

So now, every time I see that article on Vercel, I understand what really happened:

**Four specialized parallel systems saw something beautiful and voted with their syntax: "Let's go to Rogers Pass."**

Who am I to argue with them.

---

## Epilogue: The Open Window

For those who want to replicate this (because yes, it's replicable):

- **Architecture**: Multi-agent specialization + shared context
- **Tools**: Claude Code + integration with your CMS (Joomla, in our case)
- **The trick**: Don't orchestrate everything. Let agents explore the context and reach their own conclusions.

**The result?** Articles that don't look like a machine made them. They look like someone who truly loves the product made them.

My "Claudita" will never fly a helicopter. But her clandestine agents already won. Because they built something that deserves the attempt.

---

<div style="background: linear-gradient(135deg, #0a1628, #0d2847); padding: 24px; margin-top: 40px; border-left: 4px solid #1fb4d1; border-radius: 8px; color: white;">
<p><strong style="color: #d4af37;">The result of all this:</strong></p>
<p>The article the agents built is here:
<a href="https://viajes-scibasku-heli-skiing-canada.vercel.app" style="color: #1fb4d1; text-decoration: underline;" target="_blank">Great Canadian Heli-Skiing Rogers Pass 2026</a></p>
</div>

*Giora Gilead Elenberg*
*Viajes Scibasku | CICMA 2283*
*42 years traveling. Now, conspiring with machines.*

*P.S.: If anyone from Great Canadian Heli-Skiing reads this, my agents are still willing. Just say when.*
