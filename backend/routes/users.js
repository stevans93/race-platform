const { Router } = require('express');
const promiseWrapper = require('../middleware/promiseWrapper');
const { verifyToken } = require('../utils/jwt');
const router = new Router();

// Get User By ID
router.get("/:id", promiseWrapper(require("../controller/users/get")));

// Get All Users
router.get("/", verifyToken, promiseWrapper(require("../controller/users/getAll")));

// Delete User
router.delete("/:id", promiseWrapper(require("../controller/users/remove")));

// Update User
router.put("/:id", promiseWrapper(require("../controller/users/update")));

// Create User
router.post("/create", promiseWrapper(require("../controller/users/create")));

module.exports = router;