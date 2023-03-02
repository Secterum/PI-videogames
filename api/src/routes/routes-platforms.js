const { Router } = require("express");
const router = Router();

const  controllers = require("../controllers");

router.get("/", async (req, res) => {
  try {
    const foundPlatforms = await controllers.getAllPlatforms();
    res.json(foundPlatforms);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;