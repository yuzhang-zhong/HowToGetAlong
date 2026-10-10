<div align="center">

<img src="assets/relationship-mark.svg" alt="Two connected conversation bubbles" width="64">

# High-Value Relationship Guide

[简体中文](README.md) · [English](README.en.md) · [English search interface](https://yuzhang-zhong.github.io/HowToGetAlong/?lang=en)

Practical advice for the moments when relationships get difficult: starting a hard conversation, responding to good news, handling conflict, making friends, setting boundaries, and staying safe.

**18 chapters · 274 recommendations.** Each entry lists the effort involved, the expected benefit, its evidence grade, and the source.

<img src="assets/four-panel-friendship.png" alt="Two friendly robots share and celebrate good news in a four-panel comic" width="820">

</div>

> **Seed edition:** The recommendations have gone through three rounds of AI-assisted literature searches. Full-text sources have not yet all received human review. Check the original source before citing an entry; items marked “awaiting human review” need particular attention. See the [verification records](docs/核实记录/).

## Language and translation

The book is currently written in Simplified Chinese, which remains the source text. The search page has English controls and chapter names, and this README summarizes the project in English. The search page displays the original Chinese recommendations. See the [translation guide](docs/translation-guide.md) to contribute a reviewed chapter translation.

## Browse the book

| Chapter | Topic |
| --- | --- |
| [1. Keep relationships close](book/01-别让关系慢慢变淡.md) | Everyday actions that help relationships last |
| [2. Argue without causing harm](book/02-吵架别吵出事.md) | Pausing and repairing conflict |
| [3. How to start hard conversations](book/03-难说的话怎么开口.md) | Apologies, refusals, requests, feedback, and money |
| [4. Recognize unsafe relationships](book/04-别陷进危险关系.md) | Warning signs, domestic violence, and safety planning |
| [5. Loneliness and making friends](book/05-孤独与交新朋友.md) | Building social ties and starting over after a move |
| [6. Workplace relationships](book/06-职场关系.md) | Isolation, conflict, harassment, and workers’ rights |
| [7. Family and generations](book/07-亲情与代际.md) | Parents, siblings, caregiving, and older relatives |
| [8. Dating and breakups](book/08-恋爱与分手.md) | Choosing partners, dating, and separation |
| [9. Relationships on screens](book/09-屏幕上的关系.md) | Messaging, social media, and online communication |
| [10. Popular claims without good evidence](book/10-反面清单.md) | Relationship advice claims checked against research |
| [11. After a relationship ends](book/11-关系结束之后.md) | Grief, divorce, and comforting someone |
| [12. Sex and intimacy](book/12-性与亲密.md) | Talking about sex, health, and intimacy |
| [13. In-laws and extended family](book/13-姻亲与大家庭.md) | Boundaries, shared holidays, and family money |
| [14. Gifts, favors, and reciprocity](book/14-人情往来的账.md) | Gift giving, favors, and returning help |
| [15. Relationships while parenting](book/15-育儿中的关系.md) | Discipline, praise, and helping children |
| [16. Protect yourself online](book/16-别在网上把自己交出去.md) | Dating scams, intimate images, and tracking software |
| [17. Building and repairing a marriage](book/17-婚姻的经营与修复.md) | Household labor, money, counseling, and infidelity |
| [18. Psychological challenges in relationships](book/18-关系里的心理困境.md) | Attachment, rejection sensitivity, and finding support |

## Online search

The [search page](https://yuzhang-zhong.github.io/HowToGetAlong/?lang=en) filters entries by chapter, evidence grade, benefit, outcome, and effort. Common English search terms such as “apology,” “boundaries,” and “loneliness” map to the corresponding Chinese text. Recommendations and sources remain in Simplified Chinese.

To run it locally, use `python -m http.server 8000` in the repository and open `http://localhost:8000/?lang=en`. Build the [offline HTML edition](https://github.com/yuzhang-zhong/HowToGetAlong/releases/tag/guide-latest) with `node tools/offline/build.mjs`.

## Ask an AI assistant to use the book

The repository includes a Chinese relationship-guide skill for Claude Code and Codex. It searches the book before answering, ranks relevant entries, and cites chapter and item numbers. For safety-related emergencies, it gives immediate resources and first steps before discussing the book. Setup instructions are in [the skill README](skills/relationship-guide/README.md).

## Evidence grades

| Grade | Meaning |
| --- | --- |
| A | Specific figures from a meta-analysis, large cohort, randomized controlled trial, or an official legal source. |
| B | Research supports the recommendation, with limited or non-specific evidence. |
| C | Experience or common practice without direct research evidence. |

The current counts are A: 126, B: 122, and C: 26. The grade reflects the source and study design; it does not rate a person or relationship.

## Contribute

Before proposing a new recommendation, read the [writing guide](docs/写作规范.md). New entries need a verification record. Research-based claims need a primary source; experience-based suggestions can be graded C when their basis is stated clearly.

Translations belong under `translations/<language-code>/book/`, keep the same chapter and item numbers, and must be checked against the Chinese source. See the [translation guide](docs/translation-guide.md).

## Reference and license

This project adapts the structure of [High-Value Life Guide](https://github.com/eternity4719/HowToLiveBetter) for interpersonal relationships. The books are maintained separately.

Book text and documentation: [CC BY 4.0](LICENSE-CONTENT.md). Skills, search page, and build code: [MIT](LICENSE-CODE.md).
