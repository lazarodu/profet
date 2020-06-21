'use strict'

const NoticiaController = require('./NoticiaController');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Categoria = use("App/Models/Categoria");

/**
 * Resourceful controller for interacting with categorias
 */
class CategoriaController {
  /**
   * Show a list of all categorias.
   * GET categorias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const categorias = await Categoria.query()
      .with("projetos")
      .orderBy("id_categoria", "asc")
      .fetch()

    return categorias;
  }


  /**
   * Create/save a new categoria.
   * POST categorias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, auth }) {
    const { nome, id_menu } = request.only(["nome", "id_menu"]);
    const categoria = await Categoria.create({
      id_menu: id_menu,
      name: nome
    });

    return categoria;
  }

  /**
   * Display a single categoria.
   * GET categorias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const categoria = await Categoria.query()
      .where("id_categoria", params.id)
      .with("professors")
      .orderBy("created_at", "desc")
      .fetch();

    return categoria;
  }


  /**
   * Update categoria details.
   * PUT or PATCH categorias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const { nome, id_menu } = request.only(["nome", "id_menu"]);
    const categoria = await Categoria.query()
      .where("id_categoria", params.id)
      .update({
        id_menu: id_menu,
        name: nome
      });

    return categoria;
  }

  /**
   * Delete a categoria with id.
   * DELETE categorias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const categoria = await Categoria.query()
      .where("id_categoria", params.id)
      .delete();

    return categoria;
  }
}

module.exports = CategoriaController
