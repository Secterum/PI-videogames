const { Router } = require("express");
const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const videogame = require('./videogame');
const routerVideogames = require("./routerVideogames");
const routerGenres = require("./routerGenres");
const platformMiddleware = require('../routes/routes-platforms.js')

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/videogames', routerVideogames);
router.use("/genres", routerGenres);
router.use("/videogame", videogame);
router.use('/platforms',platformMiddleware )
module.exports = router;
