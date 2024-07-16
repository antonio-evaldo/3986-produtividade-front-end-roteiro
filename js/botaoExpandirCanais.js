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
      <i class="menu-lateral__icone-mostrar menu-lateral__icone-mostrar--rotacionado"></i>
      <span class="texto-colapsar-canais">Mostrar menos</span>
    `;
  } else {
    canaisEstaoExpandidos = false;

    botaoExpandirCanais.innerHTML = `
      <i class="menu-lateral__icone-mostrar"></i>
      <span class="texto-colapsar-canais">Mostrar mais 2</span>
    `;
  }
});
