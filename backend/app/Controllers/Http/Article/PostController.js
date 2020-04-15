"use strict";
const Article = use("App/Models/Article");
const Category = use("App/Models/Category");
class PostController {
  async store({ request, response, auth }) {
    const user = await auth.getUser();
    const input = request.all();
    const title = request.input("title");
    const second_title = request.input("second_title");
    const abstract = request.input("abstract");
    const content = request.input("content");
    const date = request.input("date");
    const type = request.input("type");
    const tags = request.input("tags");
    const language = request.input("language");

    const article = new Article();
    article.title = title;
    article.second_title = second_title;
    article.abstract = abstract;
    article.content = content;
    article.date = date;
    article.author = user.username;
    article.type = type;
    article.tags = tags;
    article.language = language;
    article.user_id = user.id;
    const category = await Category.findBy("name", input.category_name);
    article.category_id = category.id;
    await article.save();
    return response.send(article);
  }
}

module.exports = PostController;
