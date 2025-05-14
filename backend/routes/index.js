const express = require('express');
const router = new express.Router();

router.use("/auth", require("./auth"));

router.use("/users", require("./users"));

router.use("/events", require("./events"));

router.use("/goods", require("./goods"));

module.exports = router;