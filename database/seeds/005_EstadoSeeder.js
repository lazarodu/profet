"use strict";

/*
|--------------------------------------------------------------------------
| EstadoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const estados = [
  {
    estado: "Concluído",
  },
  {
    estado: "Em andamento",
  },
  {
    estado: "A procura de participante",
  },
];
const Estado = use("App/Models/Estado");
class EstadoSeeder {
  async run() {
    await Estado.createMany(estados);
  }
}

module.exports = EstadoSeeder;
