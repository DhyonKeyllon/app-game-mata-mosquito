var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 15;

var criaMosquitoTempo = 1500;

var nivel = window.location.search; // .search recupera o '?' e tudo que estiver a direta do mesmo
nivel = nivel.replace('?', ''); // substituir o ponto de interrogação para um caracter vazio

if (nivel === 'normal') {
    criaMosquitoTempo = 1500;
} else if (nivel === 'dificil') {
    criaMosquitoTempo = 1000;
} else if (nivel === 'chucknorris') {
    criaMosquitoTempo = 750;
}

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(altura, largura); //debug
}

ajustaTamanhoPalcoJogo();

// cronometro
var cronometro = setInterval(function() {
    tempo -= 1;

    if (tempo < 0) {
        clearInterval(criaMosquito);
        clearInterval(cronometro);
        window.location.href = 'vitoria.html';
    } else {
        document.getElementById('cronometro').innerHTML = tempo;
    }
}, 1000);

function posicaoRandomica() {

    //remover mosquito anterior (caso exista)
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove(); // metodo para remover o elemennto atraves do DOM

        //console.log(`Elemento selecionado foi: ${'v' + vidas}`)
        if (vidas > 3) {
            window.location.href = 'fim_de_jogo.html';
        }
        document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png";

        vidas++;
    }
    // gerar valores aleatorios para posicoes
    var posicaoX = Math.floor(Math.random()  * largura) - 90; // subtrair para que a imagem nao estoure na tela (saia da res.)
    var posicaoY = Math.floor(Math.random() * altura) - 90;

    // posicionar para 0, caso a posicao seja 0 e estoura com o valor -90
    posicaoX = posicaoX < 0 ? 0 : posicaoX; // VALOR TERNARIO
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    console.log(posicaoX); //debug
    console.log(posicaoY); //debug

    // criar elemento html
    var mosquito = document.createElement('img');
    mosquito.src = 'imagens/mosquito.png';
    // aplicar a classe de redimensionamento no elemento. Que foi definido no estilo.css
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();

    // aplicar as posicao randomica pelas cordenadas
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';

    // id para que possa remover o mosquito anterior
    mosquito.id = 'mosquito';

    // onclick para recuperar a ação de clicar e remover
    mosquito.onclick = function() {
        this.remove(); // this -> ajusta o contexto do atributo (ou metodo), assim faz referencia ao propio elemento html que executa a funcao.
    };

    // acessar o body para incluir a imagem dentro da pagina
    document.body.appendChild(mosquito);
}

// funcao para gerar tamanho aleatorio da img mosquito
function tamanhoAleatorio() {

    var classe = Math.floor(Math.random() * 3);

    switch(classe) {
        case 0:
            return 'mosquito1';
        case 1: 
            return 'mosquito2';
        case 2: 
            return 'mosquito3';
    }
}

// funcao para gerar lado aleatorio da img mosquito
function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2);

    switch(classe) {
        case 0:
            return 'ladoA';
        case 1: 
            return 'ladoB';
    }
}