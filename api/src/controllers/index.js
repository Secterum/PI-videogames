const getAllGenres = require("./getAllGenres");
const { getAllGames, getGamesDb } = require("./getAllGames");
const getNameGames = require ('./getNameGames')
const PostCreateGame = require ('./PostCreateGame')

module.exports = controllers = {
    getAllGenres,
    getAllGames,
    getGamesDb,
    getNameGames,
    PostCreateGame,
};
