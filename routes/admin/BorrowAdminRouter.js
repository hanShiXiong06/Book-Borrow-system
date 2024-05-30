const express = require("express");
const router = express.Router();

const BorrowAdminController = require("../../controllers/admin/BorrowAdminController");

// admin/borrow
// localhost:3000/admin/borrow

// 查询
router.get("/", BorrowAdminController.findAll);

// // 更新
router.put("/:id", BorrowAdminController.update);

// // 删除
router.delete("/:id", BorrowAdminController.delete);

// 导出
module.exports = router;
