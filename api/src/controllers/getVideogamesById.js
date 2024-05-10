const axios = require('axios');

exports.getVideogamesById = async(req, res) => {
    try {
        const { id } = req.params;
        const URL = `hhtps://api.rawg.io/api/games?key=${API_KEY}`;
        const response = await axios.get(URL);

        const {name, released, background_image, rating, platforms, genres } = response.data;

        const dataVideogames = {
            id,
            name,
            released,
            background_image,
            rating,
            platforms,
            genres,
        };

        res.status(200).json(dataVideogames);

    } catch (error) {
        res.status(500).json({error: error.message})
    }
}