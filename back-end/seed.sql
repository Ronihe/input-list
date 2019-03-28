DROP DATABASE if exists inputs_db;
CREATE DATABASE inputs_db;

\c inputs_db

CREATE TABLE jokes
(
  id TEXT PRIMARY KEY,
  input TEXT NOT NULL,
  -- votes INTEGER DEFAULT 0
);