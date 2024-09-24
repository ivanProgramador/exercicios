import Filho from "./Filho";

/*
A comunicação direta entre componentes é enviando os dados atraves de atributos
por exemplo: 
Esse é um componente pai que está criando uma instancia do componente filho e 
passando para ele a informação familia, isso é uma comunicação dirtea entre os 
componentes;



*/
export default function Pai(){
    return(
       <div>
          <Filho familia="Albuquerque" ></Filho>
           
       </div>
    )
}