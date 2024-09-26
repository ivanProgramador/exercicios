import { useState } from "react"

export default function mouse(){

    /*
     Para alterar o estado de um componente podemos usar o useState() basicamente
     ele é um array de 2 indices que recebe 

     1 - a variável que vai receber o valor de alteração 
     2 - a função que vai alterar essa variável de fato    

     
    */

    const [x, setx] = useState(0);
    const [y, sety] = useState(0);

       
   
    const estilo = {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        backgroundColor:"#222",
        color:"#fff",
        height:"100vh"
    }

    function quandoMover(ev){
       // essa função esta eviando o valor do evento 
       //para a função que altera as variaveis

       setx(ev.clientX)
       sety(ev.clientY)




    }


    //no componete eu mostro o valor delas 
    return(
        <div style={estilo} onMouseMove={quandoMover} >

           <div>Eixo x: {x}</div>
           <div>Eixo y: {y}</div>
        </div>
    )
}