import { Link } from 'react-router-dom';
import './styles.css';

function Favoritos() {

  return (

    <div className="erro">
      <h2>Erro 404, página não encontrada!</h2>

      <div>
        <button className="btn2">
          <Link to="/">Início</Link>
        </button>
      </div>


    </div>
  );
}

export default Favoritos;