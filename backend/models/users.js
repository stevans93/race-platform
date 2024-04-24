const { Schema, model } = require('mongoose');

const UsersSchema = new Schema({
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    image: { type: String, default: '' },
    phone: { type: String, default: '' },
    role: { type: String, default: 'user' },
    createdAt: { type: Date, default: () => new Date().getTime() },
    updateAt: { type: Date, default: null },
});

const UsersModel = model('users', UsersSchema);

module.exports = UsersModel;