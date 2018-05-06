const express = require('express')
const router = express.Router()
const {
  userSignUp,
  userSignIn,
  // userUpdate,
  // userDelete,
  // showUser
 } = require('../controllers/user.controller')
 const {
  userOnly,
  adminOnly
} = require('../middleware/auth')


// ROUTING
router.get('/', function(req, res, next) {
  res.send('respond with a resource')
})
router.post('/signup', userSignUp)
router.post('/signin', userOnly, userSignIn)
// router.put('/update/:id', userUpdate)
// router.delete('/delete/:id', userDelete)
// router.get('/show', showUser)

module.exports = router
