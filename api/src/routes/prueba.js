require("dotenv").config();
const { APY_KEY } = process.env;
const { Router } = require("express");
const router = Router();
const axios = require("axios").default;
const { Genre, Videogame } = require("../db");

router.get("/:id", async (req, res) => {
  const { id } = req.params
  const idString = String(id); // guardado para luego consultar si es de la db o de la api
  console.log(id.includes("-"), " ", id + "<-----comprobacion de IDs");

  if (id.includes("-")) {
    console.log("entre en el if----")
    let videogameDb = await Videogame.findOne({
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
    });
    //Parseo el objeto
    console.log(videogameDb, "consoleo de objeto de DB");

    videogameDb = JSON.stringify(videogameDb);
    videogameDb = JSON.parse(videogameDb);

    res.json(videogameDb);

  } else {

    try {
      console.log("entre en el try -------------------------------");
      const response = await axios.get(
        `https://api.rawg.io/api/games/${id}?key=${APY_KEY}`,
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
      console.log("entre en carch ------------");
      return console.log(err);
    }
  }
});

router.post("/", async (req, res) => {
  let {
    name,
    description,
    background_image,
    released,
    rating,
    genres,
    createdInDb,
    platforms,
  } = req.body;

  console.log(platforms, "<-----");

  try {
    console.log("entra el try ----------------");
    const gameCreated = await Videogame.create({
      name,
      description,
      background_image,
      released,
      rating,
      platforms,
      createdInDb,
    });
    const gameGenre = await Genre.findAll({
      where: {
        name: genres,
      },
    });
    console.log(gameGenre)
    await gameCreated.addGenre(gameGenre);
    res.send(gameCreated);
  } catch (err) {
    console.log(err, "algo");
  }
});

module.exports = router;
