"use strict";
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Role = use("App/Models/Role");

class Role {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({ request, auth, response }, next) {
    // call next to advance the request
    const user = await auth.getUser();
    const role = await auth.getUser();
    const role = await user
      .roles()
      .withPivot("role_id")
      .select("description")
      .fetch();
    const isEditorUser = role
      .toJSON()
      .find((rol) => role.decription === "admin");
    if (!isEditorUser) return response.status(401).send("Forbidden ");
    await next();
  }
}

module.exports = Role;
