"use strict";

/*
|--------------------------------------------------------------------------
| CursoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const cursos = [
  {
    curso: "Informática",
  },
  {
    curso: "Edificações",
  },
  {
    curso: "Mecatrônica",
  },
];
const Curso = use("App/Models/Curso");
class CursoSeeder {
  async run() {
    await Curso.createMany(cursos);
  }
}

module.exports = CursoSeeder;
