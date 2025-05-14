const { Router } = require('express');
const router = new Router();

// Get All Goods
router.get("/", require("../controller/goods/getAll"));

// Get Goods By ID
router.get("/:id", require("../controller/goods/get"));

// Create New Goods
router.post("/create", require("../controller/goods/create"));

// Delete Goods
router.delete("/:id", require("../controller/goods/remove"));

// Update Goods
router.put("/:id", require("../controller/goods/update"));

module.exports = router;