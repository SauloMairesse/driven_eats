let listaNome = [];
function selecionarEscolha(escolha,section){
    const escolhaSelecionada = document.querySelector(`.${section} .bordaEicone`);
    const icone = document.querySelector(`.${section} .bordaEicone .icone`);
    console.log(icone)
    if(escolhaSelecionada !== null && escolhaSelecionada !== escolha){
        escolhaSelecionada.classList.remove('bordaEicone')
    }
    escolha.classList.toggle('bordaEicone');
    finalizarPedido();
}

// // DEIXAR COM BORDA
// function selecionarOpcao(escolha, section){
//     const opcaoSelecionada = document.querySelector(`#${section} .bordaEicone`);
//     console.log(opcaoSelecionada);
//     if(opcaoSelecionada !== null && opcaoSelecionada !== escolha){
//         opcaoSelecionada.classList.remove('bordaEicone');
//     }
//     escolha.classList.toggle('bordaEicone');
//     confirmarPedido();
// }

//DEIXAR O BOTAO DE CONFIRMAR VERDE
function finalizarPedido(){    
    const finalizarPedido = document.querySelector('footer button');
    const finalizarTexto = document.querySelector('.finalizarPedido');
    const criarlink = document.querySelector('.link');

    prato = document.querySelector('.prato .bordaEicone');
    bebida = document.querySelector('.bebida .bordaEicone');
    sobremesa = document.querySelector('.sobremesa .bordaEicone');

    if(prato != null && bebida != null && sobremesa != null){
        finalizarPedido.classList.add('botaoAtivo'); 
        finalizarTexto.innerHTML='Finalizar Pedido';
        criarlink.setAttribute("target","_blank");
        criarlink.setAttribute("href", `https://wa.me/5563999143014?text=PUTAMERDA`);
    }
    else {
        finalizarPedido.classList.remove('botaoAtivo')
        finalizarTexto.innerHTML='Selecione os 3 itens para fechar o pedido';
        criarlink.removeAttribute("target");
        criarlink.removeAttribute("href")
    }
}