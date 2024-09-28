 /*
 Essa função vai gerar 6 numeros aleatórios
 
 Primeiro ela recebe 2 parâmetros 
 1 - a variável qtde que seria a quantidade de numeros que devem ser gerados 
 2 - um array vazio para aguadar os numeros depois que ela gerar 
 */
 


  export function mega(quantidade = 6, numeros =[]){

<<<<<<< HEAD
    let qtde = +quantidade

=======
>>>>>>> 26468637b7ae713e763a536e0791790ed343d743
    //testando se a quantidade de numeros é menor que 60

    if(qtde < 6 && qtde > 60){
        throw "Quantidade invalida !";
    }
    
    //testando se a quantidade de indices no array de numeros e igual a quantidade solicitada 


    if(numeros.length === qtde){

        return numeros.sort( (n1 , n2 ) => n1 - n2 )
    }




    
    //gerando um numero aleatório e multiplicando ele por 60 e somando mais 1

    const numeroAleatorio = parseInt(Math.random() * 60) + 1;
    
<<<<<<< HEAD
    //testando se alguns dos numeros aleatórios se repete 
    //caso se repitam ele só retorna o parámento enviado e executa novamente 
=======
    //testando se alguns dos numeros aletotórios se repete 
    //caso se repitam ele só retorna o paramento enviado 
>>>>>>> 26468637b7ae713e763a536e0791790ed343d743

    if(!numeros.includes(numeroAleatorio)){
         
        //chamando a função de forma recursiva e enviando o valor da qtde e do array de numeros 
        //incluindo os numeros que já foram gerados usando o rest

         return mega(qtde,[...numeros,numeroAleatorio]);

    }else{

         return (qtde,numeros);

    }


}

