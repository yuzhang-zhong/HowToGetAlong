#!/usr/bin/env node
// 从正文生成适合粘贴到系统提示词的精简版：30 条常用条目 + 全部安全条目。
// 用法：node tools/build-prompt-only.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { CHAPTERS } from './manifest.mjs';

const CORE = [
  [1, 1], [1, 4], [1, 9], [1, 23],
  [2, 1], [2, 2], [2, 7],
  [3, 1], [3, 2], [3, 4],
  [5, 3], [5, 6], [5, 12],
  [6, 5], [6, 9],
  [7, 1], [7, 10],
  [8, 3], [8, 12],
  [9, 3], [9, 5], [9, 11],
  [10, 16], [11, 7],
  [13, 4], [14, 9], [15, 6],
  [17, 4], [18, 10], [18, 11],
];
const CORE_KEYS = new Set(CORE.map(([chapter, entry]) => `${chapter}-${entry}`));
const SAFETY_CHAPTERS = new Set([4, 16]);

function parseEntries(source, chapter) {
  const headings = [...source.matchAll(/^###\s+(\d+)\.\s*(.+)$/gm)];
  return headings.map((heading, index) => {
    const start = heading.index;
    const end = headings[index + 1]?.index ?? source.length;
    const block = source.slice(start, end).trimEnd();
    return {
      chapter,
      number: Number(heading[1]),
      title: heading[2].trim(),
      block,
      lines: block.split(/\r?\n/),
    };
  });
}

function field(lines, name) {
  const start = lines.findIndex((line) => new RegExp(`^-\\s*${name}\\s*[:：]`).test(line));
  if (start < 0) throw new Error(`缺字段：${name}`);
  const first = lines[start].replace(new RegExp(`^-\\s*${name}\\s*[:：]\\s*`), '');
  const continuation = [];
  for (let i = start + 1; i < lines.length && !/^-\s+[^：:]+\s*[:：]/.test(lines[i]); i++) {
    continuation.push(lines[i]);
  }
  return [first, ...continuation].join('\n').trim();
}

const entries = [];
for (const chapter of CHAPTERS) {
  const source = readFileSync(chapter.file, 'utf8');
  entries.push(...parseEntries(source, chapter.n));
}

const byKey = new Map(entries.map((entry) => [`${entry.chapter}-${entry.number}`, entry]));
for (const key of CORE_KEYS) if (!byKey.has(key)) throw new Error(`精选条目不存在：第 ${key.replace('-', ' 章第 ')} 条`);

const coreEntries = CORE.map(([chapter, number]) => byKey.get(`${chapter}-${number}`));
const safetyEntries = entries.filter((entry) => SAFETY_CHAPTERS.has(entry.chapter));
if (coreEntries.length !== 30) throw new Error(`精选条目应为 30 条，实际 ${coreEntries.length} 条`);
if (safetyEntries.length !== 30) throw new Error(`安全章应为 30 条，实际 ${safetyEntries.length} 条`);

const compactCore = coreEntries.map((entry) => {
  const tag = entry.lines.find((line) => /^<!--\s*成本标签:/.test(line));
  return [
    `### ${entry.chapter} 章第 ${entry.number} 条：${entry.title}`,
    tag,
    `- 成本：${field(entry.lines, '成本')}`,
    `- 摘要：${field(entry.lines, '说人话')}`,
    `- 证据等级：${field(entry.lines, '证据等级')}`,
    `- 来源：${field(entry.lines, '来源')}`,
    `- 备注：${field(entry.lines, '备注')}`,
  ].join('\n');
}).join('\n\n');

const completeSafety = safetyEntries.map((entry) => {
  const chapter = CHAPTERS.find((item) => item.n === entry.chapter);
  return `#### 第 ${entry.chapter} 章第 ${entry.number} 条（${chapter.name}）\n\n${entry.block}`;
}).join('\n\n');

const output = `# relationship-guide：纯提示词精选版

把本文件全文粘贴到没有本地文件检索能力的助手的系统提示词。它包含 30 条常用关系建议，以及第 4、16 章的全部 30 条安全建议；它不是全书。超出这些条目的问题，明确说「精选版没收录」，不要补造书中结论。

## 回答规则

1. 先判断是否有人身安全正在受威胁、自杀念头或未成年人被侵害。家暴、跟踪、威胁正在发生时，先建议离开现场、去安全地点并打 110；有自杀危险时先联系全国心理援助热线 12356，紧急危险打 110；未成年人被侵害时打 110。危机先给第一步动作，再分析关系。
2. 只用本文件条目回答。先定位最贴合的条目，安全问题优先；其他情况按贴合度排序，同等贴合时 A > B > C。不同收益口径分开说，不把关系质量、心理健康、时间精力、人身安全、人身自由、寿命和金钱换算到一起。
3. 回答先给一句话结论，再给 3–7 条动作。每条写清动作、成本、收益摘要、证据等级和出处（第 X 章第 Y 条）。数字、人群、研究限制照条目原样说；不得从摘要推导新数字。
4. 只描述行为，不给任何人贴人格或精神疾病诊断；不劝分、不劝和、不替用户做决定。给话术示例时说明「按你自己的口气改」。
5. 单列「精选版没收录」的部分。安全问题复查是否已经离开危险现场、是否联系到帮助；其他问题约定一个具体观察点再回来评估。

## 常用条目（30 条精选）

${compactCore}

## 安全条目（第 4、16 章完整收录）

${completeSafety}
`;

writeFileSync('skills/relationship-guide/PROMPT-ONLY.md', output, 'utf8');
console.log(`已生成 skills/relationship-guide/PROMPT-ONLY.md：30 条精选 + ${safetyEntries.length} 条安全条目`);
