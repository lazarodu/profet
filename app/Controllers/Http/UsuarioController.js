"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Usuario = use("App/Models/Usuario");

/**
 * Resourceful controller for interacting with usuarios
 */
class UsuarioController {
  /**
   * Show a list of all usuarios.
   * GET usuarios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index() {
    const usuarios = Usuario.query()
      .leftJoin('alunos', 'id_aluno', 'alunos.id_aluno')
      .leftJoin('professors', 'id_professor', 'professors.id_professor')
      .orderBy("nome", "asc")
      .fetch();

    return usuarios;
  }

  /**
   * Render a form to be used for creating a new usuario.
   * GET usuarios/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new usuario.
   * POST usuarios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    try {
      const data = request.only(["nome", "email", "password", "tipo", "admin"]);

      const user = await Usuario.create({ ...data });

      if (data.tipo == "aluno") {
        const aluno = request.only(["id_curso", "id_serie"]);
        user.aluno().create({ ...aluno, id_usuario: user.id_usuario });
      } else {
        user.professor().create({ id_usuario: user.id_usuario });
      }

      return user;
    } catch (error) {
      return {
        erro: true,
        msg: "Erro ao inserir o usuário, tente novamente!",
      };
    }
  }

  /**
   * Display a single usuario.
   * GET usuarios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ request, auth }) {
    const { nome } = request.only(["nome"]);

    console.log(nome)

    const usuario = await Usuario.query().select('nome', 'email', 'tipo').where('nome', nome).fetch();

    return usuario;
  }

  /**
   * Render a form to update an existing usuario.
   * GET usuarios/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update usuario details.
   * PUT or PATCH usuarios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ request, auth, params }) {
    const {nome, email, senha} = request.only(["nome", "email", "senha"]);

    try{
      const usuario =  await Usuario.findOrFail(params.id);

      usuario.nome = nome;
      usuario.email = email;
      usuario.senha = senha;

      await usuario.save();

      return usuario;
    } catch (err) {
      return {
        erro: true,
        msg: "Não foi possivel atualizar os dados"
      }
    }
    
  }

  /**
   * Delete a usuario with id.
   * DELETE usuarios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}
}

module.exports = UsuarioController;
