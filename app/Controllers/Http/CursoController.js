'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Curso = use("App/Models/Curso");

/**
 * Resourceful controller for interacting with cursos
 */
class CursoController {
  /**
   * Show a list of all cursos.
   * GET cursos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const cursos = await Curso.query()
      .with("alunos")
      .orderBy("id_curso", "asc")
      .fetch();

    return cursos;
  }

  /**
   * Create/save a new curso.
   * POST cursos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, auth }) {
    const { nome } = request.only(["nome"]);
    const curso = await Curso.create({
      curso: nome
    });
    
    return curso;
  }

  /**
   * Display a single curso.
   * GET cursos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const curso = await Curso.query()
      .where("id_curso", params.id)
      .with("alunos")
      .orderBy("created_at", "desc")
      .fetch();

    return curso;
  }

  /**
   * Update curso details.
   * PUT or PATCH cursos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const { nome } = request.only(["nome"]);
    const curso = await Curso.query()
      .where("id_curso", params.id)
      .update({ curso: nome });

    return curso;
  }

  /**
   * Delete a curso with id.
   * DELETE cursos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const curso = await Curso.query()
      .where("id_curso", params.id)
      .delete();

    return curso;
  }
}

module.exports = CursoController
