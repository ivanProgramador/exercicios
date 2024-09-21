import listaProdutos from "../../data/listaProdutos";



export default function repeticao3(){

    var comBorda={
         border: "1px solid black"
    }

   function renderizarLinhas(){
        
       return listaProdutos.map(produto=>{
          return <tr style={comBorda} key={produto.id}>
              <td style={comBorda} >{produto.id}</td>
              <td style={comBorda} >{produto.nome}</td>
              <td style={comBorda} >{produto.preco}</td>
          </tr>
       })
   }
 

     return(
         <div>
            <table style={comBorda} >
                <thead style={comBorda} >
                    <tr style={comBorda}>
                        <th style={comBorda}>Côdigo</th>
                        <th style={comBorda}>Nome</th>
                        <th style={comBorda}>Preço</th>
                    </tr>
                </thead>
                <tbody>
                  {renderizarLinhas()}
                </tbody>
            </table>
         </div>
     )
}