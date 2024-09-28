import { useState } from "react";
import {mega} from "../../functions/mega";
import NumeroDisplay from "../../Components/NumeroDisplay";



export default function megaSena(){

    const [qtde,setQtde] = useState(6);

    const [numeros,setNumeros] = useState([]);

   

    function renderNumeros(){

        return numeros.map(
            numero => { return <NumeroDisplay key={numero} numeros={numero} />}

        )
    }

    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}} >

           <h1>Mega sena</h1>

           <div style={{ display:"flex",justifyContent:"center",flexWrap:"wrap"}} >
              {renderNumeros()}
           </div>



           <div>

              <input type="number" min={6} max={20} value={qtde} onChange={ev => +setQtde(ev.target.value)} />
              <button onClick={()=>setNumeros(mega(qtde))} >Gerar Aposta</button>


           </div>
        </div>
    )
}