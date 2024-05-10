const axios = require('axios')
const { API_KEY } = process.env;
const { Videogame } = require('../db');

exports.getVideogames = async (req, res) => {
    try {
        const URL = `hhtps://api.rawg.io/api/games?key=${API_KEY}`;
        const response = await axios.get(URL);
        const videogames = response.data.results.slice(0,15);
        res.json(videogames);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};