DROP TABLE IF EXISTS cattoys; /*lets us run the file multiple times and start fresh
(create table from scratch) each time we run the file*/
DROP TABLE IF EXISTS cats; /*Drop all joins table first b/c they are referencing other tables. Can't dop the other tables 
if something is refrencing them*/ 
DROP TABLE IF EXISTS toys;

CREATE TABLE cats (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    color VARCHAR(255),
    breed VARCHAR(255) /*NO TRAILING COMMAS!!*/
); /*REMEMBER THE SEMICOLON!!*/

INSERT INTO cats(name, color,breed) /*specifies the order we will be supplying values in below*/
VALUES  ('Fred','White','Tabby'), ('Max', 'Black', 'Saimese'), ('Yuci', 'Brown', 'Calico'), 
        ('Roger', 'Orange', 'Mountain Lion'), ('Sam', 'Black', 'Panther'); 
        /*,...; <- if you want to add more make sure you separte by commas and end list with semicolon*/


CREATE TABLE toys(
  id SERIAL PRIMARY KEY,
  price INTEGER,
  color VARCHAR(255),
  name VARCHAR(255)
);

INSERT INTO toys(price, color, name)
VALUES (80, 'White', 'Moonshoes'), (50, 'White', 'Cat Tree'), (60, 'Red', 'Spool of Yarn'),  
       (5, 'Brown', 'Dog'), (10, 'Green', 'Jack in the Box'), (1000, 'Green', 'Catnip');

CREATE TABLE cattoys(
    id SERIAL PRIMARY KEY,
    cat_id INTEGER,
    toy_id INTEGER,

    FOREIGN KEY (cat_id) REFERENCES cats(id),
    FOREIGN KEY (toy_id) REFERENCES toys(id)
);

INSERT INTO cattoys(cat_id, toy_id)
VALUES (1, 1), (2, 6), (3, 6), (4, 6), (4, 2);


