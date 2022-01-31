let mensagem = String();
function selecionarEscolha(escolha,section){
    const escolhaSelecionada = document.querySelector(`.${section} .bordaEicone`);
    const icone = document.querySelector(`.${section} .bordaEicone .icone`);
    if(escolhaSelecionada !== null && escolhaSelecionada !== escolha){
        escolhaSelecionada.classList.remove('bordaEicone')
    }
    escolha.classList.toggle('bordaEicone');
    finalizarPedido();
}

function finalizarPedido(){    
    const finalizarPedido = document.querySelector('footer button');
    const finalizarTexto = document.querySelector('.finalizarPedido');
    const criarlink = document.querySelector('.link');

    prato = document.querySelector('.prato .bordaEicone');
    bebida = document.querySelector('.bebida .bordaEicone');
    sobremesa = document.querySelector('.sobremesa .bordaEicone');

    if(prato != null && bebida != null && sobremesa != null){
        finalizarPedido.classList.add('botaoAtivo'); 
        finalizarTexto.innerHTML='Fechar pedido';
    }
    else {
        finalizarPedido.classList.remove('botaoAtivo')
        finalizarTexto.innerHTML='Selecione os 3 itens para fechar o pedido';
    }
}

function formatarTexto(){
    const nomePrato = document.querySelector('.bordaEicone .nomePrato').innerHTML;
    const precoPrato =  parseFloat(document.querySelector('.bordaEicone .precoPrato').innerHTML.replace(',','.'));
    const nomeBebida = document.querySelector('.bordaEicone .nomeBebida').innerHTML;
    const precoBebida =  parseFloat(document.querySelector('.bordaEicone .precoBebida').innerHTML.replace(',','.'));
    const nomeSobremesa = document.querySelector('.bordaEicone .nomeSobremesa').innerHTML;
    const precoSobremesa = parseFloat(document.querySelector('.bordaEicone .precoSobremesa').innerHTML.replace(',','.'));

    const preMensagem = ('Olá, gostaria de fazer o pedido:'
    + `\n - Prato: ${nomePrato}`
    + `\n - Bebida: ${nomeBebida}`
    + `\n - Sobremesa: ${nomeSobremesa}`
    + `\n - Total: R$: ${(precoPrato + precoBebida + precoSobremesa).toFixed(2)}`);

    const url = 'https://wa.me/556399143014?text=' + encodeURIComponent(preMensagem);
    window.open(url,'_blank')
}