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

Route.get("/", () => {
  return { greeting: "Hello world in JSON" };
});
Route.post("/register/:type", "User/RegisterController.register").validator(
  "User"
);
Route.post("/login", "User/LoginController.login");
Route.group(() => {
  Route.post("/create", "Article/PostController.store");
  Route.put("/edit/:id", "Article/EditController.update");
  Route.delete("delete/:id", "Article/DeleteController.destroy").middleware([
    "role",
  ]);
}).prefix("article");
