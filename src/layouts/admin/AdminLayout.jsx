import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";

const AdminLayout = () => {
  return (
    <div className="bg-[#f5f5f6] ">
      <div className="flex min-h-screen mx-auto">
        <SideBar />
        <div className="w-full">
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
