require("dotenv").config();
const { APY_KEY } = process.env;
const { Router } = require("express");
const router = Router();
const axios = require("axios").default;
const { Genre } = require("../db");

router.get("/", async (req, res) => {
  try {
    //comprobacion si tengo algo en base de datos
    const genresDB = await Genre.findAll();
    console.log(`DB base local ---- ${genresDB}`);
    if (genresDB.length) return res.json(genresDB);
    // en caso de no tener nada en la base de datos,
    const response = await axios.get(
      `https://api.rawg.io/api/genres?key=${APY_KEY}`,
      {
        headers: {
          "Accept-Encoding": "identity",
        },
      }
    );

    const genres = response.data.results;
    genres.forEach(async (g) => {
      await Genre.findOrCreate({
        where: {
          name: g.name,
        },
      });
    });
    //Aseguro de enviar solo lo que necesita el front (nombre de los generos)
    const genresREADY = genres.map((game) => {
      return {
        id: game.id,
        name: game.name,
      };
    });
    res.json(genresREADY);
  } catch (err) {
    console.log(
      "entre en el catch ------"
    );
    return console.log(err);
  }
});

module.exports = router;
