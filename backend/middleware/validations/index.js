const { validate } = require('../validations/validate');
const { loginSchema } = require('./login');
const { registerSchema } = require('./register');

module.exports = {
    validate,
    loginSchema,
    registerSchema,
};