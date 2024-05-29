const CategoryAdminService = require("../../services/admin/CategoryAdminService");
const CategoryAdminController = {
  create: async (req, res) => {
    const { name } = req.body;
    // 服务层.创建的方法
    const row = await CategoryAdminService.create(name);
    res.json(row);
  },
  findAll: async (req, res) => {
    const rows = await CategoryAdminService.findAll();
    res.json(rows);
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { name, sort } = req.body;
    const result = await CategoryAdminService.update({ id, name, sort });
    if (!result) {
      res.json({ code: -1, msg: "更新失败" });
    }

    res.json({ code: 1, msg: "更新成功" });
  },
  // delele
  delete: async (req, res) => {
    const { id } = req.params;
    const result = await CategoryAdminService.delete(id);
    if (!result) {
      res.json({ code: -1, msg: "删除失败" });
    }

    res.json({ code: 1, msg: "删除成功" });
  },
};

module.exports = CategoryAdminController;
