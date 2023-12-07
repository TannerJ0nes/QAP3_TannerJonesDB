// src/server/routes/api.js
const express = require('express');
const router = express.Router();
const database = require('../dal/database');

router.use(express.json());

router.get('/games', async (req, res) => {
  try {
    const games = await database.getAllGames();
    res.json(games);
  } catch (error) {
    console.error('Error in GET /api/games:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/games', async (req, res) => {
  const { title, platform } = req.body;
  try {
    const newGame = await database.addGame(title, platform);
    res.status(201).json(newGame);
  } catch (error) {
    console.error('Error in POST /api/games:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.put('/games/:id', async (req, res) => {
  const gameId = req.params.id;
  const { title, platform } = req.body || {};



  try {
    const updatedGame = await database.updateGame(gameId, title, platform);
    res.json(updatedGame);
  } catch (error) {
    console.error('Error in PUT /api/games/:id:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.delete('/games/:id', async (req, res) => {
  const gameId = req.params.id;
  try {
    await database.deleteGame(gameId);
    res.sendStatus(204);
  } catch (error) {
    console.error('Error in DELETE /api/games/:id:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add this route handler in your api.js file
router.patch('/games/:id/complete', async (req, res) => {
    const { id } = req.params;
  
    try {
      // Call a function in your database layer to mark the game as completed
      await database.markGameAsCompleted(id);
  
      res.status(200).json({ message: `Game with ID ${id} marked as completed.` });
    } catch (error) {
      console.error('Error marking game as completed:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

module.exports = router;
