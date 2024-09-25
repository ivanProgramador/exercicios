export default function Filho(props){

  /*
    usando a função que veio do componente pai
    trata-se de umnna fuunação que veio pelo porps então estou
    acessando o tributo função e passado para ela os dois parametros  
  */

     return(
        <div>
          
           <button onClick={()=>{props.funcao('Boa noite','passei no enem')}}>Enviar mensagem</button>
        
        </div>
     )
}