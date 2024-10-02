import { useRouter } from "next/router"
import Link from "next/link";

export default function buscar(){
  /*
   O fato da pasta que contém esse arquivo ter o nome entre colchetes 
   possibilita que ela receba parâmetros atráves da rota que acessa esse 
   arquivo.
   
   por exemplo: 
   
   rotas/id/buscar -> normal

   rotas/123/buscar -> agora o parâmetro id recebe 123 

   para que eu possa acessar o parâmetro id eu preciso de um método chamado useRouter()
   ele cria um objeto que contém todos os dados da requisição, porém os dados que eu preciso 
   estão dentro do atributo query.O console log está exbindo um objeto chave valor "{ id: 123 }" 
   que vai mostrar esses dados para que eu possa usa-los. 

  */
   const router = useRouter();

   //passando o id para um constante para exibir o valor na página
     
   const codigo = router.query.id;

    return(
        <div>
            <h1>rotas/ {codigo}/ buscar</h1>

            <Link href="/rotas" >
              <button>Voltar</button>
            </Link>
        </div>
    )
}