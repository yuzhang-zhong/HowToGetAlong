#!/usr/bin/env node
// 条目格式校验：编号连续、字段齐全、标签合法、交叉引用可解析、
// README/index.html 的计数与实际一致、SKILL 双副本同步。
// 用法：node tools/validate.mjs   （在仓库根目录运行）
import { readFileSync, existsSync } from 'node:fs';
import { CHAPTERS, FIELDS, TAG_KEYS } from './manifest.mjs';

const errors = [];
const warns = [];
const ok = (msg) => console.log('  ✓ ' + msg);
const err = (msg) => { errors.push(msg); console.log('  ✗ ' + msg); };
const warn = (msg) => { warns.push(msg); console.log('  ⚠ ' + msg); };

function parseChapter(text, ch) {
  const out = [];
  const parts = text.split(/^###\s+/m).slice(1);
  for (const p of parts) {
    const head = p.split('\n')[0];
    const m = head.match(/^(\d+)\.\s*(.+)$/);
    if (!m) { err(`${ch.file}：标题行无法解析 → "${head.slice(0, 40)}"`); continue; }
    const body = p.slice(head.length);
    const tagm = body.match(/<!--\s*成本标签:\s*([^>]+?)-->/);
    const tag = {};
    if (tagm) for (const kv of tagm[1].split(/[\s,，]+/)) {
      const [k, v] = kv.split('='); if (k && v) tag[k.trim()] = v.trim();
    }
    const e = { no: +m[1], title: m[2].trim(), ch, tag, fields: {} };
    for (const f of FIELDS) {
      const fm = body.match(new RegExp('^-\\s*' + f + '\\s*[:：]\\s*(.+)$', 'm'));
      if (fm) e.fields[f] = fm[1].trim();
    }
    out.push(e);
  }
  return out;
}

console.log('== 章节与条目 ==');
const entries = [];
for (const ch of CHAPTERS) {
  if (!existsSync(ch.file)) { err(`缺章节文件 ${ch.file}`); continue; }
  const text = readFileSync(ch.file, 'utf8');
  const head = text.split('\n')[0];
  if (!head.startsWith('# ' + ch.n + '.')) warn(`${ch.file} 首行标题与章节号不符：${head}`);
  const es = parseChapter(text, ch);
  entries.push(...es);
  // 编号连续
  es.forEach((e, i) => { if (e.no !== i + 1) err(`${ch.file} 第 ${e.no} 条编号不连续（应为 ${i + 1}）`); });
  ok(`${ch.file}：${es.length} 条`);
}

console.log('== 字段与标签 ==');
for (const e of entries) {
  const loc = `第${e.ch.n}章第${e.no}条`;
  for (const f of FIELDS) if (!e.fields[f]) err(`${loc}「${e.title}」缺字段：${f}`);
  if (!/[一-龥]/.test(e.title.slice(0, 2)) && !/^[「『《（(\d"“']/.test(e.title))
    warn(`${loc} 标题疑似非动词开头（人工核对）：${e.title}`);
  for (const [k, vals] of Object.entries(TAG_KEYS)) {
    if (!e.tag[k]) err(`${loc} 缺成本标签键：${k}`);
    else if (!vals.includes(e.tag[k])) err(`${loc} 标签值非法：${k}=${e.tag[k]}`);
  }
  const g = e.fields['证据等级'];
  if (!['A', 'B', 'C'].includes(g)) err(`${loc} 证据等级非法：${g}`);
  if (!/\d{4}|《|法释|最高法|http|经验|指路|概念/.test(e.fields['来源'] || '')) err(`${loc} 来源栏异常：${(e.fields['来源'] || '').slice(0, 50)}`);
}

console.log('== 交叉引用 ==');
const key = (c, n) => c + '-' + n;
const exist = new Set(entries.map(e => key(e.ch.n, e.no)));
let xrefCount = 0;
for (const e of entries) {
  const text = Object.values(e.fields).join(' ') + ' ' + e.title;
  for (const m of text.matchAll(/第\s*(\d+)\s*章第\s*(\d+)\s*条/g)) {
    xrefCount++;
    if (!exist.has(key(+m[1], +m[2])))
      err(`第${e.ch.n}章第${e.no}条 引用了不存在的 第${m[1]}章第${m[2]}条`);
    if (+m[1] > CHAPTERS.length) err(`第${e.ch.n}章第${e.no}条 引用章节号超界：${m[0]}`);
  }
  for (const m of text.matchAll(/《高性价比人生指南》第\s*(\d+)\s*节/g)) {
    const n = +m[1];
    if (n < 1 || n > 34) err(`第${e.ch.n}章第${e.no}条 引用原书章节号超界（1–34）：第${n}节`);
  }
}
ok(`书内交叉引用 ${xrefCount} 处全部可解析`);

console.log('== 计数一致性 ==');
const grade = { A: 0, B: 0, C: 0 };
entries.forEach(e => grade[e.fields['证据等级']]++);
const total = entries.length;
const readme = readFileSync('README.md', 'utf8');
const rm = readme.match(/(\d+)\s*条中\s*A\s*级\s*(\d+)\s*条、\s*B\s*级\s*(\d+)\s*条、\s*C\s*级\s*(\d+)\s*条/);
if (!rm) err('README 未找到 A/B/C 计数行');
else {
  if (+rm[1] !== total) err(`README 总条数 ${rm[1]} ≠ 实际 ${total}`);
  if (+rm[2] !== grade.A || +rm[3] !== grade.B || +rm[4] !== grade.C)
    err(`README 等级计数 A${rm[2]}/B${rm[3]}/C${rm[4]} ≠ 实际 A${grade.A}/B${grade.B}/C${grade.C}`);
  if (+rm[1] === total) ok(`README 计数一致：${total} 条，A${grade.A}/B${grade.B}/C${grade.C}`);
}
const index = readFileSync('index.html', 'utf8');
const ih = index.match(/(\d+)\s*章\s*·\s*(\d+)\s*条/);
if (!ih || +ih[1] !== CHAPTERS.length || +ih[2] !== total)
  err(`index.html 头部计数「${ih ? ih[0] : '未找到'}」≠ ${CHAPTERS.length} 章 ${total} 条`);
else ok(`index.html 计数一致：${CHAPTERS.length} 章 · ${total} 条`);
for (const c of CHAPTERS) if (!index.includes(c.file)) err(`index.html 章节清单缺 ${c.file}`);
const rmChap = CHAPTERS.every(c => readme.includes(c.file));
if (!rmChap) err('README 目录表与 manifest 不一致');

console.log('== 副本同步 ==');
const s1 = readFileSync('skills/relationship-guide/SKILL.md', 'utf8');
if (existsSync('.claude/skills/relationship-guide/SKILL.md')) {
  const s2 = readFileSync('.claude/skills/relationship-guide/SKILL.md', 'utf8');
  s1 === s2 ? ok('SKILL.md 正副本一致') : err('.claude/skills 下的 SKILL.md 副本与正本不同步');
} else err('缺 .claude/skills/relationship-guide/SKILL.md');
for (const f of ['docs/写作规范.md', 'docs/术语表.md', 'docs/路线图.md', 'docs/核实记录/2026-10-09-种子条目.md'])
  existsSync(f) ? ok('存在 ' + f) : err('缺 ' + f);

console.log('');
if (errors.length) {
  console.log(`结果：${errors.length} 个错误，${warns.length} 个警告`);
  process.exit(1);
} else {
  console.log(`结果：通过。${total} 条 · A${grade.A} B${grade.B} C${grade.C} · ${warns.length} 个警告（仅提示）`);
}
