// src/server/routes/api.js
const express = require('express');
const router = express.Router();

// Mock data array for testing API routes
const mockGameData = [
  { id: 1, title: 'Game A', platform: 'PS4' },
  { id: 2, title: 'Game B', platform: 'Xbox One' },
  // Add more mock data as needed
];

// API routes
router.get('/games', (req, res) => {
  res.json(mockGameData);
});

// Add other API routes as needed

module.exports = router;
