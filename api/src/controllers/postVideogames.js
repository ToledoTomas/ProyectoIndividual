const { Videogames } = require('../db');

exports.postVideogames = async(req, res) => {
    try {
        const { name, platforms } = req.body;

        if(!name || !platforms) return res.status(400).json({error: 'missing data'});

        res.status(201).json({message: 'Successfully created game'});
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}