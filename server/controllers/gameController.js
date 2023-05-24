const uuid = require('uuid')
const path = require('path')
const {Game, GameInfo} = require('../models/models')
const ApiError = require('../error/ApiError')

class GameController {
    async create(req, res, next) {
        try{
            let {name, price, rating, game_description, playersQuant, brief, playingTime, release_date, devId, genreId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".png"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const game = await Game.create({name, price, rating, game_description, playersQuant, brief, playingTime, release_date, devId, genreId, img: fileName})
            
            if (info) {
                info = JSON.parse(info)
                info.forEach(i => {
                    GameInfo.create({
                        title: i.title,
                        description: i.description,
                        gameId: game.id
                    })
                });
            }      

            return res.json(game)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {devId, genreId, limit, page} = req.query
        page = page || 1
        limit = limit || 12
        let offset = page * limit - limit
        let games;
        if(!devId && !genreId) {
            games = await Game.findAndCountAll({limit, offset})
        }
        if(devId && !genreId) {
            games = await Game.findAndCountAll({where: {devId}, limit, offset})
        }
        if(!devId && genreId) {
            games = await Game.findAndCountAll({where: {genreId}, limit, offset})
        }
        if(devId && genreId) {
            games = await Game.findAndCountAll({where: {genreId, devId}, limit, offset})
        }
        return res.json(games)
    }

    async getOne(req, res) {
        const {id} = req.params
        const game = await Game.findOne(
            {
                where: {id},
                include: [{model: GameInfo, as: 'info'}]
            },
        )
        return res.json(game)
    }
}

module.exports = new GameController()