require('dotenv').config()

const axios = require('axios').default;
const { Genre } = require('../db')

const {API_KEY} = process.env;

const getAllGenres = async () => {
  const storedGenres = await Genre.findAll() 
  if(storedGenres.length){
    return storedGenres
  }
  const res = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`, {
    headers: {
      "Accept-Encoding": "null",
    },    
  })
  const {results} = res.data
  const genres = results.map(genre => ({
    id: genre.id,
    name : genre.name
  }))
  return await Genre.bulkCreate(genres)
};

module.exports = getAllGenres;