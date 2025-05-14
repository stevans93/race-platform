const { Schema, model } = require('mongoose');

const GoodsSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
});

const GoodsModel = model('goods', GoodsSchema);

module.exports = GoodsModel;