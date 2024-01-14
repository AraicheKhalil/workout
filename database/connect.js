const mongoose = require('mongoose')

const connectToDB = (URL) => {
    mongoose.connect(URL)
}

module.exports = connectToDB
