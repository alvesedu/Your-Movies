import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

//https://sujeitoprogramador.com/r-api/?api=filmes/

import api from '../../services/api'

function Home() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {

    async function loadMovies(){
      const response = await api.get('r-api/?api=filmes');
      setMovies(response.data);
      console.log(response.data);
    }
    loadMovies();

  }, [])

  return (

    <div className="container">
      <div className="listar-filmes">
        {movies.map((filme) => {
          return (
            <article key={filme.id}>
              <strong>{filme.nome}</strong>
              <img src={filme.foto} alt={filme.nome} />
              <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          )
        })}
      </div>
    </div>
  );
}

export default Home;