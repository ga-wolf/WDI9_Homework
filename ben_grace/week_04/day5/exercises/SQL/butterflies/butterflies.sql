
-- This sets up the table that the database is going to run off of. It takes in key/value pairs which are used to determine and select how the data will be received and placed.

-- The AUTOINCREMENT states that for every piece of data entered into the database the id will increase by 1. This stops duplicates over writing each other in the database. Basically just ensures that each entry has it's own unqie id

CREATE TABLE butterflies (
  id INTEGER PRIMARY KEY AUTOINCREMENT, 
  name TEXT,
  family TEXT,
  image TEXT,
);