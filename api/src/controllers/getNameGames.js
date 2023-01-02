require('dotenv').config()
const {getGamesDb} = require("./getAllGames")
const axios = require("axios").default;
const { Op } = require("sequelize");
const { Videogame, Genre } = require("../db");

const { API_KEY } = process.env;

const getNameGames = async (search) => {
  const res = await axios.get(`https://api.rawg.io/api/games?search=${search}&key=${API_KEY}`, {
    headers: {
      "Accept-Encoding": "null",
    },    
  });
  const apiGames = res.data.results.map(game => {
    return{
        id: game.id,
        name: game.name,
        background_image: game.background_image,
        rating: game.rating,
        genres: game.genres.map(el => el.name),
        released: game.released,
    }
});
const DbGames = await getGamesDb()


  if (!apiGames.length && !DbGames.length) {
    throw {
      status: false,
      message: 'Not Found!'
    }
  }
  return [...DbGames, ...apiGames].slice(0, 15)
};
module.exports = getNameGames;
