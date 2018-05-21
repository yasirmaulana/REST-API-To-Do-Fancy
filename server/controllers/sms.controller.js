const Todo = require('../models/todo.model')
const User = require('../models/user.model')
const Nexmo = require('nexmo')
const axios = require('axios')
const nexmoApiKey = process.env.NEXMO_API_KEY
const nexmoApiSecret = process.env.NEXMO_API_SECRET

module.exports = {
    sendSms: ( req, res ) => {
        let to = 6281586245143
        let url = 'https://rest.nexmo.com/sms/json'
        let jsonTxt = {
            "api_key":"5e08d26a",
            "api_secret":"HLXXViVTRocmtw5d",
            "to":`${to}`,
            "from":"todo.yasirjs.com",
            "text":"kindly remainder, you still have unfinished todo list"
        }
        
        axios
            .post(url, jsonTxt)
            .then( smsSend => {
                res.status(200).json({
                    message: "berhasil",
                    data: smsSend
                })
            })
            .catch(error => {
                res.status(401).json({
                    message: "gagal",
                })
            })
    },
    getNumber: ( req, res ) => {
        let newDate = new Date().getDate()+1
        // console.log('>>>>>>>>>',newDate)
        Todo.find({
            completed: false,
        })
        .then( todosDeadline => {
            // let ids = []
            // todosDeadline.forEach(function(todo){
            //     ids.push(todo.user)
            // })

            var uniqueItems = Array.from(new Set(todosDeadline.user))
            console.log('>>>>>', uniqueItems)

        })
        .catch(error => {
            console.log(error)
        })
    }
}