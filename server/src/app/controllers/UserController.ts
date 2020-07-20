import { Request, Response } from 'express';

import knex from '../../database/connection';

class UserController {

  async create(request: Request, response: Response) {
    const { name, email } = request.body;

    try {
      await knex('user').insert({ name, email });
      return response.status(200).json({ name, email });
    } catch (err) {
      return response.status(500).json({ message: 'Problema no cadastro do usuário.' });
    }
  }

  async index(request: Request, response: Response) {
    try {
      const user = await knex('user').select('*');
      return response.status(200).json(user);
    } catch (err) {
      return response.status(500).json({ message: 'Problema na busca pelos usuários.' });
    }
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const user = await knex('user').where('id', id).first();

    if (!user) {
      return response.status(500).json({ message: 'Usuário não cadastro.' });
    }

    return response.status(200).json(user);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;

    const { name, email } = request.body;

    try {
      await knex('user').where('id', id).update({ name, email });
      return response.status(200).json({ name, email });
    } catch (err) {
      return response.status(500).json({ message: 'Problema na atualização do usuário.' });
    }
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const userId = await knex('user').where('id', id).first();

    if(!userId) {
      return response.status(500).json({ message: 'Problema ao tentar excluir o usuário.' });
    }

    await knex('user').where('id', id).delete();
    return response.status(200).json({ message: 'Usuário excluido com sucesso.' });

  }
}

export default UserController;