//import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

//https://sujeitoprogramador.com/r-api/?api=filmes/

function Header() {


  return (
    <header>
      <Link className="logo" to="/" >Your-Movies</Link>
      <Link className="favoritos" to="/favoritos" >Salvos</Link>
    </header>
  );
}

export default Header;