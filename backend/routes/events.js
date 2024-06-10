const { Router } = require('express');
const { verifyToken } = require('../utils/jwt');
const promiseWrapper = require('../middleware/promiseWrapper');
const router = new Router();

// Create New Event
router.post("/create", verifyToken, promiseWrapper(require("../controller/events/create")));

// Get Event By ID
router.get("/:id", promiseWrapper(require("../controller/events/get")));

// Get All Events
router.get("/", promiseWrapper(require("../controller/events/getAll")));

// Delete Event
router.delete("/:id", promiseWrapper(require("../controller/events/remove")));

// Update Event
router.put("/:id", promiseWrapper(require("../controller/events/update")));

module.exports = router;