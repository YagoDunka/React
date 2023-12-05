import Filho from "./filho";
import Sobrinho from "./sobrinho";

export default function Pai(){
    let obj = {nome:'maria',idade:45}
    let nomes = ['maria','jose']
    return(
        <div>
            <h1>Componente pai</h1>
            <Filho 
              msg="ola do pai"
              nome="jose"
            />

            <Sobrinho
               contato={obj}
               lista={nomes}
            />
        </div>
    )
}