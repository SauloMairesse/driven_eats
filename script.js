// DEIXAR COM BORDA
function selecionarOpcao(escolha, section){
    const opcaoSelecionada = document.querySelector(`#${section} .bordaEicone`);
    if(opcaoSelecionada !== null && opcaoSelecionada !== escolha){
        opcaoSelecionada.classList.remove('bordaEicone');
    }
    escolha.classList.toggle('bordaEicone');
    confirmarPedido();
}

// DEIXAR O BOTAO DE CONFIRMAR VERDE
function confirmarPedido(){    
    const finalizarPedido = document.querySelector('footer button');
    const finalizarTexto = document.querySelector('.concluirPedido');

    prato = document.querySelector('#prato .bordaEicone');
    bebida = document.querySelector('#bebida .bordaEicone');
    sobremesa = document.querySelector('#sobremesa .bordaEicone');

     if(prato != null && bebida != null && sobremesa != null){
        finalizarPedido.classList.add('botaoAtivo'); 
        finalizarTexto.innerHTML='Finalizar Pedido';
    }
    else finalizarPedido.classList.remove('botaoAtivo')
}

// COLOCAR ICONE
// function testeIcone(escolha, section){
//     const parteIcone = document.querySelector(`#${section} .icone`);
//     if(parteIcone !== null && parteIcone !== escolha) {
//         parteIcone.classList.remove('bordaEicone');
//     }
// }