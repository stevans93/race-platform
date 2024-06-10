const yup = require('yup');
const { firstNameRequired, lastNameRequired, emailNotValid, emailRequired, passwordLength, passwordIsRequired } = require('../../utils/messages');


const registerSchema = yup.object({
    body: yup.object({
        firstName: yup.string().required(firstNameRequired),
        lastName: yup.string().required(lastNameRequired),
        email: yup.string().email(emailNotValid).required(emailRequired),
        password: yup.string().min(6, passwordLength).required(passwordIsRequired),
    })
});

module.exports = { registerSchema }