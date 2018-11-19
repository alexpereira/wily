-- Create wily user and password
CREATE USER 'wily'@'localhost' IDENTIFIED BY 'wily';
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP ON *.* TO 'wily'@'localhost';

-- Create wily database
CREATE DATABASE IF NOT EXISTS `wily` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `wily`;

-- Create users table
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) UNIQUE DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `modified_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE `users` ADD PRIMARY KEY (`id`);
ALTER TABLE `users` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;