-- PK and FK Constraints

create database sample;
use sample;

create table departments(id int primary key , name varchar (30) not null );

insert into departments (id, name) 
VALUES 
(1, 'Sales'), 
(2, 'R&D'), 
(3, 'Marketing'), 
(4, 'Finance'), 
(5, 'Human Resources');

-- verify the inserted data
select * from departments;

-- Create employee table which  makes many to one relationship between department and employees
-- one department can have many employees
create table employees(
id int primary key,
name varchar (100) not null,
position varchar(100) not null,
salary decimal (10,2),
department_id int,
foreign key (department_id)
references  Departments(id)
);
INSERT INTO employees 
(id, name, position, salary, department_id) 
VALUES 
(1, 'John Doe', 'Manager', 75000.00, 1), 
(2, 'Jane Smith', 'Developer', 65000.00, 2), 
(3, 'Emily Johnson', 'Designer', 60000.00, 3), 
(4, 'Michael Brown', 'Analyst', 70000.00, 4), 
(5, 'Linda Green', 'Manager', 75000.00, 1), 
(6, 'James White', 'Developer', 65000.00, 2), 
(7, 'William Black', 'Developer', NULL, 2), 
(8, 'Mary Blue', 'HR', 50000.00, 5);

select * from employees;

desc employees; -- describe table employees


-- SIMPLE INNER JOIN - TO TAKE COMMMON DETAILS FROM BOTH TABLES
select e.id,e.name,e.position ' Designation',e.salary,d.name 'Department name'
from employees e
join departments d 
on e.department_id = d.id;

-- Lets insert one record in employee table without department_id
insert into employees( id,name,position,salary,department_id)
values(9,'Aarushi','Senior Developer',130000, null);
-- LEFT JOIN- To TKE COMMON VALUES AS WELL AS VALUES FROM LEFT TABLE
select * from employees;
select e.id,e.name,e.position ' Designation',e.salary,d.name 'Department name'
from employees e
left join departments d 
on e.department_id = d.id;

 -- let's insert one record in department
 insert into departments values(6,'I.T');
 
select * from employees;
select e.id,e.name,e.position ' Designation',e.salary,d.name 'Department name'
from employees e
RIGHT join departments d 
on e.department_id = d.id;


-- EXECUTE FULL OUTER JOIN
select * from employees;
select e.id,e.name,e.position ' Designation',e.salary,d.name 'Department name'
from employees e
left join departments d 
on e.department_id = d.id
  union 
select * from employees;
select e.id,e.name,e.position ' Designation',e.salary,d.name 'Department name'
from employees e
RIGHT join departments d 
on e.department_id = d.id;


-- CROSS JOIN
select e.id Employee_id, e.name Employee_name, d.id Department_id, d.name Department_name
from employees e
cross join departments d;


select count(*) "No. of employees", department_id
from employees
group by department_id;

-- Find out Total employees based on Department Name
select dep.name "Department name", count(*) "Total employee"
from employees emp
join departments dep
on emp.department_id=dep.id
group by dep.name;


-- Total sum of salary based on department
select dep.name "Department name", sum(emp.salary) "Total salary"
from employees emp
join departments dep
on emp.department_id=dep.id
group by dep.name;

-- Having clause
select dep.name "Department name", sum(emp.salary) Total_salary
from employees emp
join departments dep
on emp.department_id=dep.id
group by dep.name
having Total_salary>100000;

-- List the department which is having more than 2 employees
select dep.name "Department name", count(*) Total_employee
from employees emp
join departments dep
on emp.department_id=dep.id
group by dep.name
having Total_employee>2;


-- ROLLUP 
Select dep.name "Department name", sum(emp.salary) "Total Salary"
from employees emp
join departments dep
on emp.department_id=dep.id
group by (dep.name) with rollup;

-- Transaction Demo
CREATE TABLE Accounts (
 account_id VARCHAR(10) PRIMARY KEY,
 account_name VARCHAR(100),
 balance DECIMAL(10, 2)
);
INSERT INTO Accounts (account_id, account_name, balance) 
VALUES
('A001', 'Alice', 1000.00),
('A002', 'Bob', 1500.00),
('A003', 'Charlie', 2000.00);

select* from Accounts;
begin;
update Accounts set balance = balance+100 where account_id = 'A001';
update Accounts set balance = balance-100 where account_id = 'A002';
commit;
select * from Accounts;

begin;
update Accounts set balance = balance+100 where account_id = 'A001';
update Accounts set balance = balance-100 where account_id = 'A002';
rollback;
select * from Accounts;
commit;

DELIMITER //  -- Change the termination symbol
create procedure getAllAccounts()
begin
select * from Accounts;
end// -- last line of procedure which ends with //
DELIMITER ;  -- changes the termination symbol to ;

CALL getAllAccounts();
