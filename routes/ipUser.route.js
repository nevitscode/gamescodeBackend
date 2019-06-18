const express = require('express');

// controllers
const { ipUserController } = require('../controllers/ipUser.controller');
//

class IpUserRoute {

    constructor() {
        this.router = express.Router();
        this.config();
    }

    config() {

        // methods //
        // get
        // this.router.get('/getIp', ipUserController.getIpUser);
        // post
        this.router.post('/createIpUser', ipUserController.createIpUser);

    }

}

const ipUserRoute = new IpUserRoute();
module.exports = ipUserRoute.router;