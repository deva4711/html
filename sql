Script File Content (college_script.sql):
-- Step 1: Create the database
CREATE DATABASE IF NOT EXISTS CollegeDB;
-- Step 2: Use the database
USE CollegeDB;
-- Step 3: Create the 'students' table
CREATE TABLE IF NOT EXISTS students (
 id INT PRIMARY KEY AUTO_INCREMENT,
 name VARCHAR(100) NOT NULL,
 age INT,
 department VARCHAR(50)
);
-- Step 4: Insert data into the 'students' table
INSERT INTO students (name, age, department) VALUES 
('Alice', 20, 'CSE'),
('Bob', 21, 'ECE'),
('Charlie', 22, 'CSE'),
('David', 23, 'MECH');