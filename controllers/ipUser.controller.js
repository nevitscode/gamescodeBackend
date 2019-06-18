const { database } = require('../db/config');

// models
const ipUser = require('../models/ipUser.model');
const generateToken = require('../models/generate_token.model');
// 


class IpUserController {

    async createIpUser(req, res) {

        const ips = await ipUser.findOne(req.body);

        if (ips) {
            await ipUser.findOne(req.body, (error, dataIpUser) => {
                dataIpUser.visitas = dataIpUser.visitas + 1;
                dataIpUser.save();
            });
            return res.status(200).json({ text: 'Ip Ya existe', tokenIp: generateToken.generateToken(ips) })
        } else {
            let ip = new ipUser(req.body);
            await ip.save();
            return res.status(200).json({ text: 'Ip Creada', tokenIp: generateToken.generateToken(ips) })
        }

    }

}

exports.ipUserController = new IpUserController();