import { useState } from "react"

export default function contador(){
   
   let [valor, setValor] = useState(0);

   function aumentaValor(){
     let valorAlterado = valor ++;
     setValor(valorAlterado);

   }

   function diminuiValor(){
    let valorAlterado = valor --;
    setValor(valorAlterado);
   }

   const estilo={
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    backgroundColor:"#222",
    color:"#fff",
    height:"100vh"
   }


   
   
    return(
        <div style={estilo} >
            <h1>Contador</h1>
            <div>Valor: {valor}</div>
            <button style={{backgroundColor:"#ccc",width:"10%",marginBottom:"1px"}} onClick={aumentaValor} >+</button>
            <button style={{backgroundColor:"#ccc",width:"10%",marginBottom:"1px"}} onClick={diminuiValor} >-</button>
        </div>
    ) 
}