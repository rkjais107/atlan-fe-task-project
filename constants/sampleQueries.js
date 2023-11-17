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
];
export default Sample_Queries;
