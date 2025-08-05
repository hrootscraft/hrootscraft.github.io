// Theme toggle functionality
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('theme-toggle');
  // Apply saved theme if exists
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    document.body.classList.add('dark');
  }
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    // Persist the current theme
    if (document.body.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
      toggle.innerText = '🌞';
    } else {
      localStorage.setItem('theme', 'light');
      toggle.innerText = '🌙';
    }
  });
  // Set initial icon
  toggle.innerText = document.body.classList.contains('dark') ? '🌞' : '🌙';
});