// src/server/dal/database.js
const { Pool } = require('pg');

// Create a PostgreSQL connection pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'VideoGameInventoryDB',
  password: 'admin',
  port: 5432,
});

// Query function to retrieve all games from the database
const getAllGames = async () => {
    try {
      const result = await pool.query('SELECT * FROM video_games'); // Adjust this line
      return result.rows;
    } catch (error) {
      console.error('Error executing query:', error);
      throw error;
    }
  };
  




module.exports = {
  getAllGames,
};
