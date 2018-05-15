const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "user.model"
    },
    task: String,
    completed: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now } 
})

// todoSchema.pre('update', function () {
//     this.updated({}, {
//         $set: {
//             updated: Date.now
//         }
//     })
// })

const Todo = mongoose.model('todo', todoSchema)

module.exports = Todo