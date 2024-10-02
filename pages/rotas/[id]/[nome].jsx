import Link from "next/link";
import { useRouter } from "next/router"


export default function codigoENome(){
  
   const router = useRouter();

   /*
    a primeira rota recebe somente o id agora se eu colocar id e nome 
    ele virá para essa rota porque ela espera uma requisição com id/nome
    mas ressaltando que  o nome desse arquivo está entre colchetes.

   */     
   const codigo = router.query.id;
   const nome = router.query.nome;

    return(
        <div>
            <h1>rotas/ {codigo}/{nome}</h1>
            <Link href="/rotas" >
              <button>Voltar</button>
            </Link>

        </div>
    )
}