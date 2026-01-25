"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    firstName: String,
    lastName: String,
    username: String,
    password: String,
    email: String,
    mobileNo: Number,
    createdAt: { type: Date, default: Date.now }
});
const UserModel = mongoose.model('User', userSchema);
module.exports = {
    UserModel
};
//# sourceMappingURL=database.js.map