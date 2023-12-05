export default function Lista(){
    const nomes = ['Maria', 'João', 'José', 'Pedro', 'Ana']
    return(
         
        <div>        
            <h1>Lista de nomes</h1>
            <hr/>
            <ul>
                {nomes.map((nome, indice)=>(
                    <li key={indice}>{nome}</li>
                ))}
            </ul>
        </div>
    )
}