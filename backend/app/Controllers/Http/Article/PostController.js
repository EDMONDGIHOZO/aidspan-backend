"use strict";
const Article = use("App/Models/Article");

class PostController {
  async store({ request, response }) {
    const user = await auth.getUser();
    const title = request.input("title");
    const second_title = request.input("second_title");
    const abstract = request.input("abstract");
    const type = request.input("type");
    const tags = request.input("tags");
    const language = request.input("language");

    const article = new Article();
    article.title = title;
    article.second_title = second_title;
    article.abstract = abstract;
    article.type = type;
    article.tags = tags;
    article.language = language;
    article.user_id = user.id;
    const category = await Category.findBy("name", input.category_name);
    event.category_id = category.id;
    await article.save();
    return response.send(article);
  }
}

module.exports = PostController;
