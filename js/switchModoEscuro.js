const switchInput = document.querySelector('.cabecalho__switch-input');
const body = document.body;

switchInput.addEventListener('change', () => {
  body.classList.toggle('modo-escuro', switchInput.checked);
});
