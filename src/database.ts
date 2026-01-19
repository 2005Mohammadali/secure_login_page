const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    username: String,
    password: String,
    email: String,
    createdAt: { type: Date, default: Date.now }
});

const UserModel = mongoose.model('User', userSchema);

module.exports = {
    UserModel
}