'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Menu = use("App/Models/Menu");

/**
 * Resourceful controller for interacting with menus
 */
class MenuController {
  /**
   * Show a list of all menus.
   * GET menus
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const menus = await Menu.query()
      .with("categorias")
      .fetch();

    return menus;
  }

  /**
   * Render a form to be used for creating a new menu.
   * GET menus/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new menu.
   * POST menus
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, auth }) {
    const { nome } = request.only(["nome"]);
    const menu = await Menu.create({
      nome: nome
    });

    return menu;
  }

  /**
   * Display a single menu.
   * GET menus/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing menu.
   * GET menus/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update menu details.
   * PUT or PATCH menus/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const { nome } = request.only(["nome"]);
    const menu = await Menu.query()
      .where("id_menu", params.id)
      .update({ nome });

    return menu;
  }

  /**
   * Delete a menu with id.
   * DELETE menus/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const menu = await Menu.query()
      .where("id_menu", params.id)
      .delete();

    return menu;
  }
}

module.exports = MenuController
