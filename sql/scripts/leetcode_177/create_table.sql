DROP TABLE employee;
CREATE TABLE employee(
    id        int,
    name      varchar(255),
    salary    int,
    managerId int
) ;
insert into employee (id, name, salary, managerId) values ('1', 'Joe', '70000', '3');
insert into employee (id, name, salary, managerId) values ('2', 'Henry', '80000', '4');
insert into employee (id, name, salary, managerId) values ('3', 'Sam', '60000', null);
insert into employee (id, name, salary, managerId) values ('4', 'Max', '90000', null);
