
/*
Esse componente tem um filho porém esse filho que seria o H1
só sera renderizado se o nuemro que vier na propriedade teste 
for par, isso serve para mostrar um determinado componete somente
se um condição especifica for verdadeira   

*/

export default function If(props){

    if(props.teste){

        return props.children

    }else{

        return null
    }
}