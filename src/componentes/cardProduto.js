export default function CardProduto({produto}){
    return(
        <div className="col-sm-3" >
            <h1>Produtos: {produto.id}</h1>
            <p>Descrição: {produto.descricao}</p>
            <p>Estoque: {produto.estoque}</p>
            <p>Valor R$: {produto.valorUnitario}</p>
            <p>Categoria: {produto.categoria.descricao}</p>

        </div>
        
    )
}