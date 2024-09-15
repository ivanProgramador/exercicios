import Titulo from "../../Compontents/Titulo";

/*
Renderizando um componente externo
e passando dois parámetros para o componente
esses paremetros qua estou enviando 
vão chegar no componente como um objeto
no caso la no componete eu recebo ele como um parametro que pode 
ter qualquer nome nesse caso eu escolhi o nome info 

Componente titulo
------------------------------------------------
export default function Titulo(info){

 

    return <>
             <h1>Titulo</h1>
             <h2>Subtitulo</h2>
           </>
}

-------------------------------------------------------------

Objeto que vai chegar 
----------------------------------------------------------
{
  principal: 'Página de cadastro',
  secondario: 'Incluir,Aterar e excluir coisas'
} 
------------------------------------------------------------

*/

export default function usandoTitulo(){

    return <>
             <Titulo
               principal="Página de cadastro"
               secondario="Incluir,Aterar e excluir coisas"
             />
           </>
}