/*
Para gerar um conteudo estático dentro o next 
é necessário criar uma função com uma nome especifi para esse fim  
a função abaixo esta acessando os porps e fixando o valor
quando essa função gerar o primiero numero aleatorio ele vai ficar fixo 
como uma fotografia.

mas para que isso funcione é necesssario rodar a build do app 
*/

export default function getStaticProps(){
    
    return{

        props:{

            numero: Math.random()
         
        }

    }
  
}


export default function Estatico(){
    return(
        <div>
           <span>Aleatório {props.numero}</span>
        </div>
    )
}