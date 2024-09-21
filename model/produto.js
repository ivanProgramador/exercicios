export default class Produto {

    // o '#' na frente indica que esses atributos são privados 
    
    #id 
    #nome 
    #preco 

    constructor(id,nome,preco){

        this.#id = id

        this.#nome = nome
        
        this.#preco = preco
    }

    get id(){
        return this.#id
    }

    get nome(){
        return this.#nome
    }

    get preco(){
        return this.#preco
    }



}