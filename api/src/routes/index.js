const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const  getVideogames  = require('../controllers/getVideogames');
const  getVideogamesById  = require('../controllers/getVideogamesById');
const  getGenre  = require('../controllers/getVideogamesByGenre');
const  getVideogamesByName  = require('../controllers/getVideogamesByName');
const  postVideogames  = require('../controllers/postVideogames');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/videogames', getVideogames);
router.get('/videogames/:id', getVideogamesById);
router.get('/genres', getGenre);
router.get('/videogames/name', getVideogamesByName)
router.post('/videogames', postVideogames);

module.exports = router;
