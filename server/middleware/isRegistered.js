const User      = require('../models/user.model')
const { hasher }  = require('../helpers/hashPassword.helper')
const passDefault = process.env.passwordDefault

module.exports = {
  isRegistered ( req, res, next ) {
    User.findOne({
      email: req.body.email
    })
      .then(emailalready => {
        if(emailalready === null) {
            // create user
            let userMedsos = {
                email: req.body.email,
                password: hasher(passDefault)
            }
            const newUser = new User(userMedsos)
            newUser.save()
              .then( userInserted => {
                  next()
              })
              .catch(error => {
                console.log('error ngga bisa insert saat isRegistered >>>>>>>', error)
              })
        } else {
            // login user
            next()
        }
      })
      .catch(error => {
          console.log('error find pada saat isRegistered >>>>>',error)
      })
  }  
}