<<<<<<< HEAD
var express = require("express");
var router = express.Router();
const adminRouter = require("./admin/index");

// 引入 管理员路由 和 用户路由的角色
router.use("/admin", adminRouter);
=======
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
>>>>>>> 28b3d2f2915c289f25c6b6180e168776d1bca6dd

module.exports = router;
