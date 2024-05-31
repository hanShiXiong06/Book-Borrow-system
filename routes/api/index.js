const express = require("express");
const router = express.Router();
const UserRouter = require("./UserRouter");
const BorrowRouter = require("./BorrowRouter");

router.use("/user", UserRouter);
router.use("/borrow", BorrowRouter);

module.exports = router;
