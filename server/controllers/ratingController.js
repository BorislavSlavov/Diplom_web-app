const { where } = require('../db')
const {Rating} = require('../models/models')

class RatingController {
    async create(req, res) {
            let {name, review, rate, gameId} = req.body
            const rating = await Rating.create({name, review, rate, gameId})
            return res.json(rating)
    }

    async getAll(req, res) {
        let gameId = req.query
        const ratings = await Rating.findAll(
            {where: gameId}
        )
        return res.json(ratings)
    }
}

module.exports = new RatingController()