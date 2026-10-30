/* WSIDN — i18n core: language store, DOM binding, dir/lang */
(function () {
  'use strict';

  const STORAGE_KEY = 'wsidn_lang';
  const SUPPORTED = ['en', 'ur'];
  let dict = { en: {}, ur: {} };
  let current = 'en';
  const listeners = new Set();

  function detectInitial() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && SUPPORTED.includes(saved)) return saved;
    } catch {}
    const nav = (navigator.language || 'en').toLowerCase();
    return nav.startsWith('ur') ? 'ur' : 'en';
  }

  function get(obj, path) {
    return path.split('.').reduce((o, k) => (o && o[k] != null ? o[k] : undefined), obj);
  }

  function t(key) {
    const v = get(dict[current], key);
    if (v != null) return v;
    const fb = get(dict.en, key);
    return fb != null ? fb : key;
  }

  // Language-aware field lookup: returns guide.title_ur when current=ur and it exists,
  // otherwise falls back to guide.title.
  function field(obj, base) {
    if (!obj) return '';
    if (current === 'ur') {
      const ur = obj[base + '_ur'];
      if (ur != null && ur !== '') return ur;
    }
    return obj[base] ?? '';
  }

  function applyToDom(root = document) {
    root.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = t(key);
    });
    root.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
    });
    root.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
      el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria-label')));
    });
    root.querySelectorAll('[data-i18n-title]').forEach(el => {
      el.setAttribute('title', t(el.getAttribute('data-i18n-title')));
    });
  }

  function applyDirection() {
    const html = document.documentElement;
    html.setAttribute('lang', current);
    html.setAttribute('dir', current === 'ur' ? 'rtl' : 'ltr');
    document.body?.classList.toggle('lang-ur', current === 'ur');
    document.body?.classList.toggle('lang-en', current === 'en');
  }

  function renderSwitcher() {
    document.querySelectorAll('[data-lang-switch]').forEach(host => {
      host.innerHTML = '';
      SUPPORTED.forEach(code => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'lang-btn' + (code === current ? ' active' : '');
        btn.textContent = code === 'ur' ? 'اردو' : 'EN';
        btn.setAttribute('lang', code);
        btn.setAttribute('aria-pressed', code === current ? 'true' : 'false');
        btn.addEventListener('click', () => setLang(code));
        host.appendChild(btn);
      });
    });
  }

  function broadcast() {
    applyDirection();
    applyToDom();
    renderSwitcher();
    listeners.forEach(fn => { try { fn(current); } catch (e) { console.error(e); } });
    document.dispatchEvent(new CustomEvent('wsidn:langchange', { detail: { lang: current } }));
  }

  function setLang(code) {
    if (!SUPPORTED.includes(code) || code === current) return;
    current = code;
    try { localStorage.setItem(STORAGE_KEY, code); } catch {}
    broadcast();
  }

  function onChange(fn) { listeners.add(fn); return () => listeners.delete(fn); }

  async function init() {
    // Prefer injected fallback if file://
    if (location.protocol === 'file:' && window.__WSIDN_I18N__) {
      dict = window.__WSIDN_I18N__;
    } else {
      try {
        const res = await fetch('data/translations.json', { cache: 'no-cache' });
        if (!res.ok) throw new Error('HTTP ' + res.status);
        dict = await res.json();
      } catch (e) {
        if (window.__WSIDN_I18N__) dict = window.__WSIDN_I18N__;
        else console.warn('i18n: using English fallback only', e);
      }
    }
    current = detectInitial();
    broadcast();
  }

  window.i18n = { t, field, setLang, getLang: () => current, onChange, init, SUPPORTED };
})();