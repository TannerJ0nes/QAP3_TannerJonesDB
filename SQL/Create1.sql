-- Creating the Video Games table with a foreign key
CREATE TABLE video_games (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  genre VARCHAR(50),
  platform VARCHAR(50),
  completed BOOLEAN DEFAULT false,
);

