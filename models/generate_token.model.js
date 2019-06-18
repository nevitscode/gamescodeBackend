const jwt = require('jsonwebtoken'),
    moment = require('moment'),
    key_secret_token = require('../config/config');

function generateToken(data) {
    const payload = {
        token: data,
        iat: moment().unix(),
        exp: moment().add(1, 'days').unix()
    }

    return jwt.sign(payload, key_secret_token.key_secret_token);
}

module.exports = {
    generateToken
};