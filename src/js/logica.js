var youtubePlayer = document.getElementById('youtube-player');
var musicaPlayer = document.getElementById('musica-player');

// Variável para rastrear o tempo de reprodução do vídeo do Zoro
var tempoReproducaoZoro = 0;
var tempoReproducaomusica =0;
var intervalo;
var intervaloo;

var historicoBotoes = [];



// Função para alternar a classe "selecionado" nos botões e a imagem de fundo
function mudarSelecao(botao) {
    var botoes = document.querySelectorAll(".botoes .botao");
    var personagens = document.querySelectorAll(".personagens .personagem");

    botoes.forEach(function (b) {
        b.classList.remove("selecionado");
    });

    personagens.forEach(function (personagem) {
        personagem.style.display = "none";
    });

    botao.classList.add("selecionado");

    var indice = Array.from(botoes).indexOf(botao);

    if (indice >= 0 && indice < personagens.length) {
        personagens[indice].style.display = "block";
    }

    if ( botao.id == "1") {
        console.log('Zoro selecionado')
        youtubePlayer.style.display = "block";

        youtubePlayer.src = "https://www.youtube.com/embed/J2AI8yD5hs0?autoplay=1&start="+tempoReproducaoZoro;
        musicaPlayer.src = "https://www.youtube.com/embed/RROO-SwAOy8?autoplay=0";
        iniciarContador();
        pararContadormusica();
    } 

    historicoBotoes.push(botao.id);
    verificarUltimosBotoes();

}

function iniciarContador() {
    intervalo = setInterval(function() {
        tempoReproducaoZoro++;
        // console.log('Contagem:', tempoReproducaoZoro);
    }, 1000); 
}

function pararContador() {
    clearInterval(intervalo);
    // console.log('Contador parado. Total:', tempoReproducaoZoro);
}

function iniciarContadormusica() {
    intervaloo = setInterval(function() {
        tempoReproducaomusica++;
        // console.log('Contagem:', tempoReproducaomusica);
    }, 1000); 
}

function pararContadormusica() {
    clearInterval(intervaloo);
    // console.log('Contador parado. Total:', tempoReproducaomusica);
}

// Função para iniciar a música quando a página for carregada
function iniciarMusica() {
    musicaPlayer.style.width = "0";
    musicaPlayer.style.height = "0";
    musicaPlayer.src = "https://www.youtube.com/embed/RROO-SwAOy8?autoplay=1"
}

function verificarUltimosBotoes() {
    if (historicoBotoes.length >= 2) {
        var ultimoBotao = historicoBotoes[historicoBotoes.length - 1];
        var penultimoBotao = historicoBotoes[historicoBotoes.length - 2];
       
        
        if (ultimoBotao !== "1" && penultimoBotao === "1") {
            console.log("Saindo do zoro para outro personagem");
            pararContador();
            iniciarContadormusica();
            youtubePlayer.src = "https://www.youtube.com/embed/J2AI8yD5hs0?autoplay=0";
            youtubePlayer.style.display = "none";
            musicaPlayer.src = "https://www.youtube.com/embed/RROO-SwAOy8?autoplay=1&start="+tempoReproducaomusica;

        }
    }
}
// Iniciar a música quando a página for carregada
iniciarMusica();
iniciarContadormusica();

