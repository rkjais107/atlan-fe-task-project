import DashboardLayout from "@/components/ui/dashboard/layout";
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import { useRouter } from "next/router";
import ResultSection from "@/components/ui/dashboard/ResultSection";

const Tables = () => {
  const router = useRouter();
  const { name } = router.query;

  const [resultIsLoading, setResultIsLoading] = useState(false);
  const [result, setResult] = useState("");

  useEffect(() => {
    const fetchTableData = async () => {
      setResultIsLoading(true);
      try {
        const { data } = await axios.post(`/api/table/${name}`);
        console.log("queryResult =>", data.queryResult);
        const queryResult = data.queryResult;
        setResult(queryResult);
      } catch (error) {
        console.error("Error executing query:", error);
        toast.error("Sorry! Something went wrong with your query");
      } finally {
        setResultIsLoading(false);
      }
      setResultIsLoading(false);
    };
    if (name) {
      fetchTableData();
    }
  }, [name]);

  return (
    <>
      <DashboardLayout>
        <span className="font-bold text-4xl">{name}</span>
        <div className="my-5">
          <ResultSection result={result} resultIsLoading={resultIsLoading} />
        </div>
      </DashboardLayout>
    </>
  );
};

export default Tables;
