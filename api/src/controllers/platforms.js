const { Router } = require('express');
const axios = require('axios');
const { API_KEY } = process.env;
const { Platform } = require('../db');

const router = Router();

const getPlatforms = async (req, res) => {
  try {
    const platformsApi = await axios.get(
      `https://api.rawg.io/api/platforms?key=${API_KEY}`,
    );
    const platforms = platformsApi.data.results;
    platforms.forEach(async p => {
      await Platform.findOrCreate({
        where: {
          name: p.name,
        },
      });
    });

    const platformsDb = await Platform.findAll();

    res.status(200).json(platformsDb);
  } catch (error) {
    console.log(error);
  }
};

router.get('/', getPlatforms);

module.exports = router;
