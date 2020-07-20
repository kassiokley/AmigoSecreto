import React, { useState, useEffect } from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

import './style.css'
import api from '../../services/api'

const Listar = (props) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    api.get('users').then(response => {
      setList(response.data);
    });
  }, []);

  async function handleDelete(id) {
    await api.delete(`users/${id}`);

    setList(list.filter(e => e.id !== id));
  }

  return (
    <div id="page-home-com-participantes">
      <div className="content">
        <header>
          <h1>AMIGO SECRETO LOOPIS</h1>
        </header>
      </div>

      <div className="corpo">
        <p>OBS: o amigo secreto só pode occorrer com no mínimo 3 pessoas</p>

        <ul>
          {list.map(e => (
            <li key={e.id} >
              <strong>{e.name}</strong>
              <p>{e.email}</p>
              <div>
                <button type="submit" >
                  <MdEdit
                    onClick={() => {}}
                    size={20}
                    color="rgba(189, 189, 189, 0.9)" />
                </button>
                <button type="submit" >
                  <MdDelete
                    onClick={() => handleDelete(e.id)}
                    size={20}
                    color="#FF6B35"
                  />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <footer>
        <div className="footer">
          <Link to="/adicionar-participantes" >
            <button type="submit">ADICIONAR</button>
          </Link>
          <Link to="/alert-sorteio" >
            <button type="submit">SORTEAR</button>
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default Listar;