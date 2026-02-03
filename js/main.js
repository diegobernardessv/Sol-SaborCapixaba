const themeSwitch = document.getElementById('checkbox');

themeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});
