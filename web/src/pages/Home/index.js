import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg'

import './style.css'

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <h1>AMIGO SECRETO LOOPIS</h1>
        </header>

        <main>
          <img src={logo} alt="Logo amigo secreto Loopis" />
          <p>Nenhum participante adicionado.</p>
        </main>

        <Link to="/adicionar-participantes" >
          <button type="submit">ADICIONAR</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;