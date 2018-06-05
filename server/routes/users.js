const express = require('express')
const router = express.Router()
const {
  userSignUp,
  userSignUpMedsos,
  userSignIn,
  userSignInMedsos,
  showTodo,
  inputTodo,
  updateTodo,
  deleteTodo
 } = require('../controllers/user.controller')
const { isLogin } = require('../middleware/decodeToken')
const { isRegistered } = require('../middleware/isRegistered')

// ROUTING
router.get('/', function(req, res, next) {
  res.send('respond with a resource')
})
// router.post('/signupMedsos', userSignUpMedsos)
// router.post('/signupMedsos', userSignUpMedsos)
// router.post('/signinfb', userSignInFB)
router.post('/signup', userSignUp)
router.post('/signin', isRegistered, userSignIn)
router.get('/showtodo', isLogin, showTodo)
router.post('/inputtodo', isLogin, inputTodo)
router.put('/update/:id', isLogin, updateTodo)
router.delete('/delete/:id', isLogin, deleteTodo)

module.exports = router
