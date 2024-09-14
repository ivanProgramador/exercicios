
/*
A função gerar lista recebe como parametro final 10 isso serve para caso não seja passado 
nada para a função ela recebe 10 por padrão, dentro dessa função eu criei um array vázio 
chamado lista 

Depois eu crio um laço de repetição for que atribui o valor 1 a variável i 
e testa se esse valor e igual ou menor que o valor do parámetro recebido se
for ele adiciona 1 ao valor da variável i 

Entra no loop que adiciona dentro do array um tag span que tem como valor o conteudo da variável i.   

*/
function gerarLista(final = 10){

    const lista = [];

    for(let i = 1; i <= final; i++ ){
        lista.push(<span>{i},</span>);
    }

    return lista;
}

//esse eo componente que será responsável por executar a função que gera essa lista 
// no caso eu estou gerando a lista conforme  a quantidade pedida no parámetro 
export default function lista(){
    return(
        <div>
            {gerarLista()}
            <div>
            {gerarLista(3)} 

            </div>
        </div>
        
    );
}