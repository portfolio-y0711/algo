SELECT e1.name AS employee
FROM employee AS e1, employee AS e2
WHERE e1.managerId = e2.id AND e1.Salary > e2.Salary
