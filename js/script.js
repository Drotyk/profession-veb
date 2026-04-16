document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('themeToggle');

  // застосувати тему до сторінки
  const applyTheme = (theme) => {
    if (theme === 'light') {
      document.body.classList.add('theme-light');
      toggleBtn.textContent = 'Темна тема';
    } else {
      document.body.classList.remove('theme-light');
      toggleBtn.textContent = 'Світла тема';
    }
  };

  // читаємо попередній вибір з localStorage
  const savedTheme = localStorage.getItem('theme') || 'dark';
  applyTheme(savedTheme);

  // клік по кнопці — перемикаємо
  toggleBtn.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('theme-light')
      ? 'dark'
      : 'light';

    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  });
});
