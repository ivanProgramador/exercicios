//exemplo de componete typescript 

/*
 O côdigo abaixo é uma interface que será usada para controlar os atributos do componente pessoa 
 o nome não é um atributo opcional então no caso se esse componente for utilizado o atributo nome 
 tem que ser passado porque ele não é um atributo opcional e não pode ficar vázio.
 
 Já o tributo idade é opcional porque ele tem " ? " do lado nesse caso eu posso passar a idade ou não.
 Isso ajuda na hora de autenticar os tipos de dados recebidos e se os dados foram recebidos.
 ele funciona normalmente com o js tradicional.    

*/ 

interface pessoaProps{
     nome: String,
     idade?: number
}


// aqui a interface está sendo passada direto para o props
// informando que o componente pessoa e do tipo pessoaProps
 
export default function Pessoa(props: pessoaProps){

    return(
        <div>
           <div>Nome:{props.nome}</div>
           <div>Idade:{props.idade ?? 'Não informada'}</div>

        </div>
    )
}