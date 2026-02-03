// Gerenciamento do tema (Dark Mode)
const themeSwitch = document.getElementById('checkbox');

// Carregar preferência salva
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  document.body.classList.add('dark-mode');
  themeSwitch.checked = true;
}

// Alternar tema e salvar preferência
themeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
  
  const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
});

// Animação suave ao rolar a página
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  sections.forEach(section => {
    observer.observe(section);
  });
});

// Efeito parallax suave no fundo
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollDiff = scrollTop - lastScrollTop;
  
  document.body.style.backgroundPositionY = `${scrollTop * 0.5}px`;
  lastScrollTop = scrollTop;
}, { passive: true });
