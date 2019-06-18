const express = require('express'),
    cors = require('cors');

// controllers
const { gameController } = require('../controllers/game.controller');
//

class GameRoute {

    constructor() {
        this.router = express.Router();
        this.config();
    }

    config() {

        // methods //
        // get
        this.router.get('/getGame/:id_game', gameController.getGame);
        this.router.get('/getGames', gameController.getGames);
        // post
        this.router.post('/createGame', gameController.createGame);
        this.router.post('/verifyToken', cors(), gameController.verifyToken);

    }

}

const gameRoute = new GameRoute();
module.exports = gameRoute.router;