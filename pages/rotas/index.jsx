import Link from "next/link"
import router,{ useRouter} from "next/router"

/*
No caso para navegação entre páginas o Next possui o componente Link 
esse componente recebe como parametro o href que contem a url que será 
acionada e dessa forma qualquer elemento html sej ele paragrafo,div,imagem
que estiver dentro desse componente automáticamente se torna um link 
para a rota 
que está descrita no parâmetro href.   

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

            <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start"}} >

                <button onClick={()=>router.push("/rotas/123/buscar")}>Buscar</button>
                <button onClick={()=> router.push({
                    pathname:"rotas/params",query:{
                        id:"123",
                        nome:"Ana"
                    }
                })}>Params</button>

            </div>
        </div>
    )
}