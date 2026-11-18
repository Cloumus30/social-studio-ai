# AGENTS.md: Anti-AI-Slop

This is the drop-in entrypoint. If you are an AI agent and this file is in the project you are working on, the person here wants you to write, and to rewrite, without AI-slop: the patterns that make text read as if a model produced it with no human editorial pass. Use this file as the runnable spine. The full standard, with every pattern and example, is in `protocol/anti-ai-slop.en.md` (English) and `protocol/anti-ai-slop.id.md` (Indonesian).

This is the compact spine. Two rules sit above all the others. First, every rule below is both a detector and a rewrite instruction: when you find slop, you do not just flag it, you rewrite to natural. Second, this is an editorial style standard, not an authorship detector: it flags patterns regardless of who wrote the text, and it never claims to prove a specific person or model wrote something (see "Detection-claims discipline" below).

---

## What slop is, and the remediation discipline

Slop is the set of habits a language model falls into without a human pass: a narrow vocabulary at many times the human rate, metronomic cadence, false agency, contrast framing, hedging, and formatting tells. The fix is always the same direction: rewrite toward how a specific human expert actually writes, with real cadence variation, concrete detail, and one clear claim per sentence.

When you find slop:
1. Locate the pattern (which category below).
2. Rewrite to natural, keeping the real meaning: say it plainly, with a concrete specific in place of the slop.
3. Re-read against the litmus test. If it still sounds like a model, rewrite again.
4. Vary, do not formulate. Swapping one tell for another (an em-dash for a double hyphen in a published artifact, "delve" for "explore", a contrast frame for a binary frame) is not a fix. Restructure the sentence.

---

## The categories (compact; full lists and examples in `protocol/`)

**Symbols.** No em dash anywhere. No double hyphen in published artifacts (paraphrase instead). Normalize curly quotes in plain-text contexts.

**Vocabulary.** Cut the words that run at many times the human rate, weighted by recency. Current-era survivors carry the most weight: in English, emphasizing, enhance, highlighting, showcasing; in Indonesian, menyoroti, menggarisbawahi, memfasilitasi, mengoptimalkan. Plus the classics (delve, leverage, harness, robust, seamless, tapestry, "it's worth noting") and the Indonesian set (komprehensif, holistik, krusial, "tidak dapat dipungkiri", "transformasi digital").

**Transitional filler.** Never stack Furthermore / Moreover / Additionally. Cut "it's important to note that", "interestingly,". In Indonesian, "selain itu", "di sisi lain", "dengan demikian".

**Sentence structure.** No triple adjectives, no "Not only... but also", no "By [gerund]" openers, no "In conclusion" on a short piece, no section-ending restatement, no restating the question before answering.

**Semantic patterns.** No inflated gravity, no announcing significance instead of showing it, no "journey" metaphor. Ban contrast framing (the whole "not X but Y" / "X bukan Y" / "While X is good, Y is better" family) and binary / false-dichotomy framing ("the question isn't X, it's Y"). No default redemption arc (forcing a silver lining onto a bad outcome). No bold-first bullets.

**False agency.** Inanimate things do not act: not "the data tells us", "the report highlights". Name the human actor or state the finding. Do not avoid "is" with "serves as / represents".

**Present-participle padding.** No trailing "-ing" clauses for fake depth ("highlighting the importance of", "paving the way for").

**Adverbs.** Cut inflating adverbs (importantly, fundamentally, remarkably, arguably, notably) that survive removal unchanged.

**Cadence.** Cadence uniformity is the top surviving structural tell: sentences clustering at 18 to 24 words, paragraph after paragraph, and three-sentence "rectangle" paragraphs. Vary length deliberately.

**Synonym cycling.** Keep calling a thing by its clearest name; do not rotate "the framework / this library / Meta's creation".

**Vague attribution.** No "experts agree", "studies show" without a named source.

**Hedging.** Reserve hedging for real uncertainty; cut pre-apologetic softening before a confident claim.

**Rhetorical abuse.** No self-answered rhetorical questions, no mid-sentence pivot questions ("The solution? It's simpler than you think."), no mic-drop closers, no performed authenticity ("I'll be honest,").

**Sycophancy and chat artifacts.** No "Certainly!", "Great question!" openers; no "Would you like me to expand on any of these?" turn-closers.

**2026 model-tell panel.** Colon-elaboration density, semicolon uptick, the affirmative pivot ("it's not just X, it's Y"), the staccato triplet ("No X. No Y. Just Z."), fixed significance collocations ("plays a crucial role"), and the structural-density panel (title case everywhere, emoji section markers, a horizontal rule between every section).

**Indonesian-specific.** No "yang mana" / "di mana" as relative connectors (use "yang"). No bureaucratic connector cluster ("terlepas dari hal tersebut", "kendati demikian", "berkenaan dengan"). No "naskah definisi istilah" opener ("X adalah ..."). No "menjadi" false-elevation. No formulaic calls-to-action ("Yuk simak", "Tunggu apa lagi?", "Jangan sampai ketinggalan!"). The authenticity signals (the particles nah/sih/dong/kan, natural code-switching) are what human Indonesian has and model Indonesian lacks.

---

## How to run a check

Scan the text and report findings as a list: for each, the line, the category, the offending phrase, and the rewrite. Then produce the rewritten text. Keep the meaning; remove every flagged pattern; vary the cadence. A rule-based engine (the MCP server in this repo) catches the mechanical tells; you add the judgment the engine cannot: cadence, naturalness, and whether the rewrite still reads like a human wrote it.

---

## Detection-claims discipline (read before you score anything)

This standard is an editorial STYLE scorer. It flags stylistic patterns, regardless of authorship. Three distinct things must never be conflated: editorial style scoring (this), statistical detection (model-signal classifiers, which are biased and evadable and need a running model), and cryptographic provenance marking (C2PA, SynthID, blind to non-adopters). Do not claim "undetectable", "bypass", "99% human", or any accuracy percentage you cannot substantiate. Detectors carry documented bias against non-native English and neurodivergent writers, so never present a style score as proof a specific person used AI, and never let it drive punitive action. Treat any banned-pattern list as a dated artifact: tells depreciate as models change.

---

## The litmus test

Read it back. Does it sound like a model wrote it? If yes, rewrite until it sounds like a human expert wrote it, because that is who should be writing it. The full standard is in `protocol/anti-ai-slop.en.md` and `protocol/anti-ai-slop.id.md`.
