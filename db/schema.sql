DROP TABLE IF EXISTS bodydev_db;

CREATE DATABASE bodydev_db;

CREATE TABLE bodydev_db.users (
    id INTEGER(11) PRIMARY KEY AUTO_INCREMENT,
    -- Users credential
    userName VARCHAR(30) NOT NULL,
    password VARCHAR(30) NOT NULL,
    -- Weight loss, bulking, toning
    goal VARCHAR(30) NOT NULL,
    -- Optional: Weight and height specifications
    weight INTEGER(11),
    height VARCHAR(30),
    -- Additional comments the user has about their needs
    comments VARCHAR(500)
);

SELECT * FROM users;