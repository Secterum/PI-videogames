require('dotenv').config()
const controllers = require("../controllers");
const express = require("express");

const routerGenres = express.Router();

routerGenres.get("/", async (req, res) => {
    try {
      res.send(await controllers.getAllGenres());
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  });

module.exports = routerGenres;
