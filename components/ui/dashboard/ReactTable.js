import React from "react";

function ReactTable({ queryResult }) {
  // Extract column names dynamically
  const queryResultFormatted = () => {
    if (!Array.isArray(queryResult) || queryResult.length === 0) {
      return [];
    }

    const columns = Object.keys(queryResult[0]);
    const formattedHeaders = {};
    const formattedData = [formattedHeaders];

    columns.forEach((col, idx) => {
      formattedHeaders[idx.toString()] = col;
    });

    queryResult.forEach((entry) => {
      const formattedEntry = {};
      columns.forEach((col, idx) => {
        formattedEntry[idx.toString()] = entry[col];
      });
      formattedData.push(formattedEntry);
    });

    return formattedData;
  };

  const columnsArray = Object.values(queryResultFormatted()[0]);
  console.log("columnsArray:", columnsArray);

  // Create columns for react-table
  const columns = columnsArray.map((col, idx) => ({
    Header: col,
    accessor: `${idx}`,
  }));

  console.log("columns:", columns);

  const data = Object.values(queryResultFormatted().slice(1));

  // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
  //   useTable({ columns, data });

  // console.log(rows);

  return (
    <table style={{ borderSpacing: "0px" }}>
      <thead>
        <tr>
          {Object.keys(queryResult[0]).map((tableHead, index) => (
            <th
              key={index}
              style={{
                borderBottom: "solid 0.2px #d1d5db",
                background: "#0EA5E9",
                color: "white",
                fontWeight: "bold",
                fontSize: "14px",
                padding: "15px 8px",
                textAlign: "left",
              }}
            >
              {tableHead}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {queryResult.map((row, index) => (
          <tr key={index}>
            {Object.keys(row).map((rowKey, index) => (
              <td
                key={index}
                style={{
                  fontSize: "14px",
                  padding: "10px 8px",
                  borderBottom: "solid 0.2px #d1d5db",
                  background: "#f9fafb",
                }}
              >
                {row[rowKey]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ReactTable;
