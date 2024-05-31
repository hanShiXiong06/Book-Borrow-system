// post
const express = require("express");
const router = express.Router();
const BorrowController = require("../../controllers/api/BorrowController");

router.post("/:id", BorrowController.create);
module.exports = router;
