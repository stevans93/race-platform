const { Router } = require('express');
const router = new Router();

// Get User By ID
router.get("/:id", require("../controller/users/get"));

// Get All Users
router.get("/", require("../controller/users/getAll"));

// Delete User
router.delete("/:id", require("../controller/users/remove"));

// Update User
router.put("/:id", require("../controller/users/update"));

module.exports = router;