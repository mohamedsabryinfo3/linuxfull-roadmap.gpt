(() => {
  const data = window.CURRICULUM;
  const STORAGE = 'linux-learning-track-v2';
  const $ = s => document.querySelector(s);
  let state = JSON.parse(localStorage.getItem(STORAGE) || '{"done":[],"hideDone":false,"filter":"all","search":""}');
  if (!Array.isArray(state.done)) state.done=[];
  let search = '';
  let typeFilter = 'all';
  const escapeHtml = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const typeClass = k => k==='أساسي'?'أساسي':k==='استكمال مطلوب'?'استكمال':'تطبيق';
  const all = data.lessons;
  const doneSet = new Set(state.done);
  function save(){state.done=[...doneSet];state.hideDone=hideDone;state.filter=typeFilter;state.search=search;localStorage.setItem(STORAGE,JSON.stringify(state));updateProgress();}
  let hideDone = !!state.hideDone;
  $('#searchInput').value=state.search||''; search=state.search||'';
  $('#typeFilter').value=state.filter||'all';typeFilter=state.filter||'all';
  function updateProgress(){
    const count=doneSet.size, total=all.length, pct=Math.round(count/total*100);
    $('#progressPct').textContent=pct+'%';$('#progressCount').textContent=`${count} / ${total} درس`;
    $('#remainingCount').textContent=total-count?`متبقي ${total-count} درس`:'اكتمل المسار بالكامل';
    $('#lessonCount').textContent=total;$('#progressRing').style.background=`conic-gradient(#75b7ff ${pct}%,#ffffff2a ${pct}%)`;
    $('#nextBtn').textContent=total===count?'اكتمل المسار ✓':'ابدأ بالدرس التالي ←';
  }
  function matches(x){
    const text=[x.title,x.instructor,x.course,x.no,x.stage,x.note].join(' ').toLowerCase();
    if(search && !text.includes(search.toLowerCase())) return false;
    if(typeFilter!=='all' && x.kind!==typeFilter) return false;
    if(hideDone && doneSet.has(x.id)) return false;
    return true;
  }
  function render(){
    const filtered=all.filter(matches);
    $('#visibleCount').textContent=`${filtered.length} درس ظاهر`;
    if(!filtered.length){$('#curriculum').innerHTML='<div class="empty">لا توجد دروس مطابقة لبحثك.</div>';return;}
    const stageOrder=[...new Set(all.map(x=>x.stage))];
    const groups=stageOrder.map(s=>[s,filtered.filter(x=>x.stage===s)]).filter(g=>g[1].length);
    $('#curriculum').innerHTML=groups.map(([stage,items],idx)=>{
      const stageAll=all.filter(x=>x.stage===stage);const stageDone=stageAll.filter(x=>doneSet.has(x.id)).length;
      return `<section class="phase"><div class="phase-title"><span class="phase-num">${String(idx+1).padStart(2,'0')}</span><div><h3>${escapeHtml(stage)}</h3><small>${stageDone} من ${stageAll.length} مكتمل · ${stageAll.length} درس في المرحلة</small></div></div><div class="phase-items">${items.map(x=>{
        const done=doneSet.has(x.id);const k=typeClass(x.kind);
        return `<article class="lesson ${done?'done':''}" id="${x.id}">
          <button class="check" data-check="${x.id}" aria-label="تغيير إنجاز ${escapeHtml(x.title)}">${done?'✓':''}</button>
          <div class="lesson-main">
            <div class="lesson-top"><span class="lesson-num">${String(x.seq).padStart(3,'0')}</span><span class="kind ${k}">${escapeHtml(x.kind)}</span></div>
            <h4 class="lesson-title">${escapeHtml(x.title)}</h4>
            <div class="lesson-meta"><span>👨‍🏫 ${escapeHtml(x.instructor)}</span><span>📚 ${escapeHtml(x.course)}</span><span>🎬 ${escapeHtml(x.no)}</span></div>
            ${x.note?`<p class="lesson-note">${escapeHtml(x.note)}</p>`:''}
            <details class="lesson-details"><summary>تفاصيل الدرس وطريقة دراسته</summary><p>${escapeHtml(x.details)}</p><div class="lesson-actions"><a href="${escapeHtml(x.url)}" target="_blank" rel="noopener">فتح الدرس / المقطع ↗</a></div></details>
          </div><div class="duration">◷ ${escapeHtml(x.duration)}</div>
        </article>`;
      }).join('')}</div></section>`;
    }).join('');
    document.querySelectorAll('[data-check]').forEach(b=>b.addEventListener('click',()=>{
      const id=b.dataset.check;doneSet.has(id)?doneSet.delete(id):doneSet.add(id);save();render();
    }));
  }
  $('#searchInput').addEventListener('input',e=>{search=e.target.value;render();save();});
  $('#typeFilter').addEventListener('change',e=>{typeFilter=e.target.value;render();save();});
  $('#hideDoneBtn').textContent=hideDone?'إظهار المنتهي':'إخفاء المنتهي';
  $('#hideDoneBtn').addEventListener('click',()=>{hideDone=!hideDone;$('#hideDoneBtn').textContent=hideDone?'إظهار المنتهي':'إخفاء المنتهي';render();save();});
  $('#resetBtn').addEventListener('click',()=>{if(confirm('هل تريد تصفير إنجاز جميع الدروس؟')){doneSet.clear();save();render();}});
  $('#nextBtn').addEventListener('click',()=>{const next=all.find(x=>!doneSet.has(x.id));if(next){if(!matches(next)){search='';typeFilter='all';hideDone=false;$('#searchInput').value='';$('#typeFilter').value='all';$('#hideDoneBtn').textContent='إخفاء المنتهي';}render();setTimeout(()=>{const el=document.getElementById(next.id);if(el){el.scrollIntoView({behavior:'smooth',block:'center'});el.style.outline='2px solid #8db6f2';setTimeout(()=>el.style.outline='',1500);}},40);}});
  $('#exportBtn').addEventListener('click',()=>{const blob=new Blob([JSON.stringify({product:'Linux Learning Track',version:2,exportedAt:new Date().toISOString(),done:[...doneSet]},null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='linux-learning-progress.json';a.click();URL.revokeObjectURL(a.href);});
  $('#importFile').addEventListener('change',async e=>{const f=e.target.files[0];if(!f)return;try{const val=JSON.parse(await f.text());if(!Array.isArray(val.done))throw new Error();const known=new Set(all.map(x=>x.id));doneSet.clear();val.done.filter(id=>known.has(id)).forEach(id=>doneSet.add(id));save();render();alert('تم استيراد التقدم.');}catch{alert('ملف التقدم غير صالح.');}e.target.value='';});
  $('#auditToggle').addEventListener('click',()=>$('#auditContent').classList.toggle('hidden'));
  function auditCard(x){return `<article class="audit-item"><strong>${escapeHtml(x.source)} — ${escapeHtml(x.instructor)}</strong><small>${escapeHtml(x.lesson)}</small><p><b>المحتوى:</b> ${escapeHtml(x.content)}</p><p class="reason"><b>سبب القرار:</b> ${escapeHtml(x.reason)}</p>${x.url?`<a href="${escapeHtml(x.url)}" target="_blank" rel="noopener">فتح المصدر ↗</a>`:''}</article>`}
  $('#excludedList').innerHTML=data.excluded.map(auditCard).join('');
  $('#laterList').innerHTML=data.later.map(auditCard).join('');
  updateProgress();render();
})();