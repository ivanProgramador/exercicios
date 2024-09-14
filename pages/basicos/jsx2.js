
/*
 Um componente pode se comportar como uma aplicação isolada
 com suas proprias funções listas,barras de tarefa,imagens
 e botões entre outros recursos.

 Existe a possibilidade de colocar um composnenete dentro do outro para formar um
 componete mias completo no exmplo abaixo eu coloquei o compoenet dentro de uma constante 
 e retornei ela, assim eu posso fazer com vários outros componentes podendo montar uma página
 inteira usando esse recurso.

*/
export default function jsx2(){

    const conteudo = <div> <h1> jsx#02 </h1> </div>;

    return conteudo;
}