import { fetchTableData } from "@/backend/controllers/queryController";

export default async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "POST":
      const { name } = req.query;
      console.log(name);
      await fetchTableData(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
