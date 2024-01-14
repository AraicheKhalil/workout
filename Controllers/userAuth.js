const User = require('../modules/User')

const register = async (req,res) => {
    res.json({msg : "register here"})
}

const login = async (req,res) => {
    res.json({msg : "login here"})
}


module.exports = {
    register , login
}
