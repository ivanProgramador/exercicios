import { useState } from "react"
import { useEffect } from "react"

/*
Nesse componente eu estou consultando uma api
para que eu consiga mostrar os dados vindos dela em 
um componente. Esses dados precisam ser tratados.

Antes de fazer uma requisição primeiro eu preciso definir onde eu vou 
colocar esses dados quando eles chegarem para que possam ser exbibidos 
no meu componente para isso eu uso o useState(). Que recebe um array de 
2 posições, na primeira posição eu informo a variável que receberá os 
valores e na segunda eu informo o nome da função que será usada para 
altera-la.

 const [questao, setQuestao] = useState(null)

Agora eu preciso de fato pegar os dados no caso eu aciono a função useEffect()
essa função recebe 2 parâmetros 

1 - e a função que vai de fato executar a requisição e tratar a resposta
2 - é um array de dependencias/ como não tem então eu deixei vázio (mas tem que ter esse array)  

a função que vai requisitar usa 3 processos sincronos para tratar os dados 

1 - fetch -> essa função requisita os dados da url 
2 - então converte para json - > then(resp => resp.json()) 
3 - então aciona a função que altera o estado passando o json como parâmetro -> then(setQuestao) 

agora o estado do componente recebe um json com os dados 


*/

export default function questao(){

    
    const [questao, setQuestao] = useState(null)

    useEffect(()=>{
        fetch('http://localhost:3000/api/questao/123')
         .then(resp => resp.json())
         .then(setQuestao)
    },[]);



    function renderizarRespostas(){
        if(questao){

            // como o atributo repostas é um array eu tenho que usar o map para fazer o loop em todas as opções
            // e para cada opções que ele achar ele vai gerar uma chave para o indice e um elemento <li> para lista

            return questao.respostas.map((resp,i)=>{
                return <li key={i} >{resp}</li>
            })
        }
        return false 
    }


    
    
    //baixo eu mostro o enunciado da questão usando o simbolo ? ue serve para testar se esse atributo esta vázio
    // e logo abaixo na lista eu mostro o retorno da função que seria uma lista com opções

    return(
        <div>
          <h1>questão</h1>
          <div>
             <span>{questao?.enunciado}</span>
             <ul>
                 {renderizarRespostas()}
             </ul>
          </div>

        </div>
    )
}