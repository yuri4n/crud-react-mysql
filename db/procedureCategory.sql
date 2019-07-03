CREATE PROCEDURE `categoryAddOrEdit`(
  IN _id INT,
  IN _name VARCHAR(50)
)
BEGIN 
  IF _id = 0 THEN
    INSERT INTO category (name)
    VALUES (_name);

    SET _id = LAST_INSERT_ID();
  ELSE
    UPDATE category
    SET
    name = _name
    WHERE id = _id;
  END IF;

  SELECT _id AS 'id';
END