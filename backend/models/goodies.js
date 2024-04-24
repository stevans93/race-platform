const { Schema, model } = require('mongoose');

const GoodiesSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    status: { type: String, enum: [ 'Collected', 'Not_Collected' ], default: 'Not_Collected' },
});

const GoodiesModel = model('goodies', GoodiesSchema);

module.exports = GoodiesModel;