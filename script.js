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
    const criarlink = document.querySelector('.link');

    prato = document.querySelector('#prato .bordaEicone');
    bebida = document.querySelector('#bebida .bordaEicone');
    sobremesa = document.querySelector('#sobremesa .bordaEicone');

    // const pedidoT = document.querySelector('#pratos .bordaEicone .nomePrato');
    // console.log(pedidoT);
    // const pratoT = "pratoT";
    // const sobremesaT = "sobremesaT";
    // const totalT = "totalT";

    // Problema com formatação do texto
    // var texto = `Olá, gostaria de fazer o ${pedidoT}:\n- Prato: ${pratoT}\n- Bebida: ${bebidaT}\n- Sobremesa: ${sobremesaT}\nTotal: R$ ${totalT}`;
    // texto = window.encodeURIComponent(texto);

     if(prato != null && bebida != null && sobremesa != null){
        finalizarPedido.classList.add('botaoAtivo'); 
        finalizarTexto.innerHTML='Finalizar Pedido';
        criarlink.setAttribute("target","_blank");
        criarlink.setAttribute("href", `https://wa.me/5563999143014?text=Olá,%20gostaria%20de%20fazer%20o%20:`);
    }
    else {
        finalizarPedido.classList.remove('botaoAtivo')
        finalizarTexto.innerHTML='Selecione os 3 itens para fechar o pedido';
        criarlink.removeAttribute("target");
        criarlink.removeAttribute("href");
    }
}