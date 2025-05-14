const EventsModel = require("../../models/events");
const { BadRequest } = require("../../utils/errors");
const { eventNotExists } = require("../../utils/messages");

const get = async (req, res) => {
    const { id } = req.params;

    const event = await EventsModel.findById(id);

    if(!event) {
        throw new BadRequest(eventNotExists);
    }

    res.status(200).json(event);
};

module.exports = get;