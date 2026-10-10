// 章节清单的唯一工具侧来源。index.html 里有一份运行时副本，
// tools/validate.mjs 会校验两边一致——增删章时：先改这里和 index.html，再跑校验。
export const CHAPTERS = [
  { n: 1,  file: 'book/01-别让关系慢慢变淡.md',   name: '别让关系慢慢变淡' },
  { n: 2,  file: 'book/02-吵架别吵出事.md',       name: '吵架别吵出事' },
  { n: 3,  file: 'book/03-难说的话怎么开口.md',   name: '难说的话怎么开口' },
  { n: 4,  file: 'book/04-别陷进危险关系.md',     name: '别陷进危险关系', safe: true },
  { n: 5,  file: 'book/05-孤独与交新朋友.md',     name: '孤独与交新朋友' },
  { n: 6,  file: 'book/06-职场关系.md',           name: '职场关系' },
  { n: 7,  file: 'book/07-亲情与代际.md',         name: '亲情与代际' },
  { n: 8,  file: 'book/08-恋爱与分手.md',         name: '恋爱与分手' },
  { n: 9,  file: 'book/09-屏幕上的关系.md',       name: '屏幕上的关系' },
  { n: 10, file: 'book/10-反面清单.md',           name: '反面清单' },
  { n: 11, file: 'book/11-关系结束之后.md',       name: '关系结束之后' },
  { n: 12, file: 'book/12-性与亲密.md',           name: '性与亲密' },
  { n: 13, file: 'book/13-姻亲与大家庭.md',       name: '姻亲与大家庭' },
  { n: 14, file: 'book/14-人情往来的账.md',       name: '人情往来的账' },
  { n: 15, file: 'book/15-育儿中的关系.md',       name: '育儿中的关系' },
  { n: 16, file: 'book/16-别在网上把自己交出去.md', name: '别在网上把自己交出去' },
  { n: 17, file: 'book/17-婚姻的经营与修复.md',   name: '婚姻的经营与修复' },
  { n: 18, file: 'book/18-关系里的心理困境.md',   name: '关系里的心理困境' },
];

export const FIELDS = ['成本', '说人话', '收益', '证据等级', '来源', '备注'];
export const TAG_KEYS = {
  难受: ['0', '少', '中', '多'],
  时间: ['0', '少', '中', '多'],
  毅力: ['否', '些', '是'],
  收益: ['大', '中', '小'],
  口径: ['关系质量', '心理健康', '时间精力', '人身安全', '人身自由', '寿命', '金钱'],
};
