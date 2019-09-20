PRAGMA foreign_keys = ON;

--DROP TABLES IN ORDER
DROP TABLE IF EXISTS question_likes;
DROP TABLE IF EXISTS question_follows;
DROP TABLE IF EXISTS replies;
DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  fname TEXT NOT NULL, 
  lname TEXT NOT NULL
);

CREATE TABLE questions (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  author_id INTEGER NOT NULL,

  FOREIGN KEY (author_id) REFERENCES users(id)
);

CREATE TABLE question_follows (
  id INTEGER PRIMARY KEY,
  user_id INTEGER NOT NULL,
  question_id INTEGER NOT NULL,

  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (question_id) REFERENCES questions(id) 
);

CREATE TABLE replies (
  id INTEGER PRIMARY KEY,
  question_id INTEGER NOT NULL,
  parent_id INTEGER,
  user_id INTEGER NOT NULL,
  body TEXT NOT NULL,

  FOREIGN KEY (question_id) REFERENCES questions(id),
  FOREIGN KEY (parent_id) REFERENCES replies(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE question_likes (
  id INTEGER PRIMARY KEY,
  user_id INTEGER NOT NULL,
  question_id INTEGER NOT NULL,

  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (question_id) REFERENCES questions(id)
);

INSERT INTO 
  users(id, fname, lname)
VALUES 
  (1, 'YUCI', 'SHEN'),
  (2, 'JESSICA', 'ZHEN'),
  (3, 'APP', 'ACADEMY');

INSERT INTO 
  questions(id, title, body, author_id)
VALUES 
  (1, 'Question 1', 'This is a question', 1),
  (2, 'Question 2', 'This is another question', 1),
  (3, 'Question 3', 'This is the last question I swear', 2),
  (4, 'Question 4', 'I have lots of questions', 3);

INSERT INTO
  question_follows(id, user_id, question_id)
VALUES  
  (1, 2, 4),
  (2, 3, 1),
  (3, 1, 1),
  (4, 1, 3);

INSERT INTO
  replies(id, user_id, question_id, parent_id, body)
VALUES
  (1, 1, 1, NULL, 'Reply one'),
  (2, 2, 1, 1, 'Reply to reply one'), 
  (3, 3, 4, NULL, 'Reply two');

INSERT INTO
  question_likes(id, user_id, question_id)
VALUES
  (1, 1, 3),
  (2, 3, 3), 
  (3, 2, 2), 
  (4, 2, 1);


