-- Write your query below
select name 
FROM customers
WHERE ID NOT IN (select customer_id FROM orders)