"use strict";
const User = use("App/Models/User");
const Role = use("App/Models/Role");

class RegisterController {
  async register({ request, response, params }) {
    let user = await User.create(request.all());
    user.type = params.type;
    let data = user.type;
    const role = await Role.create({ description: data });
    await user.roles().attach([role.id]);

    await user.save();
    return response.json(user);
  }
}

module.exports = RegisterController;
