const { Router } = require('express');
const promiseWrapper = require('../middleware/promiseWrapper');
const { validate, loginSchema, registerSchema } = require('../middleware/validations');
const router = new Router();

router.post("/register", validate(registerSchema), promiseWrapper(require("../controller/auth/register")));

router.post("/login", validate(loginSchema), promiseWrapper(require("../controller/auth/login")));

module.exports = router;