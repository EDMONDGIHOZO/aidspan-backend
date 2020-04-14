"use strict";
const User = use("App/Models/User");
const Role = use("App/Models/Role");

class RegisterController {
  async register({ request, auth, response }) {
    let user = await User.create(request.all());
    const role = await Role.create({ description: "editor" });
    await user.roles().attach([role.id]);

    await user.save();
    return response.json(user);
  }
}

module.exports = RegisterController;
