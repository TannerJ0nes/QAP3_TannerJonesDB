// src/server/dal/database.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'QAP3_Tanner',
  password: 'admin',
  port: 5432,
});

const getAllGames = async () => {
  try {
    const result = await pool.query('SELECT * FROM video_games');
    return result.rows;
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
};

const addGame = async (title, platform) => {
  try {
    const result = await pool.query('INSERT INTO video_games (title, platform) VALUES ($1, $2) RETURNING *', [title, platform]);
    return result.rows[0];
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
};

// Update the function to check for null values before updating
const updateGame = async (id, title, platform) => {
    try {
      const result = await pool.query(
        'UPDATE video_games SET title = $1, platform = $2 WHERE id = $3',
        [title, platform, id]
      );
      return result;
    } catch (error) {
      console.error('Error updating game:', error);
      throw error;
    }
  };
  
  

const deleteGame = async (id) => {
  try {
    await pool.query('DELETE FROM video_games WHERE id = $1', [id]);
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
};

async function markGameAsCompleted(gameId) {
    const query = {
      text: 'UPDATE video_games SET completed = true WHERE id = $1 RETURNING *',
      values: [gameId],
    };
  
    try {
      const result = await pool.query(query);
      // Assuming you want to return the updated game object
      return result.rows[0];
    } catch (error) {
      console.error('Error marking game as completed in the database:', error);
      throw error;
    }
  }

module.exports = {
  getAllGames,
  addGame,
  updateGame,
  deleteGame,
  markGameAsCompleted,
};
