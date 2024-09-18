import SomaUm from "../../Components/somaUm";

/*
Eu estou mandando o numero 16 atráves do props para
o componente somaUm ele vai aparecer lá como atributo do objeto props
que pode ser lido más não pode ser alterado.   

*/
export default function propsLeitura(){
    return <SomaUm numero={16} ></SomaUm>
}