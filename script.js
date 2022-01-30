function selecionarOpcao(escolha, section){
    const opcaoSelecionada = document.querySelector(`#${section} .bordaEicone`);
    if(opcaoSelecionada !== null && opcaoSelecionada !== escolha) {
        opcaoSelecionada.classList.remove('bordaEicone');
    }
    escolha.classList.toggle('bordaEicone');
    confirmarPedido();
}

function confirmarPedido(){    
    const botao = document.querySelector('footer button');

    prato = document.querySelector('#prato .bordaEicone');
    bebida = document.querySelector('#bebida .bordaEicone');
    sobremesa = document.querySelector('#sobremesa .bordaEicone');

    console.log(prato);
     if(prato != null && bebida != null && sobremesa != null){
        botao.classList.add('botaoAtivo');    
    }
    else botao.classList.remove('botaoAtivo')
}