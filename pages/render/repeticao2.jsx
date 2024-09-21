export default function repeticao2(){

   
    const ListaAprovados = [
        'João',
        'Maria',
        'Ana',
        'Bia',
        'Carlos',
        'Daniel',
        'Laura'
    ];

     
    function renderizarLista(){
      /*
       No caso da função map o primeiro parametro é o iten o segundo é a chave dele
       então para cada nome ele gera uma chave que é recebida pela variável i que eu coloquei 
       no parametro key do elemento li para resolver a advertencia que exige uma chave unica para
       cada elemento gerado.     
      */ 
      return ListaAprovados.map((nome,i)=><li key={i} >{nome}</li>);
    }

    return (<ul>{renderizarLista()}</ul>)



   
}