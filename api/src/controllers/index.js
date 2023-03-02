const getAllGenres = require("./getAllGenres");
const { getAllGames, getGamesDb } = require("./getAllGames");
const getNameGames = require ('./getNameGames')
const PostCreateGame = require ('./PostCreateGame')
const getAllPlatforms = require ('./platformController')

module.exports = controllers = {
    getAllGenres,
    getAllGames,
    getGamesDb,
    getNameGames,
    PostCreateGame,
    getAllPlatforms,
};
