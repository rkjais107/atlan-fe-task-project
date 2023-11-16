import DashboardLayout from "@/components/ui/dashboard/layout";
import TABLE_NAMES from "@/constants/constants";
import React from "react";
import EastIcon from "@mui/icons-material/East";
import Link from "next/link";

const Tables = () => {
  return (
    <>
      <DashboardLayout>
        <span className="font-bold text-4xl">Tables</span>
        <div className="grid grid-cols-3 gap-6 rounded border p-5 my-5">
          {TABLE_NAMES.map((table, index) => (
            <div
              key={index}
              className="rounded border p-2.5 bg-white flex justify-between items-center"
            >
              <span className="font-semibold">{table}</span>
              <Link href={`/dashboard/tables/${table}`}>
                <EastIcon />
              </Link>
            </div>
          ))}
        </div>
      </DashboardLayout>
    </>
  );
};

export default Tables;
