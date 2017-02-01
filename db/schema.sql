## Schema of the database
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE `burgers_db`.`burger` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `burger_name` VARCHAR(255) NOT NULL,
  `devoured` TINYINT NOT NULL,
  `date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)


  );
