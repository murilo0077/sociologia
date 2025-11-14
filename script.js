function toggleTheme() {
  document.body.classList.toggle('light-mode');
  const icon = document.querySelector('.theme-icon');
  const isLight = document.body.classList.contains('light-mode');
  icon.textContent = isLight ? '☀️' : '🌙';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  const icon = document.querySelector('.theme-icon');
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    icon.textContent = '☀️';
  }
});

let lastScroll = 0;
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    header.style.padding = '15px 5%';
    header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
  } else {
    header.style.padding = '20px 5%';
    header.style.boxShadow = 'none';
  }
  
  lastScroll = currentScroll;
});