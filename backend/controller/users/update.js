const UsersModel = require("../../models/users");
const { NotFound } = require("../../utils/errors");
const { userNotFound } = require("../../utils/messages");

const update = async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    const updatedUser = await UsersModel.findByIdAndUpdate(id, data, { new: true });

    if(!updatedUser) {
        throw new NotFound(userNotFound);
    }

    res.status(200).json(updatedUser);
}

module.exports = update;