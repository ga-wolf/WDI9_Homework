CREATE TABLE movies (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  year INTEGER,
  runtime INTEGER,
  genre TEXT,
  director TEXT,
  actors TEXT,
  plot TEXT,
  language TEXT,
  poster TEXT,
  imdbID TEXT,
  imdbRate INTEGER,
  myRate INTEGER,
  rounds INTEGER
);