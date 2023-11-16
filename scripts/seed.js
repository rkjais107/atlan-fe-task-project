require("dotenv").config();
const { db } = require("@vercel/postgres");
const { territories } = require("../lib/json-data/territories");
const { categories } = require("../lib/json-data/categories");

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

  await seedCategories(client);
  // await seedTerritories(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
