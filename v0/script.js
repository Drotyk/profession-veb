(function () {
  const body = document.body;
  const themeBtn = document.getElementById('theme-toggle');
  const colorBtns = document.querySelectorAll('.color-btn');

  // 1. ЛОГІКА СВІТЛОЇ/ТЕМНОЇ ТЕМИ
  if (themeBtn) {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      body.classList.add('theme-light');
    }

    function updateThemeButton() {
      const isLight = body.classList.contains('theme-light');
      themeBtn.textContent = isLight ? '☀️' : '🌙';
      themeBtn.setAttribute(
        'aria-label',
        isLight ? 'Увімкнути темну тему' : 'Увімкнути світлу тему'
      );
    }

    updateThemeButton();

    themeBtn.addEventListener('click', () => {
      body.classList.toggle('theme-light');
      const isLight = body.classList.contains('theme-light');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
      updateThemeButton();
    });
  }

  // 2. ЛОГІКА АКЦЕНТНОГО КОЛЬОРУ (ФІОЛЕТОВИЙ ТА ІНШІ)
  const savedColor = localStorage.getItem('accentColor') || 'default';
  setColor(savedColor);

  colorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const color = btn.getAttribute('data-color');
      setColor(color);
      localStorage.setItem('accentColor', color);
    });
  });

  function setColor(color) {
    // Видаляємо всі класи кольорів
    body.classList.remove('color-purple', 'color-green');

    // Оновлюємо активний стан кнопок
    colorBtns.forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.querySelector(`.color-btn[data-color="${color}"]`);
    if (activeBtn) activeBtn.classList.add('active');

    // Додаємо потрібний клас (якщо це не дефолт)
    if (color !== 'default') {
      body.classList.add(`color-${color}`);
    }
  }
})();