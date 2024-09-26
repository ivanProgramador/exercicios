import { useState } from "react";

/*
Um componente controlado é um tipo de componente
onde o estado controla seus valores por exemplo 
O compnete abaixo é um input inicialmente eu atribui 
a ele o texto inicial usando o useState para fazer isso.

porem se eu tentar apagar não vai funcionar porque para apagar o texto 
eu tenho que limpar o estado tambem, então no exemplo abaixo eu uso 
o onChange qua pega o valor do evento de digitação e coloca no estado
e assim ele pode mudar conforme o valor recebido 

é dessa forma que se cria um componente controlado pelo use state


<input type="text" value={valor}  onChange={e => setValor(e.target.value)} />

*/

export default function formulario(){
    const [valor,setValor] = useState("inicial");

    function alterarInput(){
         setValor(valor + "!");
    }

    return(
        <div>
            <input 
               type="text" value={valor}
               onChange={e => setValor(e.target.value)} 
             />
             <button onClick={alterarInput}>Alterar</button>
        </div>
    )
}