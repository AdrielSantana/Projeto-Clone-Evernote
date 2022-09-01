const mongoose = require('mongoose')
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/javascriptNote').then(() => {
    console.log('Conection Succesfull')
}).catch((error) => {
    console.log(error)
})