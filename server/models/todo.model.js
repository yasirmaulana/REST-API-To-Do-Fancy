const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
        user: {
            type: Schema.Types.ObjectId,
            ref: "user.model"
        },
        task: String,
        deadline: Date,
        completed: { type: Boolean, default: false },
    },
    {timestamps: true} 
)

const Todo = mongoose.model('todo', todoSchema)

module.exports = Todo