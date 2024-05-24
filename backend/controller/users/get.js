const UsersModel = require("../../models/users");
const { BadRequest } = require("../../utils/errors");
const { userNotFound } = require("../../utils/messages");


const get = async (req, res) => {
    const { id } = req.params;
    console.log(id);

    const user = await UsersModel.findById(id);

    if(!user) {
        throw new BadRequest(userNotFound);
    }

    return res.status(200).json(user);
}

module.exports = get;