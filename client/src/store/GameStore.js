import {makeAutoObservable} from 'mobx';

export default class GameStore {
    constructor() {
        this._genres = []
        this._devs = []
        this._ratings = []
        this._games = []
        this._selectedGenre = {}
        this._selectedDev = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 12
        this._searchQuery = ''
        makeAutoObservable(this)
    }

    setGenres(genres) {
        this._genres = genres
    }
    setDevs(devs) {
        this._devs = devs
    }
    setRatings(ratings) {
        this._ratings = ratings
    }
    setGames(games) {
        this._games = games
    }
    setSelectedGenre(genre) {
        this._selectedGenre = genre
    }
    setSelectedDev(dev) {
        this._selectedDev = dev
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }
    setSearchQuery(query) {
        this._searchQuery = query;
      }


    get searchQuery() {
        return this._searchQuery;
      }
    get genres() {
        return this._genres
    }
    get devs() {
        return this._devs
    }
    get ratings() {
        return this._ratings
    }
    get games() {
        const filteredGames = this._games.filter((game) =>
        game.name.toLowerCase().includes(this._searchQuery.toLowerCase())
        );
        return filteredGames;
    }
    get selectedGenre() {
        this.setPage(1)
        return this._selectedGenre
    }
    get selectedDev() {
        this.setPage(1)
        return this._selectedDev
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}