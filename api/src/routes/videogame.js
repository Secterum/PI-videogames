require("dotenv").config();
const { API_KEY } = process.env;
const { Router } = require("express");
const router = Router();
const axios = require("axios").default;
const { Genre, Videogame } = require("../db");

router.get("/:id", async (req, res) => {
  const { id } = req.params
  const idString = String(id); // guardado para luego consultar si es de la db o de la api
  console.log('se encuentra en la DbLocal', id.includes("-"));

  if (id.includes("-")) {

    let db = await Videogame.findAll({
      where: {
        id: idString,
      },
      include: {
        model: Genre,
        attributes: ["name"],
        through: {
            attributes: []
        }    
    },
    }).then(r=>r.map(r=>r.toJSON()));

    db.forEach(v => {v.genres = v.genres.map(g => g.name)})
    
    res.send(db[0]);

  } else {

    try {
      const response = await axios.get(
        `https://api.rawg.io/api/games/${id}?key=${API_KEY}`,
        {
          headers: {
            "Accept-Encoding": "identity", // evita que se utilicen algoritmos de compresión/descomprensión (necesita dependencias de terceros)
          },
        }
      );

      const {
        name,
        background_image,
        genres,
        description,
        released,
        rating,
        platforms,
      } = response.data; // solo estraigo lo que me interesa tener.

      res.json({
        id,
        name,
        background_image,
        genres: genres.map((el) => el.name),
        description,
        released,
        rating,
        platforms: platforms.map((el) => el.platform.name),
      });
    } catch (err) {
      console.log(error)
      res.status(400).send(error);
    }
  }
});

module.exports = router;
