// 两种请求 get | post

// resful =   get 获取 | post 提交(增加) | put(更新) |delete (删除)

// get

//post

//put

// delete
const BooksAdminController = require("../../controllers/admin/BooksAdminController");

const express = require("express");
const router = express.Router();

// url : localhost:3000/admin/books
router.get("/", BooksAdminController.findAll);
router.post("/", BooksAdminController.create);
// url : localhost:3000/admin/books/2
router.put("/:id", BooksAdminController.update);
router.delete("/:id", BooksAdminController.delete);

module.exports = router;
