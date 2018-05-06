const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    confirmed: Boolean,
    token: String,
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
})