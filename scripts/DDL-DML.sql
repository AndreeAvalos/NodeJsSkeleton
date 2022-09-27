-- Active: 1664290117707@@127.0.0.1@3306@QuoterDatabase
CREATE DATABASE QuoterDatabase
    DEFAULT CHARACTER SET = 'utf8mb4';

CREATE TABLE Concessionaire(  
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    create_time DATETIME COMMENT 'Create Time',
    name VARCHAR(255),
    address VARCHAR(255)
);
CREATE TABLE Agent(  
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    create_time DATETIME COMMENT 'Create Time',
    name VARCHAR(255),
    id_concessionaire INT NOT NULL,
    Foreign Key (id_concessionaire) REFERENCES Concessionaire(id)
);
CREATE TABLE Client(  
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    create_time DATETIME COMMENT 'Create Time',
    name VARCHAR(255),
    identification_document VARCHAR(13),
    address VARCHAR(200),
    phone INT(8)
);

CREATE TABLE Sociodemographic(  
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    create_time DATETIME COMMENT 'Create Time',
    name VARCHAR(255)
);

CREATE TABLE Client_Sociodemographic(  
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    create_time DATETIME COMMENT 'Create Time',
    id_client INT NOT NULL,
    id_sociodemographic INT NOT NULL,
    Foreign Key (id_client) REFERENCES Client(id),
    Foreign Key (id_sociodemographic) REFERENCES Sociodemographic(id)
);

CREATE TABLE Vehicle(  
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    create_time DATETIME COMMENT 'Create Time',
    name VARCHAR(255),
    model VARCHAR(100),
    year int(10),
    color VARCHAR(50),
    price DECIMAL
);

CREATE TABLE Vehicle_Concessionaire(  
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    create_time DATETIME COMMENT 'Create Time',
    id_vehicle INT NOT NULL,
    id_concessionaire INT NOT NULL,
    Foreign Key (id_vehicle) REFERENCES Vehicle(id),
    Foreign Key (id_concessionaire) REFERENCES Concessionaire(id)
);

CREATE TABLE Purchase(  
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    create_time DATETIME COMMENT 'Create Time',
    name VARCHAR(255),
    id_vehicle INT NOT NULL,
    id_concessionaire INT NOT NULL,
    id_agent INT NOT NULL,
    id_client INT NOT NULL,
    price DECIMAL,
    Foreign Key (id_vehicle) REFERENCES Vehicle(id),
    Foreign Key (id_concessionaire) REFERENCES Concessionaire(id),
    Foreign Key (id_agent) REFERENCES Agent(id),
    Foreign Key (id_client) REFERENCES Client(id)
);

INSERT INTO `Concessionaire`(id,create_time,name,address) VALUES(1,'2022-09-27 00:00:00','Concesionario 1','Guatemala, Zona 1');
INSERT INTO `Agent`(id,create_time,name,id_concessionaire) VALUES(1,'2022-09-27 00:00:00','Andree Avalos',1);
INSERT INTO `Sociodemographic`(id,create_time,name) VALUES(1,'2022-09-27 00:00:00','Genero');
INSERT INTO `Sociodemographic`(id,create_time,name) VALUES(2,'2022-09-27 00:00:00','Año_Nacimiento');
INSERT INTO `Vehicle`(id,create_time,name,model,year,color,price) VALUES(1,'2022-09-27 00:00:00','Toyota','Yaris',2021,'White',100000);
INSERT INTO `Vehicle_Concessionaire`(id,create_time,id_vehicle,id_concessionaire) VALUES(1,'2022-09-27 00:00:00',1,1);