/* WSIDN — homepage */
(async function () {
  const { loadData, escapeHtml, urgencyBadge, categoryById, setData } = window.WSIDN;
  const { t, field, onChange } = window.i18n;

  let data;
  try {
    data = await loadData();
    setData(data);
  } catch (e) {
    document.getElementById('home-content').innerHTML =
      `<div class="notice">Could not load guides.</div>`;
    return;
  }

  function render() {
    const catGrid = document.getElementById('cat-grid');
    catGrid.innerHTML = data.categories.map(c => `
      <a class="cat-card" href="category.html?cat=${encodeURIComponent(c.slug)}">
        <span class="num">${escapeHtml(c.id)}</span>
        <span class="arrow" aria-hidden="true">${document.dir === 'rtl' ? '←' : '→'}</span>
        <h3>${escapeHtml(field(c, 'name'))}</h3>
        <p>${escapeHtml(field(c, 'desc'))}</p>
      </a>
    `).join('');

    const list = document.getElementById('prob-list');
    const problems = [...data.problems].sort((a, b) => {
      const rank = { emergency: 0, urgent: 1, routine: 2 };
      return (rank[a.urgency] ?? 9) - (rank[b.urgency] ?? 9);
    });
    list.innerHTML = problems.map(p => {
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
    }).join('');
  }

  render();
  onChange(render);

  const form = document.getElementById('home-search');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const q = form.querySelector('input').value.trim();
    if (!q) return;
    location.href = `search.html?q=${encodeURIComponent(q)}`;
  });
  document.querySelectorAll('[data-search-chip]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      location.href = `search.html?q=${encodeURIComponent(el.dataset.searchChip)}`;
    });
  });
})();