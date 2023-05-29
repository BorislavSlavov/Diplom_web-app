const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const genreRouter = require('./genreRouter')
const devRouter = require('./devRouter')
const ratingRouter = require('./ratingRouter')
const gameRouter = require('./gameRouter')


router.use('/user', userRouter)
router.use('/genre', genreRouter)
router.use('/dev', devRouter)
router.use('/rating', ratingRouter)
router.use('/game', gameRouter)

module.exports = router