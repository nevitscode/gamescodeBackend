const mongoose = require('mongoose');

const Schema = mongoose.Schema,
    gameSchema = new Schema({
        nombre: String,
        urls: Array,
        categoria: String,
        url_mega: String,
        etiquetas: Array,
        requisitos_min: Array,
        requisitos_max: Array,
        url_trailer: String,
        detalles: Array,
        instrucciones: String,
        descripcion: String,
        comentarios: Array,
        visitas: { type: Number, default: 0 },
        fecha_publicada: { type: Date, default: Date.now }
    });

module.exports = mongoose.model('game', gameSchema, 'games');