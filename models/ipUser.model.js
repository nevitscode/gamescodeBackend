const mongoose = require('mongoose');

const Schema = mongoose.Schema,
    IpUserSchema = new Schema({
        ip: String,
        visitas: { type: Number, default: 0 },
        fecha_creada: { type: Date, default: Date.now }
    });

module.exports = mongoose.model('ipUser', IpUserSchema, 'ips_users');