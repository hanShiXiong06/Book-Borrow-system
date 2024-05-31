const User = require("../../models/user");
const AuthAdminService = {
  // CRUD
  create: async function (params) {
    return await User.create(params);
  },
  query: async (username) => {
    return await User.findOne({ where: { username } });
  },
};

module.exports = AuthAdminService;
