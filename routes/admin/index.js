const express = require("express");
const router = express.Router();
const AuthAdminRouter = require("./AuthAdminRouter");

router.use('/auth' , AuthAdminRouter )

module.exports = router;
