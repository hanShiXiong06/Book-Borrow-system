const express = require("express");
const router = express.Router();
const AuthAdminRouter = require("./AuthAdminRouter");
const CategoryAdminRouter = require("./CategoryAdminRouter");

router.use("/auth", AuthAdminRouter);
router.use("/category", CategoryAdminRouter);

module.exports = router;
