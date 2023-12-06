export default function CardProduto({produto}){
    function excluir(){
        fetch(`http://localhost:8080/produtos/${produto.id}`,{
            method: 'DELETE'
        })
        .then(data => alert("Excluído com sucesso"))
        .catch((error) => alert(error))
    }
    
    return(
        <div className="col-sm-3 m-4">
            <h1>Produtos: {produto.id}</h1>
            <p>Descrição: {produto.descricao}</p>
            <p>Estoque: {produto.estoque}</p>
            <p>Valor R$: {produto.valorUnitario}</p>
            <p>Categoria: {produto.categoria.descricao}</p>

            <div className="d-flex justify-content-between">
                <button className="btn btn-primary">Editar</button>
                <button className="btn btn-danger" onClick={excluir}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                    Excluir
                </button>
            </div>
        </div>
    )
}