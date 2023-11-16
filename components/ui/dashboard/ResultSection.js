import React, { memo } from "react";
import ReactTable from "./ReactTable";
import { Oval } from "react-loader-spinner";

const ResultSection = ({ result, resultIsLoading }) => {
  return (
    <div className="result-container">
      <div className="font-bold text-4xl">Result</div>
      <div className="loader">
        {resultIsLoading && (
          <Oval
            ariaLabel="loading-indicator"
            height={50}
            width={50}
            strokeWidth={5}
            color="#0ea5e9"
            secondaryColor="#d1d5db"
          />
        )}
      </div>
      <div className="my-5">
        {!resultIsLoading && result === "" && (
          <div className="">Please execute a query</div>
        )}

        {!resultIsLoading && result !== undefined && result.length > 0 && (
          <ReactTable queryResult={result} />
        )}
      </div>
    </div>
  );
};
export default memo(ResultSection);
