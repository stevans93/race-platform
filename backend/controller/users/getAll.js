const UsersModel = require("../../models/users");

const getAll = async (req, res) => {
    const search = req.query.search || "";
    const page = parseInt(req.query.page, 10) || 1
    const size = parseInt(req.query.size, 10) || 10

    const limit = size
    const offset = (page - 1) * size
    let query = {};

    if(search) {
        const searchString = search.split(' ');

        const firstName = searchString[0] ?? '';
        const lastName = searchString[1] ?? '';

        if(searchString.length === 1) {
            query = {
                $or: [
                    { firstName: { $regex: search, $options: 'i' } },
                    { lastName: { $regex: search, $options: 'i' } },
                    { email: { $regex: search, $options: 'i' } },
                    { phone: { $regex: search, $options: 'i' } },
                ]
            };
        } else {
            query = {
                $or: [
                    { firstName: { $regex: firstName, $options: 'i' } },
                    { lastName: { $regex: lastName, $options: 'i' } },
                    { email: { $regex: search, $options: 'i' } },
                    { phone: { $regex: search, $options: 'i' } },
                ]
            };
        }
    }

    const usersData = await UsersModel.find(query, { password: 0 }).skip(offset).limit(limit).sort({ firstName: 1 });

    const totalUsers = await UsersModel.countDocuments(query);

    res.status(200).json({
        users: usersData,
        totalUsers,
        totalPages: Math.ceil(totalUsers / size),
        currentPage: page
    });
}

module.exports = getAll;