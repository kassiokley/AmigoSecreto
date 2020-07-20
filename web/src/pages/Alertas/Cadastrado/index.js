import React from 'react';
import { Link } from 'react-router-dom';

import './style.css'

const Cadastro = () => {
  return (
    <div id="alert">
      <div className="content">
        <h1>AMIGO SECRETO LOOPIS</h1>
        <strong>Cadastrado com sucesso!</strong>
        <Link to="/adicionar-participantes" >
          <button type="submit">OK</button>
        </Link>
      </div>
    </div>
  );
}

export default Cadastro;