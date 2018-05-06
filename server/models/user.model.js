const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    confirmed: Boolean,
    token: String,
    role: { type: String, default: 'user' },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
})

const user = mongoose.model('user', userSchema)

module.exports = user