var youtubePlayer = document.getElementById('youtube-player');

// Função para alternar a classe "selecionado" nos botões e a imagem de fundo
function mudarSelecao(botao) {
    var botoes = document.querySelectorAll(".botoes .botao");
    var personagens = document.querySelectorAll(".personagens .personagem");

    botoes.forEach(function(b) {
        b.classList.remove("selecionado");
    });

    personagens.forEach(function(personagem) {
        personagem.style.display = "none";
    });

    botao.classList.add("selecionado");

    var indice = Array.from(botoes).indexOf(botao);

    if (indice >= 0 && indice < personagens.length) {
        personagens[indice].style.display = "block";
    }
        if (botao.innerText.trim() === "Zoro") {
            youtubePlayer.src = "https://www.youtube.com/embed/J2AI8yD5hs0";

        } else {

            youtubePlayer.src = "https://www.youtube.com/embed/J2AI8yD5hs0?autoplay=1";

        }
}
