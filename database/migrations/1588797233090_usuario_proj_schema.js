'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsuarioProjSchema extends Schema {
  up () {
    this.create('usuario_projs', (table) => {
      table.increments()
      table.enu('tipo', ['orientador', 'coorientador', 'autor']).notNullable()

      table.integer('id_categoria').unsigned().references('id_categoria').inTable('categorias')
      table.integer('id_projeto').unsigned().references('id_projeto').inTable('projetos')

      table.timestamps()
    })
  }

  down () {
    this.drop('usuario_projs')
  }
}

module.exports = UsuarioProjSchema
