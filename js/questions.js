// CTTI 猫咪人格测试 - 题目数据
const questions = [
  // 神经质 B/T (题1-4)
  {
    id: 1,
    text: '带猫去医院，医生伸手抱它，它：',
    options: [
      { text: '无所谓，任由摆布', score: 'B' },
      { text: '用眼神审判了医生', score: null },
      { text: '爪子抓住猫包边缘死不松手', score: 'T' }
    ]
  },
  {
    id: 2,
    text: '朋友第一次来家里，你的猫：',
    options: [
      { text: '凑过去闻鞋蹭腿打招呼', score: 'B' },
      { text: '远处坐着，用写轮眼对客人进行灵魂审查', score: null },
      { text: '客人还没坐下，已经消失在床底', score: 'T' }
    ]
  },
  {
    id: 3,
    text: '你打开吸尘器，你的猫：',
    options: [
      { text: '跑过来看你在吸什么', score: 'B' },
      { text: '从睡梦中惊醒瞪着你', score: null },
      { text: '你还没按开关它已经在天花板上了', score: 'T' }
    ]
  },
  {
    id: 4,
    text: '搬家第一天，你的猫：',
    options: [
      { text: '跳出来每个房间巡视一圈', score: 'B' },
      { text: '死活不出猫包，决定和猫包结为终身伴侣', score: null },
      { text: '死活不出猫包，选择与猫包共生', score: 'T' }
    ]
  },
  // 外向性 A/Q (题5-8)
  {
    id: 5,
    text: '凌晨三点你被响声惊醒，是：',
    options: [
      { text: '猫在客厅全速跑酷，刚从冰箱顶跳上窗帘', score: 'A' },
      { text: '猫打哈欠翻身，碰倒了你的水杯', score: null },
      { text: '不是猫，猫在你脚边睡成一条围巾', score: 'Q' }
    ]
  },
  {
    id: 6,
    text: '花了80块买新玩具，你的猫：',
    options: [
      { text: '没拆包装就扑上去了', score: 'A' },
      { text: '玩了三分钟，开始玩装玩具的塑料袋', score: null },
      { text: '看了一眼，意思是"买罐头不行吗"', score: 'Q' }
    ]
  },
  {
    id: 7,
    text: '你下班推开门，看到：',
    options: [
      { text: '猫在半空中——刚从书架跳到沙发', score: 'A' },
      { text: '猫在你枕头上，"你怎么又回来了"', score: null },
      { text: '猫在早上那个位置，姿势都没换过', score: 'Q' }
    ]
  },
  {
    id: 8,
    text: '你的猫一天的最大运动量是：',
    options: [
      { text: '追苍蝇跑遍全家，飞上冰箱一巴掌拍死', score: 'A' },
      { text: '从沙发走到猫爬架，看了一眼，又走回沙发', score: null },
      { text: '从沙发走到饭碗，再走回沙发', score: 'Q' }
    ]
  },
  // 支配性 D/S (题9-12)
  {
    id: 9,
    text: '两只猫吃饭，你的猫：',
    options: [
      { text: '先吃完自己的，再去抢别人的碗', score: 'D' },
      { text: '安静吃自己的，偶尔偷瞄对方的粮', score: null },
      { text: '别人来抢也不在意，甚至让开', score: 'S' }
    ]
  },
  {
    id: 10,
    text: '你的猫的"王座"是：',
    options: [
      { text: '冰箱顶，居高临下俯视众生', score: 'D' },
      { text: '你的电脑键盘，全家最重要的位置', score: null },
      { text: '沙发上你旁边，挨着你就行', score: 'S' }
    ]
  },
  {
    id: 11,
    text: '你从猫嘴里抢走它叼着的东西，它：',
    options: [
      { text: '立刻抢回来，顺便补你一口', score: 'D' },
      { text: '从震惊到失望到心如死灰', score: null },
      { text: '松嘴了，大眼睛无辜地看着你', score: 'S' }
    ]
  },
  {
    id: 12,
    text: '你摸它的时候，它：',
    options: [
      { text: '它让你摸是恩赐，摸久了推你手', score: 'D' },
      { text: '只能摸头，摸肚子等于宣战', score: null },
      { text: '翻出肚皮，用爪子抱住你的手不让你停', score: 'S' }
    ]
  },
  // 宜人性 F/I (题13-16)
  {
    id: 13,
    text: '你回家开门那一刻：',
    options: [
      { text: '它已经在门口，绕着你的腿疯狂蹭', score: 'F' },
      { text: '慢悠悠走过来，然后坐到饭碗旁边', score: null },
      { text: '在窗台回头看了你一眼，继续看窗外', score: 'I' }
    ]
  },
  {
    id: 14,
    text: '你在电脑前工作，你的猫：',
    options: [
      { text: '跳上来趴你键盘，拱你的手', score: 'F' },
      { text: '坐在你鼠标垫上，各过各的', score: null },
      { text: '在客厅自己的窝里，耳朵转了一下', score: 'I' }
    ]
  },
  {
    id: 15,
    text: '你抱起你的猫，它：',
    options: [
      { text: '靠在你肩上开始打呼噜', score: 'F' },
      { text: '勉强接受，三秒后开始扭动', score: null },
      { text: '变身僵硬木头，0.5秒挣脱跳走', score: 'I' }
    ]
  },
  {
    id: 16,
    text: '你觉得你家猫爱不爱你？',
    options: [
      { text: '当然爱，每天都在证明', score: 'F' },
      { text: '爱我，但含蓄到要看监控才发现', score: null },
      { text: '它不爱我，它只爱罐头，我是开罐器', score: 'I' }
    ]
  },
  // 附加题（不计入维度分数，用于生成行为标签）
  {
    id: 17,
    text: '你觉得你家猫最像哪种室友？',
    options: [
      { text: '跟屁虫型——你干啥它都在旁边', score: 'tag_clingy' },
      { text: '合租型——各过各的偶尔打个照面', score: 'tag_chill' },
      { text: '隔壁型——基本见不到面但偶尔听到动静', score: 'tag_ghost' }
    ]
  },
  {
    id: 18,
    text: '你家猫让你最崩溃的一次是：',
    options: [
      { text: '凌晨四点在你脸上跑酷', score: 'tag_nightrun' },
      { text: '把你刚收拾好的东西全推下桌', score: 'tag_pusher' },
      { text: '你叫它名字它回头看了你一眼然后转身走了', score: 'tag_ignored' }
    ]
  }
];
