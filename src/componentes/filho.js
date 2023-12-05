export default function Filho(props){
    return(
        <div>
            <h1>Componente filho</h1>
            <p>
                mensagem:{props.msg}
            </p>
            <p>Nome:{props.nome}</p>
        </div>
    )
}