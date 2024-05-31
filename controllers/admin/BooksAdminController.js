const BooksAdminService = require("../../services/admin/BooksAdminService");
const BooksAdminController = {
  create: (req, res) => {
    console.log(req.file);
    const file = req.file ? req.file : "";
    req.body.img = file.path.substr(6);
    BooksAdminService.create(req.body);
    res.json(req.body);
  },
  findAll: async (req, res) => {
    const rows = await BooksAdminService.findAll();
    res.json(rows);
  },
  async update(req, res) {
    const { id } = req.params;
    const { name, author } = req.body;
    const result = await BooksAdminService.update({ id, name, author });
    if (!result) {
      res.json({
        code: -1,
        msg: "更新失败",
      });
    }
    res.json({ code: 1, msg: "更新成功" });
  },
  async delete(req, res) {
    const { id } = req.params;
    const result = await BooksAdminService.delete(id);
    if (!result) {
      res.json({
        code: -1,
        msg: "删除失败",
      });
    }
    res.json({ code: 1, msg: "删除成功" });
  },
};

// 控制器 只是业务的处理

module.exports = BooksAdminController;
