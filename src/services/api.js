
//https://sujeitoprogramador.com/r-api/?api=filmes/

//BaseUrl -> https://sujeitoprogramador.com/
// r-api/?api=filmes/ (lista todos os filmes)
// r-api/?api=filmes/123 (lista os filmes por id)

import axios from 'axios';

const api = axios.create({
 baseURL: 'https://sujeitoprogramador.com'
});

export default api;