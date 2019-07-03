CREATE DATABASE IF NOT EXISTS usercrud;

USE usercrud;

CREATE TABLE categories (
	id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(50),
    PRIMARY KEY (id)
);

CREATE TABLE users (
	id INT(11) NOT NULL AUTO_INCREMENT,
    category_id INT(11),
    name VARCHAR(50) NOT NULL,
    balance VARCHAR(50) DEFAULT '0.00',
    PRIMARY KEY (id),
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

DESCRIBE categories;
DESCRIBE users;