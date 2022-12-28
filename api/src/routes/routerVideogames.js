require('dotenv').config()
const controllers = require("../controllers");
const express = require("express");

const routerVideogames = express.Router();

routerVideogames.get("/", async (req, res) => {
    const { name } = req.query;
      if (name) {
        try {
        const data = await controllers.getNameGames(name);
        res.send(data);
        } catch (error) {
          console.log(error)
          res.status(404).send(error);
        }
      } else {
        try {
          const data = await controllers.getAllGames();
          res.send(data);
        } catch (error) {
          console.log(error)
          res.status(500).send(error)
        }
      }

  })
  .post("/", async (req, res) => {
    const formCreation = req.body;
    try {
      res.status(201).send(await controllers.PostCreateGame(formCreation));
    } catch (error) {
      console.log(error)
      res.status(400).send(error);
    }
  });

module.exports = routerVideogames;
