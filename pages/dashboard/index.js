import DashboardLayout from "@/components/ui/dashboard/layout";
import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Link from "next/link";

const Dashboard = () => {
  return (
    <>
      <DashboardLayout>
        <div className="flex flex-col items-center justify-center">
          <span className="font-bold text-5xl">Welcome To SQL Project</span>
          <div className="my-5">
            <span className="font-semibold text-3xl">Explore our project</span>
            <div className="flex flex-col items-center justify-between my-5 space-y-5">
              <span className="font-medium">
                Tables{" "}
                <Link href={`/dashboard/tables`}>
                  {" "}
                  <ArrowRightAltIcon />
                </Link>
              </span>
              <span className="font-medium">
                Query Editor{" "}
                <Link href={`/dashboard/query-editor`}>
                  {" "}
                  <ArrowRightAltIcon />
                </Link>
              </span>
              <span className="font-medium">
                Query Selector{" "}
                <Link href={`/dashboard/query-selector`}>
                  {" "}
                  <ArrowRightAltIcon />
                </Link>
              </span>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
