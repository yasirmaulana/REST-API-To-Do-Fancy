require('dotenv').config()
const jwt = require('jsonwebtoken')
const rahasia = process.env.secret

module.exports = {
    isLogin( req, res, next ) {
        jwt.verify(req.headers.token, rahasia, function(err, decoded) {
            if(decoded) {
                req.user = decoded
                console.log('ini di middleware', req.user)
                next()
            }
            else {
                res.status(403).json({
                    message: "invalid token"
                })
            }
        })
    }
}