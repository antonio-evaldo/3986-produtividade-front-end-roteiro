document.querySelector('.newsletter').addEventListener('submit', function (event) {
  event.preventDefault();

  const email = document.querySelector('.newsletter__input').value;

  // Regex para validar o e-mail
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailRegex.test(email)) {
    alert("E-mail válido! Inscrição realizada.");
  } else {
    alert('E-mail inválido!');
  }
});
