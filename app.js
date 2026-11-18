(() => {
  'use strict';

  const STORAGE_KEY = 'linux-only-learning-track-v1';
  const LEGACY_KEYS = ['linux-to-soc-reference-design-v2', 'linux-to-soc-roadmap-v1'];
  const state = {
    done: new Set(),
    tab: 'path',
    type: 'all',
    source: 'all',
    instructor: 'all',
    status: 'all',
    query: '',
    hideDone: false
  };

  const $ = (id) => document.getElementById(id);
  const esc = (value = '') => String(value).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
  const pct = (n, d) => d ? Math.round(n / d * 100) : 0;
  const requiredLessons = CURRICULUM.filter(x => x.required);
  const phaseColors = ['#6b7a99','#1c6dd0','#0f8a6b','#7b3fc4','#e8590c','#b8860b','#b0306a','#2c6a91','#9a6830','#496c9c'];
  let toastTimer;

  function showToast(message) {
    const el = $('toast');
    el.textContent = message;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2300);
  }

  function loadProgress() {
    for (const key of [STORAGE_KEY, ...LEGACY_KEYS]) {
      try {
        const raw = localStorage.getItem(key);
        if (!raw) continue;
        const parsed = JSON.parse(raw);
        const values = Array.isArray(parsed) ? parsed : parsed.done;
        if (Array.isArray(values)) {
          state.done = new Set(values.filter(id => CURRICULUM.some(x => x.id === id)));
          break;
        }
      } catch { /* Ignore damaged local progress. */ }
    }
  }

  function saveProgress() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...state.done]));
    } catch {
      showToast('تعذر حفظ التقدم في المتصفح');
    }
  }

  function sourceKey(item) {
    const value = `${item.instructor || ''} ${item.course || ''}`.toLowerCase();
    if (value.includes('tanany') || value.includes('الطناني')) return 'tanany';
    if (value.includes('abdallah') || value.includes('al-nuaimy') || value.includes('النعيمي')) return 'abdallah';
    if (value.includes('security jordan')) return 'security';
    return 'additional';
  }

  const sourceLabels = {
    all: 'كل الدورات',
    tanany: 'محمد الطناني',
    abdallah: 'عبدالله النعيمي',
    security: 'Security Jordan',
    additional: 'قائمة Bash الإضافية'
  };
  const sourceColors = {
    tanany: 'tanany',
    abdallah: 'abdallah',
    security: 'security',
    additional: 'additional'
  };

  function itemKind(item) {
    if (item.required) return 'required';
    if (item.priority === 'support') return 'support';
    if (sourceKey(item) === 'abdallah') return 'support';
    return 'optional';
  }

  function kindLabel(item) {
    const kind = itemKind(item);
    if (kind === 'required') return 'أساسي';
    if (kind === 'support') return 'دعم / مراجعة';
    return 'توسّع اختياري';
  }

  function itemType(item) {
    return item.type === 'lab' ? 'تحدٍ عملي' : 'فيديو';
  }

  function durationLabel(item) {
    const duration = item.duration || '';
    const unverified = !duration || /غير موثقة|غير مسجلة|افتح المصدر للتحقق/i.test(duration);
    if (/وقت تدريب تقديري/i.test(duration)) return duration;
    if (!unverified) return `المدة: ${duration}`;
    if (item.studyTime) return `مدة الفيديو غير موثقة · وقت مقترح: ${item.studyTime}`;
    return 'مدة الفيديو غير موثقة';
  }

  function courseLabel(item) {
    const course = item.course || '';
    if (course.includes('Linux Administration')) return 'Linux Administration · الطناني';
    if (course.includes('Linux Course in Cyber')) return 'Linux in CyberSecurity · عبدالله';
    if (course.includes('Linux for Cyber')) return 'Linux for CyberSecurity · Security Jordan';
    if (course.includes('Bash Scripting Course Tutorial')) return 'Bash Scripting · قائمة إضافية';
    if (course.includes('Bash Scripting')) return 'Bash Scripting · Security Jordan';
    return course || 'تطبيق Linux';
  }

  function progressForPhase(phaseId) {
    const list = CURRICULUM.filter(x => x.phase === phaseId && x.required);
    const done = list.filter(x => state.done.has(x.id)).length;
    return { done, total: list.length, percent: pct(done, list.length) };
  }

  function renderProgress() {
    const done = requiredLessons.filter(x => state.done.has(x.id)).length;
    const total = requiredLessons.length;
    const percent = pct(done, total);
    const next = requiredLessons.find(x => !state.done.has(x.id));
    $('ring').style.setProperty('--p', percent);
    $('pc').textContent = `${percent}%`;
    $('progressSummary').textContent = `${done} من ${total} درسًا أساسيًا مكتملًا`;
    $('requiredCount').textContent = `${total} درسًا أساسيًا`;
    if (next) {
      $('nextTitle').textContent = `التالي: ${next.ar || next.title}`;
      $('nextMeta').textContent = `${next.instructor} · ${next.sourceNo || 'بدون رقم'} · ${durationLabel(next)}`;
      $('nextBtn').disabled = false;
    } else {
      $('nextTitle').textContent = 'اكتملت الدروس الأساسية';
      $('nextMeta').textContent = 'يمكنك مراجعة دروس الدعم والتوسع الاختياري';
      $('nextBtn').disabled = true;
    }
  }

  function renderInstructorFilter() {
    const names = [...new Set(CURRICULUM.map(x => x.instructor))].sort((a, b) => a.localeCompare(b, 'ar'));
    const el = $('instructorFilter');
    el.innerHTML = '<option value="all">كل المحاضرين</option>' + names.map(name => `<option value="${esc(name)}">${esc(name)}</option>`).join('');
    el.value = state.instructor;
  }

  function renderSourceFilters() {
    const order = ['all', 'tanany', 'abdallah', 'security', 'additional'];
    $('courseFilters').innerHTML = order.map(key =>
      `<button class="chip" data-source="${key}" aria-pressed="${state.source === key}">${sourceLabels[key]}</button>`
    ).join('');
    $('courseFilters').querySelectorAll('[data-source]').forEach(button => {
      button.addEventListener('click', () => {
        state.source = button.dataset.source;
        renderSourceFilters();
        renderPhases();
      });
    });
  }

  function matches(item) {
    const kind = itemKind(item);
    const done = state.done.has(item.id);
    if (state.type !== 'all' && state.type !== kind) return false;
    if (state.source !== 'all' && sourceKey(item) !== state.source) return false;
    if (state.instructor !== 'all' && item.instructor !== state.instructor) return false;
    if (state.status === 'todo' && done) return false;
    if (state.status === 'done' && !done) return false;
    if (state.status === 'required' && !item.required) return false;
    if (state.status === 'optional' && item.required) return false;
    if (state.hideDone && done) return false;
    if (state.query) {
      const query = state.query.toLocaleLowerCase('ar');
      const haystack = [item.ar, item.title, item.course, item.instructor, item.sourceNo, item.desc, item.goal, item.profile]
        .join(' ').toLocaleLowerCase('ar');
      if (!haystack.includes(query)) return false;
    }
    return true;
  }

  function renderLesson(item) {
    const done = state.done.has(item.id);
    const kind = itemKind(item);
    const source = sourceKey(item);
    return `<li class="stop ${kind} ${done ? 'done' : ''}" id="stop-${esc(item.id)}">
      <button class="dot" data-done="${esc(item.id)}" aria-pressed="${done}" aria-label="${done ? 'إلغاء إكمال الدرس' : 'تحديد الدرس كمكتمل'}">${done ? '✓' : ''}</button>
      <div class="row">
        <div class="lesson-head">
          <span class="lesson-title">${esc(item.ar || item.title)}</span>
          <span class="source-tag ${sourceColors[source] || 'additional'}">${esc(courseLabel(item))}</span>
          <span class="lesson-no">${item.sourceNo ? `درس ${esc(item.sourceNo)}` : 'درس'}</span>
          <span class="priority-tag ${kind}">${kindLabel(item)}</span>
          <span class="type-tag">${itemType(item)}</span>
        </div>
        <div class="english-title">${esc(item.title || '')}</div>
        <div class="lesson-meta-row">
          <span class="instructor">المحاضر: ${esc(item.instructor || 'غير محدد')}</span>
          <span class="duration">${esc(durationLabel(item))}</span>
          <a class="watch-link" href="${esc(item.url || '#')}" target="_blank" rel="noopener noreferrer">${item.type === 'lab' ? 'افتح التحدي' : 'افتح المحاضرة'} ↗</a>
        </div>
        ${(item.profile || item.desc || item.goal) ? `<details class="lesson-details"><summary>نبذة عن المحاضر والدرس والتطبيق</summary>
          ${item.profile ? `<p><b>عن المحاضر / المصدر:</b> ${esc(item.profile)}</p>` : ''}
          ${item.desc ? `<p><b>محتوى الدرس:</b> ${esc(item.desc)}</p>` : ''}
          ${item.goal ? `<p><b>المطلوب بعد الدرس:</b> ${esc(item.goal)}</p>` : ''}
        </details>` : ''}
      </div>
    </li>`;
  }

  function renderPhases() {
    const visible = CURRICULUM.filter(matches);
    if (!visible.length) {
      $('phases').innerHTML = '<div class="empty">لا توجد دروس تطابق البحث أو عوامل التصفية. غيّر الاختيارات أو امسح البحث.</div>';
      return;
    }
    $('phases').innerHTML = PHASES.map((phase, index) => {
      const list = visible.filter(x => x.phase === phase.id).sort((a, b) => a.seq - b.seq);
      if (!list.length) return '';
      const progress = progressForPhase(phase.id);
      const totalItems = CURRICULUM.filter(x => x.phase === phase.id).length;
      const progressLabel = progress.total ? `${progress.done}/${progress.total} أساسي مكتمل` : 'مرحلة توسّع – لا تدخل في النسبة';
      return `<section class="phase" id="${esc(phase.id)}" style="--pc:${phaseColors[index % phaseColors.length]}">
        <div class="ph"><h2>${index + 1}. ${esc(phase.ar)}</h2><span>${progressLabel}</span></div>
        <div class="phase-desc">${esc(phase.goal)} · ${esc(phase.estimate)} · ${totalItems} درسًا/خطوة</div>
        <div class="bar"><i style="width:${progress.percent}%"></i></div>
        <ol class="stops">${list.map(renderLesson).join('')}</ol>
      </section>`;
    }).join('');

    $('phases').querySelectorAll('[data-done]').forEach(button => {
      button.addEventListener('click', () => {
        const id = button.dataset.done;
        if (state.done.has(id)) state.done.delete(id);
        else state.done.add(id);
        saveProgress();
        renderAll();
        showToast(state.done.has(id) ? 'تم تسجيل الدرس كمكتمل' : 'تم إلغاء علامة الإنجاز');
      });
    });
  }

  function renderSources() {
    $('sourceCards').innerHTML = SOURCES.map(source => `
      <article class="source-card">
        <span class="source-tag ${source.key}">${esc(source.role)}</span>
        <h3>${esc(source.name)}</h3>
        <p>${esc(source.bio)}</p>
        <small>${esc(source.scope)}</small>
        <div class="source-bottom">
          <a href="${esc(source.url)}" target="_blank" rel="noopener noreferrer">فتح القائمة ↗</a>
          <button class="chip" type="button" data-source-jump="${esc(source.key)}">اعرض دروسه</button>
        </div>
        ${Array.isArray(source.links) ? `<div class="source-links">${source.links.map(link => `<a href="${esc(link.url)}" target="_blank" rel="noopener noreferrer">${esc(link.label)} ↗</a>`).join('')}</div>` : ''}
      </article>`).join('');

    $('sourceCards').querySelectorAll('[data-source-jump]').forEach(button => {
      button.addEventListener('click', () => {
        state.source = button.dataset.sourceJump;
        state.tab = 'path';
        setTab('path');
        renderSourceFilters();
        renderPhases();
        $('view-path').scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    $('optionalResources').innerHTML = OPTIONAL_RESOURCES.map(resource => `
      <article class="resource-card">
        <h4>${esc(resource.title)}</h4>
        <div class="resource-meta">${esc(resource.instructor)} · ${esc(resource.duration)} · ${esc(resource.decision)}</div>
        <p>${esc(resource.reason)}</p>
        <a href="${esc(resource.url)}" target="_blank" rel="noopener noreferrer">فتح المصدر ↗</a>
      </article>`).join('');
  }

  function setTab(tab) {
    state.tab = tab;
    for (const name of ['path', 'sources', 'guide']) {
      $(`view-${name}`).classList.toggle('hidden', name !== tab);
      const button = document.querySelector(`[data-tab="${name}"]`);
      if (button) button.setAttribute('aria-selected', String(name === tab));
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function renderAll() {
    renderProgress();
    renderPhases();
  }

  $('tabs').addEventListener('click', event => {
    const button = event.target.closest('[data-tab]');
    if (button) setTab(button.dataset.tab);
  });

  $('typeFilters').addEventListener('click', event => {
    const button = event.target.closest('[data-value]');
    if (!button) return;
    state.type = button.dataset.value;
    $('typeFilters').querySelectorAll('[data-value]').forEach(item =>
      item.setAttribute('aria-pressed', String(item === button))
    );
    renderPhases();
  });

  $('searchInput').addEventListener('input', event => {
    state.query = event.target.value.trim();
    renderPhases();
  });
  $('instructorFilter').addEventListener('change', event => {
    state.instructor = event.target.value;
    renderPhases();
  });
  $('statusFilter').addEventListener('change', event => {
    state.status = event.target.value;
    renderPhases();
  });
  $('hideDone').addEventListener('click', () => {
    state.hideDone = !state.hideDone;
    $('hideDone').setAttribute('aria-pressed', String(state.hideDone));
    $('hideDone').textContent = state.hideDone ? 'إظهار المكتمل' : 'إخفاء المكتمل';
    renderPhases();
  });

  $('nextBtn').addEventListener('click', () => {
    const next = requiredLessons.find(item => !state.done.has(item.id));
    if (!next) return;
    state.type = 'all';
    state.source = 'all';
    state.instructor = 'all';
    state.status = 'all';
    state.query = '';
    state.hideDone = false;
    $('searchInput').value = '';
    $('instructorFilter').value = 'all';
    $('statusFilter').value = 'all';
    $('hideDone').setAttribute('aria-pressed', 'false');
    $('hideDone').textContent = 'إخفاء المكتمل';
    $('typeFilters').querySelectorAll('[data-value]').forEach(button =>
      button.setAttribute('aria-pressed', String(button.dataset.value === 'all'))
    );
    renderSourceFilters();
    setTab('path');
    renderAll();
    const el = $(`stop-${next.id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.classList.remove('flash');
      void el.offsetWidth;
      el.classList.add('flash');
    }
  });

  $('exportBtn').addEventListener('click', () => {
    const payload = { version: 1, exportedAt: new Date().toISOString(), done: [...state.done] };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'linux-only-progress.json';
    link.click();
    URL.revokeObjectURL(url);
    showToast('تم تصدير تقدم Linux');
  });

  $('importInput').addEventListener('change', async event => {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      const payload = JSON.parse(await file.text());
      if (!Array.isArray(payload.done)) throw new Error('invalid');
      state.done = new Set(payload.done.filter(id => CURRICULUM.some(item => item.id === id)));
      saveProgress();
      renderAll();
      showToast('تم استيراد تقدم Linux بنجاح');
    } catch {
      showToast('ملف التقدم غير صالح');
    }
    event.target.value = '';
  });

  $('resetBtn').addEventListener('click', () => {
    if (!confirm('هل تريد حذف جميع علامات الإنجاز من هذا المتصفح؟ يمكنك تصدير التقدم أولًا.')) return;
    state.done.clear();
    saveProgress();
    renderAll();
    showToast('تمت إعادة ضبط التقدم');
  });

  loadProgress();
  renderInstructorFilter();
  renderSourceFilters();
  renderSources();
  renderAll();
})();
