const UsersModel = require("../../models/users");

const remove = async (req, res) => {
    const { id } = req.params;

    let deleteUser = await UsersModel.findByIdAndDelete(id);

    res.status(200).json(deleteUser);
}

module.exports = remove;