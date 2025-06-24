ATTACH DATABASE 'company.db';

CREATE TABLE IF NOT EXISTS 'employeers' (
id INTEGER PRIMARY KEY AUTOINCREMENT,
full_name TEXT NOT NULL,
birth_date DATE NOT NULL,
email TEXT UNIQUE NOT NULL,
job_title TEXT NOT NULL ); 

INSERT INTO employeers (full_name, birth_date, email, job_title) VALUES ('Иван Иванов', '2000-01-11', 'ivanov@mail.ru', 'manager' );

INSERT INTO employeers (full_name, birth_date, email, job_title) VALUES ('Жора Жорикович', '1990-08-14', 'djoric90@mail.ru', 'designer' );

INSERT INTO employeers (full_name, birth_date, email, job_title) VALUES ('Галка Глинова', '1995-04-07', 'galochka@mail.ru', 'developer' );

SELECT birth_date FROM employeers WHERE birth_date >= '1995-01-01';

CREATE TABLE IF NOT EXISTS 'departments' (
id INTEGER PRIMARY KEY AUTOINCREMENT,
room_number INTEGER NOT NULL,
phone_number TEXT NOT NULL,
email TEXT UNIQUE NOT NULL,
quantity_employeers INTEGER NOT NULL );

INSERT INTO departments (room_number, phone_number, email, quantity_employeers) VALUES (22, '44-22', 'main.department@mail.ru', 45);

INSERT INTO departments (room_number, phone_number, email, quantity_employeers) VALUES (23, '45-23', 'midle.department@mail.ru', 21);

INSERT INTO departments (room_number, phone_number, email, quantity_employeers) VALUES (24, '52-24', 'small.department@mail.ru', 7);

SELECT email FROM departments WHERE room_number=23;

CREATE TABLE IF NOT EXISTS 'projects' (
name_project TEXT UNIQUE NOT NULL,
theme_of_project TEXT NOT NULL,
quantity_participants INTEGER NOT NULL,
date_of_project DATE NOT NULL );

INSERT INTO projects (name_project, theme_of_project, quantity_participants, date_of_project) VALUES ('Super Cute project', 'Education', 12, '2025-10-20');

INSERT INTO projects (name_project, theme_of_project, quantity_participants, 
date_of_project) VALUES ('My new project', 'Protrction of nature', 14, '2024-05-10');

INSERT INTO projects (name_project, theme_of_project, quantity_participants, date_of_project) VALUES ('First little project', 'Development', 28, '2024-07-15');

SELECT name_project, theme_of_project FROM projects WHERE quantity_participants >= 14;

CREATE TABLE IF NOT EXISTS 'tools' (
quantity_equipment INTEGER NOT NULL,
wear_level REAL CHECK(wear_level BETWEEN 0 AND 10),
quantity_of_computers INTEGER CHECK(quantity_of_computers BETWEEN 1 AND 5)
);

INSERT INTO tools (quantity_equipment, wear_level, quantity_of_computers) VALUES (8, 7.2, 3);

INSERT INTO tools (quantity_equipment, wear_level, quantity_of_computers) VALUES (24, 5.4, 2);

INSERT INTO tools (quantity_equipment, wear_level, quantity_of_computers) VALUES (44, 9.5, 5);

SELECT quantity_of_computers FROM tools WHERE wear_level >= 7;

SELECT * FROM employeers;
SELECT * FROM departments;
SELECT * FROM projects;
SELECT * FROM tools;