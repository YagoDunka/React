import { useParams } from "react-router-dom"

export default function Detalhes(){
    const { idContato } = useParams()
    return(
        <div>
            <h1>Detalhes {idContato}</h1>
           
        </div>
    )
}