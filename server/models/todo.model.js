const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
    task: { type: String, required: true },
    completed: Boolean,
    userId: String,
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now } 
})

const todo = mongoose.model('todos', todoSchema)

module.exports = todo