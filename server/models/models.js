const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user',{
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Game = sequelize.define('game',{
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    rating: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 0},
    img: {type: DataTypes.STRING(4096), allowNull: false},
    playingTime: {type: DataTypes.STRING, allowNull: false},
    game_description: {type: DataTypes.TEXT, allowNull: false},
    playersQuant: {type: DataTypes.STRING, allowNull: false},
    brief: {type: DataTypes.STRING, allowNull: false},
    release_date: {type: DataTypes.DATEONLY, allowNull: false},
})

const Genre = sequelize.define('genre',{
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})  

const Dev = sequelize.define('dev',{
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Rating = sequelize.define('rating',{
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type:DataTypes.STRING, allowNull: false},
    review: {type:DataTypes.TEXT, allowNull: false},
    rate: {type: DataTypes.INTEGER, allowNull: false}
})

const GameInfo = sequelize.define('game_info',{
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false}
})

const GenreDev = sequelize.define('genre_dev',{
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

Genre.hasMany(Game)
Game.belongsTo(Genre)

Dev.hasMany(Game)
Game.belongsTo(Dev)

Game.hasMany(Rating)
Rating.belongsTo(Game)

Game.hasMany(GameInfo, {as: 'info'})
GameInfo.belongsTo(Game)

Genre.belongsToMany(Dev, {through: GenreDev })
Dev.belongsToMany(Genre, {through: GenreDev })

module.exports = {
    User,
    Game,
    Genre,
    Dev,
    Rating,
    GenreDev,
    GameInfo
}