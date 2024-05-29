const express = require("express");
const router = express.Router();
const AuthAdminController = require("../../controllers/admin/AuthAdminController.js");
// 引入控制器
// CRUD

// 注册模块
// router.post("/register", 控制器.C );

/**
 * url:/admin/auth/register
 * method:post
 *
 * */
router.post("/register", AuthAdminController.register);
// 登录模块
/**
 * url:/admin/auth/login
 * method:post
 *
 * */
router.post("/login", AuthAdminController.login);

module.exports = router;
