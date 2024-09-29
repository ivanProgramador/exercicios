import { Component } from "react";
import Contador from "../../../Components/Contador";


export default class contadorPage extends Component{

    render(){
      return ( 
          <div>
             <Contador valorInicial={100} />
          </div>
        )
    }
}