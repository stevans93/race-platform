const { Schema, model } = require('mongoose');

const UsersGoodiesSchema = new Schema({
    usersId: { type: Schema.Types.ObjectId, default: null },
    goodiesId: { type: Schema.Types.ObjectId, default: null },
    quantity: { type: Number, required: true },
});

const UsersGoodiesModel = model('usersGoodies', UsersGoodiesSchema);

module.exports = UsersGoodiesModel;