"use strict";

/*
|--------------------------------------------------------------------------
| CategoriaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const categorias = [
  {
    id_menu: 2,
    name: "Ciências Agrárias",
  },
  {
    id_menu: 2,
    name: "Ciências Biológicas",
  },
  {
    id_menu: 2,
    name: "Ciências da Saúde",
  },
  {
    id_menu: 2,
    name: "Ciências Exatas e da Terra",
  },
  {
    id_menu: 2,
    name: "Ciências Humanas",
  },
  {
    id_menu: 2,
    name: "Ciências Sociais Aplicadas",
  },
  {
    id_menu: 2,
    name: "Engenharias",
  },
  {
    id_menu: 2,
    name: "Linguística, Letras e Artes",
  },
  {
    id_menu: 2,
    name: "Multidisciplinar",
  },
];
const Categoria = use("App/Models/Categoria");
class CategoriaSeeder {
  async run() {
    await Categoria.createMany(categorias);
  }
}

module.exports = CategoriaSeeder;
