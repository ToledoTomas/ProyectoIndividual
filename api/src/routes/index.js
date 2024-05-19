const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogames = require('../controllers/videogames');
const platforms = require('../controllers/platforms');
const genres = require('../controllers/genres');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/videogames', videogames);
router.use('/platforms', platforms);
router.use('/genres', genres);

module.exports = router;
