const { database } = require('../db/config');

const { randomNumber } = require('../helpers/generate_id');

// models
const Game = require('../models/game');
const generateToken = require('../models/generate_token.model');
// 

let tokenId = "";

class GameController {

    async createGame(req, res) {

        const { nombre, urls, requisitos_minimos, detalles, instrucciones, url_trailer, categoria } = req.body;

        if (nombre && urls && requisitos_minimos && detalles && instrucciones && url_trailer && categoria) {

            // const id = randomNumber();
            // console.log(id);

            // Guardo los datos
            let game = new Game(req.body);
            await game.save();
            // 

            return res.status(200).json({ status: 'OK', responses: 'Game created' });
        } else {
            console.log('Solicitud incompleta')
            return res.status(400).json({ status: 'BAD REQUEST', response: 'Solicitud incompleta' });
        }

    }

    async getGames(req, res) {

        // query to search the games in the database
        const games = await Game.find();

        // validate games of the database
        if (!games || games.length == 0) {

            // return status 502 if not find nothing in the database
            return res.status(502).json({ status: 'BAD GATEWAY', response: 'No se han encontrado juegos en la base de datos' });

        } else {
            // jwt.verify(token, secret_key, function (err, decoded) {
            //     console.log(decoded);
            // });
            return res.status(200).json({ status: 'OK', games: generateToken.generateToken(games) });
        };

    }

    async getGame(req, res) {

        tokenId = randomNumber();

        const id_game = req.params.id_game;

        if (id_game) {
            const game = await Game.findOne({ _id: id_game }, (error, dataGame) => {
                dataGame.visitas = dataGame.visitas + 1;
                dataGame.save();
            });
            return res.status(200).json({ status: 'OK', game: generateToken.generateToken(game), tokenId: tokenId });
        }

    }

    verifyToken(req, res) {

        const token = req.body.token;;
        if (token === tokenId) {
            tokenId = "";
            return res.status(200).json({ text: 'token Valido' });
        } else {
            tokenId = "";
            return res.status(403).json({ text: 'token invalid' });
        }

    }

}

exports.gameController = new GameController();