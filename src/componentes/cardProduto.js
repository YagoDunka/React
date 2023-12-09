import { Link, useNavigate } from 'react-router-dom'
export default function CardProduto({ produto }) {
    const navigate = useNavigate()

    function excluir(){
        fetch(`http://localhost:8080/produtos/${produto.id}`,
        {
            method:'DELETE'
        }
        )
        .then(data => {
            alert('Produto excluido com sucesso')
            navigate('/')
        })
        .catch((error)=> alert(error))
    }
    return (
        <div className="card col-sm-3 m-3 p-3">
            <h3 className="text-center">Produto: {produto.id} </h3>
            <hr />
            <p><b>Descrição:</b>  {produto.descricao}</p>
            <p><b>Estoque:</b> {produto.estoque}</p>
            <p><b>Valor R$:</b> {produto.valorUnitario}</p>
            <p><b>Categoria:</b>  {produto.categoria?.descricao}</p>
            <div className="d-flex justify-content-between">
               <Link to={`/produto/editar/${produto.id}`}><button className="btn btn-primary">Editar</button></Link> 
                <button 
                   className="btn btn-danger"
                   onClick={excluir}
                   >Excluir</button>
            </div>
        </div>

    )
}