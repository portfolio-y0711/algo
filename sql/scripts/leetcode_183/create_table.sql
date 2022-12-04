drop table if exists customers;
Create table customers
(
    id   int,
    name varchar(255)
);
drop table if exists orders;
Create table orders
(
    id         int,
    customerId int
);
insert into customers (id, name) values ('2', 'Henry');
insert into customers (id, name) values ('3', 'Sam');
insert into customers (id, name) values ('4', 'Max');
insert into customers (id, name) values ('1', 'Joe');
insert into orders (id, customerId) values ('1', '3');
insert into orders (id, customerId) values ('2', '1');
