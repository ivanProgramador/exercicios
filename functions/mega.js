 /*
 Essa função vai gerar 6 numeros aleatórios
 
 Primeiro ela recebe 2 parâmetros 
 1 - a variável qtde que seria a quantidade de numeros que devem ser gerados 
 2 - um array vazio para aguadar os numeros depois que ela gerar 
 */
 


 function mega(qtde = 6, numeros =[]){

    //testando se a quantidade de numeros é menor que 60

    if(qtde < 6 && qtde > 60){
        throw "Quantidade invalida !"
    }
    
    //testando se a quantidade de indices no array de numeros e igual a quantidade solicitada 
    //se for 
    if(numeros.length === qtde){

        return numeros.sort()
    }
    
    //gerando um numero aleatório e multiplicando ele por 60 e somando mais 1

    const numeroAleatorio = parseInt(Math.random() * 60) + 1
    
    //testando se alguns dos numeros aletotórios se repete 
    //caso se repitam ele só retorna o paramento enviado 

    if(!numeros.includes(numeroAleatorio)){
         
        //chamando a função de forma recursiva e enviando o valor da qtde e do array de numeros 
        //incluindo os numeros que já foram gerados usando o rest

         return mega(qtde,[...numeros,numeroAleatorio]);

    }else{

         return (qtde,numeros);

    }


}

// solicitando 15 numeros aleatórios o para o sorteio 
console.log(mega(15))