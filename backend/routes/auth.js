const { Router } = require('express');
const router = new Router();

router.post("/register", require("../controller/auth/register"));

router.post("/login", require("../controller/auth/login"));

module.exports = router;