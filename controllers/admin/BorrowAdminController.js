const BorrowAdminService = require("../../services/admin/BorrowAdminService");
const BorrowAdminController = {
  // findAll
  async findAll(req, res) {
    const rows = await BorrowAdminService.findAll();
    res.json(rows);
  },
  //   // findOne
  //   // update
  async update(req, res) {
    const { id } = req.params;
    const result = await BorrowAdminService.update(id);
    if (!result) {
      res.json({ msg: "更新失败", code: -1 });
    }
    res.json({ msg: "更新成功", code: 1 });
  },
  //   // delete
  async delete(req, res) {
    const { id } = req.params;
    const result = await BorrowAdminService.delete(id);
    if (!result) {
      res.json({ msg: "删除失败", code: -1 });
    }
    res.json({ msg: "删除成功", code: 1 });
  },
};

module.exports = BorrowAdminController;
