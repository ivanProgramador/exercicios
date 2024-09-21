

export default function repeticao1(){

   // array com os dados 
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

       //array vazio que receberá os dados 
        const itens = [];
        
        /*
          Esse laço for vai percorrer o array 
          comparando ele com o contador i qua inicialmente vale 0
          então ele comparar com o tamenho do array 'ListaAprovados' 
          enquanto o valor de i for menor que a quantidade de inidices dentro do array
          ele vai abastecer o array vazio com esses dados    


        */
        for(let i = 0; i < ListaAprovados.length;i++){

            /*
              Dentro do loop eu pego o array itens que esta vazio e uso a função push 
              para inserir ops dados encontrados porém alem de inseriri os dados eu ainda coloco um 
              elemento html chamado <li> em volta dos dados
              
              o atributo key recebe soemente o numero do indice onde o dado se encontra 
            */

            itens.push(<li key={i} >{ListaAprovados[i]}</li>);

        }

        return itens;
    }

    return (<ul>{renderizarLista()}</ul>)



   
}