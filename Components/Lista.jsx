export default function Lista(props){

   /*
    Estrou usando o props children porque o componente item 
    é um componente filho da lista o objetivo do componete lista 
    e mostrar os itens filhos dele, por isso props.children faz com que 
    os elementos da lista apareçam  
   */
     return(
        <ul>
          {props.children}
        </ul>
     )
}