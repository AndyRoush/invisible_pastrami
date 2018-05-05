DROP DATABASE IF EXISTS reqdotbody_db;

CREATE DATABASE reqdotbody_db;

-- TABLE FOR NEW REGISTRANTS
CREATE TABLE reqdotbody_db.register (
    id INTEGER(11) PRIMARY KEY AUTO_INCREMENT,
    -- Users credential
    userName VARCHAR(30) NOT NULL,
    password VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    -- Weight loss, bulking, toning
    firstName VARCHAR(30) NOT NULL,
    lastName VARCHAR(30) NOT NULL,
    trainer BOOLEAN NOT NULL
);

-- TABLE FOR SURVEY
CREATE TABLE reqdotbody_db.survey (
    id INTEGER(11) PRIMARY KEY AUTO_INCREMENT,
    -- Weight loss, bulking, toning
    goal VARCHAR(30) NOT NULL,
    -- Optional: Weight and height specifications
    weight INTEGER(11),
    height VARCHAR(30),
    -- Additional comments the user has about their needs
    comments VARCHAR(500)
);

