// CTTI 猫咪人格测试 - 题目数据（v6 优化版）
const questions = [
  // 神经质 B/T (题1-4)
  {
    id: 1,
    text: '你家猫第一次见到扫地机器人，它：',
    options: [
      { text: '凑上去闻一闻，跟着它走', score: 'B' },
      { text: '先装死，确认安全后再继续睡', score: null },
      { text: '还没开机就已经在衣柜顶上了', score: 'T' }
    ]
  },
  {
    id: 2,
    text: '朋友第一次来你家做客，你家猫：',
    options: [
      { text: '凑过去闻鞋蹭腿打招呼', score: 'B' },
      { text: '远处坐着，用写轮眼对客人灵魂审查', score: null },
      { text: '客人还没坐下，已经消失在床底', score: 'T' }
    ]
  },
  {
    id: 3,
    text: '你打开吸尘器，你家猫：',
    options: [
      { text: '跑过来看你在吸什么', score: 'B' },
      { text: '先装死，确认安全后再继续睡', score: null },
      { text: '你还没按开关它已经在天花板上了', score: 'T' }
    ]
  },
  {
    id: 4,
    text: '你家猫听到门外有陌生声音，它：',
    options: [
      { text: '走到门口闻一闻，想看看是谁', score: 'B' },
      { text: '抬头听了一下，然后继续舔毛', score: null },
      { text: '瞬间消失，三分钟后才从沙发底探出头', score: 'T' }
    ]
  },
  // 外向性 A/Q (题5-8)
  {
    id: 5,
    text: '凌晨三点你被响声惊醒，你家猫在：',
    options: [
      { text: '客厅全速跑酷，刚从冰箱顶跳上窗帘', score: 'A' },
      { text: '打哈欠翻身，碰倒了你的水杯', score: null },
      { text: '你脚边睡成一条围巾，根本没动过', score: 'Q' }
    ]
  },
  {
    id: 6,
    text: '你花了80块给自家猫买新玩具，它：',
    options: [
      { text: '没拆包装就扑上去了', score: 'A' },
      { text: '玩了三分钟，开始玩装玩具的塑料袋', score: null },
      { text: '看了一眼，意思是"买罐头不行吗"', score: 'Q' }
    ]
  },
  {
    id: 7,
    text: '你下班推开门，你家猫：',
    options: [
      { text: '在半空中——刚从书架跳到沙发上', score: 'A' },
      { text: '在你枕头上，一脸"你怎么又回来了"', score: null },
      { text: '在早上那个位置，姿势都没换过', score: 'Q' }
    ]
  },
  {
    id: 8,
    text: '你家猫一天里最大的运动量是：',
    options: [
      { text: '追苍蝇跑遍全家，飞上冰箱一巴掌拍死', score: 'A' },
      { text: '从沙发走到猫爬架，看了一眼，又走回去', score: null },
      { text: '从沙发走到饭碗，再走回沙发', score: 'Q' }
    ]
  },
  // 支配性 D/S (题9-12)
  {
    id: 9,
    text: '你家猫吃饭时的状态是：',
    options: [
      { text: '风卷残云，吃完了还去检查别的角落有没有粮', score: 'D' },
      { text: '慢慢吃，偶尔抬头看看你在干嘛', score: null },
      { text: '不紧不慢，有人靠近也不护食', score: 'S' }
    ]
  },
  {
    id: 10,
    text: '你家猫最喜欢的"王座"是：',
    options: [
      { text: '冰箱顶，居高临下俯视众生', score: 'D' },
      { text: '你的脑袋，它觉得这是它的坐垫', score: null },
      { text: '沙发上你旁边，挨着你就行', score: 'S' }
    ]
  },
  {
    id: 11,
    text: '你家猫面对新来的纸箱或袋子，它：',
    options: [
      { text: '必须第一个占领，别的猫别想靠近', score: 'D' },
      { text: '先进去待一会儿，出来再进去待一会儿', score: null },
      { text: '无所谓，你给它让位它才进去', score: 'S' }
    ]
  },
  {
    id: 12,
    text: '你摸你家猫的时候，它：',
    options: [
      { text: '让你摸是恩赐，摸久了推你的手', score: 'D' },
      { text: '摸两下开始呼噜，摸五下突然咬你', score: null },
      { text: '翻出肚皮，用爪子抱住你的手不让你停', score: 'S' }
    ]
  },
  // 宜人性 F/I (题13-16)
  {
    id: 13,
    text: '你回家开门的那一刻，你家猫：',
    options: [
      { text: '已经在门口，绕着你的腿疯狂蹭', score: 'F' },
      { text: '慢悠悠走过来，然后坐到饭碗旁边', score: null },
      { text: '在窗台回头看了你一眼，继续看窗外', score: 'I' }
    ]
  },
  {
    id: 14,
    text: '你在电脑前工作，你家猫：',
    options: [
      { text: '跳上来趴你键盘，拱你的手', score: 'F' },
      { text: '坐在你鼠标垫上，各过各的', score: null },
      { text: '在客厅自己的窝里，耳朵转了一下', score: 'I' }
    ]
  },
  {
    id: 15,
    text: '你抱起你家猫，它：',
    options: [
      { text: '靠在你肩上开始打呼噜', score: 'F' },
      { text: '勉强接受，三秒后开始扭动', score: null },
      { text: '变身僵硬木头，0.5秒挣脱跳走', score: 'I' }
    ]
  },
  {
    id: 16,
    text: '你半夜醒来发现你家猫在你旁边，它：',
    options: [
      { text: '贴着你睡，发出呼噜声', score: 'F' },
      { text: '看了你一眼，跳下床走了', score: null },
      { text: '根本不在，它从来不在卧室睡', score: 'I' }
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
