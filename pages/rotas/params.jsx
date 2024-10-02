import { useRouter } from "next/router"
import Link from "next/link"

/*
Nesse exemplo eu passo os dados diretamente pela url criando variáveis 
dessa forma: 
http://localhost:3000/rotas/params?id=123&nome=maria

Isso serve mais para mostrar que existe essa possibilidade.

*/

export default function params(){
    
  const router = useRouter();

  const id = router.query.id 
  const nome = router.query.nome 

    return(
        <div>
            <h2>Params: {id} e {nome} </h2>
            <Link href="/rotas" >
              <button>Voltar</button>
            </Link>
        </div>
    )
}