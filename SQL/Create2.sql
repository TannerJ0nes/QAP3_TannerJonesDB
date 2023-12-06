-- Creating the Video Games table with a foreign key
CREATE TABLE video_games (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  genre VARCHAR(50),
  release_date DATE,
  platform VARCHAR(50),
  developer_id INT,
  CONSTRAINT fk_developer
    FOREIGN KEY (developer_id)
    REFERENCES developers(developer_id)
);

