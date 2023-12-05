export default function Sobrinho({contato, lista}){
    return(
        <div>
            <h1>Componente Sobrinho</h1>
            <p>Nome:{contato.nome}</p>
            <p>Idade:{contato.idade}</p>
            <ul>
               { lista.map(x => <li>{x}</li>)}
            </ul>
        </div>
    )
}