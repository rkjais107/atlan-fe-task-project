import Editor from "@/components/ui/dashboard/Editor";
import DashboardLayout from "@/components/ui/dashboard/layout";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ResultSection from "./ResultSection";

const QueryEditor = () => {
  const [query, setQuery] = useState("SELECT * FROM territories");
  const [resultIsLoading, setResultIsLoading] = useState(false);
  const [result, setResult] = useState("");

  const executeQuery = async (query) => {
    if (query === "") {
      toast.custom(
        <div className="customToast">Please enter a query to execute</div>
      );
      setResultIsLoading(false);
    } else if (query.split(" ").length > 3 && query.split(" ")[3].length > 0) {
      try {
        const body = {
          query: query,
        };
        const { data } = await axios.post("/api/query", body);
        console.log("queryResult =>", data.queryResult);
        const queryResult = data.queryResult;
        setResult(queryResult);
      } catch (error) {
        console.error("Error executing query:", error);
        toast.error("Sorry! Something went wrong with your query");
      } finally {
        setResultIsLoading(false);
        toast.custom(
          <div className="customToast">Query executed successfully!!</div>
        );
      }
    } else {
      toast.error("Sorry! Something is wrong with your query");
    }
  };

  return (
    <>
      <DashboardLayout>
        <div>
          <h1>QueryEditor</h1>
          <div>
            <Editor
              setQuery={setQuery}
              query={query}
              executeQuery={executeQuery}
            />
          </div>
          <>
            {result.length !== 0 && (
              <div className="">
                <ResultSection result={result} />
              </div>
            )}
          </>
        </div>
      </DashboardLayout>
    </>
  );
};

export default QueryEditor;
