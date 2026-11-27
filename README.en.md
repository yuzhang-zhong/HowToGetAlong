<p align="center">
  <img src="assets/relationship-mark.svg" width="72" height="72" alt="Two connected conversation bubbles">
</p>

<h1 align="center">High-Value Relationship Guide · Evidence-Graded Interpersonal Relationships &amp; Communication Handbook</h1>

<p align="center">Evidence-informed open handbook, searchable web app, and anti-hallucination Agent Skill for interpersonal relationships, communication, conflict pause, apologies, boundaries, workplace issues, and domestic-violence safety.</p>

<p align="center"><a href="README.md">简体中文</a> · <a href="README.en.md">English</a> · <a href="https://yuzhang-zhong.github.io/HowToGetAlong/?lang=en">English search interface</a></p>

<p align="center">
  <a href="https://yuzhang-zhong.github.io/HowToGetAlong/?lang=en">Search the guide</a> ·
  <a href="#browse-the-book">Browse chapters</a> ·
  <a href="https://github.com/yuzhang-zhong/HowToGetAlong/releases/tag/guide-latest">Download offline</a> ·
  <a href="#contribute-and-translate">Contribute</a>
</p>

> **Quick answer:** An open-source practical guide, web search app, and anti-hallucination AI lookup Skill (`relationship-guide`) for everyday relationship & communication problems—how to pause a heated argument, apologize, say no, set boundaries at work or with family, and spot abusive red flags—where every tip rates its emotional discomfort, time needed, and A/B/C study evidence level.

**18 chapters · 274 recommendations**, written in Simplified Chinese. Start with the relationship question you have; there is no need to read in order. Each entry explicitly labels **discomfort / emotional cost, time cost, and persistence cost**, the potential benefit domain, its A/B/C research evidence grade, primary sources, and limitations. The guide does not diagnose anyone or decide whether you should stay in a relationship.

The seed edition has had three rounds of AI-assisted searches, but human full-text review is incomplete. See [evidence and verification](#evidence-and-verification) before citing it.

> **Safety before communication techniques:** Ongoing violence, threats, suicide risk, or abuse of a minor are not ordinary communication exercises. Prioritize the safety and support entries in [chapter 4](book/04-别陷进危险关系.md); see [chapter 16](book/16-别在网上把自己交出去.md) for online tracking, scams, and intimate-image risks. The guide does not replace counseling, psychiatric care, or legal advice. Laws and public-service resources concern mainland China; check their dates and official sources.

<details>
<summary>On this page</summary>

- [Start here](#start-here)
- [Chapters](#browse-the-book)
- [Search and offline reading](#search-and-offline-reading)
- [Evidence](#evidence-and-verification)
- [AI-assisted reading](#ask-an-ai-assistant-to-use-the-book)
- [Local setup](#run-locally)
- [License](#license)

</details>

## Start here

**Language:** The book is written in Simplified Chinese, which remains the source text. The search page has English controls and chapter names, but recommendations and sources remain in Chinese. This README is an English introduction, not a complete book translation. Reviewed chapter translations follow the [translation guide](docs/translation-guide.md).

| What you need | Suggested route |
| --- | --- |
| Help finding a specific topic | [Search the guide](https://yuzhang-zhong.github.io/HowToGetAlong/?lang=en) or choose a chapter below. Common English terms such as “apology,” “boundaries,” and “loneliness” map to Chinese text. |
| A starting point for everyday habits | [1. Keep relationships close](book/01-别让关系慢慢变淡.md) → [3. Hard conversations](book/03-难说的话怎么开口.md) → [10. Check popular claims](book/10-反面清单.md). |
| Concerns about control, violence, or online risks | Read [4. Unsafe relationships](book/04-别陷进危险关系.md) and [16. Protect yourself online](book/16-别在网上把自己交出去.md) first, rather than choosing communication tips by effort or benefit. |
| Sources to check or a way to help | Start with [evidence and verification](#evidence-and-verification), then the [writing guide](docs/写作规范.md) and [contribution steps](#contribute-and-translate). |

**Read the remarks before trying a recommendation.** They describe the study population, disputes, exceptions, and limits on applying the findings elsewhere. Look up unfamiliar terms in the [glossary](docs/术语表.md), and open the source when you need to check a claim.

<details>
<summary>An everyday example: receiving a friend's good news</summary>

<p align="center">
  <img src="assets/four-panel-friendship.png" width="900" alt="Two friendly robots share and celebrate good news in a four-panel comic">
</p>

Receiving a friend's good news with care. See [chapter 1, item 4](book/01-别让关系慢慢变淡.md).

</details>

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

## Search and offline reading

The search page (`index.html`) filters by keyword, chapter, evidence grade, benefit, outcome, and the three effort dimensions. It displays effort/benefit tiers and safety-chapter priority; chapter-and-item references open a preview of the related entry. Content comes from `book/`; rebuild generated editions after changing the source text.

| Format | How to use it |
| --- | --- |
| Online, no installation | [Open the English search interface](https://yuzhang-zhong.github.io/HowToGetAlong/?lang=en). Controls and chapter names are translated; the recommendations and sources are Chinese. |
| Offline, one portable file | Download `HowToGetAlong.html` from [GitHub Releases](https://github.com/yuzhang-zhong/HowToGetAlong/releases/tag/guide-latest) and double-click it. The book and search interface are bundled together; the file can also be shared through WeChat. The release updates automatically with the book. |
| Local server or your own build | Run `python -m http.server 8000` in the repository and open `http://localhost:8000/?lang=en`. Build `dist/HowToGetAlong.html` with `node tools/offline/build.mjs`; see [local setup](#run-locally). |

Opening the root `index.html` directly cannot load the local chapter files. Use the single-file offline edition if you do not want to run a server.

## Inside a recommendation

Each entry has a numbered action, machine-readable effort tags, and six fields:

| Field | What to look for |
| --- | --- |
| 成本 · Cost | Discomfort, time, persistence, and any other practical costs |
| 说人话 · In plain language | What the recommendation means in everyday terms |
| 收益 · Benefit | Findings, figures where available, and what was measured |
| 证据等级 · Evidence grade | A, B, or C under the project's grading rules |
| 来源 · Source | A research paper, official document, or stated experience |
| 备注 · Remarks | Applicability, uncertainty, disputes, and exceptions |

For example, [chapter 2, item 1](book/02-吵架别吵出事.md) discusses pausing an escalating argument and agreeing when to return. Its B grade does not mean that a half-hour pause was proven in a trial: the full entry distinguishes physiological-arousal research from experience-based recovery-time figures. Keep those qualifications with the advice.

## Evidence and verification

### Evidence grades

| Grade | Meaning |
| --- | --- |
| A | Specific figures from a meta-analysis, large cohort, or randomized controlled trial; legal entries cite the original law or an official document. |
| B | Research support without precise figures, or support from small samples, a single study, or observational/correlational designs. |
| C | Experience or common practice without direct research evidence. |

The current counts are **A: 126, B: 122, and C: 26**. Grades follow the evidence, not the popularity of a claim. Observational claims without precise figures or cross-validation are at most B; popular claims that cannot be traced to a primary source receive C. Failed replications and opposing evidence are noted rather than hidden.

The [writing guide](docs/写作规范.md) defines entry format, effort tags, benefit levels, outcome categories, and sorting. The search page's `COST_W`, `BEN_W`, and `tierOf` implement effort/benefit tiers. Relationship quality, mental health, time and energy, personal safety, personal freedom, longevity, and money are separate outcomes, not interchangeable scores. Chapter 4 is ordered by danger and action priority, without an effort/benefit tier.

The grade does not rate a person or relationship. Entries awaiting verification must not be treated as settled conclusions.

### Literature verification

> **Seed edition:** The recommendations have gone through three rounds of AI-assisted literature searches. Full-text sources have not yet all received human review. Check the original source before citing an entry; items marked “awaiting human review” need particular attention. See the [verification records](docs/核实记录/).

New entries begin with a primary paper or official document, and unresolved details are recorded alongside the findings. Three rounds of AI-assisted searches are **not a substitute for human full-text review**. Outstanding review lists are kept at the end of each batch:

- [Seed batch](docs/核实记录/2026-10-09-种子条目.md)
- [Second batch](docs/核实记录/2026-10-09-第二批.md)
- [Third batch](docs/核实记录/2026-10-10-第三批.md)

## Ask an AI assistant to use the book

The repository includes a Chinese [relationship-guide skill](skills/relationship-guide/). It searches the book before answering, ranks relevant entries under the book's rules, and cites chapter and item numbers. It should say when an answer is not in the book. For ongoing domestic violence, suicidal thoughts, or abuse of a minor, its instructions put immediate resources and first steps before discussion.

- **Claude Code / Codex:** Follow the [skill setup instructions](skills/relationship-guide/README.md).
- **Conversational assistants, such as Muse:** Upload the `book/` chapters as knowledge sources, then use [SKILL.md](skills/relationship-guide/SKILL.md) as the system prompt.
- **Assistants with only a system-prompt field:** Use the generated [prompt-only selection](skills/relationship-guide/PROMPT-ONLY.md). It includes 30 common recommendations and all 30 safety entries from chapters 4 and 16, and states when a topic is not included.

Check AI answers against the original entries, remarks, and sources; they do not replace professional judgment.

## Run locally

**Reading requires no commands:** use the [online or offline edition](#search-and-offline-reading). The following is for editing, validation, or hosting your own copy. GitHub Pages can serve the search page.

Use Git, Node.js (CI uses Node.js 20), and Python 3 for the local server. Preserve the repository's LF line endings when cloning:

```bash
git clone --config core.autocrlf=false https://github.com/yuzhang-zhong/HowToGetAlong.git
cd HowToGetAlong
node tools/offline/build.mjs      # Build dist/HowToGetAlong.html
node tools/build-prompt-only.mjs  # Regenerate the prompt-only selection
node tools/validate.mjs           # Validate structure and counts; also runs in CI
python -m http.server 8000        # Keep running; open http://localhost:8000/?lang=en
```

**Windows line endings:** The current validator expects LF in chapter files. Git's automatic CRLF conversion causes heading-parse and count errors. The clone option above preserves LF for this checkout. If an existing clone shows those errors, clone into a separate empty directory and keep any edits in the original.

At the current revision, validation should report `274 条 · A126 B122 C26 · 0 个警告` (274 entries, the stated grade counts, and zero warnings). Open `dist/HowToGetAlong.html` for the offline edition, or visit `http://localhost:8000/?lang=en` and search “apology” to inspect the Chinese entries and their sources. This validates structure and counts; the seed edition still requires human review of its literature.

The server keeps the terminal busy until you press `Ctrl+C`. Run later build commands in another terminal or after stopping it.

## Contribute and translate

Corrections, source checks, new recommendations, and translations are welcome:

1. **Report a problem:** Use the [issue forms](https://github.com/yuzhang-zhong/HowToGetAlong/issues/new/choose) for corrections, recommendations, or translation questions.
2. **Edit with sources:** Read the [writing guide](docs/写作规范.md) before opening a PR. New entries need a verification record. Research-based claims need a primary source; experience-based suggestions can be graded C when their basis is stated clearly.
3. **Validate before submitting:** After editing the book, run `node tools/validate.mjs` and regenerate the offline or prompt-only editions as needed. A format check does not verify the literature.

Translations belong under `translations/<language-code>/book/`, keep the same chapter and item numbers, and identify the Chinese source file and commit. Follow the [translation guide](docs/translation-guide.md): compare figures, evidence grades, safety steps, and scope against the Chinese text before publication. Unreviewed translations must not be labeled official.

## Roadmap

Online search and [automatically published offline HTML](https://github.com/yuzhang-zhong/HowToGetAlong/releases/tag/guide-latest) are available. The [roadmap](docs/路线图.md) prioritizes human source review, skill testing, reviewed English chapters, and broader chapter coverage, using 20 or more entries per chapter as a reference target. EPUB, PDF, and Anki exports remain planned rather than available downloads.

## Credits and related project

[High-Value Life Guide](https://github.com/eternity4719/HowToLiveBetter) covers longevity, money, time, and personal freedom. This project adapts its entry structure, A/B/C evidence grading, source-grounded skill approach, search page, and build tools for interpersonal relationships. Here, effort means discomfort, time, and persistence; the content is written for relationship topics. The books are maintained separately, with cross-references for navigation.

## License

- Book text and documentation (`book/` and `docs/`): [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), detailed in [LICENSE-CONTENT.md](LICENSE-CONTENT.md).
- Skills, search page, and build code: [MIT](LICENSE-CODE.md).

When sharing or adapting the text, credit “高性价比关系指南” (High-Value Relationship Guide), link to the repository and license, and state whether you changed it. For laws, policies, and statistics, include the version date where possible. The license files and their linked official legal text contain the full terms.
