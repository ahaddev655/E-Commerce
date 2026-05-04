import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  Settings,
  ChevronRight,
  LogOut,
} from "lucide-react";

function AdminSidebar() {
  const menuItems = [
    {
      name: "Overview",
      icon: LayoutDashboard,
      path: "/6d3d3a56bb6cf8a6255debdfb6771804/admin/dashboard/",
    },
    {
      name: "Products",
      icon: Package,
      path: "/6d3d3a56bb6cf8a6255debdfb6771804/admin/dashboard/products",
    },
    {
      name: "Orders",
      icon: ShoppingBag,
      path: "/6d3d3a56bb6cf8a6255debdfb6771804/admin/dashboard/orders",
    },
    {
      name: "Customers",
      icon: ShoppingBag,
      path: "/6d3d3a56bb6cf8a6255debdfb6771804/admin/dashboard/users",
    },
    {
      name: "Settings",
      icon: Settings,
      path: "/6d3d3a56bb6cf8a6255debdfb6771804/admin/dashboard/settings",
    },
  ];

  const activeStyle =
    "bg-amber-600/10 text-amber-500 border-r-4 border-amber-600";
  const inactiveStyle =
    "text-stone-400 hover:text-white hover:bg-stone-800/50 border-r-4 border-transparent";

  return (
    <div className="h-screen w-72 bg-stone-950 border-r border-stone-800 flex flex-col sticky top-0">
      {/* Admin Branding */}
      <div className="p-8 pb-12">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-amber-600 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-900/20">
            <span className="text-white font-black text-xl tracking-tighter">
              E
            </span>
          </div>
          <div>
            <h1 className="text-white font-black text-sm tracking-widest uppercase">
              Admin
            </h1>
            <p className="text-[10px] text-stone-500 font-bold uppercase tracking-[0.2em]">
              Signature Hub
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Routes */}
      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            end
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `group flex items-center justify-between py-4 px-5 rounded-2xl transition-all duration-300 ${
                isActive ? activeStyle : inactiveStyle
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div className="flex items-center gap-4">
                  <item.icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                  <span className="text-[11px] font-black uppercase tracking-[0.2em]">
                    {item.name}
                  </span>
                </div>
                {isActive && (
                  <ChevronRight size={14} className="animate-pulse" />
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Admin Profile & Logout */}
      <div className="p-6 border-t border-stone-800 mx-4 mb-6 mt-auto bg-stone-900/50 rounded-4xl">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-10 h-10 rounded-full bg-linear-to-tr from-amber-600 to-amber-400 opacity-90 flex items-center justify-center text-white font-black text-xs">
            AR
          </div>
          <div>
            <p className="text-[11px] font-black text-white uppercase tracking-wider">
              Alex Rivers
            </p>
            <p className="text-[9px] text-stone-500 font-bold uppercase tracking-widest">
              Master Admin
            </p>
          </div>
        </div>

        <button className="w-full bg-stone-800 hover:bg-red-900/20 hover:text-red-500 text-stone-400 py-3 rounded-xl transition-all flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest">
          <LogOut size={14} />
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default AdminSidebar;
