import React from 'react';
import { Link } from 'react-router-dom';

import './style.css'

const Sorteio = () => {
  return (
    <div id="alert">
      <div className="content">
        <h1>AMIGO SECRETO LOOPIS</h1>
        <strong>Excluído com sucesso!</strong>
        <p>Os participantes serão notificados por email.</p>
        <Link to="/participantes-cadastrados" >
          <button type="submit">OK</button>
        </Link>
      </div>
    </div>
  );
}

export default Sorteio;