const {Dev} = require('../models/models')
const ApiError = require('../error/ApiError')


class DevController {
    async create(req, res) {
        const {name} = req.body
        const dev = await Dev.create({name})
        return res.json(dev)
    }

    async getAll(req, res) {
        const devs = await Dev.findAll()
        return res.json(devs)
    }
}

module.exports = new DevController()