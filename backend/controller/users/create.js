const UsersModel = require("../../models/users");
const { userAlreadyExists } = require("../../utils/messages");
const { BadRequest } = require("../../utils/errors");
const bcryptFunctions = require("../../utils/bcryptFunctions");

const create = async (req, res) => {
    const { email, password } = req.body;
    
    const body = req.body;

    let ifExist = await UsersModel.findOne({ email });

    if(ifExist) {
        throw new BadRequest(userAlreadyExists);
    }

    let hashPassword = await bcryptFunctions.hashPassword(password);

    let newUser = await UsersModel({ ...body, password: hashPassword });

    await newUser.save();

    return res.status(200).json(newUser);
}

module.exports = create;