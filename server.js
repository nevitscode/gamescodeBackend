const express = require('express'),
    cors = require('cors'),
    morgan = require('morgan');

// routes
const gameRoute = require('./routes/game.route'),
    ipUserRoute = require('./routes/ipUser.route');
//

var domainListHeroku = ['https://gamescode.herokuapp.com', 'https://linkscode.herokuapp.com'];
var corsOptions = {
    origin: function (origin, callback) {
        if (domainListHeroku.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

class Server {

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }


    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        // this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    routes() {
        this.app.use('/api/games', cors(corsOptions), gameRoute);
        this.app.use('/api/ips', cors(corsOptions), ipUserRoute);
    }

    // 

    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor funcionando en el puerto', this.app.get('port'));
        });
    }

}

const server = new Server();
server.start();