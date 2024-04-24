const { Schema, model } = require('mongoose');

const PackagesSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    status: { type: String, enum: [ 'Collected', 'Not_Collected' ], default: 'Not_Collected' },
});

const PackagesModel = model('packeges', PackagesSchema);

module.exports = PackagesModel;