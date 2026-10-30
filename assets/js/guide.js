/* WSIDN — guide page */
(async function () {
  const {
    loadData, escapeHtml, qs, urgencyBadge, findBySlug, findById,
    categoryById, formatDate, setData
  } = window.WSIDN;
  const { t, field, onChange } = window.i18n;

  const slug = qs('slug');
  const root = document.getElementById('guide-root');

  let data;
  try { data = await loadData(); setData(data); }
  catch { root.innerHTML = `<div class="notice">Could not load this guide.</div>`; return; }

  const guide = findBySlug(data, slug);
  if (!guide) {
    root.innerHTML = `<div class="notice"><strong>${escapeHtml(t('guide.notFound'))}</strong> <a href="index.html">${escapeHtml(t('guide.backHome'))}</a></div>`;
    return;
  }

  const cat = categoryById(data, guide.category);
  const related = (guide.related || []).map(id => findById(data, id)).filter(Boolean);

  // pick language-aware array
  function localizedArr(p, base) {
    if (window.i18n.getLang() === 'ur' && Array.isArray(p[base + '_ur'])) return p[base + '_ur'];
    return p[base] || [];
  }

  function render() {
    document.title = `${field(guide, 'title')} — WSIDN`;
    document.querySelector('meta[name="description"]')
      ?.setAttribute('content', field(guide, 'summary'));

    root.innerHTML = `
      <section class="guide-hero">
        <div class="container">
          <div class="crumb mono">
            ${escapeHtml(t('guide.guideCrumb'))} / <a href="category.html?cat=${encodeURIComponent(cat?.slug || '')}">${escapeHtml(field(cat, 'name'))}</a>
          </div>
          <h1>${escapeHtml(field(guide, 'title'))}</h1>
          <p class="lede">${escapeHtml(field(guide, 'summary'))}</p>
          <div class="guide-meta">
            <span class="${escapeHtml(guide.urgency)}">${escapeHtml(window.WSIDN.urgencyLabel(guide.urgency))}</span>
            <span>${escapeHtml(t('guide.pakistan'))}</span>
            <span>${escapeHtml(field(guide, 'readTime'))}</span>
            <span>${escapeHtml(t('guide.verified'))}: ${escapeHtml(formatDate(guide.lastVerified))}</span>
          </div>
        </div>
      </section>

      <div class="container">
        <div class="guide-body">
          <main>
            <div class="alert">
              <strong>${escapeHtml(t('guide.firstProtect'))}</strong>
              ${escapeHtml(field(guide, 'firstProtect'))}
            </div>

            <h2 class="section-title">${escapeHtml(t('guide.doThisFirst'))}</h2>
            <div class="steps">
              ${guide.steps.map(s => `
                <div class="step">
                  <div class="n">${escapeHtml(s.n)}</div>
                  <div>
                    <h3>${escapeHtml(field(s, 'h'))}</h3>
                    <p>${escapeHtml(field(s, 'p'))}</p>
                  </div>
                </div>
              `).join('')}
            </div>

            <div class="donot">
              <h3>${escapeHtml(t('guide.doNot'))}</h3>
              <ul>${localizedArr(guide, 'doNot').map(d => `<li>${escapeHtml(d)}</li>`).join('')}</ul>
            </div>

            <div class="official-box">
              <h3>${escapeHtml(t('guide.officialHelp'))}</h3>
              <ul>
                ${guide.official.map(o => `
                  <li><a href="${escapeHtml(o.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(field(o, 'label'))} ↗</a></li>
                `).join('')}
              </ul>
            </div>

            ${guide.finder ? `
              <div class="finder" id="finder">
                <h3>${escapeHtml(t('guide.stillNotSolved'))}</h3>
                <p id="finder-q">${escapeHtml(field(guide.finder, 'question'))}</p>
                <div class="opts" id="finder-opts"></div>
                <div id="finder-out" class="hidden"></div>
              </div>
            ` : ''}

            <div class="donot" style="background:#fff">
              <h3>${escapeHtml(t('guide.ifThatFails'))}</h3>
              <p style="margin:0">${escapeHtml(field(guide, 'ifFails'))}</p>
            </div>
          </main>

          <aside class="side">
            <div class="feedback">
              <h4>${escapeHtml(t('guide.helpful'))}</h4>
              <div class="row">
                <button class="btn" data-fb="solved">${escapeHtml(t('guide.yesSolved'))}</button>
                <button class="btn dark" data-fb="stuck">${escapeHtml(t('guide.stillStuck'))}</button>
              </div>
              <div class="msg hidden" id="fb-msg"></div>
            </div>

            ${related.length ? `
              <div class="card">
                <h4>${escapeHtml(t('guide.related'))}</h4>
                <ul>
                  ${related.map(r => `<li><a href="guide.html?slug=${encodeURIComponent(r.slug)}">${escapeHtml(field(r, 'title'))}</a></li>`).join('')}
                </ul>
              </div>
            ` : ''}

            <div class="card">
              <h4>${escapeHtml(t('guide.editorialNote'))}</h4>
              <p style="margin:0;font-size:.9rem">
                ${escapeHtml(t('guide.editorialBody'))} <a href="about.html">${escapeHtml(t('guide.aboutPage'))}</a>.
              </p>
            </div>
          </aside>
        </div>
      </div>
    `;

    // rebind feedback buttons
    document.querySelectorAll('[data-fb]').forEach(btn => {
      btn.addEventListener('click', () => {
        const msg = document.getElementById('fb-msg');
        const v = btn.dataset.fb;
        try { localStorage.setItem('wsidn_fb_' + guide.id, v); } catch {}
        msg.textContent = v === 'solved' ? t('guide.solvedMsg') : t('guide.stuckMsg');
        msg.classList.remove('hidden');
      });
    });

    // finder
    if (guide.finder) initFinder();
  }

  function initFinder() {
    const optsEl = document.getElementById('finder-opts');
    const outEl  = document.getElementById('finder-out');
    const qEl    = document.getElementById('finder-q');
    if (!optsEl) return;

    function renderOptions() {
      outEl.classList.add('hidden');
      outEl.innerHTML = '';
      qEl.classList.remove('hidden');
      qEl.textContent = field(guide.finder, 'question');
      optsEl.innerHTML = guide.finder.options.map((o, i) =>
        `<button class="opt" data-i="${i}">${escapeHtml(field(o, 'label'))}</button>`
      ).join('');
    }

    optsEl.onclick = (e) => {
      const btn = e.target.closest('.opt');
      if (!btn) return;
      const opt = guide.finder.options[Number(btn.dataset.i)];
      optsEl.innerHTML = '';
      qEl.classList.add('hidden');
      outEl.classList.remove('hidden');
      outEl.innerHTML = `
        <div class="result">${escapeHtml(field(opt, 'next'))}</div>
        <button class="btn ghost reset" id="finder-reset">${escapeHtml(t('guide.startOver'))}</button>
      `;
      document.getElementById('finder-reset').onclick = renderOptions;
    };

    renderOptions();
  }

  render();
  onChange(render);
})();