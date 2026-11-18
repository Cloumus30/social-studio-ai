# The Anti-AI-Slop Standard

A practical standard for catching and rewriting the patterns that make text read as if a language model wrote it without a human editorial pass. Bilingual: this is the English standard; the Indonesian standard is in `anti-ai-slop.id.md`. Free and open-source.

## Core principle

If it reads, looks, or feels like a language model generated it without a human pass, it fails. This is not a checklist to memorize once. It is a reflex: every rule below is both a detector and a rewrite instruction.

## Remediation discipline (detection is half; the fix is rephrasing to natural)

When slop is found, do not just delete it. Rephrase so a human expert would have written it. The rewrite, not the flag, is the deliverable.

1. Locate the specific pattern (which rule it violates).
2. Rephrase to natural, keeping the real meaning: say the thing plainly, with a concrete specific in place of the slop.
3. Re-read against the litmus test. If it still sounds like a model, rewrite again.
4. Vary, do not formulate. A fix that swaps one tell for another (an em-dash for a double hyphen in a published artifact, "delve" for "explore", a contrast frame for a binary frame) is not a fix. Restructure the sentence.

The fix is always the same direction: toward how a specific human expert actually writes, with real cadence variation, concrete detail, and one clear claim per sentence.

---

## 1. Symbol bans

### Em dash and double hyphen

| Context | Em dash | Double hyphen (--) | Do instead |
|---------|---------|--------------------|------------|
| Casual chat | banned | acceptable | a casual separator is fine |
| Published artifacts (docs, proposals, sites, apps, slides, exports) | banned | banned | paraphrase: commas, parentheses, colons, periods, or restructure |
| Code comments | banned | acceptable, sparingly | prefer restructuring |

The em-dash habit displaces onto substitutes, so banning it is not enough. Watch the successors in section 15.

### Other symbols

- Bullet emoji (rocket, key, lightbulb, star, checkmark, pin, fire) as list markers: use plain bullets or numbers. Emoji only when the reader explicitly asks.
- Header emoji: clean text headers.
- Curly/smart quotes and apostrophes in plain-text contexts (forms, code, chat, captions): a copy-paste fingerprint; normalize them.

---

## 2. Vocabulary blacklist

Words and phrases that appear in machine text at many times the human rate. Tier them by recency: the current-era survivors carry the most weight because models still emit them after the older tells are suppressed.

**Current-era survivors (highest weight):** emphasizing, enhance, highlighting, showcasing, underscore.

**Verbs:** delve, leverage (as a verb), harness, foster, cultivate (figurative), utilize, facilitate, spearhead, navigate (figurative), bolster, garner, galvanize, catalyze, streamline, curate, mitigate, elucidate, exemplify, embody, transcend, unravel, "grapple with".

**Figurative nouns:** tapestry, realm, arena, landscape (figurative), mosaic, fabric ("the fabric of"), bedrock, cornerstone, beacon, pillar, catalyst, crucible, linchpin, hallmark, nexus, confluence, "symphony of", "dance of".

**Quality and quantity puffers:** multifaceted, holistic, robust (unless literal infrastructure), seamless/seamlessly (unless literal UX), plethora, myriad, nuanced, meticulous, intricate, commendable, invaluable, quintessential, paramount, indispensable, comprehensive (as a bare adjective), cutting-edge, groundbreaking, revolutionary, game-changer, paradigm shift.

**Promotional / travel-brochure cluster:** testament ("a testament to"), boasts, nestled, bustling, breathtaking, renowned, stunning, "in the heart of", "treasure trove", "hidden gem", "rich tapestry", "diverse array".

**Stock phrases:** "it's worth noting", "it bears mentioning", "at its core", "in the realm of", "in today's [world/landscape/age]", "look no further", "let's dive in", "this comprehensive guide".

**Latinate inflation (prefer the plain word):** utilize→use, commence→start, facilitate→help, endeavor→try, sufficient→enough, obtain→get, purchase→buy, terminate→end, crucial/pivotal→important or be specific about why.

---

## 3. Transitional filler bans

- Never stack "Furthermore" / "Moreover" / "Additionally" / "In addition" in succession. Just say the next point, or use a short connector ("Also", "And", "But", "Still").
- "Interestingly," "Notably," "Importantly," to open a sentence: if the content is interesting it shows; cut the label.
- "It's important to note that...": state the thing.
- "As mentioned earlier" unless genuinely referencing a distant section.
- "Moving on to..." / "Here's a breakdown" / "Let's break this down": just move on.

---

## 4. Sentence-structure bans

| Pattern | Example | Fix |
|---------|---------|-----|
| Triple adjective | "a robust, scalable, and efficient solution" | pick the one or two that matter |
| "Not only... but also" | overused | at most once per document |
| "By [gerund]" opener | "By leveraging our expertise..." | rewrite as a direct statement |
| "Whether... or" filler | "Whether you're a student or a professional..." | use a list or address the reader directly |
| "Ensure that" chain | "Ensure that... ensuring that..." | direct instruction: "Do X" |
| Forced parallelism | parallel structure where the content does not parallel | let content dictate structure |
| "In conclusion" / "To summarize" | when the piece is already short | just end; the content is the conclusion |
| Section-ending restatement | a mini-summary at the end of each section | end at the last substantive point |
| Question restatement | "You're asking about X. This is important because..." | start with the answer |
| Rhetorical-question filler | "So what does this mean?" | state what it means |

---

## 5. Semantic-pattern bans

**Inflated gravity:** a login form is a login form, not "the gateway to the user's digital journey". Do not treat routine things as earth-shattering.

**Explaining significance instead of demonstrating it:** "This is significant because...", "The significance of X cannot be understated." Cut the label; add the specific that makes importance self-evident.

**False comprehensiveness:** "from startups to enterprises, from marketing to engineering" unless you literally cover all of it.

**The "journey" metaphor:** things are not journeys unless they involve travel or real multi-stage change. Signing up is not "beginning a journey".

**Contrast framing (the #1 tell after the em-dash):** the whole negation-then-affirmation family. "Not X but Y", "X bukan Y", "Bukan X, justru Y", "While X is good, Y is better", "X bukan sekadar Y", didactic "X differs from Y: X is..., Y is...". Reframe, do not just delete: state the affirmative directly with the concrete detail that makes it true. "While X is good, Y is better" becomes "Y is better because [specific reason]." A bare single-fact negation is fine; it becomes contrast framing only when an affirmation follows it.

**Binary / false-dichotomy framing:** collapsing a nuanced point into two poles for effect. "The question isn't X, it's Y.", "This isn't about X, it's about Y.", "There are two kinds of people...", "It's not a matter of if, but when." The world is rarely binary; state the actual claim with its real conditions.

**Default redemption arc:** the inability to end on a negative, forcing a lesson or silver lining onto every bad outcome ("However, with the right approach..."). Some outcomes are just losses; state the root cause.

**Motivational-poster tone:** not every problem is an "opportunity". Call problems problems.

**Bold-first bullets:** every list item opening with a bold phrase then a colon then a description is the single biggest formatting tell. Use prose, or plain bullets without bold headers.

**Listicle in a trench coat:** sequential points disguised as prose ("The first... The second... The third...").

**Header inflation:** no H2/H3 for content that is one or two sentences. Earn the header.

---

## 6. False-agency ban

Inanimate things do not perform human actions. This is among the top tells; most excess machine verbs are false-agency verbs.

| Banned | Fix |
|--------|-----|
| "the data tells us" | state the finding, or "analysts found..." |
| "the report highlights" | "the report shows..." or state the finding |
| "the market rewards" | "[specific actors] benefit from..." |
| "this approach tackles" | "this approach addresses..." or restructure |
| "the framework understands" | delete; frameworks do not understand |
| "the algorithm learns" | acceptable only in a literal ML context |

**Copula avoidance:** do not replace "is" with "serves as / stands as / represents / marks", or "has" with "features / offers / boasts", when the plain verb works. Flag two or more of these in proximity as a chain.

---

## 7. Present-participle overload

Ban trailing -ing clauses appended for fake analytical depth: "highlighting the importance of", "showcasing the diversity of", "emphasizing the significance of", "reflecting the continued relevance of", "underscoring the need for", "paving the way for", "ensuring accessibility". (Distinct from the "By [gerund]" opener in section 4; this is end-of-sentence padding.)

## 8. Adverb discipline

Cut -ly adverbs that inflate or hedge without adding information: importantly, fundamentally, remarkably, arguably, seemingly, notably, interestingly, significantly, profoundly, essentially, incredibly, undeniably, undoubtedly, overwhelmingly, increasingly (when vague). Test: remove it; if the sentence means the same, it stays out.

## 9. Cadence and burstiness

Human writing varies sentence and paragraph length; machine writing is metronomic.

- **Cadence uniformity is the #1 surviving structural tell.** Sentences clustering in the 18-to-24-word range, paragraph after paragraph. Scan for it first.
- **Perfect-rectangle paragraphs:** three consecutive paragraphs each with the same number of similar-length sentences, forming a grid. Vary paragraph depth, not only sentence length.
- Mix short sentences (3 to 8 words) with long ones (20 to 30). Vary paragraph endings. Prefer two or four items over a reflexive three.

## 10. Synonym cycling (elegant variation)

Do not rotate synonyms for the same entity. If the subject is React, keep calling it React, not "the framework", "this JavaScript library", "Meta's creation". Repetition of the clearest word beats forced variation.

## 11. Vague attribution

"Experts agree", "studies show", "research indicates", "data proves" with no specific source. Name the source or cut the claim.

## 12. Hedging discipline

- Reserve hedging for genuine uncertainty. Pre-apologetic hedging before a confident claim ("You might find that X works for you...", "Depending on your situation...") is position-softening, not nuance.
- Across a conversation, watch for a correct position softening gradually turn by turn. State it once, plainly, and hold it.

## 13. Rhetorical-device abuse

- Self-posed rhetorical question answered immediately: "The result? A complete rethink."
- Mid-sentence pivot question for micro-suspense: "But now? You won't be able to unsee this." / "The solution? It's simpler than you think."
- Closing aphorism / mic-drop final line: "And that changes everything."
- Setup-resolution: "While X may seem Y, the reality is Z."
- "Think of it as..." patronizing analogies; "Imagine a world where..." scenario setups.
- Performed authenticity: "I'll be honest,", "Let me be real,", "Genuinely, I think,". The honesty marker is the tell; state the assessment directly.

---

## 14. Sycophancy and chat artifacts

- **Openers:** "Certainly!", "Sure! Here's...", "Great question!", "I hope this helps!", "As an AI language model", "As of my last update".
- **Turn-closers:** "If you'd like, I can...", "Would you like me to expand on any of these?", "Let me know if you want more detail." End where the content ends.

---

## 15. The 2026 model-tell panel

The current generation suppresses the old tells and leaks new ones. Scan for these as a panel.

- **Punctuation successors:** colon-elaboration density ("Here's the thing: X." "The result: Y."), a semicolon uptick, smart-quote fingerprints.
- **Affirmative pivot (escalating, distinct from contrast framing):** "It's not just X, it's Y." / "This isn't just a memoir, it's a love letter." Fix: state Y directly with the detail that makes it true.
- **Staccato triplet:** "No meetings. No bureaucracy. Just results." Fix: one real sentence.
- **Fixed significance collocations:** "plays a crucial role", "stands as a testament to", "serves as a reminder", "underscores the importance of", "at the forefront of", "paving the way for", "leaves an indelible mark".
- **Structural-density panel:** title case on every heading, emoji section markers, a horizontal rule between every section, bold-colon bullets, decorative blockquotes, markdown leaking into plain-text platforms.
- **Model-specific:** one model family defaults hard to symmetrical bullets and balanced pros-and-cons even for narrative tasks. When editing that output, break the reflexive three-point lists.

---

## 16. Document-specific notes

- **Proposals and reports:** lead with the conclusion; one idea per paragraph; evidence before claim; no contrast framing.
- **Slides:** body copy and speaker notes obey every rule above. The top slide tell is a title that states the topic instead of the insight; an action title states the conclusion.
- **Code and comments:** flag scaffolding no human writes, a trivially obvious comment over a self-evident line, an over-named local where `i` would do, a helper that wraps a single built-in. In multi-turn agentic coding, refactor rather than appending new logic at the end of functions.
- **Social and marketing copy:** the highest-volume slop register; the cliched calls to action and the manufactured urgency are the first detection point.

---

## 17. AI-detection claims discipline

If you ever score or flag text, be careful what you claim. This standard is an editorial style scorer: it flags stylistic patterns, regardless of who or what wrote the text. It is not an authorship classifier and not a provenance checker.

- Three distinct things, never conflated: (1) editorial style scoring (this standard), (2) statistical detection (model-signal classifiers; biased and evadable, and they need a running model), (3) cryptographic provenance marking (C2PA, SynthID; blind to non-adopters).
- Do not claim "undetectable", "bypass", "99% human", "guaranteed to pass [any detector]", or any accuracy percentage you cannot substantiate with retained evidence. Regulators have acted against unsubstantiated detector-accuracy claims.
- Detectors carry documented bias against non-native English writers and against neurodivergent writers (false-positive rates that make them unreliable for individual-authorship judgments). Never present a style score as proof a specific person used AI, and never let it drive punitive action.
- Treat any banned-pattern lexicon as a dated, versioned artifact with a refresh cadence; tells depreciate as models change.

---

## The litmus test

Read it back. Does it sound like a model wrote it? If yes, rewrite until it sounds like a human expert wrote it, because that is who should be writing it.
