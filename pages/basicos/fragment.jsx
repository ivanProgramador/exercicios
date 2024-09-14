import React from "react";

/*
Normalmente um componente gera uma div e retorna ela com as tags jsx 
porém futuramente podem existir casos onde não queremos retornar uma div e 
sim somente uma tag html. 

para fazer isso podemos usar um fragment nesse caso eu estou importando ele 
e aplicando quando eu isnpecionar no navegador não haverá um tag div envolvendo 
a tag h1 e h2 somente as tags vão aparecer, envidas apenas pela 
div principal do next

*/

export default function(){

    return <React.Fragment>
               <h1>Titulo</h1>
               <h2>Subtitulo</h2>
           </React.Fragment>
}