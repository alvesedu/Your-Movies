import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './styles.css';
import {toast} from 'react-toastify';

import api from '../../services/api';

function Filme() {

  const { id } = useParams();

  const history = useHistory();

  const [filme, setFilme] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getFilme() {
      const response = await api.get(`r-api/?api=filmes/${id}`);

      if (response.data.length === 0) {
        //Acesso por filme com id não existente, joga ele para home!
        history.replace('/');
        return;
      }

      setFilme(response.data);
      setLoading(false);
      console.log(response.data);
    }

    getFilme();

    return () => {
      console.log('Desmontado');
    }

  }, [history, id]);

  function saveMovie(){
    //alert('Clicou')

    const minhaLista = localStorage.getItem('filmes');

    let filmesSalvos = JSON.parse(minhaLista) || [];

    //Se tiver filme salvo com mesmo ID é pra ignorar.
    const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id)

    if (hasFilme) {
      toast.error('Tu já salvastes esse filme!')
      return;
      //para a execução do código aqui...
    }

    filmesSalvos.push(filme);
    localStorage.setItem('filmes', JSON.stringify(filmesSalvos));
    toast.success('Filme salvo com sucesso!');
   
  }

  if (loading) {
    return (
      <div className="filme-info">
        <h3>Caregando o seu filme...</h3>
      </div>
    )
  }

  return (

    <div className="filme-info">
      <h2>{filme.nome}</h2>
      <img src={filme.foto} alt={filme.nome} />
      <h3>Sinopse</h3>
      {filme.sinopse}
      <div className="botoes">
        <button onClick={saveMovie}>Salvar</button>

        <a target="blank" href={`https://www.youtube.com/results?search_query=${filme.nome} Trailer`} >
        <button>Trailer</button>
        </a>

      </div>
    </div>
  );
}

export default Filme;