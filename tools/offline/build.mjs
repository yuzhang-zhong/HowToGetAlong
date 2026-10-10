#!/usr/bin/env node
// 离线单文件构建：把 book/ 各章注入 index.html 的 <!--EMBED--> 标记处，
// 产出 dist/HowToGetAlong.html——双击即开，无需服务器。
// 用法：node tools/offline/build.mjs   （在仓库根目录运行）
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { CHAPTERS } from '../manifest.mjs';

const index = readFileSync('index.html', 'utf8');
const texts = CHAPTERS.map(c => {
  try { return readFileSync(c.file, 'utf8'); } catch { return ''; }
});
const failed = texts.filter(t => !t).length;
if (failed) { console.error(`有 ${failed} 个章节文件缺失，中止`); process.exit(1); }

const payload = JSON.stringify(texts).replace(/<\//g, '<\\/');
const marker = '<!--EMBED--><!-- 离线构建脚本会把章节数据注入到这个位置（见 tools/offline/build.mjs） -->';
if (!index.includes(marker)) { console.error('index.html 中找不到 <!--EMBED--> 标记'); process.exit(1); }

const out = index.replace(marker, '<script>window.EMBEDDED = ' + payload + ';</script>')
  .replace('<title>高性价比关系指南 · 在线检索</title>',
           '<title>高性价比关系指南 · 离线版</title>');

mkdirSync('dist', { recursive: true });
writeFileSync('dist/HowToGetAlong.html', out, 'utf8');
const kb = (Buffer.byteLength(out) / 1024).toFixed(0);
console.log(`已生成 dist/HowToGetAlong.html（${kb} KB，双击即可打开，含全部 ${CHAPTERS.length} 章检索）`);
