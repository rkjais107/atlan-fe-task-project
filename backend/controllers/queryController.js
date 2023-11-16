import "dotenv/config";
require("dotenv").config();
import { sql } from "@vercel/postgres";

export async function runSQLQuery(req, res) {
  const { query } = req.body;
  const client = await sql.connect();
  try {
    const queryResult = await client.query(query); // Use client.query for parameterized queries
    console.log("Query result:", queryResult.rows);
    client.release();
    res
      .status(200)
      .send({
        message: "Query run successfully!!",
        queryResult: queryResult.rows,
      });
  } catch (error) {
    console.error("Error running query:", error.message);
    client.release();
    res
      .status(500)
      .send({ message: "Internal Server Error", error: error.message });
  }
}
