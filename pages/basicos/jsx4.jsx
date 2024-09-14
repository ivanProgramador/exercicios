/*
 Integração entre jsx e js 

 Embora estejam no mesmo componente existe uma diferença entre essas dusas linguagens
 então para que o resultado de um codigo ou retorno de uma fnção js possa ser interpretado
 pelo jsx é necessário usar chaves {}   
*/

export default function jsx4(){
   
    // se eu colocar essas variveis dentro do componente sem parenteses
   //  ao inves de interpretar e mostrar os valores vão aparecer somente os textos 
   //  com os nomes delas  então para mostra-las de forma correta e necessario usar {}

   const textoJs = "string js";
   const CalculoJs = 3*3;
  //isso serve atea para executar funções dentro de um componente 
   function soma(a,b){
     return a + b;
   }

    return(
        <div>

             <h2>Integração jsx e js</h2>
             <h3>Texto js = {textoJs}</h3>
             <h3>Calculo js = {CalculoJs}</h3>
             <h4>Executando uma função js =  {soma(2,2)}</h4>

        </div>
    )

}