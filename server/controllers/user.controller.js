// const mongoose  = require('mongoose')
const User      = require('../models/user.model')
const Todo      = require('../models/todo.model')
const bcrypt    = require('bcrypt')
const jwt       = require('jsonwebtoken')
const { hasher }  = require('../helpers/hashPassword.helper')
const rahasia   = process.env.secret

module.exports = {
    userSignUp: ( req, res ) => { 
        User.find({
            email: req.body.email
        }) 
        .then( userSelect => {
            console.log(req.body)
            if( userSelect.length === 0 ){
                let userObj = {
                    email: req.body.email,
                    password: hasher(req.body.password),
                    hp: req.body.hp
                }
            
                const newUser = new User(userObj)
                newUser.save()
                 .then( userInserted => {
                    //  console.log(userInserted)
                    res.status(201).json({
                        message: "signup success",
                        data: userInserted
                    })
                 })
                 .catch( error => {
                    //  const message = error.response.data
                    console.log(error)
                 })
            }
            else{
                console.log('username sudah ada coy...')
            }
        })
        .catch( error => {
            // const message = error.response.data
            console.log(error)
        })
    },

    userSignIn: ( req, res ) => {
        User.findOne({
            email: req.body.email
        })
        .then( userSelected => {
            // console.log(userSelected)
            let cekPass = bcrypt.compareSync(req.body.password, userSelected.password)
            if(cekPass){
                let token = jwt.sign({
                    id: userSelected._id,
                    email: userSelected.email,
                }, rahasia)
                res.status(200).json({
                    message: "User signIn",
                    token: token
                })
            }
            else{
                res.status(404).json({
                    message: "password is wrong!!!"
                })
            }
        })
        .catch( error => {
            // const message = error.respone.data
            res.send(error)
        })
    },
    showTodo: ( req, res ) => {
        Todo.find({user: req.user.id})
         .then( todos => {
             res.status(200).json({
                 message: "list todo",
                 data: todos
             })
         })
         .catch( error => console.log(error))
    },

    inputTodo: ( req, res ) => {
        let todoObj = {
            user: req.user.id,
            task: req.body.task,
            deadline: req.body.deadline
        }
        const newTask = new Todo(todoObj)
        newTask.save()
         .then( newtodo => {
             res.status(201).json({
                 message: "input todo success",
                 data: newtodo
             })
         })
         .catch( error => console.log(error)) 
    },

    updateTodo: ( req, res ) => {
        Todo.findOneAndUpdate({
            _id: req.params.id
        }, { 
            $set: {
                completed: req.body.completed
            }
        }, (err, result) => {
            if(err) {
                res.status(406).json({
                    message: "not acceptable",
                    data: err
                })
            }
            else {
                res.status(200).json({
                    message: "update success",
                    data: result
                })
            }
        })
    },

    deleteTodo: ( req, res ) => {
        Todo.findOneAndRemove({
            _id: req.params.id
        }, (err, result) => {
            if(err) {
                res.status(406).json({
                    message: "not acceptable",
                    data: err
                })
            }
            else {
                res.status(200).json({
                    message: "delete success",
                    data: result
                })
            }    
        })
    }
}