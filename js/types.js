// CTTI 猫咪人格测试 - 16种类型数据
const catTypes = {
  BADF: {
    code: 'BADF',
    emoji: '🐯',
    name: '霸王龙',
    slogan: '打遍小区无敌手，连狗都绕着走',
    description: '天不怕地不怕，精力旺盛，领地意识极强，见人就蹭。它的世界没有"害怕"两个字，最高的地方它要上，最凶的猫它要打，但你回家它第一个冲过来翻肚皮。',
    ownerMessage: '你的猫选中了你当它的臣民，恭喜升职',
    tags: ['社牛', '精力爆表', '翻肚皮专业户'],
    traits: { neuroticism: 'B', extraversion: 'A', dominance: 'D', agreeableness: 'F' },
    color: '#FF6B35'
  },
  BADI: {
    code: 'BADI',
    emoji: '🏃',
    name: '午夜跑者',
    slogan: '白天叫不醒，凌晨三点准时开奥运',
    description: '胆子大、精力旺盛、霸道但不需要你。它有自己的节奏——白天睡觉是为了晚上冲刺。不粘你，但凌晨三点会踩着你的脸全速冲过卧室。',
    ownerMessage: '你的猫把你的睡眠当成了它的闹钟',
    tags: ['夜猫子', '跑酷选手', '踩脸狂魔'],
    traits: { neuroticism: 'B', extraversion: 'A', dominance: 'D', agreeableness: 'I' },
    color: '#7B2FF7'
  },
  BASF: {
    code: 'BASF',
    emoji: '🐶',
    name: '贴身保镖',
    slogan: '你去哪它去哪，上厕所在门口等',
    description: '胆子大、精力旺盛、温顺、亲人。猫界金毛，你走到哪跟到哪。回家在门口等，做饭在脚边转，上厕所门外守着。猫生使命就是待在你身边。',
    ownerMessage: '你在你猫心里的地位比猫粮还高',
    tags: ['粘人精', '呼噜机', '踩奶大师'],
    traits: { neuroticism: 'B', extraversion: 'A', dominance: 'S', agreeableness: 'F' },
    color: '#58CC02'
  },
  BASI: {
    code: 'BASI',
    emoji: '🎤',
    name: '喋喋喵',
    slogan: '一天到晚发表演讲，虽然你听不懂',
    description: '胆子大、精力旺盛、温顺、独立。不粘你，但要跟你说话。你做饭它评论，你洗澡它在门外发表意见，你工作它跳上桌面对你演讲。它不需要你抱，但它需要你听着。',
    ownerMessage: '你是全世界最耐心的听众',
    tags: ['话痨', '评论员', '自说自话'],
    traits: { neuroticism: 'B', extraversion: 'A', dominance: 'S', agreeableness: 'I' },
    color: '#1CB0F6'
  },
  BQDF: {
    code: 'BQDF',
    emoji: '👑',
    name: '领地主',
    slogan: '冰箱顶是它的王座，这个家它说了算',
    description: '大胆但不好动，霸道且不亲人。不跑不跳，但占据家中最高点俯视众生。走路带风，目光如炬，你来摸它赏你一个"你配吗"的眼神。但每天早上准时坐你枕头上，5公斤体重压醒你。',
    ownerMessage: '你的猫允许你住在它的房子里，感恩吧',
    tags: ['霸道总裁', '高处控', '压醒服务'],
    traits: { neuroticism: 'B', extraversion: 'Q', dominance: 'D', agreeableness: 'F' },
    color: '#FFB800'
  },
  BQDI: {
    code: 'BQDI',
    emoji: '🪟',
    name: '窗台哲学家',
    slogan: '谁都不需要，包括你',
    description: '大胆、安静、霸道、独立。整天趴在窗台看外面，仿佛在思考猫生的终极意义。不叫不跑不粘人，你以为它不在乎你，直到有一天你晚回家，发现它一直坐在门口。',
    ownerMessage: '你的猫不在乎你？那你晚回家试试',
    tags: ['深沉', '独来独往', '默默守候'],
    traits: { neuroticism: 'B', extraversion: 'Q', dominance: 'D', agreeableness: 'I' },
    color: '#6C7A89'
  },
  BQSF: {
    code: 'BQSF',
    emoji: '🛋️',
    name: '液体摆烂王',
    slogan: '身体没有固定形状，能躺绝不站',
    description: '大胆、安静、温顺、亲人。猫界禅修大师。哪儿都能睡，什么姿势都能躺，抱它不挣扎，只是失去骨骼从你手里流下去。猫生哲学：能不动就不动。',
    ownerMessage: '你的猫活成了你想要的样子',
    tags: ['瞌睡虫', '流动体质', '佛系'],
    traits: { neuroticism: 'B', extraversion: 'Q', dominance: 'S', agreeableness: 'F' },
    color: '#A8E6CF'
  },
  BQSI: {
    code: 'BQSI',
    emoji: '📦',
    name: '纸箱成瘾者',
    slogan: '三百块的窝不看一眼，快递箱爱不释手',
    description: '大胆、安静、温顺、独立。对所有"专为猫设计"的东西免疫，但一个快递箱能钻三天。不粘你，但会默默占据你刚坐过的椅子、刚脱的衣服。它的哲学是：越便宜越香，越贵越可疑。',
    ownerMessage: '你家猫的品味：越贵越可疑，越破越爱',
    tags: ['纸箱控', '佛系探索', '淘宝达人'],
    traits: { neuroticism: 'B', extraversion: 'Q', dominance: 'S', agreeableness: 'I' },
    color: '#DDA0DD'
  },
  TADF: {
    code: 'TADF',
    emoji: '🍚',
    name: '饿龙',
    slogan: '永远觉得你欠它一顿饭，刚吃完也饿',
    description: '胆小但精力旺盛，霸道且亲人。怕打雷、怕吸尘器、怕陌生人，但食物面前什么都不怕。用头蹭你、用爪子扒你、用哀怨眼神锁住你，只为多要一口。吃完三口抬头"就这？"——然后去翻垃圾桶。',
    ownerMessage: '你是全世界最称职的开罐器',
    tags: ['干饭王', '假装没吃饱', '翻垃圾桶'],
    traits: { neuroticism: 'T', extraversion: 'A', dominance: 'D', agreeableness: 'F' },
    color: '#FF4757'
  },
  TADI: {
    code: 'TADI',
    emoji: '🎪',
    name: '拆迁办主任',
    slogan: '你家不是家，是它的游乐场',
    description: '胆小、精力旺盛、霸道、独立。怕很多东西，但精力用不完，只按自己规矩来。桌上东西一个个推下去，垃圾桶翻倒，卫生纸撕成碎片——不是故意气你，是觉得这些东西本来就该在地上。',
    ownerMessage: '你的猫觉得你家装修方案需要重新考虑',
    tags: ['拆家王', '推桌狂魔', '纸巾杀手'],
    traits: { neuroticism: 'T', extraversion: 'A', dominance: 'D', agreeableness: 'I' },
    color: '#FF6348'
  },
  TASF: {
    code: 'TASF',
    emoji: '🥺',
    name: '胆小蘑菇',
    slogan: '门铃一响就原地蒸发，只信任你',
    description: '胆小、精力旺盛、温顺、亲人。活在一个处处危险的世界——门铃、打雷、你的喷嚏都能让它蒸发。只要你蹲下来轻声叫它，它会犹豫着慢慢挪进你怀里，把头埋进臂弯发出微弱呼噜。不是不爱世界，只是觉得世界太吵。',
    ownerMessage: '全世界它只信任你一个人，你赢了',
    tags: ['社恐', '只粘你', '蒸发术'],
    traits: { neuroticism: 'T', extraversion: 'A', dominance: 'S', agreeableness: 'F' },
    color: '#FF9FF3'
  },
  TASI: {
    code: 'TASI',
    emoji: '👻',
    name: '隐身侠',
    slogan: '客人来了就消失，只剩你证明你养了猫',
    description: '胆小、精力旺盛、温顺、独立。怕一切外来生物，0.3秒找到最隐蔽角落消失。不粘人，只在安全区活动。凌晨两点你醒来，发现它蹲在你床头柜上，两只大眼睛在黑暗中发着光，静静地看着你。',
    ownerMessage: '凌晨两点，你的猫在黑暗中守护着你',
    tags: ['隐身术', '深夜观察者', '独居侠'],
    traits: { neuroticism: 'T', extraversion: 'A', dominance: 'S', agreeableness: 'I' },
    color: '#5F27CD'
  },
  TQDF: {
    code: 'TQDF',
    emoji: '🧊',
    name: '傲娇怪',
    slogan: '你叫它装没听见，你不在它偷钻被窝',
    description: '胆小、安静、霸道、亲人。对外维持"我不需要任何人"的人设。你伸手它闪避，叫它名字耳朵动一下算给面子。但你出门后监控拍到——它蜷在你衣服上打呼噜。你回来前迅速归位假装一直趴着。被拆包一脸"你看什么看"。',
    ownerMessage: '别被它骗了，你不在家的时候它睡你枕头',
    tags: ['口嫌体正直', '监控拆穿', '高冷伪装'],
    traits: { neuroticism: 'T', extraversion: 'Q', dominance: 'D', agreeableness: 'F' },
    color: '#54A0FF'
  },
  TQDI: {
    code: 'TQDI',
    emoji: '👁️',
    name: '深夜凝视者',
    slogan: '白天不存在，半夜在走廊无声巡逻',
    description: '胆小、安静、霸道、独立。最神秘的存在——白天几乎看不到，只在半夜听到地板上轻微脚步声。不叫不跑不粘人，但家里每个角落都巡逻过。凌晨三点你翻身睁眼，发现它在黑暗中一动不动地盯着你。你们对视一秒，它转身消失在走廊尽头。',
    ownerMessage: '你的猫在半夜研究你，这算是爱吧',
    tags: ['神秘猫', '深夜巡逻', '对视一秒'],
    traits: { neuroticism: 'T', extraversion: 'Q', dominance: 'D', agreeableness: 'I' },
    color: '#2C3E50'
  },
  TQSF: {
    code: 'TQSF',
    emoji: '🪶',
    name: '飘过侠',
    slogan: '安静得像不存在，但偶尔飘过来蹭你',
    description: '胆小、安静、温顺、亲人。猫界最温柔的存在——不跑不叫不闹，大部分时间安静窝在角落。每隔一段时间无声飘到你身边，轻轻用头蹭一下你的手，然后又飘走。你低头看它，它已经回到角落了。你想确认它来过，但只觉得手背上有一点余温。',
    ownerMessage: '你的猫用最轻的方式告诉你：我在乎你',
    tags: ['温柔', '无声陪伴', '手背余温'],
    traits: { neuroticism: 'T', extraversion: 'Q', dominance: 'S', agreeableness: 'F' },
    color: '#C8D6E5'
  },
  TQSI: {
    code: 'TQSI',
    emoji: '🫧',
    name: '隐形猫',
    slogan: '你确定你养了猫吗',
    description: '胆小、安静、温顺、独立。16种中最难以捉摸的存在。不粘你，不争不抢不闹。安静活在你家角落，你经常忘记它的存在——直到深夜起床去厕所，一脚踩到一条毛茸茸的东西，它"喵"了一声，你才想起来：哦对，我养了只猫。',
    ownerMessage: '你的猫存在感为零，但少了它你睡不着',
    tags: ['存在感为零', '踩到才发现', '空气猫'],
    traits: { neuroticism: 'T', extraversion: 'Q', dominance: 'S', agreeableness: 'I' },
    color: '#DFE6E9'
  }
};
