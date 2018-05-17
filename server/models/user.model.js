const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const saltRounds = 10

const Schema = mongoose.Schema

const userSchema = new Schema({
        email: { 
            type: String,
            trim: true,
            lowercase: true,
            required: true 
        },
        password: { 
            type: String
        },
        hp: String,
        confirmed: Boolean,
    },
    {timestamps: true}     
)

 
const User = mongoose.model('user', userSchema)

module.exports = User