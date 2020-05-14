"use strict";

/*
|--------------------------------------------------------------------------
| SerieSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const series = [
  {
    serie: "1",
  },
  {
    serie: "2",
  },
  {
    serie: "3",
  },
];
const Serie = use("App/Models/Serie");
class SerieSeeder {
  async run() {
    await Serie.createMany(series);
  }
}

module.exports = SerieSeeder;
