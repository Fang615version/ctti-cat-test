// CTTI 猫咪人格测试 - 主逻辑
(function() {
  'use strict';

  let currentQuestion = 0;
  let answers = [];

  // 页面切换
  function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    window.scrollTo(0, 0);
  }

  // 渲染题目
  function renderQuestion() {
    const q = questions[currentQuestion];
    const total = questions.length;
    const progress = ((currentQuestion) / total) * 100;

    document.getElementById('progress-bar').style.width = progress + '%';
    document.getElementById('progress-text').textContent = `${currentQuestion + 1} / ${total}`;
    document.getElementById('question-title').textContent = `第${q.id}题`;
    document.getElementById('question-text').textContent = q.text;

    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

    q.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = opt.text;
      btn.addEventListener('click', () => selectOption(opt.score));
      optionsContainer.appendChild(btn);
    });
  }

  // 选择选项
  function selectOption(score) {
    answers.push(score);

    // 按钮动画
    const btns = document.querySelectorAll('.option-btn');
    btns.forEach(b => b.style.pointerEvents = 'none');

    currentQuestion++;

    if (currentQuestion < questions.length) {
      setTimeout(() => {
        renderQuestion();
      }, 300);
    } else {
      setTimeout(() => {
        showResult();
      }, 500);
    }
  }

  // 计算结果
  function calculateResult() {
    const scores = { B: 0, T: 0, A: 0, Q: 0, D: 0, S: 0, F: 0, I: 0 };
    const tags = [];

    // 只对前16题计分
    for (let i = 0; i < 16; i++) {
      const score = answers[i];
      if (score && scores.hasOwnProperty(score)) {
        scores[score]++;
      }
    }

    // 附加题标签
    if (answers[16]) tags.push(answers[16]);
    if (answers[17]) tags.push(answers[17]);

    // 组合代码
    const code =
      (scores.B >= scores.T ? 'B' : 'T') +
      (scores.A >= scores.Q ? 'A' : 'Q') +
      (scores.D >= scores.S ? 'D' : 'S') +
      (scores.F >= scores.I ? 'F' : 'I');

    return { code, scores, tags };
  }

  // 获取行为标签文字
  function getTagLabels(tagScores) {
    const tagMap = {
      tag_clingy: '跟屁虫',
      tag_chill: '佛系室友',
      tag_ghost: '隐形室友',
      tag_nightrun: '跑酷选手',
      tag_pusher: '推桌狂魔',
      tag_ignored: '叫不动'
    };
    return tagScores.map(t => tagMap[t] || t).filter(Boolean);
  }

  // 显示结果
  function showResult() {
    const result = calculateResult();
    const catType = catTypes[result.code];

    if (!catType) {
      console.error('Unknown type:', result.code);
      return;
    }

    // 填充结果页
    document.getElementById('result-emoji').textContent = catType.emoji;
    document.getElementById('result-name').textContent = catType.name;
    document.getElementById('result-code').textContent = catType.code;
    document.getElementById('result-slogan').textContent = catType.slogan;
    document.getElementById('result-description').textContent = catType.description;
    document.getElementById('result-owner-message').textContent = `"${catType.ownerMessage}"`;

    // 维度标签
    const traitsContainer = document.getElementById('result-traits');
    traitsContainer.innerHTML = '';
    const traitLabels = {
      B: '大胆', T: '胆小', A: '活跃', Q: '安静',
      D: '霸道', S: '温顺', F: '亲人', I: '独立'
    };
    for (const key of ['B','A','D','F']) {
      if (result.code.includes(key)) {
        const tag = document.createElement('span');
        tag.className = 'trait-tag';
        tag.textContent = traitLabels[key];
        traitsContainer.appendChild(tag);
      }
    }

    // 行为标签
    const tagLabels = getTagLabels(result.tags);
    const extraTags = catType.tags.slice(0, 2);
    const allTags = [...new Set([...tagLabels, ...extraTags])];

    const tagsContainer = document.getElementById('result-tags');
    tagsContainer.innerHTML = '';
    allTags.forEach(t => {
      const tag = document.createElement('span');
      tag.className = 'behavior-tag';
      tag.textContent = t;
      tagsContainer.appendChild(tag);
    });

    // 设置主题色
    document.documentElement.style.setProperty('--theme-color', catType.color);

    showPage('page-result');
  }

  // 生成分享卡片
  function generateShareCard() {
    const catType = catTypes[calculateResult().code];
    const canvas = document.createElement('canvas');
    const scale = 2;
    canvas.width = 375 * scale;
    canvas.height = 500 * scale;
    const ctx = canvas.getContext('2d');
    ctx.scale(scale, scale);

    // 背景
    ctx.fillStyle = '#FFFFFF';
    ctx.roundRect(0, 0, 375, 500, 20);
    ctx.fill();

    // 顶部色块
    ctx.fillStyle = catType.color;
    ctx.beginPath();
    ctx.roundRect(0, 0, 375, 160, [20, 20, 0, 0]);
    ctx.fill();

    // Emoji
    ctx.font = '72px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(catType.emoji, 187, 115);

    // 类型名
    ctx.fillStyle = '#1A1A2E';
    ctx.font = 'bold 32px "PingFang SC", "Microsoft YaHei", sans-serif';
    ctx.fillText(catType.name, 187, 210);

    // 代码
    ctx.fillStyle = catType.color;
    ctx.font = 'bold 18px "Courier New", monospace';
    ctx.fillText(catType.code, 187, 240);

    // 一句话画像
    ctx.fillStyle = '#555';
    ctx.font = '16px "PingFang SC", "Microsoft YaHei", sans-serif';
    wrapText(ctx, catType.slogan, 187, 280, 320, 22);

    // 分隔线
    ctx.strokeStyle = '#EEE';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(40, 330);
    ctx.lineTo(335, 330);
    ctx.stroke();

    // 给主人的话
    ctx.fillStyle = catType.color;
    ctx.font = '15px "PingFang SC", "Microsoft YaHei", sans-serif';
    wrapText(ctx, catType.ownerMessage, 187, 360, 300, 20);

    // 底部标识
    ctx.fillStyle = '#CCC';
    ctx.font = '12px "PingFang SC", "Microsoft YaHei", sans-serif';
    ctx.fillText('CTTI 猫咪人格测试', 187, 470);

    return canvas.toDataURL('image/png');
  }

  function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    const chars = text.split('');
    let line = '';
    let currentY = y;
    for (let i = 0; i < chars.length; i++) {
      const testLine = line + chars[i];
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && i > 0) {
        ctx.fillText(line, x, currentY);
        line = chars[i];
        currentY += lineHeight;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, x, currentY);
  }

  // 保存/分享
  function shareResult() {
    const dataUrl = generateShareCard();
    const link = document.createElement('a');
    link.download = '我的猫咪人格.png';
    link.href = dataUrl;
    link.click();
  }

  // 重新开始
  function restart() {
    currentQuestion = 0;
    answers = [];
    document.documentElement.style.setProperty('--theme-color', '#58CC02');
    showPage('page-home');
  }

  // 初始化
  function init() {
    document.getElementById('btn-start').addEventListener('click', () => {
      showPage('page-quiz');
      renderQuestion();
    });

    document.getElementById('btn-share').addEventListener('click', shareResult);
    document.getElementById('btn-restart').addEventListener('click', restart);

    showPage('page-home');
  }

  document.addEventListener('DOMContentLoaded', init);
})();
