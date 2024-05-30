const express = require("express");
const router = express.Router();
const AuthAdminRouter = require("./AuthAdminRouter");
const CategoryAdminRouter = require("./CategoryAdminRouter");
const BooksAdminRouter = require("./BooksAdminRouter.js");
const BorrowAdminRouter = require("./BorrowAdminRouter.js");

router.use("/auth", AuthAdminRouter);
router.use("/category", CategoryAdminRouter);
router.use("/books", BooksAdminRouter);
router.use("/borrow", BorrowAdminRouter);

module.exports = router;
