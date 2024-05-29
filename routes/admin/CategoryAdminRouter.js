const express = require("express");
const router = express.Router();
const CategoryAdminController = require("../../controllers/admin/CategoryAdminController");

// get post
// put delete

// router.get( '/', 控制层.findAll() )

router.get("/", CategoryAdminController.findAll);
router.post("/", CategoryAdminController.create);
router.put("/:id", CategoryAdminController.update);
router.delete("/:id", CategoryAdminController.delete);

module.exports = router;
