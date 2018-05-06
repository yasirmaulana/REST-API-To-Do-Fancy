const bcrypt = require('bcrypt')
const saltRounds = 10

function hasher( password ){
    const hash = bcrypt.hashSync(password, saltRounds)
    return hash
}

module.exports = { hasher }