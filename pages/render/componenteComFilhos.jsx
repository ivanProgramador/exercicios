import Lista from "../../Components/Lista";
import Item from "../../Components/Item";

/*
Esse componente usa dois outros componentes para compor uma lista   

*/

export default function componenteComFilhos(){
    return(
        <div>
            <Lista>
                <Item conteudo="Item #1" ></Item>
                <Item conteudo="Item #2" ></Item>
                <Item conteudo="Item #3" ></Item>
                <Item conteudo="Item #4" ></Item>
            </Lista>
        </div>
    )
}