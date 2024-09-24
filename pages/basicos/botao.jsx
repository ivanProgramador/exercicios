
function acao1(){
    console.log("clicado 1 ! função fora do componente");
}

export default function botao(){

   
    function acao2(){
        console.log("clicado 2 ! função dentro do componente ");
    }

    function acao5(e){
         console.log(e)
    }

    return(
        <div>
            { /* chamando uma função que está fora do componente */ }
            <button onClick={acao1}>click 1</button>
            
            { /* chamando uma função que está dentro  do componente */ }
            <button onClick={acao2}>click 2</button>

            { /* chamando uma função que está direto no parametro onClick */ }
            <button onClick={function (){console.log("clicado 3 ! função direto no atributo onClick")}}>click 3</button>
            
            { /* chamando uma função arrow function que está direto no parametro onClick */ }
            <button onClick={()=>{console.log("clicado 4 ! Arrow function")}}>click 4</button>

            { /* chamando uma função que mostra os dados do evento de click*/ }
            <button onClick={acao5}>click 5</button> <br />


            { /* chamando uma função que mostra oque foi digitado dentro do input */ }
            <input type="text" onChange={e =>{console.log(e.target.value)}} />




            
        </div>
    )
}