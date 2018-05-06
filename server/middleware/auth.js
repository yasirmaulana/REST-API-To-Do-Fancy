const jwt = require('jsonwebtoken')
const rahasia = process.env.secret
const user = require('../models/user.model')

module.exports = {
    userOnly: function(req, res, next) {
        jwt.verify(req.headers.token, rahasia, function(err, decoded) {
            // console.log(decoded.foo) // bar
            if(err){
                res.status(500).json({
                    message: "server",
                    err
                })
            } else {
                user.findOne({
                    where: {
                        username: decoded.username
                    }
                })
                .then( data => {
                    if(data){
                        next()
                    } else {
                        res.status(401).json({
                            message: "you are not authentication"
                        })
                    }
                })
                .catch( error => {
                    res.status(500).json({
                        message: "server",
                        err
                    })
                })
            }
        });
    },

    adminOnly: function(req, res, next){
        jwt.verify(req.headers.token, rahasia, function(err, decoded) {
            if(err){
                res.status(500).json({
                    message: "server",
                    err
                })
            } else {
                user.findOne({
                    where: {
                        username: decoded.username
                    }
                })
                .then( data => {
                    if(data.role === "admin"){
                        next()
                    } else {
                        res.send(401).json({
                            message: "you are not authorization"
                        })
                    }
                })
                .catch( error => {
                    res.status(500).json({
                        message: "server",
                        err
                    })
                })
            }
        })
    }


}