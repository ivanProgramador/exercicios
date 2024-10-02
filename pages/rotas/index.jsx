import Link from "next/link"

/*
No caso para navegção entre páginas o Next possui o componente Link 
esse componente recebe como parametro o href que contem a url que será 
acionada e dessa forma qualquer elemento html sej ele paragrafo,div,imagem
que estiver dentro desse componete automáticamente se torna um link 
para a rota 
que está descrita no parametro href.   

*/


export default function rotas(){
    return(
        <div>
            <h1>Rotas index</h1>
            <ul>
                <Link href="/rotas/params?id=123&nome=maria" >
                   <li>Params</li>
                </Link>
                <Link href="/rotas/123/buscar">
                   <li>Buscar</li>
                </Link>

            </ul>
        </div>
    )
}