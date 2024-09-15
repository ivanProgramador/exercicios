export default function Titulo(props){

 
  /*
   o retorno abaixo mostra os valores que vieram dentro do objeto info
  */
    return <>
             <h1>{props.principal}</h1>
             <h2>{props.secondario}</h2>
           </>
}