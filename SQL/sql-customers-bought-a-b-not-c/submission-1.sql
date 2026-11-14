SELECT customer_id, customer_name
FROM customers
WHERE customer_id IN (
    SELECT customer_id
    FROM orders
    WHERE product_name IN ('A', 'B')
    GROUP BY customer_id
    HAVING COUNT(DISTINCT product_name) = 2
)
AND customer_id NOT IN (
    SELECT customer_id
    FROM orders
    WHERE product_name = 'C'
)
ORDER BY customer_name;