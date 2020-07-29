"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Projeto = use("App/Models/Projeto");
const UsuarioProj = use("App/Models/UsuarioProj");
const Database = use("Database");

/**
 * Resourceful controller for interacting with projetos
 */
class ProjetoController {
  /**
   * Show a list of all projetos.
   * GET projetos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const projetos = Projeto.query()
      .with("estado")
      .orderBy("created_at", "desc")
      .fetch();

    return projetos;
  }

  /**
   * Create/save a new projeto.
   * POST projetos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, auth }) {
    try {
      const data = request.only([
        "nome",
        "resumo",
        "introducao",
        "objetivo",
        "metodologia",
        "result_disc",
        "conclusao",
        "id_categoria",
        "id_estado",
      ]);
      const trx = await Database.beginTransaction();

      const projeto = await Projeto.create({ ...data }, trx);

      const usuarios = request.only(["usuarios"]);
      const usuarioProj = usuarios.usuarios.map((item) => {
        return {
          id_usuario: item.id_usuario,
          relacao: item.relacao,
          autor: item.autor,
          id_projeto: projeto.id,
        };
      });
      console.log(usuarioProj);
      await UsuarioProj.createMany(usuarioProj, trx);

      trx.commit();
      return projeto;
    } catch (err) {
      return {
        erro: true,
        msg: "Erro ao criar o projeto",
      };
    }
  }

  /**
   * Display a single projeto.
   * GET projetos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const projeto = await Projeto.query()
      .where("nome", params.nome)
      .with("usuarios")
      .with("estado")
      .with("categoria")
      .fetch();

    return projeto;
  }

  /**
   * Update projeto details.
   * PUT or PATCH projetos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    try {
      const data = request.only([
        "nome",
        "resumo",
        "introducao",
        "objetivo",
        "metodologia",
        "result_disc",
        "conclusao",
        "id_categoria",
        "id_estado",
      ]);

      const projeto = await Projeto.query()
        .where("id_projeto", params.id)
        .update({ ...data });

      return projeto;
    } catch (err) {
      return {
        erro: true,
        msg: "Não foi possivel atualizar o projeto",
      };
    }
  }

  /**
   * Delete a projeto with id.
   * DELETE projetos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const projeto = await Projeto.query()
      .where("id_projeto", params.id)
      .delete();

    return projeto;
  }
}

module.exports = ProjetoController;
