/* WSIDN — shared core */
(function () {
  'use strict';

  const DATA_JSON = 'data/problems.json';

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
  }

  function qs(name) {
    return new URLSearchParams(window.location.search).get(name);
  }

  function urgencyBadge(u) {
    const label = window.i18n ? (window.i18n.t('urgency.' + u) || u) : u;
    // urgency labels live in problems.json "urgency" map; we handle both
    const txt = window.WSIDN && window.WSIDN._urgencyLabel
      ? window.WSIDN._urgencyLabel(u)
      : u;
    return `<span class="u ${escapeHtml(u)}">${escapeHtml(txt || label)}</span>`;
  }

  async function loadData() {
    if (location.protocol === 'file:' && window.__WSIDN_DATA__) {
      return window.__WSIDN_DATA__;
    }
    try {
      const res = await fetch(DATA_JSON, { cache: 'no-cache' });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return await res.json();
    } catch (err) {
      if (window.__WSIDN_DATA__) return window.__WSIDN_DATA__;
      throw err;
    }
  }

  function findBySlug(data, slug) { return data.problems.find(p => p.slug === slug); }
  function findById(data, id)     { return data.problems.find(p => p.id === id); }
  function categoryBySlug(data, s){ return data.categories.find(c => c.slug === s); }
  function categoryById(data, id) { return data.categories.find(c => c.id === id); }

  function setYear() {
    document.querySelectorAll('[data-year]').forEach(el => {
      el.textContent = new Date().getFullYear();
    });
  }

  function formatDate(iso) {
    if (!iso) return '';
    try {
      const lang = window.i18n && window.i18n.getLang() === 'ur' ? 'ur-PK' : 'en-GB';
      const d = new Date(iso + 'T00:00:00');
      return d.toLocaleDateString(lang, { year: 'numeric', month: 'short', day: 'numeric' });
    } catch { return iso; }
  }

  // Urgency label from current data set
  let _dataCache = null;
  function urgencyLabel(u) {
    if (_dataCache && _dataCache.urgency && _dataCache.urgency[u]) {
      const lang = window.i18n ? window.i18n.getLang() : 'en';
      return _dataCache.urgency[u][lang] || _dataCache.urgency[u].en || u;
    }
    return u;
  }

  document.addEventListener('DOMContentLoaded', setYear);

  window.WSIDN = {
    loadData, escapeHtml, qs, urgencyBadge, urgencyLabel,
    findBySlug, findById, categoryBySlug, categoryById,
    formatDate,
    setData: (d) => { _dataCache = d; },
    getData: () => _dataCache,
    _urgencyLabel: urgencyLabel
  };
})();