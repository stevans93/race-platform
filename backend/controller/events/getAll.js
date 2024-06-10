const EventsModel = require("../../models/events");

const getAll = async (req, res) => {
    const search = req.query.search || "";
    const page = parseInt(req.query.page, 10) || 1
    const size = parseInt(req.query.size, 10) || 10

    const limit = size
    const offset = (page - 1) * size
    let query = {};

    if (search) {
        const searchString = search.split(' ');

        const regexQueries = searchString.map(word => ({
            name: { $regex: word, $options: 'i' }
        }));

        query = {
            $and: regexQueries
        };
    }

    const eventsData = await EventsModel.find(query, { password: 0 }).skip(offset).limit(limit).sort({ name: 1 });

    const totalEvents = await EventsModel.countDocuments(query);

    res.status(200).json({
        events: eventsData,
        totalEvents,
        totalPage: Math.ceil(totalEvents / size),
        currentPage: page
    });
}

module.exports = getAll;