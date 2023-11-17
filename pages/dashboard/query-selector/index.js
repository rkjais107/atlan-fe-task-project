import ResultSection from "@/components/ui/dashboard/ResultSection";
import DashboardLayout from "@/components/ui/dashboard/layout";
import Sample_Queries from "@/constants/sampleQueries";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const QuerySelector = () => {
  const [resultIsLoading, setResultIsLoading] = useState(false);
  const [result, setResult] = useState("");

  const executeQuery = async (query) => {
    setResultIsLoading(true);
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
          <span className="font-bold text-4xl">Query Selector</span>
          <div className="grid grid-cols-3 gap-6 rounded border p-5 my-5">
            {Sample_Queries.map((sampleQuery, index) => (
              <div
                key={index}
                className="rounded border p-2.5 bg-white flex flex-col justify-between space-y-4"
              >
                <div className="flex flex-col space-y-2">
                  <span className="font-bold">{sampleQuery.queryName}</span>
                  <span>
                    <span className="font-semibold">Description: </span>
                    <span className="text-red-500 font-medium">
                      {sampleQuery.queryDescription}
                    </span>
                  </span>
                  <span>
                    <span className="font-semibold">Query: </span>
                    <span className="text-red-500 font-medium">
                      {sampleQuery.query}
                    </span>
                  </span>
                </div>
                <div className="flex flex-row justify-end my-2">
                  <button
                    className="bg-green-500 hover:bg-green-200 p-2.5 px-4 rounded border"
                    onClick={() => executeQuery(sampleQuery.query)}
                  >
                    <span className="text-black font-semibold">Run</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="">
            <ResultSection result={result} resultIsLoading={resultIsLoading} />
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default QuerySelector;
