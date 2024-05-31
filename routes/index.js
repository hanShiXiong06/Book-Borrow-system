var express = require("express");
var router = express.Router();
const adminRouter = require("./admin/index");
const apiRouter = require("./api/index");

// 引入 管理员路由 和 用户路由的角色
// localhost:3000/adimin
router.use("/admin", adminRouter);

// localhost:3000/api
router.use("/api", apiRouter);

module.exports = router;
