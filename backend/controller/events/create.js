const EventsModel = require("../../models/events");

const create = async (req, res) => {
    let { _id, email, role } = req.user;

    const event = req.body;

    const newEvent = await EventsModel.create({...event, user_id: _id, user_email: email, user_role: role });

    res.status(200).json(newEvent);
}

module.exports = create;