const mongoose = require('mongoose')
require('dotenv').config()
DB_URI = process.env.DB_URI

const dbConnect = async () => {
    try {
        const conn = await mongoose.connect(DB_URI)
        if (conn) console.log('server has been connected to the db')
    } catch (err) {
        console.log(err)
    }
}

module.exports = dbConnect