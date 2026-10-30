/* WSIDN — category page */
(async function () {
  const { loadData, escapeHtml, urgencyBadge, categoryBySlug, qs, setData } = window.WSIDN;
  const { t, field, onChange } = window.i18n;

  const slug = qs('cat');
  const root = document.getElementById('category-root');

  let data;
  try { data = await loadData(); setData(data); }
  catch { root.innerHTML = `<div class="notice">Could not load guides.</div>`; return; }

  const cat = categoryBySlug(data, slug);
  if (!cat) {
    root.innerHTML = `<div class="notice"><strong>${escapeHtml(t('category.notFound'))}</strong> <a href="index.html">${escapeHtml(t('guide.backHome'))}</a></div>`;
    return;
  }

  const items = data.problems.filter(p => p.category === cat.slug);

  function render() {
    document.title = `${field(cat, 'name')} — WSIDN`;
    root.innerHTML = `
      <section class="cat-hero">
        <div class="container">
          <div class="crumb mono"><a href="index.html">${escapeHtml(t('category.home'))}</a> / ${escapeHtml(field(cat, 'name'))}</div>
          <span class="num">${escapeHtml(cat.id)}</span>
          <h1>${escapeHtml(field(cat, 'name'))}</h1>
          <p class="lede">${escapeHtml(field(cat, 'desc'))}</p>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="section-head">
            <h2>${escapeHtml(t('category.inThisCategory'))}</h2>
            <a href="index.html">${escapeHtml(t('category.backAll'))}</a>
          </div>
          <div class="prob-list">
            ${items.length ? items.map(p => `
              <a class="prob" href="guide.html?slug=${encodeURIComponent(p.slug)}">
                ${urgencyBadge(p.urgency)}
                <div>
                  <h3>${escapeHtml(field(p, 'title'))}</h3>
                  <div class="meta">${escapeHtml(field(p, 'readTime'))}</div>
                </div>
                <span class="go" aria-hidden="true">${document.dir === 'rtl' ? '←' : '→'}</span>
              </a>
            `).join('') : `<p>${escapeHtml(t('category.empty'))}</p>`}
          </div>
        </div>
      </section>
    `;
  }

  render();
  onChange(render);
})();