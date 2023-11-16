import SideNav from "./sidenav";

export default function DashboardLayout({ children }) {
  return (
    <>
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12 rounded border bg-blue-600 m-4">
          {children}
        </div>
      </div>
    </>
  );
}
