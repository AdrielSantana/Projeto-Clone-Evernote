const mongoose = require('mongoose')
mongoose.Promise = global.Promise

require('dotenv').config()
const MONGO_URL = process.env.MONGODB_URI

mongoose.connect(MONGO_URL).then(() => {
    console.log('Conection Succesfull')
}).catch((error) => {
    console.log(error)
})