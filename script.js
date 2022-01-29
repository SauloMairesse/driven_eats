function selecionarOpcao(escolha, section){
    const opcaoSelecionada = document.querySelector(`#${section} .bordaEicone`);
    if(opcaoSelecionada !== null && opcaoSelecionada !== escolha) opcaoSelecionada.classList.remove('bordaEicone');
    escolha.classList.toggle('bordaEicone');
}