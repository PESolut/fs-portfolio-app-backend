DROP DATABASE IF EXISTS messageboard;
CREATE DATABASE messageboard;

\c messageboard;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id serial PRIMARY KEY,
  name varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  password varchar(255) NOT NULL
);

DROP TABLE IF EXISTS messages;

CREATE TABLE messages (
  id serial PRIMARY KEY,
  user_id integer REFERENCES users(id),
  date date NOT NULL,
  time time NOT NULL,
  message text NOT NULL
);

DROP TABLE IF EXISTS comments;

CREATE TABLE comments (
  id serial PRIMARY KEY,
  user_id integer REFERENCES users(id),
  message_id integer REFERENCES messages(id),
  date date NOT NULL,
  time time NOT NULL,
  comment text NOT NULL
);
