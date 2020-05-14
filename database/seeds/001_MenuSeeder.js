"use strict";

/*
|--------------------------------------------------------------------------
| MenuSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const menus = [
  {
    nome: "Início",
  },
  {
    nome: "Categorias",
  },
  {
    nome: "Ajuda",
  },
];
const Menu = use("App/Models/Menu");
class MenuSeeder {
  async run() {
    await Menu.createMany(menus);
  }
}

module.exports = MenuSeeder;
