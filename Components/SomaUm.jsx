/*
 No exemplo abaixo eu peguei o valor do atributo "numero" do objeto props
 e fiz a exibição do atributo numero somando +1 aparece 17 porém o valor 
 não foi alterado de fato so está sendo mostrado dessa forma. Para que eu possa alterar
 de fato o valor do objeto eu preeciso alterar e estado do componente.      
*/
export default function SomaUm(props){
     return<>
            {props.numero + 1}
          </>
}