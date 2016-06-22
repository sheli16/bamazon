CREATE DATABASE BamazonDB;
CREATE TABLE Products (
  id INTEGER(8) AUTO_INCREMENT NOT NULL,
  ProductName VARCHAR(100) NULL,
  DepartmentName VARCHAR(100) NULL, 
  Price DECIMAL(10,4) NULL,
  StockQuantiy INTEGER(8) NULL,
    PRIMARY KEY (id));
    USE BamazonDB;
    
    SELECT * FROM BamazonDB.Products;
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantiy)
VALUES ("Red Bowtie", "Mens accessories", 49.99, 10), 
("Black Bowtie", "Mens accessories", 49.99, 10), 
("White Bowtie", "Mens accessories", 49.99, 10), 
("Steel Cuff Links", "Mens accessories", 54.99, 10), 
("Silver Cuff Links", "Mens accessories", 79.99, 10), 
("Striped Socks - Red", "Mens accessories", 19.99, 10), 
("Striped Socks - Black", "Mens accessories", 19.99, 10), 
("Pocket Square White", "Mens accessories", 24.99, 10), 
("Pocket Square Red/Black", "Mens accessories", 24.99, 10), 
("Shoe Polish", "Mens accessories", 10.99, 10); 
