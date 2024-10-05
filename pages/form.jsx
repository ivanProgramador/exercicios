import { useState } from "react";

export default function form(){
    
    const [nome,setNome] = useState(null);
    const [idade,setIdade] = useState(0);
    const [usuarios,setUsuarios] = useState([]);

    //essa função faz uma requisição para gravar dados na api 
    async function salvarUsuario(){

      await  fetch('api/form',{
            method:"post",
            body: JSON.stringify({nome,idade})
        })

        
    setNome("")
    setIdade(0)

      const resp = await fetch('/api/form')
      const usuarios = await resp.json()
      setUsuarios(usuarios)

      
    }


   //essa função faz uma reuisição para consultar os dados da api e redenrizar eles no componente

    function renderizarUsuarios(){

        return usuarios.map((usuario,i) =>{
            return <li key={i} > {usuario.nome} tem {usuario.idade} anos </li>
        })
    }


    return(
        <div>
            <h1>Integrando com api #02</h1>
            <input type="text" value={nome} onChange={e => setNome(e.target.value)}/>
            <input type="number" value={idade} onChange={e=> setIdade(+e.target.value)} />
            <button onClick={salvarUsuario}>Enviar</button>

            <ul>
                {renderizarUsuarios()}
            </ul>

        </div>
    )

}