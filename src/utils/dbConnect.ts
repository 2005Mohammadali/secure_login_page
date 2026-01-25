const mongoose = require('mongoose');
const config = require('./config/custom-env');

const dbUri = config.dbUri;

const connectDB = async () => {
    try {
        await mongoose.connect(dbUri);
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection error:", error);
    }
}

module.exports = connectDB;