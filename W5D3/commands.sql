/*to get all cats with more than 1 toy*/
SELECT *
FROM cats
JOIN cattoys ON cats.id = cattoys.cat_id
JOIN toys ON cattoys.toy_id = toys.id
GROUP BY cats.name
HAVING COUNT(toys.name) > 1

/*to print out cat and his toys for all cats that have more than 1 toy*/
SELECT cats.name, toys.name
FROM cats
JOIN cattoys ON cats.id = cattoys.cat_id
JOIN toys ON cattoys.toy_id = toys.id
WHERE cats.name IN (SELECT cats.name
FROM cats
JOIN cattoys ON cats.id = cattoys.cat_id
JOIN toys ON cattoys.toy_id = toys.id
GROUP BY cats.name
HAVING COUNT(toys.name) > 1) 

/*update rows*/
UPDATE toys
SET color = 'yellow'
WHERE name = 'Catnip'

UPDATE cats
SET name = 'Garfield'
WHERE breed = 'Calico'

UPDATE cattoys
SET cat_id = 2, toy_id = 2
WHERE id = 3

/*delete a row*/
DELETE from toys WHERE toys.id = 5 /*works...must have WHERE to avoid deleting everything*/
DELETE from toys WHERE toys.id = 1 /*doesn't work*/

/*explain stuff*/
EXPLAIN 
SELECT *
FROM cats
WHERE name = 'Roger'

EXPLAIN 
SELECT toys.name
FROM toys
JOIN cattoys ON toys.id = cattoys.toy_id
JOIN cats ON cattoys.cat_id = cats.id
WHERE cats.name = 'Roger'

EXPLAIN ANALYZE
SELECT toys.name, cats.name
FROM toys
LEFT JOIN cattoys ON toys.id = cattoys.toy_id
LEFT JOIN cats ON cattoys.cat_id = cats.id
WHERE toys.color = 'White' AND cats.color = 'White'