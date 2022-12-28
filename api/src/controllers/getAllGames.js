const { Router } = require('express');
const router = Router();
const axios = require('axios').default;
const { Genre, Videogame } = require("../db");
const e = require("express");
const { API_KEY } = process.env;


const getGamesApi = async () => {
        const resApi = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`, {
        headers: {
          "Accept-Encoding": "null",
        },     });
        const leakedGamesApi = resApi.data.results.map(game => {
            return{
                id: game.id,
                name: game.name,
                background_image: game.background_image,
                rating: game.rating,
                genres: game.genres.map(el => el.name),
                released: game.released,
            }});
            console.log('respuesta de busqueda en Api por nombre exitosa')
            return leakedGamesApi

}


const getGamesDb = async () => {
    try {
        const db = await Videogame.findAll({
          include: {
            attributes: ["name"],
            model: Genre,
            through: {
              attributes: [],
            },
          },
        });
        console.log('respuesta de busqueda en DB por nombre exitosa')
        return db;
      } catch (error) {
        return error;
      }
}


const getAllGames = async () => {
    try {
        let apiJuegos = await getGamesApi();
        let dbJuegos = await getGamesDb();
        return apiJuegos.concat(dbJuegos);
      } catch (error) {
        throw error;
      }
}


module.exports = {
    getAllGames,
    getGamesApi,
    getGamesDb,
}