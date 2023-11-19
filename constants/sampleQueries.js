const Sample_Queries = [
  {
    id: 1,
    queryName: "Select all categories",
    queryDescription: "Retrieves all records from the categories table.",
    query: "SELECT * FROM categories;",
  },
  {
    id: 2,
    queryName: "Select products with unit price greater than 50",
    queryDescription:
      "Retrieves products from the products table where the unit price is greater than 50.",
    query: "SELECT * FROM products WHERE unitPrice > 50;",
  },
  {
    id: 3,
    queryName: "Select orders placed in a specific region",
    queryDescription:
      "Retrieves orders from the orders table that were shipped to a specific region.",
    query: "SELECT * FROM orders WHERE shipRegion = 'North';",
  },
  {
    id: 4,
    queryName: "Count the number of products in each category",
    queryDescription:
      "Counts the number of products in each category from the products table.",
    query:
      "SELECT categoryID, COUNT(*) as productCount FROM products GROUP BY categoryID;",
  },
  {
    id: 5,
    queryName: "Find the average unit price of products",
    queryDescription:
      "Calculates the average unit price of products from the products table.",
    query: "SELECT AVG(unitPrice) as averagePrice FROM products;",
  },
  {
    id: 6,
    queryName: "List customers and their orders",
    queryDescription:
      "Retrieves customer information along with their associated orders from the customers and orders tables using a join operation.",
    query:
      "SELECT customers.customerID, customers.companyName, orders.orderID FROM customers INNER JOIN orders ON customers.customerID = orders.customerID;",
  },
  {
    id: 7,
    queryName: "Find the total sales for each product",
    queryDescription:
      "Calculates the total sales for each product by multiplying the unit price with the quantity from the order_details table.",
    query:
      "SELECT productID, SUM(unitPrice*quantity) as totalSales FROM order_details GROUP BY productID;",
  },
];
export default Sample_Queries;
