import { Dynasty } from './types';

export const DYNASTIES: Dynasty[] = [
  {
    id: 'qin',
    name: '秦',
    period: '公元前221年 - 公元前207年',
    startYear: -221,
    endYear: -207,
    capital: '咸阳',
    summary: '中国历史上第一个大一统王朝。秦始皇废分封，行郡县，书同文，车同轨，统一度量衡，奠定了中国两千余年政治制度的基本格局。然其法家治国，严刑峻法，徭役繁重，二世而亡，却为汉朝的强盛留下了宝贵的政治遗产。',
    emperors: [
      { id: 'qin-1', templeName: '始皇帝', name: '嬴政', reignStart: -221, reignEnd: -210, eraName: '-', description: '千古一帝，统一六国。' },
      { id: 'qin-2', templeName: '二世皇帝', name: '胡亥', reignStart: -210, reignEnd: -207, eraName: '-', description: '昏庸暴虐，秦亡于其手。' }
    ]
  },
  {
    id: 'han',
    name: '汉',
    period: '公元前202年 - 公元220年',
    startYear: -202,
    endYear: 220,
    capital: '长安 / 洛阳',
    summary: '继秦之后的大一统王朝，分为西汉与东汉。汉初休养生息，文景之治奠定国力。汉武帝雄才大略，北击匈奴，凿空西域，独尊儒术，确立了儒家思想的正统地位。汉风泱泱，汉族由此得名。虽中经王莽之乱，光武中兴延续国祚，最终分崩于三国。',
    emperors: [
      { id: 'han-1', templeName: '太祖高皇帝', name: '刘邦', reignStart: -202, reignEnd: -195, description: '布衣天子，开创汉业。' },
      { id: 'han-2', templeName: '太宗孝文皇帝', name: '刘恒', reignStart: -180, reignEnd: -157, description: '文景之治，宽仁治国。' },
      { id: 'han-3', templeName: '孝景皇帝', name: '刘启', reignStart: -157, reignEnd: -141, description: '平定七国之乱，削藩巩固中央。' },
      { id: 'han-4', templeName: '世宗孝武皇帝', name: '刘彻', reignStart: -141, reignEnd: -87, eraName: '建元', description: '强汉巅峰，开疆拓土。' },
      { id: 'han-5', templeName: '世祖光武皇帝', name: '刘秀', reignStart: 25, reignEnd: 57, eraName: '建武', description: '中兴汉室，柔道治国。' },
      { id: 'han-6', templeName: '显宗孝明皇帝', name: '刘庄', reignStart: 57, reignEnd: 75, eraName: '永平', description: '明章之治，佛教东传。' }
    ]
  },
  {
    id: 'tang',
    name: '唐',
    period: '618年 - 907年',
    startYear: 618,
    endYear: 907,
    capital: '长安',
    summary: '中国历史上的巅峰盛世。政治开明，文化包容，万国来朝。太宗贞观之治与玄宗开元盛世，将国力推向顶峰。诗歌、书法、绘画成就斐然。安史之乱后国势转衰，藩镇割据，最终亡于五代十国之乱局。唐人街之名，见证其世界影响力。',
    emperors: [
      { id: 'tang-1', templeName: '高祖', name: '李渊', reignStart: 618, reignEnd: 626, eraName: '武德', description: '晋阳起兵，建立大唐。' },
      { id: 'tang-2', templeName: '太宗', name: '李世民', reignStart: 626, reignEnd: 649, eraName: '贞观', description: '贞观之治，天可汗。' },
      { id: 'tang-3', templeName: '高宗', name: '李治', reignStart: 649, reignEnd: 683, eraName: '永徽', description: '版图最大，虽然体弱多病。' },
      { id: 'tang-4', templeName: '周圣神皇帝', name: '武则天', reignStart: 690, reignEnd: 705, eraName: '天授', description: '唯一女皇，上承贞观下启开元。' },
      { id: 'tang-5', templeName: '玄宗', name: '李隆基', reignStart: 712, reignEnd: 756, eraName: '开元', description: '开元盛世，后因安史之乱避蜀。' },
      { id: 'tang-6', templeName: '宪宗', name: '李纯', reignStart: 805, reignEnd: 820, eraName: '元和', description: '元和中兴，削平藩镇。' }
    ]
  },
  {
    id: 'song',
    name: '宋',
    period: '960年 - 1279年',
    startYear: 960,
    endYear: 1279,
    capital: '开封 / 临安',
    summary: '分北宋与南宋。虽军事积弱，然经济繁荣，文化昌盛，科技发达。四大发明中有三项在宋代成熟或广泛应用。理学兴起，文人政治达到顶峰，"华夏民族之文化，历数千载之演进，造极于赵宋之世"。',
    emperors: [
      { id: 'song-1', templeName: '太祖', name: '赵匡胤', reignStart: 960, reignEnd: 976, eraName: '建隆', description: '陈桥兵变，杯酒释兵权。' },
      { id: 'song-2', templeName: '太宗', name: '赵光义', reignStart: 976, reignEnd: 997, eraName: '太平兴国', description: '统一南方，崇文抑武。' },
      { id: 'song-3', templeName: '仁宗', name: '赵祯', reignStart: 1022, reignEnd: 1063, eraName: '嘉祐', description: '仁宗盛治，名臣辈出。' },
      { id: 'song-4', templeName: '神宗', name: '赵顼', reignStart: 1067, reignEnd: 1085, eraName: '熙宁', description: '王安石变法。' },
      { id: 'song-5', templeName: '徽宗', name: '赵佶', reignStart: 1100, reignEnd: 1126, eraName: '宣和', description: '艺术天才，治国昏君，靖康之耻。' },
      { id: 'song-6', templeName: '高宗', name: '赵构', reignStart: 1127, reignEnd: 1162, eraName: '绍兴', description: '建立南宋，偏安一隅。' }
    ]
  },
  {
    id: 'ming',
    name: '明',
    period: '1368年 - 1644年',
    startYear: 1368,
    endYear: 1644,
    capital: '南京 / 北京',
    summary: '驱除鞑虏，恢复中华。明朝君主集权空前强化，废丞相，设厂卫。郑和下西洋宣扬国威。中后期资本主义萌芽，市民文化兴起。虽有万历怠政、阉党之祸，但在抗倭援朝、抵御外侮上展现了刚烈气节，"天子守国门，君王死社稷"。',
    emperors: [
      { id: 'ming-1', templeName: '太祖', name: '朱元璋', reignStart: 1368, reignEnd: 1398, eraName: '洪武', description: '驱逐蒙元，重塑汉统。' },
      { id: 'ming-2', templeName: '成祖', name: '朱棣', reignStart: 1402, reignEnd: 1424, eraName: '永乐', description: '永乐大典，郑和下西洋，迁都北京。' },
      { id: 'ming-3', templeName: '仁宗', name: '朱高炽', reignStart: 1424, reignEnd: 1425, eraName: '洪熙', description: '仁宣之治开端。' },
      { id: 'ming-4', templeName: '宣宗', name: '朱瞻基', reignStart: 1425, reignEnd: 1435, eraName: '宣德', description: '文治武功，大明全盛。' },
      { id: 'ming-5', templeName: '世宗', name: '朱厚熜', reignStart: 1521, reignEnd: 1567, eraName: '嘉靖', description: '崇道修仙，海瑞罢官。' },
      { id: 'ming-6', templeName: '神宗', name: '朱翊钧', reignStart: 1572, reignEnd: 1620, eraName: '万历', description: '万历十五年，明亡之始。' },
      { id: 'ming-7', templeName: '思宗', name: '朱由检', reignStart: 1627, reignEnd: 1644, eraName: '崇祯', description: '煤山自缢，刚烈殉国。' }
    ]
  },
  {
    id: 'qing',
    name: '清',
    period: '1644年 - 1912年',
    startYear: 1644,
    endYear: 1912,
    capital: '北京',
    summary: '中国最后一个封建王朝，由满族建立。康雍乾三朝奠定了近代中国版图的基础，人口突破四亿。君主专制达到顶峰。晚清时期，面对三千年未有之大变局，虽有洋务运动、戊戌变法等自救尝试，终因制度腐朽，在辛亥革命的浪潮中走向终结。',
    emperors: [
      { id: 'qing-1', templeName: '圣祖', name: '玄烨', reignStart: 1661, reignEnd: 1722, eraName: '康熙', description: '在位六十一年，擒鳌拜，平三藩，收台湾。' },
      { id: 'qing-2', templeName: '世宗', name: '胤禛', reignStart: 1722, reignEnd: 1735, eraName: '雍正', description: '勤政肃贪，改土归流，设立军机处。' },
      { id: 'qing-3', templeName: '高宗', name: '弘历', reignStart: 1735, reignEnd: 1796, eraName: '乾隆', description: '十全武功，康乾盛世顶峰，盛极而衰。' },
      { id: 'qing-4', templeName: '宣宗', name: '旻宁', reignStart: 1820, reignEnd: 1850, eraName: '道光', description: '鸦片战争，割地赔款。' },
      { id: 'qing-5', templeName: '德宗', name: '载湉', reignStart: 1875, reignEnd: 1908, eraName: '光绪', description: '戊戌变法，瀛台幽禁。' },
      { id: 'qing-6', templeName: '-', name: '溥仪', reignStart: 1908, reignEnd: 1912, eraName: '宣统', description: '末代皇帝，清朝覆亡。' }
    ]
  }
];

export const INITIAL_AI_MESSAGE = "吾乃太史公之徒。阁下欲知此朝何事？关于帝王生平、典章制度或民间轶事，皆可问询。";
