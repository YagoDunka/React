import './App.css';
import { Link, Outlet } from 'react-router-dom'
function App() {
  return (
    <div className="App">
       <nav>
          <Link to='/contato/cadastrar'>Cadastro</Link>&nbsp;
          <Link to='/contato/consultar'>Consulta</Link>&nbsp;
          <Link to='/contato/detalhes/50'>detalhes</Link>
       </nav>
       <main>
          <Outlet />
       </main>
    </div>
  );
}

export default App;