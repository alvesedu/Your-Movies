import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import {toast} from 'react-toastify';

//import api from '../../services/api';

function Favoritos() {

  const [filmes, setFilmes] = useState([]);

  useEffect(() => {

    const minhaLista = localStorage.getItem('filmes');
    setFilmes(JSON.parse(minhaLista) || []);   
    console.log(minhaLista);

  }, []);

  function handleDelete(id){
    let filtroFilmes = filmes.filter((item) => {
      return (item.id !== id)
    })

    setFilmes(filtroFilmes);
    localStorage.setItem('filmes', JSON.stringify(filtroFilmes));
    toast.success('Filme excluído com sucesso!');
  }
  

  return (

    <div id="meus-filmes">
      <h2>Meus filmes favoritos</h2>

      {filmes.length === 0 && <span>Tu não tens filmes nos favoritos!</span> }

        <ul>
          {filmes.map( item => {
            return (
              <li key={item.id}>
                <span>{item.nome}</span>

                <div>
                  <button className="btn2">
                  <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                  </button>

                  <button className="btn" onClick={() => handleDelete(item.id)}>Excluir</button>
                </div>
              </li>
            )
          })}
        </ul>
    </div>
  );
}

export default Favoritos;