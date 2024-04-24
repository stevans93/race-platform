const { Schema, model } = require('mongoose');

const EventsSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    banner: { type: String, required: true },
    date: { type: Date, required: new Date() },
    price: { type: Number, required: true },
    info: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, default: null },
    createdAt: { type: Date, default: () => new Date().getTime() },
    updateAt: { type: Date, default: null },
});

const EventsModel = model('events', EventsSchema);

module.exports = EventsModel;

