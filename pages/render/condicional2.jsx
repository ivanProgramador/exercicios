import If from "../../Components/If"
export default function condicional2(){
    
    var numero = 2;
    
    return(

        <div>

            <If teste={numero %2 === 0}>
                 <h1>O numero {numero} é par</h1>
            </If>

            
            
                       
        </div>
    )
}