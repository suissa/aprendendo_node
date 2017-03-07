//**********************************//
// Conecção mongoose                //
// Parte de Conecção com o Mongoose //
//**********************************//

const mongoose = require('mongoose')

const db = mongoose.connect('mongodb://localhost/node').connection

db.on('open', function() {
    console.log('Mongoose conectado')
})

db.on('error', function() {
    console.log('Mongoose com erro de Conecção')
})

return db
