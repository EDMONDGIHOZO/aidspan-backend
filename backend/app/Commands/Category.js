"use strict";

const { Command } = require("@adonisjs/ace");
const Cate = use("App/Models/Category");

class Category extends Command {
  static get signature() {
    return "category";
  }

  static get description() {
    return "Automatically adds categories";
  }

  async handle(args, options) {
    const categories = [
      { name: "issue1" },
      { name: "issue2" },
      { name: "issue3" },
      { name: "issue4" },
      { name: "issue5" },
    ];
    const choice = await this.choice(
      "You are about to add 10 Categories, Do you want to proceed?",
      ["Yes", "No"]
    );

    if (choice === "Yes") {
      for (let i = 0; i < categories.length; i++) {
        const category = await Cate.findBy("name", categories[i].name);
        if (!category) {
          await Cate.create(categories[i]);
        }
      }
      this.success("Categories Added");
      process.exit(0);
    } else {
      process.exit(0);
    }
  }
}

module.exports = Category;
