require('dotenv').config()

const axios = require('axios').default;

const {API_KEY} = process.env;


const getAllPlatforms = async () => {
  let allPlatforms = [];
  for (let i = 1; i < 3; i++) {
    const resApi = await axios.get(`https://api.rawg.io/api/platforms?key=${API_KEY}&page=${i}`, {
      headers: {
        "Accept-Encoding": "null"
      }
    })
    allPlatforms = allPlatforms.concat(resApi.data.results.map(game => {
      return {
        name: game.name,
      }
    }));
  }
  console.log("respuesta de búsqueda en Api platforms");
  return allPlatforms.map(e=>e.name);
};



module.exports = getAllPlatforms;
