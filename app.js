/* =========================================================
   Leen Science — practice engine
   Works offline: open index.html in any browser.
   ========================================================= */
const SC = {
  topics: [],
  registerTopic(t){ SC.topics.push(t); },
  byId(id){ return SC.topics.find(t => t.id === id); }
};

/* ---------------------------------------------------------
   1. Storage
   --------------------------------------------------------- */
const KEY = 'leen-science-v1';
const DEFAULTS = { name:'Leen', lang:'en', theme:'light', sound:true, stars:0, skills:{}, mistakes:[], days:[] };
let DB = (() => {
  try { return Object.assign({}, DEFAULTS, JSON.parse(localStorage.getItem(KEY) || '{}')); }
  catch(e){ return Object.assign({}, DEFAULTS); }
})();
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(DB)); } catch(e){} };

function skillState(id){
  if(!DB.skills[id]) DB.skills[id] = { score:0, best:0, seen:0, right:0, wrong:0, mastered:false };
  return DB.skills[id];
}
function markToday(){
  const d = new Date().toISOString().slice(0,10);
  if(DB.days[DB.days.length-1] !== d){ DB.days.push(d); DB.days = DB.days.slice(-400); }
}
function streak(){
  if(!DB.days.length) return 0;
  const day = n => new Date(Date.now() - n*86400000).toISOString().slice(0,10);
  const set = new Set(DB.days);
  if(!set.has(day(0)) && !set.has(day(1))) return 0;
  let n = set.has(day(0)) ? 0 : 1, c = 0;
  while(set.has(day(n))){ c++; n++; }
  return c;
}

/* SmartScore — grows fast at first, slowly near 100 (like IXL) */
const gainFor = s => s < 40 ? 11 : s < 60 ? 9 : s < 75 ? 7 : s < 88 ? 5 : s < 96 ? 3 : 2;
const lossFor = s => s < 40 ? 4 : s < 60 ? 7 : s < 80 ? 9 : 12;

function recordAnswer(skillId, correct, qIndex){
  const s = skillState(skillId);
  s.seen++;
  if(correct){
    s.right++;
    s.score = Math.min(100, s.score + gainFor(s.score));
    DB.stars++;
    DB.mistakes = DB.mistakes.filter(m => !(m.s === skillId && m.q === qIndex));
  } else {
    s.wrong++;
    s.score = Math.max(0, s.score - lossFor(s.score));
    if(!DB.mistakes.some(m => m.s === skillId && m.q === qIndex)) DB.mistakes.push({ s:skillId, q:qIndex });
    if(DB.mistakes.length > 120) DB.mistakes.shift();
  }
  s.best = Math.max(s.best, s.score);
  let justMastered = false;
  if(s.score >= 100 && !s.mastered){ s.mastered = true; justMastered = true; DB.stars += 10; }
  markToday(); save();
  return justMastered;
}

/* ---------------------------------------------------------
   2. Helpers
   --------------------------------------------------------- */
const $  = (s, r=document) => r.querySelector(s);
const el = (tag, cls, html) => { const n = document.createElement(tag); if(cls) n.className = cls; if(html != null) n.innerHTML = html; return n; };
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const shuffle = a => { a = a.slice(); for(let i=a.length-1;i>0;i--){ const j = Math.floor(Math.random()*(i+1)); [a[i],a[j]] = [a[j],a[i]]; } return a; };
const norm = s => String(s||'').toLowerCase().trim().replace(/[’']/g,'').replace(/[^a-z0-9 ]/g,' ').replace(/\s+/g,' ').trim();
function sameWord(input, list){
  const n = norm(input); if(!n) return false;
  return list.some(a => { const m = norm(a); return n === m || n === m + 's' || n + 's' === m || n === m + 'es'; });
}
/* Arabic is always written into the page but hidden. It is revealed either by
   the ℹ button on that block (parent wants one sentence) or by the header
   toggle (parent wants everything). Lessons and quizzes stay English-first. */
const ar = (txt, cls='') => txt ? `<div class="artrans ar ${cls}">${txt}</div>` : '';
const arSpan = (txt, style='') => txt ? `<span class="artrans ar" style="${style}">${txt}</span>` : '';
const INFO = '<button class="infoi" title="Translate this · ترجمة" aria-label="Translate">i</button>';
const showAr = () => DB.lang !== 'en';

function allSkills(){
  const out = [];
  SC.topics.forEach(t => t.lessons.forEach(l => l.skills.forEach(s => out.push({ topic:t, lesson:l, skill:s }))));
  return out;
}
function findSkill(id){ return allSkills().find(x => x.skill.id === id); }

/* sound + confetti ---------------------------------------- */
let AC = null;
function beep(kind){
  if(!DB.sound) return;
  try{
    AC = AC || new (window.AudioContext || window.webkitAudioContext)();
    const seq = kind === 'ok' ? [[660,0,.09],[880,.09,.14]] : kind === 'win' ? [[523,0,.1],[659,.1,.1],[784,.2,.1],[1047,.3,.22]] : [[200,0,.18]];
    seq.forEach(([f,t,d]) => {
      const o = AC.createOscillator(), g = AC.createGain();
      o.type = kind === 'no' ? 'sawtooth' : 'sine'; o.frequency.value = f;
      g.gain.setValueAtTime(.0001, AC.currentTime + t);
      g.gain.exponentialRampToValueAtTime(kind === 'no' ? .12 : .18, AC.currentTime + t + .02);
      g.gain.exponentialRampToValueAtTime(.0001, AC.currentTime + t + d);
      o.connect(g); g.connect(AC.destination); o.start(AC.currentTime + t); o.stop(AC.currentTime + t + d + .02);
    });
  }catch(e){}
}
function confetti(){
  const cv = $('#confetti'), ctx = cv.getContext('2d');
  cv.width = innerWidth; cv.height = innerHeight;
  const cols = ['#ff9f1c','#12a150','#2f6fed','#e2483a','#7b4bd6','#ffd166'];
  const P = Array.from({length:140}, () => ({
    x:Math.random()*cv.width, y:-20-Math.random()*cv.height*.5,
    r:5+Math.random()*7, c:cols[Math.floor(Math.random()*cols.length)],
    vy:2+Math.random()*4, vx:-1.5+Math.random()*3, a:Math.random()*6, va:-.2+Math.random()*.4
  }));
  let frames = 0;
  (function tick(){
    ctx.clearRect(0,0,cv.width,cv.height);
    P.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.a += p.va; p.vy += .05;
      ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.a);
      ctx.fillStyle = p.c; ctx.fillRect(-p.r/2,-p.r/2,p.r,p.r*.6); ctx.restore();
    });
    if(++frames < 190) requestAnimationFrame(tick); else ctx.clearRect(0,0,cv.width,cv.height);
  })();
}

/* ---------------------------------------------------------
   3. Shell / chrome
   --------------------------------------------------------- */
function applyPrefs(){
  document.documentElement.dataset.theme = DB.theme;
  document.body.classList.toggle('show-ar', DB.lang !== 'en');
  const lb = $('#langBtn'); if(lb) lb.classList.toggle('on', DB.lang !== 'en');
  const sb = $('#soundBtn'); if(sb){ sb.textContent = DB.sound ? '🔊' : '🔇'; }
  const tb = $('#themeBtn'); if(tb){ tb.textContent = DB.theme === 'dark' ? '☀️' : '🌙'; }
  const st = $('#starCount'); if(st) st.textContent = DB.stars;
}
function chrome(){
  $('#langBtn').onclick  = () => { DB.lang  = DB.lang === 'en' ? 'both' : 'en'; save(); applyPrefs(); };
  $('#soundBtn').onclick = () => { DB.sound = !DB.sound; save(); applyPrefs(); beep('ok'); };
  $('#themeBtn').onclick = () => { DB.theme = DB.theme === 'dark' ? 'light' : 'dark'; save(); applyPrefs(); };
  $('#homeBtn').onclick  = () => { location.hash = '#/'; };
}

function ring(pct, size=58){
  const r = size/2 - 5, c = 2*Math.PI*r;
  const col = pct >= 100 ? 'var(--accent)' : pct >= 70 ? 'var(--brand)' : 'var(--blue)';
  return `<div class="ring" style="width:${size}px;height:${size}px;flex-basis:${size}px">
    <svg width="${size}" height="${size}">
      <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="var(--line)" stroke-width="5"/>
      <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="${col}" stroke-width="5"
        stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${c*(1-pct/100)}"
        style="transition:stroke-dashoffset .7s cubic-bezier(.3,1.2,.4,1)"/>
    </svg><div class="val">${Math.round(pct)}</div></div>`;
}
function crumbs(parts){
  return `<nav class="crumb">${parts.map((p,i) =>
    (i ? '<span>›</span>' : '') + (p.href ? `<a href="${p.href}">${esc(p.label)}</a>` : `<span>${esc(p.label)}</span>`)
  ).join('')}</nav>`;
}
const lessonPct = l => {
  const sc = l.skills.map(s => skillState(s.id).score);
  return sc.length ? sc.reduce((a,b) => a+b, 0) / sc.length : 0;
};
const topicPct = t => {
  const sc = []; t.lessons.forEach(l => l.skills.forEach(s => sc.push(skillState(s.id).score)));
  return sc.length ? sc.reduce((a,b) => a+b, 0) / sc.length : 0;
};

/* ---------------------------------------------------------
   4. Screens
   --------------------------------------------------------- */
const view = () => $('#view');

function screenHome(){
  const skills = allSkills();
  const mastered = skills.filter(x => skillState(x.skill.id).mastered).length;
  const seen = skills.reduce((a,x) => a + skillState(x.skill.id).seen, 0);
  const right = skills.reduce((a,x) => a + skillState(x.skill.id).right, 0);
  const acc = seen ? Math.round(right/seen*100) : 0;

  let html = `<div class="wrap">
    <h1 class="h1">Hi ${esc(DB.name)} 👋</h1>
    <p class="sub">Pick a topic, learn it, then practise until your score reaches 100.</p>

    <div class="statrow">
      <div class="stat a"><div class="n">${DB.stars}</div><div class="l">Stars earned</div></div>
      <div class="stat g"><div class="n">${mastered}</div><div class="l">Skills mastered</div></div>
      <div class="stat b"><div class="n">${acc}%</div><div class="l">Accuracy</div></div>
      <div class="stat v"><div class="n">${streak()}🔥</div><div class="l">Day streak</div></div>
    </div>`;

  if(DB.mistakes.length){
    html += `<button class="btn blue lg" style="width:100%;margin-bottom:26px" data-go="#/fix">
      🩹 Fix my ${DB.mistakes.length} mistake${DB.mistakes.length>1?'s':''}</button>`;
  }

  html += `<h2 class="h2">📚 Topics</h2>`;
  SC.topics.forEach(t => {
    const pct = topicPct(t), done = t.lessons.reduce((a,l) => a + l.skills.length, 0);
    html += `<button class="topiccard" data-go="#/t/${t.id}">
      <div class="pic">${t.cover ? `<img src="${t.cover}" alt="">` : '<div style="font-size:60px">📘</div>'}</div>
      <div class="body" style="display:flex;gap:18px;align-items:center">
        <div style="flex:1">
          <span class="tag">${esc(t.grade)} · ${esc(t.term)}</span>
          <h3>${esc(t.title)}</h3>
          ${ar(t.titleAr, 'tiny')}
          <p>${t.lessons.length} lessons · ${done} skills · ${t.lessons.reduce((a,l)=>a+l.skills.reduce((b,s)=>b+s.questions.length,0),0)} questions</p>
        </div>
        ${ring(pct, 62)}
      </div></button>`;
  });

  if(!SC.topics.length) html += `<div class="empty"><div class="e">📭</div><p>No topics loaded yet.</p></div>`;
  html += `</div>`;
  view().innerHTML = html;
}

function screenTopic(tid){
  const t = SC.byId(tid); if(!t) return screenHome();
  let html = `<div class="wrap">
    ${crumbs([{label:'Home', href:'#/'}, {label:t.title}])}
    <h1 class="h1">${esc(t.title)}</h1>
    ${ar(t.titleAr, 'sub')}
    <p class="sub">${esc(t.source||'')}</p>

    <button class="btn primary lg" style="margin-bottom:26px" data-go="#/quiz/${t.id}/*">
      📝 Full topic test</button>

    <h2 class="h2">📖 Lessons</h2><div class="lessongrid">`;
  t.lessons.forEach(l => {
    html += `<button class="lessoncard" data-go="#/t/${t.id}/${l.id}">
      ${ring(lessonPct(l))}
      <div style="flex:1;min-width:0">
        <h4>Lesson ${l.num} — ${esc(l.title)}</h4>
        ${ar(l.titleAr, 'tiny')}
        <p>${esc(l.blurb||'')}</p>
        <span style="font-size:12.5px;color:var(--muted)">${l.skills.length} skills · ${l.skills.reduce((a,s)=>a+s.questions.length,0)} questions</span>
      </div></button>`;
  });
  html += `</div></div>`;
  view().innerHTML = html;
}

function screenLesson(tid, lid){
  const t = SC.byId(tid); if(!t) return screenHome();
  const l = t.lessons.find(x => x.id === lid); if(!l) return screenTopic(tid);

  let html = `<div class="wrap">
    ${crumbs([{label:'Home', href:'#/'}, {label:t.title, href:'#/t/'+t.id}, {label:'Lesson '+l.num}])}
    <h1 class="h1">Lesson ${l.num} — ${esc(l.title)}</h1>
    ${ar(l.titleAr, 'sub')}

    <div class="actions">
      <button class="action learn"    data-go="#/learn/${t.id}/${l.id}"><span class="e">📖</span><b>Learn</b><span>Read the lesson</span></button>
      <button class="action cards"    data-go="#/cards/${t.id}/${l.id}"><span class="e">🃏</span><b>Flashcards</b><span>${l.glossary?l.glossary.length:0} key words</span></button>
      <button class="action practice" data-go="#/practice/${t.id}/${l.id}/${l.skills[0].id}"><span class="e">🎯</span><b>Practice</b><span>Instant feedback</span></button>
      <button class="action quiz"     data-go="#/quiz/${t.id}/${l.id}"><span class="e">📝</span><b>Quiz</b><span>15 questions, graded</span></button>
    </div>

    <h2 class="h2">🎯 Skills</h2>`;
  l.skills.forEach(s => {
    const st = skillState(s.id);
    html += `<div class="skill">
      <div class="ic">${s.icon||'🎯'}</div>
      <div class="meta">
        <b>${esc(s.title)}</b>
        <span>${s.questions.length} questions${st.seen ? ` · ${st.right}/${st.seen} correct` : ''}</span>
        ${ar(s.titleAr, 'tiny')}
        <div class="bar ${st.score>=100?'full':''}"><i style="width:${st.score}%"></i></div>
      </div>
      <div class="score ${st.mastered?'m':''}">${st.mastered ? '🏆' : st.score}</div>
      <button class="btn ${st.score>=100?'':'primary'}" data-go="#/practice/${t.id}/${l.id}/${s.id}">${st.score>=100?'Redo':'Practise'}</button>
    </div>`;
  });
  html += `</div>`;
  view().innerHTML = html;
}

/* --- Learn mode ------------------------------------------ */
function screenLearn(tid, lid){
  const t = SC.byId(tid), l = t && t.lessons.find(x => x.id === lid);
  if(!l) return screenHome();
  let body = '';
  // `inset` reserves room at the top so the ℹ button never covers content
  const box = (inner, hasAr, cls='') => `<div class="block trbox ${cls}">${hasAr ? INFO : ''}${inner}</div>`;
  (l.cards||[]).forEach(c => {
    if(c.t === 'hero')
      body += box(`<div class="hero">${c.img?`<img src="${c.img}" alt="">`:''}<div style="font-size:17px">${c.en}</div>${ar(c.ar)}</div>`, !!c.ar);
    else if(c.t === 'heading')
      body += `<h2 class="heading">${c.en}${ar(c.ar,'tiny')}</h2>`;
    else if(c.t === 'note')
      body += box(`<div class="note">${c.en}${ar(c.ar)}</div>`, !!c.ar);
    else if(c.t === 'bullets')
      body += box(`<ul class="bullets">${c.items.map(i => `<li>${i.en}${ar(i.ar)}</li>`).join('')}</ul>`, true, 'inset');
    else if(c.t === 'terms')
      body += `<div class="block termgrid">${c.items.map(i => `<div class="termcard trbox">${INFO}
          ${i.img?`<div class="pic"><img src="${i.img}" alt=""></div>`:''}
          <b>${esc(i.term)}${arSpan(i.termAr,'font-size:14px;color:var(--muted);margin-inline-start:8px;font-weight:400')}</b>
          <p>${i.def}</p>${ar(i.defAr)}</div>`).join('')}</div>`;
    else if(c.t === 'image')
      body += box(`<figure><img src="${c.img}" alt=""><figcaption>${c.caption||''}${ar(c.captionAr)}</figcaption></figure>`, !!c.captionAr);
    else if(c.t === 'compare'){
      const H = c.headers.map((h,i) => `${h}${c.headersAr?ar(c.headersAr[i],'tiny'):''}`);
      body += box(`<div style="overflow-x:auto"><table class="cmp">
        <tr>${H.map(h=>`<th>${h}</th>`).join('')}</tr>
        ${c.rows.map(r => `<tr>
          <td>${r.k}${ar(r.kAr,'tiny')}</td>
          <td>${r.a}${ar(r.aAr)}</td>
          <td>${r.b}${ar(r.bAr)}</td></tr>`).join('')}
      </table></div>`, true, 'inset');
    }
  });
  view().innerHTML = `<div class="wrap">
    ${crumbs([{label:'Home',href:'#/'},{label:t.title,href:'#/t/'+t.id},{label:'Lesson '+l.num,href:`#/t/${t.id}/${l.id}`},{label:'Learn'}])}
    <div class="lesson-body">
      <h1 class="h1">Lesson ${l.num} — ${esc(l.title)}</h1>
      ${ar(l.titleAr, 'sub')}
      ${body}
      <div style="display:flex;gap:12px;justify-content:center;margin:40px 0 10px;flex-wrap:wrap">
        <button class="btn lg" data-go="#/cards/${t.id}/${l.id}">🃏 Flashcards</button>
        <button class="btn primary lg" data-go="#/practice/${t.id}/${l.id}/${l.skills[0].id}">🎯 Start practising</button>
      </div>
    </div></div>`;
}

/* --- Flashcards ------------------------------------------ */
function screenCards(tid, lid){
  const t = SC.byId(tid), l = t && t.lessons.find(x => x.id === lid);
  if(!l || !l.glossary || !l.glossary.length) return screenLesson(tid, lid);
  let deck = shuffle(l.glossary), i = 0;

  view().innerHTML = `<div class="wrap">
    ${crumbs([{label:'Home',href:'#/'},{label:t.title,href:'#/t/'+t.id},{label:'Lesson '+l.num,href:`#/t/${t.id}/${l.id}`},{label:'Flashcards'}])}
    <div class="runner">
      <div class="runbar"><div style="flex:1"><div class="lbl">Flashcards</div>
        <div style="font-size:17px;font-weight:600" id="fcCount"></div></div>
        <button class="btn" id="fcShuffle">🔀 Shuffle</button></div>
      <div class="flip" id="flip"><div class="flipinner">
        <div class="face front"></div><div class="face back"></div></div></div>
      <div class="runfoot" style="justify-content:center">
        <button class="btn" id="fcPrev">‹ Back</button>
        <button class="btn primary" id="fcNext">Next ›</button>
      </div>
    </div></div>`;

  const flip = $('#flip');
  flip.classList.add('trbox');
  function draw(){
    const g = deck[i];
    flip.classList.remove('on');
    $('.face.front', flip).innerHTML = `${g.img?`<img src="${g.img}" alt="">`:''}<div class="big">${esc(g.term)}</div><div class="tip">tap to flip</div>`;
    $('.face.back', flip).innerHTML  = `${g.defAr?INFO:''}<div style="font-size:17px">${g.def}</div>${ar(g.defAr)}<div class="tip">tap to flip</div>`;
    $('#fcCount').textContent = `${i+1} / ${deck.length}`;
  }
  flip.onclick = () => flip.classList.toggle('on');
  $('#fcNext').onclick = () => { i = (i+1) % deck.length; draw(); };
  $('#fcPrev').onclick = () => { i = (i-1+deck.length) % deck.length; draw(); };
  $('#fcShuffle').onclick = () => { deck = shuffle(deck); i = 0; draw(); };
  draw();
}

/* ---------------------------------------------------------
   5. Question renderers
   Each returns { instant, check(), reveal(), ready() }
   check() -> { correct, your, right }
   --------------------------------------------------------- */
const LETTERS = ['A','B','C','D','E','F'];

function renderQ(q, host, onInstant){
  host.innerHTML = '';
  const label = { mcq:'Choose the correct answer', tf:'True or false', fill:'Complete the sentence',
    term:'Write the scientific term', order:'Put them in order', match:'Match the pairs',
    label:'Label the diagram', written:'Answer the question' }[q.t] || 'Question';
  host.appendChild(el('div','qhead', `<span class="qtype">${label}</span>${q.qAr ? INFO : ''}`));
  // `fill` builds its own interactive sentence, so skip the plain copy of it
  if(q.t !== 'fill'){
    host.appendChild(el('div','qtext', q.q));
    host.insertAdjacentHTML('beforeend', ar(q.qAr));
  }
  // `label` draws its own copy of the diagram next to the dropdowns
  if(q.img && q.t !== 'label') host.appendChild(el('img','qimg')).src = q.img;
  return RENDER[q.t](q, host, onInstant);
}

const RENDER = {
  /* ---- multiple choice ---- */
  mcq(q, host, onInstant){
    const flat = q.choices.every(c => String(c).length <= 2);
    const order = flat ? q.choices.map((_,i) => i) : shuffle(q.choices.map((_,i) => i));
    const box = el('div','choices'); host.appendChild(box);
    let picked = null;
    const btns = order.map((orig, pos) => {
      const b = el('button','choice', `<span class="k">${LETTERS[pos]}</span><span>${q.choices[orig]}</span>`);
      b.onclick = () => { picked = orig; onInstant(); };
      box.appendChild(b); return b;
    });
    return {
      instant:true,
      ready:() => picked !== null,
      check:() => ({ correct: picked === q.a, your: q.choices[picked], right: q.choices[q.a] }),
      reveal(){ btns.forEach((b,pos) => { b.disabled = true;
        if(order[pos] === q.a) b.classList.add('ok');
        else if(order[pos] === picked) b.classList.add('no'); }); }
    };
  },

  /* ---- true / false ---- */
  tf(q, host, onInstant){
    const box = el('div','tfrow'); host.appendChild(box);
    let picked = null;
    const t = el('button','tfbtn t','✓ True');
    const f = el('button','tfbtn f','✗ False');
    t.onclick = () => { picked = true;  onInstant(); };
    f.onclick = () => { picked = false; onInstant(); };
    box.appendChild(t); box.appendChild(f);
    return {
      instant:true,
      ready:() => picked !== null,
      check:() => ({ correct: picked === q.a, your: picked ? 'True' : 'False', right: q.a ? 'True' : 'False' }),
      reveal(){ t.disabled = f.disabled = true;
        (q.a ? t : f).classList.add('ok');
        if(picked !== q.a) (picked ? t : f).classList.add('no'); }
    };
  },

  /* ---- fill in the blanks (word bank) ---- */
  fill(q, host){
    const parts = q.q.split(/_{3,}/);
    const line = el('div','blankline'); const blanks = [];
    parts.forEach((seg, i) => {
      line.appendChild(document.createTextNode(''));
      line.insertAdjacentHTML('beforeend', seg);
      if(i < parts.length - 1){
        const b = el('span','blank vacant','?'); b.dataset.i = i; blanks.push(b); line.appendChild(b);
      }
    });
    host.appendChild(line);
    host.insertAdjacentHTML('beforeend', ar(q.qAr));

    let active = 0;
    const paint = () => blanks.forEach((b,i) => b.classList.toggle('act', i === active));
    blanks.forEach((b,i) => b.onclick = () => {
      if(b.dataset.v){ b.dataset.v = ''; b.textContent = '?'; b.classList.add('vacant'); syncBank(); }
      active = i; paint();
    });

    const bankBox = el('div','bank'); host.appendChild(bankBox);
    const chips = (q.bank || []).map(w => {
      const c = el('button','chip', esc(w)); c.dataset.w = w;
      c.onclick = () => {
        let slot = blanks[active] && !blanks[active].dataset.v ? blanks[active] : blanks.find(b => !b.dataset.v);
        if(!slot) slot = blanks[active] || blanks[0];
        slot.dataset.v = w; slot.textContent = w; slot.classList.remove('vacant');
        const nxt = blanks.findIndex(b => !b.dataset.v); active = nxt < 0 ? blanks.length-1 : nxt; paint();
        syncBank();
      };
      bankBox.appendChild(c); return c;
    });
    function syncBank(){
      const used = blanks.map(b => b.dataset.v).filter(Boolean);
      const left = used.slice();
      chips.forEach(c => {
        const k = left.indexOf(c.dataset.w);
        if(k > -1){ left.splice(k,1); c.classList.add('used'); } else c.classList.remove('used');
      });
    }
    paint();

    return {
      instant:false,
      ready:() => blanks.every(b => b.dataset.v),
      check(){
        const vals = blanks.map(b => b.dataset.v || '');
        let ok;
        if(q.anyOrder){
          const pool = q.a.map(x => x.slice());
          ok = vals.every(v => { const k = pool.findIndex(g => sameWord(v, g)); if(k < 0) return false; pool.splice(k,1); return true; });
        } else ok = vals.every((v,i) => sameWord(v, q.a[i]));
        return { correct: ok, your: vals.join(', '), right: q.a.map(g => g[0]).join(', ') };
      },
      reveal(){
        chips.forEach(c => c.disabled = true);
        blanks.forEach((b,i) => {
          const good = q.anyOrder ? q.a.some(g => sameWord(b.dataset.v, g)) : sameWord(b.dataset.v, q.a[i]);
          b.classList.add(good ? 'ok' : 'no'); b.onclick = null;
          if(!good && !q.anyOrder) b.insertAdjacentHTML('afterend', ` <span style="color:var(--good);font-weight:600">${esc(q.a[i][0])}</span>`);
        });
      }
    };
  },

  /* ---- type the scientific term ---- */
  term(q, host){
    const row = el('div','answerbox');
    const inp = el('input'); inp.type = 'text'; inp.placeholder = 'Write your answer…'; inp.autocomplete = 'off';
    const hint = el('button','btn ghost','💡 Word bank');
    row.appendChild(inp); row.appendChild(hint); host.appendChild(row);
    const bankBox = el('div','bank'); bankBox.style.display = 'none'; host.appendChild(bankBox);
    (q.bank || []).forEach(w => {
      const c = el('button','chip', esc(w));
      c.onclick = () => { inp.value = w; inp.focus(); };
      bankBox.appendChild(c);
    });
    hint.onclick = () => { bankBox.style.display = bankBox.style.display === 'none' ? 'flex' : 'none'; };
    setTimeout(() => inp.focus(), 60);
    return {
      instant:false,
      ready:() => inp.value.trim().length > 0,
      check:() => ({ correct: sameWord(inp.value, q.a), your: inp.value, right: q.a[0] }),
      reveal(){
        const good = sameWord(inp.value, q.a);
        inp.classList.add(good ? 'ok' : 'no'); inp.disabled = true; hint.disabled = true;
        bankBox.querySelectorAll('.chip').forEach(c => c.disabled = true);
      }
    };
  },

  /* ---- put in order ---- */
  order(q, host){
    const box = el('div','orderlist'); host.appendChild(box);
    const picks = [];
    const items = shuffle(q.items).map(it => {
      const b = el('button','orderitem',
        `<span class="num">–</span>${it.img?`<img src="${it.img}" alt="">`:''}<span style="flex:1">${esc(it.label||'')}</span>`);
      b.dataset.id = it.id;
      b.onclick = () => {
        const k = picks.indexOf(it.id);
        if(k > -1) picks.splice(k,1); else picks.push(it.id);
        items.forEach(x => { const p = picks.indexOf(x.dataset.id);
          $('.num', x).textContent = p < 0 ? '–' : (p+1); x.classList.toggle('picked', p >= 0); });
      };
      box.appendChild(b); return b;
    });
    const nameOf = id => (q.items.find(i => i.id === id) || {}).label || id;
    return {
      instant:false,
      ready:() => picks.length === q.items.length,
      check:() => ({ correct: picks.join() === q.a.join(),
        your: picks.map((id,i) => `${i+1}. ${nameOf(id)}`).join(' → '),
        right: q.a.map((id,i) => `${i+1}. ${nameOf(id)}`).join(' → ') }),
      reveal(){
        items.forEach(x => { x.disabled = true;
          const should = q.a.indexOf(x.dataset.id), got = picks.indexOf(x.dataset.id);
          x.classList.add(should === got ? 'ok' : 'no');
          $('.num', x).textContent = should + 1; });
      }
    };
  },

  /* ---- match the pairs ---- */
  match(q, host){
    const grid = el('div','matchgrid');
    const L = el('div','matchcol'), R = el('div','matchcol');
    L.appendChild(el('div','mcap','Tap one…')); R.appendChild(el('div','mcap','…then its pair'));
    grid.appendChild(L); grid.appendChild(R); host.appendChild(grid);
    const COL = ['#2f6fed','#12a150','#ff9f1c','#7b4bd6','#e2483a'];
    const pairs = {}; let selL = null;
    const lb = q.pairs.map((p,i) => { const b = el('button','mitem', esc(p.l)); b.dataset.i = i; L.appendChild(b); return b; });
    const rb = shuffle(q.pairs.map((p,i) => i)).map(i => { const b = el('button','mitem', esc(q.pairs[i].r)); b.dataset.i = i; R.appendChild(b); return b; });

    const repaint = () => {
      lb.concat(rb).forEach(b => { b.classList.remove('sel','done'); const t = $('.tagn', b); if(t) t.remove(); });
      Object.entries(pairs).forEach(([li, ri], n) => {
        const c = COL[n % COL.length];
        const a = lb.find(b => b.dataset.i === li), z = rb.find(b => b.dataset.i === ri);
        [a,z].forEach(b => { if(!b) return; b.classList.add('done'); b.style.borderColor = c;
          const t = el('span','tagn', String(Object.keys(pairs).indexOf(li)+1)); t.style.background = c; b.appendChild(t); });
      });
      if(selL) selL.classList.add('sel');
    };
    lb.forEach(b => b.onclick = () => {
      Object.keys(pairs).forEach(k => { if(k === b.dataset.i) delete pairs[k]; });
      selL = selL === b ? null : b; repaint();
    });
    rb.forEach(b => b.onclick = () => {
      if(!selL) return;
      Object.keys(pairs).forEach(k => { if(pairs[k] === b.dataset.i) delete pairs[k]; });
      pairs[selL.dataset.i] = b.dataset.i; selL = null; repaint();
    });
    return {
      instant:false,
      ready:() => Object.keys(pairs).length === q.pairs.length,
      check(){
        const ok = Object.entries(pairs).every(([l,r]) => l === r);
        return { correct: ok,
          your: Object.entries(pairs).map(([l,r]) => `${q.pairs[l].l} → ${q.pairs[r].r}`).join('; '),
          right: q.pairs.map(p => `${p.l} → ${p.r}`).join('; ') };
      },
      reveal(){
        lb.concat(rb).forEach(b => { b.disabled = true; b.style.borderColor = ''; });
        lb.forEach(b => { const r = pairs[b.dataset.i]; b.classList.add(r === b.dataset.i ? 'ok' : 'no'); });
        rb.forEach(b => { const l = Object.keys(pairs).find(k => pairs[k] === b.dataset.i);
          b.classList.add(l === b.dataset.i ? 'ok' : 'no');
          if(l !== b.dataset.i) b.insertAdjacentHTML('beforeend', ` <b style="color:var(--good)">← ${esc(q.pairs[b.dataset.i].l)}</b>`); });
      }
    };
  },

  /* ---- label the diagram ---- */
  label(q, host){
    const wrap = el('div','labelwrap');
    const pic = el('img','labelimg'); pic.src = q.img; pic.alt = '';
    const rows = el('div','labelrows');
    wrap.appendChild(pic); wrap.appendChild(rows); host.appendChild(wrap);
    const sels = q.points.map(p => {
      const row = el('div','labelrow');
      row.innerHTML = `<span class="pt">${esc(p.id)}</span>`;
      const s = el('select');
      s.innerHTML = `<option value="">— choose —</option>` + shuffle(q.bank).map(w => `<option>${esc(w)}</option>`).join('');
      row.appendChild(s); rows.appendChild(row); return s;
    });
    return {
      instant:false,
      ready:() => sels.every(s => s.value),
      check(){
        const ok = sels.every((s,i) => sameWord(s.value, q.points[i].a));
        return { correct: ok,
          your: sels.map((s,i) => `${q.points[i].id}=${s.value||'—'}`).join(' '),
          right: q.points.map(p => `${p.id}=${p.a[0]}`).join(' ') };
      },
      reveal(){
        sels.forEach((s,i) => { s.disabled = true;
          const good = sameWord(s.value, q.points[i].a);
          s.classList.add(good ? 'ok' : 'no');
          if(!good) s.parentNode.insertAdjacentHTML('beforeend', `<b style="color:var(--good);margin-inline-start:8px">${esc(q.points[i].a[0])}</b>`); });
      }
    };
  },

  /* ---- written answer (keyword marked) ---- */
  written(q, host){
    const ta = el('textarea','written'); ta.placeholder = 'Write your answer in English…';
    host.appendChild(ta);
    host.appendChild(el('div','', `<div style="font-size:13px;color:var(--muted);margin-top:8px">
      💡 Try to use ${q.keys.length} key ideas.</div>`));
    setTimeout(() => ta.focus(), 60);
    return {
      instant:false,
      ready:() => ta.value.trim().length > 3,
      check(){
        const n = norm(ta.value);
        const hit = q.keys.filter(group => group.some(k => n.includes(norm(k)))).length;
        return { correct: hit / q.keys.length >= .6, your: ta.value.trim(), right: q.model, hit, of:q.keys.length };
      },
      reveal(){ ta.disabled = true; }
    };
  }
};

/* ---------------------------------------------------------
   6. Session runner (practice / quiz / fix)
   --------------------------------------------------------- */
let KEYS = null;
function bindKeys(fn){ if(KEYS) removeEventListener('keydown', KEYS); KEYS = fn; if(fn) addEventListener('keydown', fn); }

function runSession(cfg){
  const { mode, crumbPath, heading } = cfg;
  view().innerHTML = `<div class="wrap">
    ${crumbs(crumbPath)}
    <div class="runner">
      <div class="runbar">
        <div style="flex:1">
          <div class="lbl" id="runLbl"></div>
          <div class="track" id="runTrack"><i style="width:0%"></i></div>
        </div>
        <div><div class="lbl" style="text-align:end">${mode==='quiz'?'Question':'SmartScore'}</div>
             <div class="big" id="runBig">0</div></div>
      </div>
      <div class="qcard trbox" id="qhost"></div>
      <div id="fb"></div>
      <div class="runfoot" id="foot"></div>
    </div></div>`;
  $('#runLbl').textContent = heading;

  const host = $('#qhost'), fbBox = $('#fb'), foot = $('#foot');
  let cur = null, ctrl = null, idx = 0, log = [], answered = false;

  function paintBar(){
    if(mode === 'quiz'){
      $('#runBig').textContent = `${Math.min(idx+1, cfg.items.length)}/${cfg.items.length}`;
      $('#runTrack i').style.width = (idx / cfg.items.length * 100) + '%';
    } else {
      const sc = cfg.skillId ? skillState(cfg.skillId).score
        : Math.round(log.filter(r => r.correct).length / Math.max(1, log.length) * 100);
      $('#runBig').textContent = sc;
      $('#runTrack').classList.toggle('full', sc >= 100);
      $('#runTrack i').style.width = sc + '%';
    }
  }

  function next(){
    fbBox.innerHTML = ''; foot.innerHTML = ''; answered = false;
    cur = cfg.take ? cfg.take() : cfg.items[idx];
    if(!cur) return finish();
    ctrl = renderQ(cur.q, host, () => submit());
    paintBar();
    if(!ctrl.instant){
      const b = el('button','btn primary lg', mode === 'quiz' ? 'Next ›' : 'Check my answer ✓');
      b.onclick = () => submit(); foot.appendChild(b);
    }
    host.scrollIntoView({ behavior:'smooth', block:'nearest' });
  }

  function submit(){
    if(answered) return;
    if(!ctrl.ready()){
      if(!$('#warnMsg')){
        const w = el('div','', `<span id="warnMsg" style="color:var(--bad);font-size:14px">Answer first 🙂</span>`);
        foot.prepend(w); setTimeout(() => w.remove(), 1600);
      }
      return;
    }
    answered = true;
    const res = ctrl.check();
    log.push({ q:cur.q, ...res });
    const justMastered = cur.skillId ? recordAnswer(cur.skillId, res.correct, cur.qIndex) : false;
    applyPrefs();

    if(mode === 'quiz'){ idx++; paintBar(); setTimeout(next, 160); return; }

    ctrl.reveal();
    foot.innerHTML = '';   // drop the "Check my answer" button before the next-step buttons
    beep(res.correct ? 'ok' : 'no');
    paintBar();
    const extra = cur.q.t === 'written'
      ? `<div class="model"><b>Model answer:</b> ${cur.q.model}${ar(cur.q.modelAr)}</div>`
      : (!res.correct ? `<div class="model"><b>Correct answer:</b> ${esc(res.right)}</div>` : '');
    fbBox.innerHTML = `<div class="fb trbox ${res.correct?'ok':'no'}">
      <div class="head">${res.correct ? '🎉 Correct!' : '💪 Not quite'}${cur.q.exAr ? INFO : ''}</div>
      <p>${cur.q.ex||''}</p>${ar(cur.q.exAr)}
      ${extra}</div>`;

    idx++;
    const sc = cfg.skillId ? skillState(cfg.skillId).score : 0;
    if(justMastered || (cfg.skillId && sc >= 100)){
      beep('win'); confetti();
      const b = el('button','btn primary lg','🏆 See my trophy');
      b.onclick = () => finish(true); foot.appendChild(b);
    } else {
      const b = el('button','btn primary lg','Next question ›');
      b.onclick = () => next(); foot.appendChild(b);
      const q = el('button','btn ghost','Stop for now');
      q.onclick = () => finish(); foot.appendChild(q);
    }
  }

  function finish(won){
    bindKeys(null);
    if(mode === 'quiz') return screenResults(log, cfg);
    if(mode === 'fix')  return screenFixDone(log, cfg);
    return screenMastered(log, cfg, won);
  }

  bindKeys(e => {
    if(e.key === 'Enter'){ const b = foot.querySelector('.btn.primary'); if(b){ e.preventDefault(); b.click(); } return; }
    if(answered) return;
    const n = parseInt(e.key, 10);
    if(n >= 1 && n <= 6){ const c = host.querySelectorAll('.choice')[n-1]; if(c) c.click(); }
    if(host.querySelector('.tfbtn')){
      if(e.key.toLowerCase() === 't') host.querySelector('.tfbtn.t').click();
      if(e.key.toLowerCase() === 'f') host.querySelector('.tfbtn.f').click();
    }
  });

  next();
}

/* --- result screens -------------------------------------- */
function reviewRows(log){
  return `<div class="reviewlist">${log.map((r,i) => `<div class="rev ${r.correct?'ok':'no'}">
    <div class="q">${r.correct?'✅':'❌'} ${i+1}. ${r.q.q}</div>
    <div class="a">${r.correct ? `Your answer: <b>${esc(String(r.your))}</b>`
      : `You wrote: <i>${esc(String(r.your||'—'))}</i> &nbsp;·&nbsp; Correct: <b>${esc(String(r.right))}</b>`}</div>
  </div>`).join('')}</div>`;
}

function screenResults(log, cfg){
  const right = log.filter(r => r.correct).length, pct = Math.round(right/Math.max(1,log.length)*100);
  const g = pct >= 90 ? ['Excellent!','ممتاز','var(--good)','⭐⭐⭐⭐⭐']
          : pct >= 80 ? ['Very good!','جيد جدًا','var(--brand)','⭐⭐⭐⭐']
          : pct >= 70 ? ['Good!','جيد','var(--blue)','⭐⭐⭐']
          : pct >= 60 ? ['Pass — keep going!','مقبول','var(--accent)','⭐⭐']
          : ['Keep practising!','تحتاجين مذاكرة','var(--bad)','⭐'];
  if(pct >= 80){ beep('win'); confetti(); }
  view().innerHTML = `<div class="wrap"><div class="result">
    <div style="font-size:52px">${pct>=80?'🏆':pct>=60?'👍':'📚'}</div>
    <div class="bigscore" style="color:${g[2]}">${pct}%</div>
    <div class="grade trbox" style="background:color-mix(in srgb,${g[2]} 15%,transparent);color:${g[2]}">${g[0]}${arSpan(g[1],'margin-inline-start:8px')}</div>
    <div class="stars">${g[3]}</div>
    <p class="sub">You got <b>${right}</b> out of <b>${log.length}</b> questions right.</p>
    <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
      <button class="btn primary lg" data-go="${cfg.retry}">🔁 Try again</button>
      <button class="btn lg" data-go="${cfg.back}">← Back to lesson</button>
      ${DB.mistakes.length ? `<button class="btn blue lg" data-go="#/fix">🩹 Fix my mistakes</button>` : ''}
    </div>
    <h2 class="h2" style="justify-content:center">📋 Review every question</h2>
    ${reviewRows(log)}
  </div></div>`;
}

function screenMastered(log, cfg, won){
  const right = log.filter(r => r.correct).length;
  const sc = cfg.skillId ? skillState(cfg.skillId).score : 0;
  view().innerHTML = `<div class="wrap"><div class="result">
    <div style="font-size:56px">${won?'🏆':'👋'}</div>
    <div class="bigscore" style="color:${won?'var(--accent)':'var(--brand)'}">${sc}</div>
    <div class="grade trbox" style="background:var(--brand-soft);color:var(--brand)">
      ${won ? 'Skill mastered!' : 'Good work — come back soon!'}${won ? arSpan('أتقنتِ هذه المهارة','margin-inline-start:8px') : ''}</div>
    <p class="sub">${right} correct out of ${log.length} this session · +${right} ⭐${won?' and +10 ⭐ bonus':''}</p>
    <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
      <button class="btn lg" data-go="${cfg.back}">← Back to lesson</button>
      <button class="btn primary lg" data-go="${cfg.retry}">🎯 Keep practising</button>
    </div>
    ${log.length ? `<h2 class="h2" style="justify-content:center">📋 This session</h2>${reviewRows(log)}` : ''}
  </div></div>`;
}

function screenFixDone(log, cfg){
  const right = log.filter(r => r.correct).length;
  view().innerHTML = `<div class="wrap"><div class="result">
    <div style="font-size:56px">${DB.mistakes.length ? '💪' : '✨'}</div>
    <h1 class="h1">${DB.mistakes.length ? `${DB.mistakes.length} left to fix` : 'All mistakes fixed!'}</h1>
    <p class="sub">${right} of ${log.length} correct in this round.</p>
    <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
      ${DB.mistakes.length ? `<button class="btn primary lg" data-go="#/fix">🩹 Keep fixing</button>` : ''}
      <button class="btn lg" data-go="#/">← Home</button>
    </div>
    ${log.length ? reviewRows(log) : ''}
  </div></div>`;
}

/* --- session builders ------------------------------------ */
function startPractice(tid, lid, sid){
  const t = SC.byId(tid), l = t && t.lessons.find(x => x.id === lid), s = l && l.skills.find(x => x.id === sid);
  if(!s) return screenHome();
  let pool = [];
  const wrong = DB.mistakes.filter(m => m.s === sid).map(m => m.q);
  const refill = () => { pool = shuffle(s.questions.map((_,i) => i)); pool.push(...shuffle(wrong.filter(i => i < s.questions.length))); };
  refill();
  runSession({
    mode:'practice', skillId:sid,
    heading:`${t.title} · ${s.title}`,
    crumbPath:[{label:'Home',href:'#/'},{label:t.title,href:'#/t/'+t.id},{label:'Lesson '+l.num,href:`#/t/${t.id}/${l.id}`},{label:s.title}],
    back:`#/t/${t.id}/${l.id}`, retry:`#/practice/${t.id}/${l.id}/${s.id}`,
    take(){ if(!pool.length) refill(); const i = pool.pop(); return { q:s.questions[i], skillId:sid, qIndex:i }; }
  });
}

function startQuiz(tid, lid){
  const t = SC.byId(tid); if(!t) return screenHome();
  const whole = lid === '*';
  const lessons = whole ? t.lessons : t.lessons.filter(x => x.id === lid);
  if(!lessons.length) return screenTopic(tid);
  const bag = [];
  lessons.forEach(l => l.skills.forEach(s => s.questions.forEach((q,i) => bag.push({ q, skillId:s.id, qIndex:i }))));
  const n = Math.min(whole ? 25 : 15, bag.length);
  const items = shuffle(bag).slice(0, n);
  const l = lessons[0];
  runSession({
    mode:'quiz', items,
    heading: whole ? `${t.title} · full test` : `Lesson ${l.num} quiz`,
    crumbPath:[{label:'Home',href:'#/'},{label:t.title,href:'#/t/'+t.id}].concat(whole?[{label:'Full test'}]:[{label:'Lesson '+l.num,href:`#/t/${t.id}/${l.id}`},{label:'Quiz'}]),
    back: whole ? `#/t/${t.id}` : `#/t/${t.id}/${l.id}`, retry:`#/quiz/${t.id}/${lid}`
  });
}

function startFix(){
  const items = [];
  DB.mistakes.slice(0, 15).forEach(m => {
    const found = findSkill(m.s);
    if(found && found.skill.questions[m.q]) items.push({ q:found.skill.questions[m.q], skillId:m.s, qIndex:m.q });
  });
  if(!items.length){
    view().innerHTML = `<div class="wrap"><div class="empty"><div class="e">✨</div>
      <h2>No mistakes to fix — great job!</h2>
      <p class="artrans ar">لا توجد أخطاء لتصحيحها، أحسنتِ!</p>
      <button class="btn primary lg" data-go="#/" style="margin-top:14px">← Home</button></div></div>`;
    return;
  }
  runSession({ mode:'fix', items, heading:'Fixing your mistakes', back:'#/', retry:'#/fix',
    crumbPath:[{label:'Home',href:'#/'},{label:'Fix my mistakes'}] });
}

/* ---------------------------------------------------------
   7. Router + boot
   --------------------------------------------------------- */
function route(){
  bindKeys(null);
  const p = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  scrollTo(0,0);
  if(!p.length)              return screenHome();
  if(p[0] === 't'   && p[2]) return screenLesson(p[1], p[2]);
  if(p[0] === 't')           return screenTopic(p[1]);
  if(p[0] === 'learn')       return screenLearn(p[1], p[2]);
  if(p[0] === 'cards')       return screenCards(p[1], p[2]);
  if(p[0] === 'practice')    return startPractice(p[1], p[2], p[3]);
  if(p[0] === 'quiz')        return startQuiz(p[1], p[2] || '*');
  if(p[0] === 'fix')         return startFix();
  screenHome();
}

document.addEventListener('click', e => {
  const t = e.target.closest('.infoi');
  if(t){ e.preventDefault(); e.stopPropagation();
    const b = t.closest('.trbox'); if(b){ b.classList.toggle('tr-on'); t.classList.toggle('on'); } return; }
  const g = e.target.closest('[data-go]');
  if(g){ e.preventDefault(); location.hash = g.dataset.go; }
});
addEventListener('hashchange', route);
document.addEventListener('DOMContentLoaded', () => { chrome(); applyPrefs(); route(); });
