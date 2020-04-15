"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ArticleSchema extends Schema {
  up() {
    this.create("articles", (table) => {
      table.increments();
      table.string("title");
      table.string("second_title");
      table.string("abstract");
      table.string("author");
      table.datetime("date");
      table.string("content");
      table.boolean("published").defaultTo("false");
      table.string("type");
      table.string("tags");
      table.enum("language", ["english", "french"]);
      table
        .integer("category_id")
        .unsigned()
        .references("id")
        .inTable("categories");
      table.integer("user_id").unsigned().references("id").inTable("users");

      table.timestamps();
    });
  }

  down() {
    this.drop("articles");
  }
}

module.exports = ArticleSchema;
