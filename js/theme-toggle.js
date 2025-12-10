document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const toggleBtn = document.getElementById('themeToggle');
  if (!toggleBtn) return;

  // зчитуємо тему з localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    body.classList.add('theme-light');
    toggleBtn.textContent = 'Темна тема';
  }

  toggleBtn.addEventListener('click', () => {
    const isLight = body.classList.toggle('theme-light');
    toggleBtn.textContent = isLight ? 'Темна тема' : 'Світла тема';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
});
