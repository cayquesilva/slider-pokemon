//declarando variaveis fixas com const
const btnAvancar = document.getElementById('seta-avancar');
const btnVoltar = document.getElementById('seta-voltar');
//pegando um array de cartões a partir de itens com classe 'cartao'
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

//função para remover classe selecionado do cartão anterior
function esconderCartaoAnterior(){
    //seleciona o primeiro item com classe "selecionado"
    const cartaoSelecionado = document.querySelector(".selecionado");
    //remove classe "selecionado"
    cartaoSelecionado.classList.remove("selecionado");
}

//função para passar o slide
function mostrarCartao(cartaoAtual){
    //pega o cartão da vez e adiciona a classe selecionado
    cartoes[cartaoAtual].classList.add("selecionado");
};

//avançando slide, removendo classe de slide anterior
btnAvancar.addEventListener('click',function(){
    //se o cartao for o ultimo, ele não realiza a ação
    if(cartaoAtual === cartoes.length - 1) return;
    //incrementa o cartão atual
    cartaoAtual++;
    //chamando função para esconder cartão anterior
    esconderCartaoAnterior();
    //chama a função de avançar cartão passando o cartao a ser mostrado (depois de incrementar o cartao atual)
    mostrarCartao(cartaoAtual);
});

btnVoltar.addEventListener('click',function(){
    //se o cartao for o primeiro, ele não realiza a ação
    if(cartaoAtual === 0) return;
    //decrementa o cartão atual
    cartaoAtual--;
    //chamando função para esconder cartão anterior
    esconderCartaoAnterior();
    //chama a função de voltar cartão (depois de decrementar o cartaoAtual)
    mostrarCartao(cartaoAtual);
});