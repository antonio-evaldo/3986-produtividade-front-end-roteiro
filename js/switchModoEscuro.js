const switchInput = document.querySelector('.cabecalho__switch-input');
const body = document.body;
const logo = document.getElementById('logo-vidflow');

switchInput.addEventListener('change', () => {
  const isDarkMode = switchInput.checked;

  body.classList.toggle('modo-escuro', isDarkMode);

  logo.src = isDarkMode
    ? './img/modo_escuro/vidflow-logo-dark-mode.png'
    : './img/modo_claro/vidflow-logo-light-mode.png';
});
