import {useState} from 'react'
export default function Cadastro(){
    const[nome, setNome] = useState('Maria')
    return(
        <div className="container">
            <h1 className="text-center mt-4">Novo contato</h1>
            <label className="form-label">Informe nome </label>
            <input 
                className="form-control" 
                type="text" 
                placeholder="Informe o nome"
                value={nome}
                onChange={(txt)=>setNome(txt)}/>
            <button className="btn btn-primary" >Gravar</button>
        </div>
    )
}