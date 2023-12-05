import Cadastro from './componentes/cadastro';
import Consulta from './componentes/consulta';
import Lista from './componentes/lista';
import Pai from './componentes/pai';
import VerIdade from './componentes/verIdade';

function App() {
  return (
    <div className="container">
       { /*<Cadastro />  
        <Lista />
        <VerIdade /> 
        <Pai />  
        */  } 
        <Consulta />
    </div>
  );
}

export default App;