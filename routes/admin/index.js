const express = require("express");
const router = express.Router();
const AuthAdminRouter = require("./AuthAdminRouter");
const CategoryAdminRouter = require("./CategoryAdminRouter");
const BooksAdminRouter = require("./BooksAdminRouter.js");

router.use("/auth", AuthAdminRouter);
router.use("/category", CategoryAdminRouter);
router.use("/books", BooksAdminRouter);

module.exports = router;
