import Estilo from "../../Components/Estilo";

export default function usandoEstilo(){

    /*
     No componente estilo os atraibutos do objeto 
     são testados e com base nos dados enviaddos o estilo será 
     aplicado 
    */
    return<Estilo
            numero={3}
            color="black"
            direita
         ></Estilo>
}