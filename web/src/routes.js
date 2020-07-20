import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Listar from './pages/Listar';
import Adicionar from './pages/Adicionar';
import Editar from './pages/Editar';
import AlertCadastrado from './pages/Alertas/Cadastrado';
import AlertExcluido from './pages/Alertas/Excluido';
import AlertSalvo from './pages/Alertas/Salvo';
import AlertSorteio from './pages/Alertas/Sorteio';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Listar} path="/participantes-cadastrados" />
        <Route component={Adicionar} path="/adicionar-participantes" />
        <Route component={Editar} path="/editar-participantes" />
        <Route component={AlertCadastrado} path="/alert-cadastrado" />
        <Route component={AlertExcluido} path="/alert-excluido" />
        <Route component={AlertSalvo} path="/alert-salvo" />
        <Route component={AlertSorteio} path="/alert-sorteio" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;