const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const otpSchema = new Schema({
    email: String,
    otp: String,
    status: Number,
});