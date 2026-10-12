/**
 * Artes do Sul Design System - Theme Switcher (Dark / Light)
 * Baseado nos tokens de cores oficiais da suíte de temas Artes do Sul
 */

(function () {
  const THEME_STORAGE_KEY = 'artesdosul_theme';
  const THEME_DARK = 'dark';
  const THEME_LIGHT = 'light';

  function getStoredTheme() {
    try {
      const stored = localStorage.getItem(THEME_STORAGE_KEY);
      if (stored === THEME_DARK || stored === THEME_LIGHT) {
        return stored;
      }
    } catch (e) {
      // LocalStorage pode falhar em modo restrito
    }
    return THEME_DARK; // Padrão soberano Artes do Sul
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (document.body) {
      if (theme === THEME_LIGHT) {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
      } else {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
      }
    }
    updateToggleButton(theme);
  }

  function updateToggleButton(theme) {
    const btn = document.getElementById('theme-toggle-btn');
    if (!btn) return;
    const isDark = theme === THEME_DARK;
    btn.setAttribute('aria-label', isDark ? 'Mudar para modo claro' : 'Mudar para modo escuro');
    btn.setAttribute('title', isDark ? 'Modo Claro (Artes do Sul Light)' : 'Modo Escuro (Artes do Sul Dark)');
    
    const iconSpan = btn.querySelector('.theme-toggle-icon');
    if (iconSpan) {
      iconSpan.innerHTML = isDark 
        ? '<i class="fas fa-sun" style="color: #FF7F50;"></i>' 
        : '<i class="fas fa-moon" style="color: #691345;"></i>';
    }
  }

  window.toggleArtesDoSulTheme = function () {
    const currentTheme = document.documentElement.getAttribute('data-theme') || THEME_DARK;
    const newTheme = currentTheme === THEME_DARK ? THEME_LIGHT : THEME_DARK;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    } catch (e) {}
    applyTheme(newTheme);
  };

  // Aplica imediatamente antes da renderização completa
  const initialTheme = getStoredTheme();
  document.documentElement.setAttribute('data-theme', initialTheme);

  document.addEventListener('DOMContentLoaded', function () {
    applyTheme(initialTheme);
    
    // Adiciona listener se botão existir
    const btn = document.getElementById('theme-toggle-btn');
    if (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        window.toggleArtesDoSulTheme();
      });
    }
  });
})();
