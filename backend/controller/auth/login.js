const UsersModel = require("../../models/users");
const bcryptFunctions = require("../../utils/bcryptFunctions");
const { BadRequest } = require("../../utils/errors");
const { userNotExists, passwordNotValid } = require("../../utils/messages");
const { createToken } = require("../../utils/jwt");

const login = async (req, res) => {
    const { email, password } = req.body;

    let user = await UsersModel.findOne({ email}, null, { lean: true });

    if(!user) {
        throw new BadRequest(userNotExists);
    }

    const isMatch = await bcryptFunctions.comparePassword(password, user.password);

    if(!isMatch) {
        throw new BadRequest(passwordNotValid);
    }

    delete user.password;

    const token = await createToken({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
    });

    res.status(200).json({ user: user, token: token });
}

module.exports = login;