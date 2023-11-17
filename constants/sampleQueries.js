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
];
export default Sample_Queries;
