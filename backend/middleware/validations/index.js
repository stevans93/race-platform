const { validate } = require('../validations/validate');
const { loginSchema } = require('./login');

module.exports = {
    validate,
    loginSchema,
};