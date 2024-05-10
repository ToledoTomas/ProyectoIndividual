const { Sequelize } = require('sequelize');
const { Videogame } = require('../models/Videogame')

exports.getVideogamesByName = async (req, res) => {try {
    const { name } = req.query;
    const videogames = await Videogame.findAll({
        where: {
            name: {[Sequelize.Op.iLike]: `%${name}%`}
        },
        limit: 15,
    });
    if(videogames.length === 0){
        return res.status(404).json({message: 'Videogames not found'})
    }
    res.json(videogames);
} catch (error) {
    res.status(500).json({error: error.message})
}
};