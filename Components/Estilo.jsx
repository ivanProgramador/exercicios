export default function Estilo(props){

/*
 Nesse componente o estilo css está sendo aplicado de forma condicional
 na primeira condição ele testa o valor da propriedade numero do objeto props
 se o valor for menor ou igual a 0 ele fica verde, se não for ele fica 
 vermelho.Isso torna possivel modificar o estilo do componente com 
 base nos dados que ele recebe 
*/
    return(
         <div style={{
            backgroundColor: props.numero <= 0 ? "#2D2" :"#d22",
            color: props.color,
            textAlign: props.direita ? "right":"left"
         }} >
            <h1>texto #01</h1>
         </div>
    )
}