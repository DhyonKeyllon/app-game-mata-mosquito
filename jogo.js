
var altura = 0;
var largura = 0;

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(altura, largura); //debug
}

ajustaTamanhoPalcoJogo();

function posicaoRandomica() {

    //remover mosquito anterior (caso exista)
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove(); // metodo para remover o elemennto atraves do DOM
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

    // acessar o body para incluir a imagem dentro da pagina
    document.body.appendChild(mosquito);
}


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

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2);

    switch(classe) {
        case 0:
            return 'ladoA';
        case 1: 
            return 'ladoB';
    }
}