const EventsModel = require('../../models/events');

const remove = async (req, res) => {
    const { id } = req.params;

    let deleteEvent = await EventsModel.findByIdAndDelete(id);

    res.status(200).json(deleteEvent);
}

module.exports = remove;