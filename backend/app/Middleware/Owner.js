"use strict";
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Article = use("App/models/Article");

class Owner {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({ request, response }, next) {
    const user = await auth.getUser();
    const article = await Article.query()
      .where("id", params.id)
      .andWhere("user_id", user.id)
      .fetch();

    if (article.toJSon().length === 0)
      return response.status(401).send("Article doesn't belong to you");
    // call next to advance the request
    await next();
  }
}

module.exports = Owner;
