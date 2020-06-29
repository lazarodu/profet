"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Noticia = use("App/Models/Noticia");

/**
 * Resourceful controller for interacting with noticias
 */
class NoticiaController {
  /**
   * Show a list of all noticias.
   * GET noticias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const noticias = await Noticia.query()
      .with("usuario")
      .orderBy("created_at", "desc")
      .fetch();

    return noticias;
  }

  /**
   * Create/save a new noticia.
   * POST noticias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, auth }) {
    const { nome, link } = request.only(["nome", "link"]);
    const noticia = await Noticia.create({
      id_usuario: auth.user.id_usuario,
      nome: nome,
      link: link,
    });

    return noticia;
  }

  /**
   * Display a single noticia.
   * GET noticias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const noticia = await Noticia.query()
      .where("id_noticia", params.id)
      .with("usuario")
      .fetch();

    return noticia;
  }

  /**
   * Update noticia details.
   * PUT or PATCH noticias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const { nome, link } = request.only(["nome", "link"]);
    const noticia = await Noticia.query()
      .where("id_noticia", params.id)
      .update({ nome, link });

    return noticia;
  }

  /**
   * Delete a noticia with id.
   * DELETE noticias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const noticia = await Noticia.query()
      .where("id_noticia", params.id)
      .delete();
    return noticia;
  }
}

module.exports = NoticiaController;
