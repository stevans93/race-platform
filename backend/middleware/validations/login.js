const yup = require('yup');
const { emailNotValid, emailRequired, passwordLength, passwordIsRequired } = require("../../utils/messages");

const loginSchema = yup.object({
    body: yup.object({
        email: yup.string().email(emailNotValid).required(emailRequired),
        password: yup.string().min(6, passwordLength).required(passwordIsRequired),
    })
});

module.exports = { loginSchema };