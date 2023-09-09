CREATE DATABASE IF NOT EXISTS mydb;
USE mydb;

CREATE TABLE IF NOT EXISTS users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS articles (
    article_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
SELECT * FROM articles;
INSERT INTO users (username, password)
VALUES
    ('user1', 'password1'),
    ('user2', 'password2'),
    ('user3', 'password3');

INSERT INTO articles (user_id, title, content)
VALUES
    (1, 'Article 1 by User 1', 'This is the content of Article 1 by User 1.'),
    (1, 'Article 2 by User 1', 'This is the content of Article 2 by User 1.'),
	(1, 'Article 3 by User 1', 'This is the content of Article 3 by User 1.'),
    (2, 'Article 1 by User 2', 'This is the content of Article 1 by User 2.');