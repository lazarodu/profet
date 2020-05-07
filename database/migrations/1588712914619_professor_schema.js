'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfessorSchema extends Schema {
  up () {
    this.create('professors', (table) => {
      table.increments('id_professor').primary()

      table.integer('id_usuario').unsigned().references('id_usuario').inTable('usuarios')

      table.timestamps()
    })
  }

  down () {
    this.drop('professors')
  }
}

module.exports = ProfessorSchema
