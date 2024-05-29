const Category = require("../../models/category");

const CategoryAdminService = {
  create: async (name) => {
    return await Category.create({ name });
  },
  findAll: async () => {
    return await Category.findAll();
  },
  update: async ({ id, name, sort }) => {
    return await Category.update({ name, sort }, { where: { cid: id } });
  },
  delete: async (id) => {
    return await Category.destroy({ where: { cid: id } });
  },
};

module.exports = CategoryAdminService;
