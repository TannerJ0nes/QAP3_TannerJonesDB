// src/server/routes/views.js
const express = require('express');
const router = express.Router();

// Mock data array for testing view routes
const mockGameData = [
  { id: 1, title: 'Game A', platform: 'PS4' },
  { id: 2, title: 'Game B', platform: 'Xbox One' },
  // Add more mock data as needed
];

// View routes
router.get('/', (req, res) => {
  res.render('index', { games: mockGameData });
});

// Add other view routes as needed

module.exports = router;
