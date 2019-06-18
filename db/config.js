const mongoose = require('mongoose'),
    urlConnection = require('../config/config');

mongoose.Promise = global.Promise;

mongoose.connect(urlConnection.urlConnection, function(err) {
    if (err) {
        console.log("Ha ocurrido un error >>> "+ err.stack);
    } else {
        console.log('Conexión con la base de datos mongoose ha sido exitosa');
    }
});

exports.module = mongoose;