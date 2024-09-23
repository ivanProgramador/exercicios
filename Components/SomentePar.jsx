export default function SomentePar(props){
    /*
     Estou lendo a propriedade numero que vem do props
     e testando, se caso eu fizer uma divisão do valor da propriedade por 2 
     sobra alguma coisa.
     
     se sobrar e porque o numero não é par e ele não será mostrado eu vou retornar null

     se não sobrar ele é par e eu retorno o valor para exibição  

    */
    if(props.numero %2 === 0){

         return<h1>{props.numero}</h1>

    }else{

         return null
    }
      
}