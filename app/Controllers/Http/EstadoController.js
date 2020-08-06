'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Estado = use("App/Models/Estado");
const Projeto = use("App/Models/Projeto");

/**
 * Resourceful controller for interacting with estados
 */
class EstadoController {
  /**
   * Show a list of all estados.
   * GET estados
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const ProjEstados = await Estado.query()
      .with("projetos")
      .orderBy("created_at", "desc")
      .fetch();

    return ProjEstados;
  }


  /**
   * Create/save a new estado.
   * POST estados
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single estado.
   * GET estados/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const ProjEstado = await Estado.query()
      .where("id_estado", params.id)
      .with("projetos")
      .fetch();

    return ProjEstado;
  }

  /**
   * Update estado details.
   * PUT or PATCH estados/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const estado = request.only(["estado"]);
    
  }

  /**
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const estado = await Estado.query()
      .where("id_estado", params.id)
      .delete();

    return estado;
  }
}

module.exports = EstadoController
