import { useState } from 'react'
export default function Produto() {
    const [descricao, setDescricao] = useState('Soja')
    const [valorUnitario, setvalorUnitario] = useState('2.10')
    const [estoque, setEstoque] = useState('10')
    const [categoria, setCategoria] = useState({ "id": 2, "descricao": "frios" })

    function salvar() {
        let prod = {descricao,valorUnitario, estoque, categoria}
        fetch('http://localhost:8080/produtos',
            {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(prod)
            }
        )
    }

    return (
        <div className="container">
            <h1 className="text-center mt-4">Novo Produto</h1>
            <label className="form-label">Informe descrição</label>
            <input
                className="form-control"
                type="text"
                placeholder="informe descrição"
                value={descricao}
                onChange={(txt) => setDescricao(txt.target.value)}
            />
            <label className="form-label">Informe valor</label>
            <input
                className="form-control"
                type="text"
                placeholder="informe valor"
                value={valorUnitario}
                onChange={(txt) => setvalorUnitario(txt.target.value)}
            />

            <label className="form-label">Informe estoque</label>
            <input
                className="form-control"
                type="text"
                placeholder="informe estoque"
                value={estoque}
                onChange={(txt) => setEstoque(txt.target.value)}
            />
            <button
                className="btn btn-primary mt-2"
                onClick={salvar}
            >Gravar</button>
        </div>
    )
}