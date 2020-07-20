import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

import './style.css'
import UserServices from '../../services/user'

const Adicionar = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const history = useHistory();

  const HandleSubmit = async (event) => {
    event.preventDefault();

    await UserServices.create({ name, email });

    history.push('/participantes-cadastrados');
  }

  return (
    <div id="page-adicionar-participantes">
      <div className="content">
        <header>
          <h1>AMIGO SECRETO LOOPIS</h1>
        </header>

        <form onSubmit={HandleSubmit}>
          <p>Nome</p>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <p>Email</p>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <button type="submit">CADASTRAR</button>
        </form>

        <Link to="/alert-cadastrado" >
          <button type="submit">CADASTRAR E ADICIONAR OUTRO</button>
        </Link>
      </div>
    </div>
  );
}

export default Adicionar;