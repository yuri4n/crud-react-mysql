CREATE PROCEDURE `userAddOrEdit`(
  IN _id INT,
  IN _category_id INT,
  IN _name VARCHAR(50),
  IN _balance VARCHAR(50)
)
BEGIN 
  IF _id = 0 THEN
    INSERT INTO user (category_id, name, balance)
    VALUES (_category_id, _name, _balance);

    SET _id = LAST_INSERT_ID();
  ELSE
    UPDATE user
    SET
    category_id = _category_id,
    name = _name,
    balance = _balance
    WHERE id = _id;
  END IF;

  SELECT _id AS 'id';
END