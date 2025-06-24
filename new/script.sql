ATTACH DATABASE 'first.db'
 
 CREATE TABLE IF NOT EXISTS 'students_and_grade'(
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 full_name TEXT NOT NULL,
 city TEXT NOT NULL,
 birth_date DATE NOT NULL,
 email TEXT UNIQUE NOT NULL,
 grade REAL CHECK(grade BETWEEN 0 AND 10) );

INSERT INTO students_and_grade (full_name, city, birth_date, email, grade) VALUES ('Петр Петров', 'Краснодар', '2000-05-15', 'petrov@mail.ru', 7); 

INSERT INTO students_and_grade (full_name, city, birth_date, email, grade) VALUES ('Михаил Мишин', 'Москва', '2001-08-12', 'mishin@mail.ru', 10); 

INSERT INTO students_and_grade (full_name, city, birth_date, email, grade) VALUES ('Остап Остапов', 'Волгограда', '2001-08-12', 'ostapov@mail.ru', 9); 

SELECT * FROM students_and_grade;
SELECT full_name, email FROM students_and_grade;
SELECT * FROM students_and_grade WHERE id=1;
SELECT * FROM students_and_grade WHERE birth_date='2001-08-12';

SELECT * FROM students_and_grade WHERE grade >= 9;




DROP TABLE students_and_grade;