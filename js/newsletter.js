const inputEmail = document.querySelector('.newsletter__input');
const formNewsletter = document.querySelector('.newsletter');
const dialog = document.querySelector('.modal-inscricao');
const botaoFecharModal = document.querySelector('.modal-inscricao__fechar-modal');

formNewsletter.addEventListener('submit', function (event) {
  event.preventDefault();

  const email = inputEmail.value;
  const emailRegex = /^[a-zA-Z0-9._%+-]{2,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}$/;

  if (emailRegex.test(email)) {
    dialog.showModal();
  } else {
    alert('E-mail inválido!');
  }
});

// Fecha o diálogo quando o botão "Fechar" for clicado
botaoFecharModal.addEventListener("click", function () {
  dialog.close();
});

// Fecha o diálogo quando o usuário clicar fora do modal
dialog.addEventListener('click', function (event) {
  if (event.target === dialog) {
    dialog.close();
  }
});
