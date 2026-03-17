const express = require('express');
const router = express.Router();
const axios = require('axios');
router.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY');
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
module.exports = router;