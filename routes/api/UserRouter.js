const express = require("express");
const router = express.Router();
// 控制器
const UserController = require("../../controllers/api/UserController");

// post
router.post("/login", UserController.login);

// post
router.post("/register", UserController.register);

module.exports = router;
