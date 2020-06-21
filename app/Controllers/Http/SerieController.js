'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Serie = use("App/Models/Serie");

/**
 * Resourceful controller for interacting with series
 */
class SerieController {
  /**
   * Show a list of all series.
   * GET series
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const series = await Serie.query()
      .with("alunos")
      .orderBy("id_serie", "asc")
      .fetch();

    return series;
  }


  /**
   * Create/save a new serie.
   * POST series
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, auth }) {
    const { nome } = request.only(["nome"]);
    const serie = await Serie.create({
      serie: nome
    });

    return serie;
  }

  /**
   * Display a single serie.
   * GET series/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const serie = await Serie.query()
      .where("id_serie", params.id)
      .with("alunos")
      .orderBy("created_at", "desc")
      .fetch();

    return serie;
  }

  /**
   * Update serie details.
   * PUT or PATCH series/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const { nome } = request.only(["nome"]);
    const serie = await Serie.query()
      .where("id_serie", params.id)
      .update({
        serie: nome
      });

    return serie;
  }

  /**
   * Delete a serie with id.
   * DELETE series/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const serie = await Serie.query()
      .where("id_serie", params.id)
      .delete();

    return serie;
  }
}

module.exports = SerieController
