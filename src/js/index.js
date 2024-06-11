const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

let indiceSelecionado = 0;

exibirPersonagem(indiceSelecionado);

botoes.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    indiceSelecionado = indice;
    exibirPersonagem(indiceSelecionado);
  });
});

window.addEventListener("wheel", (event) => {
  if (event.deltaY > 0) {
    indiceSelecionado = (indiceSelecionado + 1) % personagens.length;
  } else if (event.deltaY < 0) {
    indiceSelecionado = (indiceSelecionado - 1 + personagens.length) % personagens.length;
  }
  exibirPersonagem(indiceSelecionado);
});

function exibirPersonagem(indice) {

  desselecionarBotao();
  desselecionarPersonagem();

  botoes[indice].classList.add("selecionado");
  personagens[indice].classList.add("selecionado");

  const nomePersonagem = personagens[indice].querySelector(".nome-personagem");
  const descricaoPersonagem = personagens[indice].querySelector(".descricao");

  nomePersonagem.textContent = nomePersonagem.textContent;
  descricaoPersonagem.textContent = descricaoPersonagem.textContent;
}

function desselecionarPersonagem() {
  const personagemSelecionado = document.querySelector(".personagem.selecionado");
  personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
  const botaoSelecionado = document.querySelector(".botao.selecionado");
  botaoSelecionado.classList.remove("selecionado");
}