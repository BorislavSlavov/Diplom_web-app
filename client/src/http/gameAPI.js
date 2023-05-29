import { $authHost, $host } from "./index";

export const createGenre = async (genre) => {
    const {data} = await $authHost.post('api/genre', genre)
    return data
}

export const fetchGenres = async () => {
    const {data} = await $host.get('api/genre')
    return data
}

export const createDev = async (dev) => {
    const {data} = await $authHost.post('api/dev', dev)
    return data
}

export const fetchDevs = async () => {
    const {data} = await $host.get('api/dev' )
    return data
}

export const createRating = async (rating) => {
    const {data} = await $authHost.post('api/rating', rating)
    return data
}

export const fetchRating = async (gameId) => {
    const {data} = await $host.get('api/rating', {params:{
        gameId
    }})
    return data
}

export const createGame = async (game) => {
    const {data} = await $authHost.post('api/game', game)
    return data
}

export const fetchGames = async (genreId, devId, page, limit) => {
    const {data} = await $host.get('api/game', {params:{
        genreId, devId, page, limit
    }})
    return data
}

export const fetchOneGame = async (id) => {
    const {data} = await $host.get('api/game/' + id)
    return data
}