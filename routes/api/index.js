const express = require("express");
const router = express.Router();
const UserRouter = require("./UserRouter");

router.use("/user", UserRouter);

module.exports = router;
