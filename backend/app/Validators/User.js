"use strict";

class User {
  get rules() {
    return {
      // validation rules

      email: "required|email|unique:users",
      type: "in:admin,editor",
    };
  }
  get messages() {
    return {
      required: "The {{field}} is required ",
      email: "email must be provided",
      unique: "the {{field}} has been used before(duplication error)",
      in: "admin or editor",
    };
  }

  async fails(errorMessages) {
    for (let i = 0; i < errorMessages.length; i++) {
      return this.ctx.response.status(400).send(errorMessages[i].message);
    }
  }
}

module.exports = User;
