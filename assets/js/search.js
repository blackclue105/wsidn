/* WSIDN — search */
(async function () {
  const { loadData, escapeHtml, qs, urgencyBadge, categoryById, setData } = window.WSIDN;
  const { t, field, onChange } = window.i18n;

  const q = (qs('q') || '').trim();
  const input = document.getElementById('q');
  const resultsEl = document.getElementById('results');
  const summaryEl = document.getElementById('summary');
  input.value = q;

  let data;
  try { data = await loadData(); setData(data); }
  catch { resultsEl.innerHTML = `<div class="notice">Could not load guides.</div>`; return; }

  const norm = (s) => s.toLowerCase().normalize('NFKD');
  const terms = norm(q).split(/\s+/).filter(Boolean);

  function score(p) {
    if (!terms.length) return 0;
    const hay = norm([
      p.title, p.title_ur, p.summary, p.summary_ur,
      (p.steps || []).map(s => [s.h, s.h_ur, s.p, s.p_ur].join(' ')).join(' '),
      (p.doNot || []).join(' '), (p.doNot_ur || []).join(' '),
      (p.official || []).map(o => [o.label, o.label_ur].join(' ')).join(' ')
    ].join(' '));
    let s = 0;
    for (const t of terms) {
      if (hay.includes(t)) s += 1;
      if (norm(p.title).includes(t) || norm(p.title_ur || '').includes(t)) s += 3;
    }
    return s;
  }

  let items = data.problems
    .map(p => ({ p, s: score(p) }))
    .filter(x => x.s > 0 || !q)
    .sort((a, b) => b.s - a.s)
    .map(x => x.p);
  if (!q) items = data.problems;

  function render() {
    summaryEl.textContent = q
      ? `${items.length} ${t('search.results').toLowerCase()} — “${q}”`
      : `${items.length}`;

    resultsEl.innerHTML = items.length
      ? `<div class="prob-list">${items.map(p => {
          const cat = categoryById(data, p.category);
          return `
            <a class="prob" href="guide.html?slug=${encodeURIComponent(p.slug)}">
              ${urgencyBadge(p.urgency)}
              <div>
                <h3>${escapeHtml(field(p, 'title'))}</h3>
                <div class="meta">${escapeHtml(field(cat, 'name'))} · ${escapeHtml(field(p, 'readTime'))}</div>
              </div>
              <span class="go" aria-hidden="true">${document.dir === 'rtl' ? '←' : '→'}</span>
            </a>
          `;
        }).join('')}</div>`
      : `<div class="notice">${escapeHtml(t('search.noResults'))} <a href="index.html">${escapeHtml(t('search.browseAll'))}</a>.</div>`;
  }

  render();
  onChange(render);

  document.getElementById('search-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const v = input.value.trim();
    if (!v) return;
    location.href = `search.html?q=${encodeURIComponent(v)}`;
  });
})();