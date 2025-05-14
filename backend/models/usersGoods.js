const { Schema, model } = require('mongoose');

const usersGoodsSchema = new Schema({
    usersId: { type: Schema.Types.ObjectId, default: null },
    goodiesId: { type: Schema.Types.ObjectId, default: null },
    quantity: { type: Number, required: true },
});

const usersGoodsModel = model('usersGoods', usersGoodsSchema);

module.exports = usersGoodsModel;