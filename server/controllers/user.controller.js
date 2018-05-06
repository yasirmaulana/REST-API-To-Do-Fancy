const user = require('../models/user.model')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { hasher } = require('../helpers/encrypt')
const rahasia = process.env.secret

module.exports = {
    userSignUp: ( req, res, next ) => {
        user.find({
            username: req.body.username
        })
        .then( userSelect => {
            if( userSelect.length === 0 ){
                userObj = {
                    username: req.body.username,
                    password: hasher(req.body.password)
                }
                // console.log(userObj)                
                const newUser = new user(userObj)
                newUser.save()
                .then( userInserted => {
                    let token = jwt.sign({
                        id: userSelected[0]._id,
                        username: userSelected[0].username,
                        role: userSelected[0].role 
                    }, rahasia)
                    res.status(200).json({
                        message: "signup success",
                        token: token
                    })
                })
                .catch( error => console.log('ini error waktu signup:',error) )
            }
            else{
                console.log('username sudah ada coy...')
            }
        })
        .catch( error => console.log('ini error waktu find di proses signup:',error))
    },
    userSignIn: ( req, res, next ) => {
        user.find({
            username: req.body.username
        })
        .then( userSelected => {
            if(userSelected){
                // console.log('ini data username:', userSelected)
            
                let cekPass = bcrypt.compareSync(req.body.password, userSelected[0].password)
                // console.log('ini console.log cekPass:',cekPass)
                if(cekPass){
                    let token = jwt.sign({
                        id: userSelected[0]._id,
                        username: userSelected[0].username,
                        role: userSelected[0].role 
                    }, rahasia)
                    console.log('ini hasil proses token:',token)
                    res.status(200).json({
                        message: "user signIn",
                        token: token
                    })
                }
                else{
                    res.status(404).json({
                        message: "username or password is wrong!!!"
                    })
                }
            }
            else{
                res.status(401).json({
                    message: "username belum terdaftar",
                    data: userSelected
                })
            }
        })
        .catch( error => console.log(error))
    }
}