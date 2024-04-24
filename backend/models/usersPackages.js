const { Schema, model } = require('mongoose');

const UsersPackagesSchema = new Schema({
    usersId: { type: Schema.Types.ObjectId, default: null },
    packagesId: { type: Schema.Types.ObjectId, default: null },
    quantity: { type: Number, required: true },
});

const usersPackagesModel = model('usersPackeges', UsersPackagesSchema);

module.exports = usersPackagesModel;