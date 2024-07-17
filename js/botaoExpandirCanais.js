const canaisExtras = document.querySelectorAll(".menu-lateral__canal.escondido");

const botaoExpandirCanais = document.querySelector(".menu-lateral__botao-expandir-canais");

let canaisEstaoExpandidos = false;

botaoExpandirCanais.addEventListener("click", () => {
  canaisExtras.forEach((canal) => {
    canal.classList.toggle("escondido");
  });

  if (!canaisEstaoExpandidos) {
    canaisEstaoExpandidos = true;

    botaoExpandirCanais.innerHTML = `
      <i class="menu-lateral__icone-toggle menu-lateral__icone-toggle--rotacionado"></i>
      <span class="menu-lateral__texto-toggle">Mostrar menos</span>
    `;
  } else {
    canaisEstaoExpandidos = false;

    botaoExpandirCanais.innerHTML = `
      <i class="menu-lateral__icone-toggle"></i>
      <span class="menu-lateral__texto-toggle">Mostrar mais 2</span>
    `;
  }
});
