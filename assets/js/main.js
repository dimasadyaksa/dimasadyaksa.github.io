// Tiny progressive-enhancement script: theme toggle + nav active state.
// No dependencies. No build step. Safe to inline-link from every page.

(function () {
  'use strict';

  // ---- Theme toggle -------------------------------------------------------
  // Default: follow OS via prefers-color-scheme (handled by CSS).
  // If the user clicks the toggle, we pin the theme via data-theme on <html>,
  // and remember the choice in localStorage.
  var STORAGE_KEY = 'theme';
  var root = document.documentElement;

  function applyTheme(theme) {
    if (theme === 'light' || theme === 'dark') {
      root.setAttribute('data-theme', theme);
    } else {
      root.removeAttribute('data-theme');
    }
  }

  // Restore stored preference, if any
  try {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored) applyTheme(stored);
  } catch (e) { /* localStorage may be blocked — ignore */ }

  function currentlyDark() {
    var pinned = root.getAttribute('data-theme');
    if (pinned) return pinned === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.theme-toggle');
    if (!btn) return;
    var nextTheme = currentlyDark() ? 'light' : 'dark';
    applyTheme(nextTheme);
    try { localStorage.setItem(STORAGE_KEY, nextTheme); } catch (_) {}
  });

  // ---- Nav active state ---------------------------------------------------
  // Mark the nav link that matches the current pathname.
  document.addEventListener('DOMContentLoaded', function () {
    var path = location.pathname.replace(/\/+$/, '') || '/';
    var fname = path.split('/').pop() || 'index.html';
    if (fname === '') fname = 'index.html';
    document.querySelectorAll('.nav__links a').forEach(function (a) {
      var href = (a.getAttribute('href') || '').split('/').pop();
      if (!href) return;
      // Highlight if filename matches, or if we're on the homepage.
      if (href === fname || (fname === '' && href === 'index.html') ||
          (fname === 'index.html' && href === 'index.html')) {
        a.classList.add('is-active');
      }
    });
  });
})();
