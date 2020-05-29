"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.post("/register", "UsuarioController.store");
Route.group(() => {
  Route.post("/update/:id", "UsuarioController.update");
  Route.get("/show/user", "UsuarioController.show");
  Route.resource("noticia", "NoticiaController");
  // Route.post("/noticia/post", "NoticiaController.store");
  // Route.post(
  //   "/noticia/update/:id_noticia",
  //   "NoticiaController.update"
  // );
}).middleware(["auth"]);

Route.get("/noticia/show", "NoticiaController.index");

Route.post("/authenticate", "AuthController.authenticate");

Route.get("/users/:tipo", "UsuarioController.index");
