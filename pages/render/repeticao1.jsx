

export default function repeticao1(){

   
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

        const itens = [];

        for(let i = 0; i < ListaAprovados.length;i++){

            itens.push(<li key={i} >{ListaAprovados[i]}</li>);

        }

        return itens;
    }

    return (<ul>{renderizarLista()}</ul>)



   
}