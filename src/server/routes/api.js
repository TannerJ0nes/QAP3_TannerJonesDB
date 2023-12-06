// src/server/routes/api.js
const express = require('express');
const router = express.Router();
const database = require('../dal/database'); // Ensure correct path

// Define API routes
router.get('/games', async (req, res) => {
  try {
    const games = await database.getAllGames();
    console.log('Games sent to client:', games); // Add this line
    res.json(games);
  } catch (error) {
    console.error('Error in /api/games:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add other API routes as needed

module.exports = router;
