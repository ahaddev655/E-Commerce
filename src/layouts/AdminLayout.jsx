import AdminSidebar from "../components/AdminSidebar";
import { Outlet } from "react-router-dom";
import AdminHeader from "../components/AdminHeader";

function AdminLayout() {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="w-full">
        <AdminHeader />
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
