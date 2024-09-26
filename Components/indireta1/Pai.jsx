
import Filho from "./Filho";

/*
 A comunicação indireta entre os componentes
 acontece apartir de funções, nesse exemplo 
 eu vou passar uma função do componente pai 
 para o componente filho poder se comunicar com ele    
 
*/

export default function Pai(){
 /*
  Nesse caso essa função vai receber 2 parametros, não existe um limite de parametros 
  eu estou escolhendo 2 parametros e cada parametro vai ser uma frase qua o componete filho vai 
  mandar para o componente pai. 
 */
    function falarComigo(parametro1, parametro2){
         console.log(parametro1,parametro2)
    }

    

 /*
  Aqui eu estou enviando a função atráves de props 
 */
    return(
        <div>
            <Filho funcao={falarComigo}/> 
        </div>
    )
}