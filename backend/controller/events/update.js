const EventsModel = require("../../models/events");
const { NotFound } = require("../../utils/errors");
const { eventNotFound } = require("../../utils/messages");

const update = async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    const updateEvent = await EventsModel.findByIdAndUpdate(id, data, { new: true });

    if(!updateEvent) {
        throw new NotFound(eventNotFound);
    }

    res.status(200).json(updateEvent);
}

module.exports = update;