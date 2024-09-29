import { Component } from "react";


export default class Contador extends Component{
    
    state ={
        numero: this.props.valorInicial ?? 0
    }
    
    //quando se referir a qualquer propriedade ou metodo sempre usar o "this." antes
    //para que aclasse saiba que você está falando do objeto atual  
    // se essa função não for uma arrow function
    // ou não estiver sendo chamado por uma arrow function no onClick
    // ele vai dizer que não consegue achar o state  

    inc = () => {

        this.setState({
             numero: this.state.numero + 1
        })
    }

    dec = () => {

        this.setState({
             numero: this.state.numero - 1
        })
    }




    render(){
      return<div>
           <h1>Recebendo valor</h1> 
           <h2>{this.state.numero}</h2>
           <button onClick={this.inc} >+</button>
           <button onClick={this.dec} >-</button>
        </div>
    }
}