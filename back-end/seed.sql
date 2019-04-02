DROP DATABASE if exists inputs_db;
CREATE DATABASE inputs_db;

\c inputs_db

CREATE TABLE inputs
(
  id SERIAL PRIMARY KEY,
  input TEXT NOT NULL,
  date_posted DATE NOT NULL DEFAULT CURRENT_DATE
);