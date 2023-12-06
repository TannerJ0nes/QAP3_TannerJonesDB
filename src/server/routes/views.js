// src/server/routes/views.js
const express = require('express');
const router = express.Router();
const database = require('../dal/database');

router.get('/', async (req, res) => {
  try {
    const games = await database.getAllGames();
    console.log('Games sent to views route:', games); // Add this line
    res.render('index', { games }); // Ensure correct EJS view name
  } catch (error) {
    console.error('Error in /views:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
