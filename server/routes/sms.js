const express = require('express')
const router = express.Router()
const { 
    sendSms,
    getNumber
} = require('../controllers/sms.controller')

router.get('/number', getNumber)
router.post('/send', sendSms)

module.exports = router  