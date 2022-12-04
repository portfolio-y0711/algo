# select name from customers  where id not in (select distinct id as customerId from orders);
select * from customers;
select distinct id as customerId from orders;

# SELECT Name AS Customers FROM Customers  WHERE Id NOT IN (SELECT CustomerId FROM Orders);
