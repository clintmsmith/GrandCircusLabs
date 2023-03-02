SELECT * FROM customers

SELECT DISTINCT country FROM customers

SELECT * FROM customers WHERE customer_id LIKE ‘BL%’

SELECT * FROM orders LIMIT 100

SELECT * FROM customers WHERE postal_code IN (‘1010’, ‘3012’, 12209’, ‘05023’)

SELECT * FROM orders WHERE ship_region IS NOT NULL

SELECT * FROM customers ORDER BY country, city

INSERT INTO customers(customer_id, company_name, contact_name, etc.)
VALUES (‘1’, etc. )

UPDATE orders SET ship_region = 'EuroZone' WHERE ship_country = 'France';

DELETE FROM order_details WHERE quantity=’1’

SELECT AVG(quantity) FROM order_details
SELECT MIN(quantity) FROM order_details
SELECT MAX(quantity) FROM order_details

SELECT AVG(quantity) FROM order_details GROUP BY order_id
SELECT MIN(quantity) FROM order_details GROUP BY order_id
SELECT MAX(quantity) FROM order_details GROUP BY order_id

SELECT customer_id FROM orders WHERE order_id= ‘10290’

SELECT * FROM orders INNER JOIN customers ON orders.customer_id = customers.customer_id
SELECT * FROM orders LEFT JOIN customers ON orders.customer_id = customers.customer_id
SELECT * FROM orders RIGHT JOIN customers ON orders.customer_id = customers.customer_id

SELECT ship_city, ship_country, FROM orders INNER JOIN employees ON employee_id = employee_id WHERE city = ‘London’

SELECT DISTINCT(orders.ship_name) FROM orders JOIN order_details ON orders.orders_id = order_details.order_id JOIN products ON order_details.product_id = products.product_id WHERE products.discontinued = 1

SELECT first_name FROM employees WHERE reports_to IS null

SELECT first_name FROM employees WHERE reports_to = (SELECT employee_id FROM employees WHERE first_name = ‘Andrew’)
