
DROP DATABASE IF EXISTS `movie_data`;
CREATE DATABASE `movie_data`;
USE `movie_data`;
-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'movies'
-- 
-- ---
SET FOREIGN_KEY_CHECKS=0;

DROP TABLE IF EXISTS `movies`;
    
CREATE TABLE `movies` (
  `movies_id` INTEGER NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(60) NULL DEFAULT NULL,
  `director_id` INTEGER NULL DEFAULT NULL,
  `year` VARCHAR(4) NULL DEFAULT NULL,
  PRIMARY KEY (`movies_id`)
);

-- ---
-- Table 'directors'
-- 
-- ---

DROP TABLE IF EXISTS `directors`;
    
CREATE TABLE `directors` (
  `directors_id` INTEGER NOT NULL AUTO_INCREMENT,
  `director_name` VARCHAR(70) NULL DEFAULT NULL,
  PRIMARY KEY (`directors_id`),
  UNIQUE (`director_name`)
);

-- ---
-- Table 'genres'
-- 
-- ---

DROP TABLE IF EXISTS `genres`;
    
CREATE TABLE `genres` (
  `genres_id` INTEGER NOT NULL AUTO_INCREMENT,
  `genre_name` VARCHAR(16) NULL DEFAULT NULL,
  PRIMARY KEY (`genres_id`),
  UNIQUE (`genre_name`)
);

-- ---
-- Table 'mov_gen'
-- 
-- ---

DROP TABLE IF EXISTS `mov_gen`;
    
CREATE TABLE `mov_gen` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `movie_id` INTEGER NULL DEFAULT NULL,
  `genre_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `movies` ADD FOREIGN KEY (director_id) REFERENCES `directors` (`directors_id`);
ALTER TABLE `mov_gen` ADD FOREIGN KEY (movie_id) REFERENCES `movies` (`movies_id`);
ALTER TABLE `mov_gen` ADD FOREIGN KEY (genre_id) REFERENCES `genres` (`genres_id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `movies` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `directors` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `genres` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `mov_gen` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `movies` (`movies_id`,`title`,`director_id`,`year`) VALUES
-- ('','','','');
-- INSERT INTO `directors` (`directors_id`,`name`) VALUES
-- ('','');
-- INSERT INTO `genres` (`genres_id`,`name`) VALUES
-- ('','');
-- INSERT INTO `mov_gen` (`id`,`movie_id`,`genre_id`) VALUES
-- ('','','');