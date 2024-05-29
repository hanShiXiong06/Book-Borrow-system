var express = require("express");
var router = express.Router();
const adminRouter = require("./admin/index");

// 引入 管理员路由 和 用户路由的角色
router.use("/admin", adminRouter);

module.exports = router;
