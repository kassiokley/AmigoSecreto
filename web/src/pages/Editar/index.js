import React, { useState, useEffect } from 'react';

import './style.css'
import UserServices from '../../services/user'

const Editar = () => {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    await UserServices.upadte({ name, email });
  }

  return (
    <div id="page-editar-participantes">
      <div className="content">
        <header>
          <h1>AMIGO SECRETO LOOPIS</h1>
        </header>

        <form onSubmit={handleSubmit}>
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
        </form>

        <button type="submit">SALVAR</button>
      </div>
    </div>
  );
}

export default Editar;