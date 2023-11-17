require("dotenv").config();
const { db } = require("@vercel/postgres");
const { territories } = require("../lib/json-data/territories");
const { categories } = require("../lib/json-data/categories");
const { customers } = require("../lib/json-data/customers");
const {
  employee_territories,
} = require("../lib/json-data/employee_territories");
const { employees } = require("../lib/json-data/employees");
const { order_details } = require("../lib/json-data/order_details");
const { orders } = require("../lib/json-data/orders");
const { products } = require("../lib/json-data/products");
const { regions } = require("../lib/json-data/regions");
const { shippers } = require("../lib/json-data/shippers");
const { suppliers } = require("../lib/json-data/suppliers");

async function seedCategories(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "categories" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS categories (
        categoryID VARCHAR(255) NOT NULL,
        categoryName VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "categories" table`);

    // Insert data into the "categories" table
    const insertedCategories = await Promise.all(
      categories.map(
        (category) => client.sql`
        INSERT INTO categories (categoryID, categoryName, description)
        VALUES (${category.categoryID}, ${category.categoryName}, ${category.description});
      `
      )
    );

    console.log(`Seeded ${insertedCategories.length} categories`);

    return {
      createTable,
      categories: insertedCategories,
    };
  } catch (error) {
    console.error("Error seeding categories:", error);
    throw error;
  }
}

async function seedCustomers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "customers" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS customers (
        customerID VARCHAR(5) NOT NULL,
        companyName VARCHAR(255) NOT NULL,
        contactName VARCHAR(255) NOT NULL,
        contactTitle VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        city VARCHAR(255) NOT NULL,
        region VARCHAR(255) NOT NULL,
        postalCode VARCHAR(255) NOT NULL,
        country VARCHAR(255) NOT NULL,
        phone VARCHAR(255) NOT NULL,
        fax VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "customers" table`);

    // Insert data into the "customers" table
    const insertedCustomers = await Promise.all(
      customers.map(
        (customer) => client.sql`
        INSERT INTO customers (customerID, companyName, contactName, contactTitle, address, city, region, postalCode, country, phone, fax)
        VALUES (${customer.customerID}, ${customer.companyName}, ${customer.contactName}, ${customer.contactTitle}, ${customer.address}, ${customer.city}, ${customer.region}, ${customer.postalCode}, ${customer.country}, ${customer.phone}, ${customer.fax});
      `
      )
    );

    console.log(`Seeded ${insertedCustomers.length} customers`);

    return {
      createTable,
      customers: insertedCustomers,
    };
  } catch (error) {
    console.error("Error seeding customers:", error);
    throw error;
  }
}

async function seedEmployees(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "employees" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS employees (
        employeeID VARCHAR(255) NOT NULL,
        lastName VARCHAR(255) NOT NULL,
        firstName VARCHAR(255) NOT NULL,
        title VARCHAR(255) NOT NULL,
        titleOfCourtesy VARCHAR(255) NOT NULL,
        birthDate DATE,
        hireDate DATE,
        address VARCHAR(255) NOT NULL,
        city VARCHAR(255) NOT NULL,
        region VARCHAR(255) NOT NULL,
        postalCode VARCHAR(255) NOT NULL,
        country VARCHAR(255) NOT NULL,
        homePhone VARCHAR(255) NOT NULL,
        extension VARCHAR(255) NOT NULL,
        notes VARCHAR(255) NOT NULL,
        reportsTo VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "employees" table`);

    // Insert data into the "employees" table
    const insertedEmployees = await Promise.all(
      employees.map(
        (employee) => client.sql`
        INSERT INTO employees (employeeID, lastName, firstName, title, titleOfCourtesy, birthDate, hireDate, address, city, region, postalCode, country, homePhone, extension, notes, reportsTo)
        VALUES (${employee.employeeID}, ${employee.lastName}, ${employee.firstName}, ${employee.title}, ${employee.titleOfCourtesy}, ${employee.birthDate}, ${employee.hireDate}, ${employee.address}, ${employee.city}, ${employee.region}, ${employee.postalCode}, ${employee.country}, ${employee.homePhone}, ${employee.extension}, ${employee.notes}, ${employee.reportsTo});
      `
      )
    );

    console.log(`Seeded ${insertedEmployees.length} employees`);

    return {
      createTable,
      employees: insertedEmployees,
    };
  } catch (error) {
    console.error("Error seeding employees:", error);
    throw error;
  }
}

async function seedOrderDetails(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "order_details" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS order_details (
        orderID VARCHAR(255) NOT NULL,
        productID VARCHAR(255) NOT NULL,
        unitPrice VARCHAR(255) NOT NULL,
        quantity VARCHAR(255) NOT NULL,
        discount VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "order_details" table`);

    // Insert data into the "order_details" table
    const insertedOrderDetails = await Promise.all(
      order_details.map(
        (orderDetail) => client.sql`
        INSERT INTO order_details (orderID, productID, unitPrice, quantity, discount)
        VALUES (${orderDetail.orderID}, ${orderDetail.productID}, ${orderDetail.unitPrice}, ${orderDetail.quantity}, ${orderDetail.discount});
      `
      )
    );

    console.log(`Seeded ${insertedOrderDetails.length} order_details`);

    return {
      createTable,
      order_details: insertedOrderDetails,
    };
  } catch (error) {
    console.error("Error seeding order_details:", error);
    throw error;
  }
}

async function seedOrders(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "orders" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS orders (
        orderID VARCHAR(255) NOT NULL,
        customerID VARCHAR(255) NOT NULL,
        employeeID VARCHAR(255) NOT NULL,
        orderDate DATE,
        requiredDate DATE,
        shippedDate DATE,
        shipVia VARCHAR(255) NOT NULL,
        freight VARCHAR(255) NOT NULL,
        shipName VARCHAR(255) NOT NULL,
        shipAddress VARCHAR(255) NOT NULL,
        shipCity VARCHAR(255) NOT NULL,
        shipRegion VARCHAR(255) NOT NULL,
        shipPostalCode VARCHAR(255) NOT NULL,
        shipCountry VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "orders" table`);

    // Insert data into the "orders" table
    const insertedOrders = await Promise.all(
      orders.map(
        (order) => client.sql`
        INSERT INTO orders (orderID, customerID, employeeID, orderDate, requiredDate, shippedDate, shipVia, freight, shipName, shipAddress, shipCity, shipRegion, shipPostalCode, shipCountry)
        VALUES (${order.orderID}, ${order.customerID}, ${order.employeeID}, ${order.orderDate}, ${order.requiredDate}, ${order.shippedDate}, ${order.shipVia}, ${order.freight}, ${order.shipName}, ${order.shipAddress}, ${order.shipCity}, ${order.shipRegion}, ${order.shipPostalCode}, ${order.shipCountry});
      `
      )
    );

    console.log(`Seeded ${insertedOrders.length} orders`);

    return {
      createTable,
      orders: insertedOrders,
    };
  } catch (error) {
    console.error("Error seeding orders:", error);
    throw error;
  }
}

async function seedProducts(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "products" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS products (
        productID VARCHAR(255) NOT NULL,
        productName VARCHAR(255) NOT NULL,
        supplierID VARCHAR(255) NOT NULL,
        categoryID VARCHAR(255) NOT NULL,
        quantityPerUnit VARCHAR(255) NOT NULL,
        unitPrice VARCHAR(255) NOT NULL,
        unitsInStock VARCHAR(255) NOT NULL,
        unitsOnOrder VARCHAR(255) NOT NULL,
        reorderLevel VARCHAR(255) NOT NULL,
        discontinued VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "products" table`);

    // Insert data into the "products" table
    const insertedProducts = await Promise.all(
      products.map(
        (product) => client.sql`
        INSERT INTO products (productID, productName, supplierID, categoryID, quantityPerUnit, unitPrice, unitsInStock, unitsOnOrder, reorderLevel, discontinued)
        VALUES (${product.productID}, ${product.productName}, ${product.supplierID}, ${product.categoryID}, ${product.quantityPerUnit}, ${product.unitPrice}, ${product.unitsInStock}, ${product.unitsOnOrder}, ${product.reorderLevel}, ${product.discontinued});
      `
      )
    );

    console.log(`Seeded ${insertedProducts.length} products`);

    return {
      createTable,
      products: insertedProducts,
    };
  } catch (error) {
    console.error("Error seeding products:", error);
    throw error;
  }
}

async function seedRegions(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "regions" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS regions (
        regionID VARCHAR(255) NOT NULL,
        regionDescription VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "regions" table`);

    // Insert data into the "regions" table
    const insertedRegions = await Promise.all(
      regions.map(
        (territory) => client.sql`
        INSERT INTO regions (regionID, regionDescription)
        VALUES (${territory.regionID}, ${territory.regionDescription});
      `
      )
    );

    console.log(`Seeded ${insertedRegions.length} regions`);

    return {
      createTable,
      regions: insertedRegions,
    };
  } catch (error) {
    console.error("Error seeding regions:", error);
    throw error;
  }
}

async function seedShippers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "shippers" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS shippers (
        shipperID VARCHAR(255) NOT NULL,
        companyName VARCHAR(255) NOT NULL,
        phone VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "shippers" table`);

    // Insert data into the "shippers" table
    const insertedShippers = await Promise.all(
      shippers.map(
        (shipper) => client.sql`
        INSERT INTO shippers (shipperID, companyName, phone)
        VALUES (${shipper.shipperID}, ${shipper.companyName}, ${shipper.phone});
      `
      )
    );

    console.log(`Seeded ${insertedShippers.length} shippers`);

    return {
      createTable,
      shippers: insertedShippers,
    };
  } catch (error) {
    console.error("Error seeding shippers:", error);
    throw error;
  }
}

async function seedSuppliers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "suppliers" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS suppliers (
        supplierID VARCHAR(255) NOT NULL,
        companyName VARCHAR(255) NOT NULL,
        contactName VARCHAR(255) NOT NULL,
        contactTitle VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        city VARCHAR(255) NOT NULL,
        region VARCHAR(255) NOT NULL,
        postalCode VARCHAR(255) NOT NULL,
        country VARCHAR(255) NOT NULL,
        phone VARCHAR(255) NOT NULL,
        fax VARCHAR(255) NOT NULL,
        homePage VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "suppliers" table`);

    // Insert data into the "suppliers" table
    const insertedSuppliers = await Promise.all(
      suppliers.map(
        (supplier) => client.sql`
        INSERT INTO suppliers (supplierID, companyName, contactName, contactTitle, address, city, region, postalCode, country, phone, fax, homePage)
        VALUES (${supplier.supplierID}, ${supplier.companyName}, ${supplier.contactName}, ${supplier.contactTitle}, ${supplier.address}, ${supplier.city}, ${supplier.region}, ${supplier.postalCode}, ${supplier.country}, ${supplier.phone}, ${supplier.fax}, ${supplier.homePage});
      `
      )
    );

    console.log(`Seeded ${insertedSuppliers.length} suppliers`);

    return {
      createTable,
      suppliers: insertedSuppliers,
    };
  } catch (error) {
    console.error("Error seeding suppliers:", error);
    throw error;
  }
}

async function seedEmployeeTerritories(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "employee_territories" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS employee_territories (
        employeeID VARCHAR(255) NOT NULL,
        territoryID VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "employee_territories" table`);

    // Insert data into the "employee_territories" table
    const insertedEmployeeTerritories = await Promise.all(
      employee_territories.map(
        (employeeTerritory) => client.sql`
        INSERT INTO employee_territories (employeeID, territoryID)
        VALUES (${employeeTerritory.employeeID}, ${employeeTerritory.territoryID});
      `
      )
    );

    console.log(
      `Seeded ${insertedEmployeeTerritories.length} employee_territories`
    );

    return {
      createTable,
      employee_territories: insertedEmployeeTerritories,
    };
  } catch (error) {
    console.error("Error seeding employee_territories:", error);
    throw error;
  }
}

async function seedTerritories(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "territories" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS territories (
        territoryID VARCHAR(255) NOT NULL,
        territoryDescription VARCHAR(255) NOT NULL,
        regionID VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "territories" table`);

    // Insert data into the "customers" table
    const insertedTerritories = await Promise.all(
      territories.map(
        (territory) => client.sql`
        INSERT INTO territories (territoryID, territoryDescription, regionID)
        VALUES (${territory.territoryID}, ${territory.territoryDescription}, ${territory.regionID});
      `
      )
    );

    console.log(`Seeded ${insertedTerritories.length} territories`);

    return {
      createTable,
      territories: insertedTerritories,
    };
  } catch (error) {
    console.error("Error seeding territories:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  // await seedCategories(client);
  // await seedCustomers(client);
  // await seedEmployees(client);
  // await seedOrderDetails(client);
  // await seedOrders(client);
  // await seedProducts(client);
  // await seedRegions(client);
  // await seedShippers(client);
  // await seedSuppliers(client);
  // await seedEmployeeTerritories(client);
  // await seedTerritories(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
