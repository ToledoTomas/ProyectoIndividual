const axios = require('axios');
const { Genre } = require('../db');
const { API_KEY } = process.env;

exports.getVideogamesByGenre = async (req, res) => {
    try {

        const URL = `hhtps://api.rawg.io/api/games?key=${API_KEY}`;
        const response = await axios.get(URL);
        const genresApi = response.data.results;

        for (const genreData of genresApi) {
            const existGenre = await Genre.findOne({ where: { name: genreData.name } });
            if (!existGenre) {
                await Genre.findOrCreate({ name: genreData.name });
            }
        }
        
        const allGenres = await Genre.findAll();
        
        res.status(200).json(allGenres);
        
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}