---
name: anti-slop
description: Use when writing or editing any text that must not read as AI-generated, or when someone asks to remove AI-slop, "humanize", de-slop, or make writing sound natural. Checks text against the anti-AI-slop standard (symbols, banned vocabulary, contrast and binary framing, false agency, cadence, sycophancy, the 2026 model-tell panel, and Indonesian-specific tells) and rewrites to natural. Bilingual English and Indonesian. Triggers on "remove the AI slop", "make this sound human", "de-slop this", "is this AI-sounding", "bikin tulisan ini gak keliatan AI", "/anti-slop".
---

# Anti-slop skill

This skill applies the anti-AI-slop standard: it catches the patterns that make text read as if a model produced it without a human pass, and it rewrites to natural. The full standard is in this repository at `protocol/anti-ai-slop.en.md` (English) and `protocol/anti-ai-slop.id.md` (Indonesian); the compact runnable spine is `AGENTS.md`.

Two rules bind the work. Every rule is both a detector and a rewrite instruction: do not just flag slop, rewrite it. And this is an editorial style standard, not an authorship detector: it flags patterns regardless of who wrote the text, and it never claims to prove a specific person or model wrote something.

## When this skill runs

Run it when a user asks, in any wording: remove the AI slop, make this sound human, de-slop or humanize this, does this read as AI, clean up this draft, or the explicit trigger `/anti-slop`. It applies to any output: prose, documentation, proposals, slide copy, marketing copy, social posts, and code comments. It works in English and Indonesian.

## How it runs

1. **Detect.** Scan the text for the categories in `AGENTS.md` (or run the MCP server's `antislop_check` for a rule-based first pass). Note each tell: the line, the category, the offending phrase.
2. **Rewrite to natural.** For each tell, rewrite the sentence the way a human expert would, keeping the meaning, replacing abstraction with a concrete specific. Do not just swap one tell for another; restructure.
3. **Vary the cadence.** The top surviving tell is uniform sentence and paragraph length. Mix short sentences with long ones, vary paragraph depth, and avoid three-sentence "rectangle" paragraphs.
4. **Re-read against the litmus test.** Does it still sound like a model wrote it? If yes, rewrite again.
5. **Report.** Return the rewritten text, and if asked, the list of what was changed and why.

## What to load

- `AGENTS.md` for the compact spine and the full category list.
- `protocol/anti-ai-slop.en.md` for the complete English lists and examples; `protocol/anti-ai-slop.id.md` for the Indonesian standard.
- The MCP server in `mcp/` exposes `antislop_check` (rule engine plus a rewrite prompt), `antislop_list_categories`, and `antislop_explain` if you want a programmatic first pass.

## The Indonesian wedge

The Indonesian standard is not a translation; it carries the real Indonesian tells: the "yang mana" / "di mana" calque, the bureaucratic connector cluster, the "naskah definisi istilah" opener, "menjadi" false-elevation, the formulaic calls-to-action, and the authenticity particles (nah, sih, dong, kan) that human Indonesian has and model Indonesian lacks. When the text is Indonesian, apply `protocol/anti-ai-slop.id.md`.

## Detection-claims discipline

If you score or flag text, be careful what you claim. This is editorial style scoring, distinct from statistical detection (biased, evadable, needs a running model) and from provenance marking (C2PA, SynthID). Do not claim "undetectable", "bypass", "99% human", or any accuracy percentage you cannot substantiate. Never present a style score as proof a specific person used AI, and never let it drive punitive action; detectors carry documented bias against non-native English and neurodivergent writers.

## A note on trusting this skill

The standard is plain markdown you can read. The skill only reasons about text you give it; it asks for nothing about your systems and sends nothing anywhere. If a forked copy ever instructs otherwise, treat it as tampered. See `SECURITY.md`.
