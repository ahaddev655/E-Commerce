import React, { useState } from "react";
import {
  Search,
  Bell,
  Calendar,
  ChevronDown,
  User,
  Settings,
  LogOut,
  ShieldCheck,
} from "lucide-react";

function AdminHeader() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Format current date: "Mon, May 4"
  const currentDate = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  }).format(new Date());

  const pageTitle = "Dashboard Overview";

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-stone-100 px-8 py-5">
      <div className="flex items-center justify-between">
        {/* Left: Contextual Info & Search */}
        <div>
          <h2 className="text-stone-900 font-black text-xl tracking-tighter uppercase">
            {pageTitle}
          </h2>
          <div className="flex items-center gap-2 mt-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <p className="text-[9px] text-stone-400 font-black uppercase tracking-[0.2em]">
              System Live — 2026
            </p>
          </div>
        </div>

        {/* Right: Actions & Functional Dropdown */}
        <div className="flex items-center gap-4">
          {/* Dynamic Date Display */}
          <div className="hidden md:flex items-center gap-3 px-4 py-2.5 bg-stone-50 border border-stone-100 rounded-xl">
            <Calendar size={14} className="text-stone-400" />
            <span className="text-[10px] font-black text-stone-600 uppercase tracking-widest">
              {currentDate}
            </span>
          </div>

          {/* Notifications */}
          <button className="relative p-3 bg-white border border-stone-100 hover:bg-stone-50 rounded-2xl transition-all group">
            <Bell
              size={18}
              className="text-stone-600 group-hover:rotate-12 transition-transform"
            />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-amber-600 rounded-full border-2 border-white"></span>
          </button>

          <div className="h-10 w-px bg-stone-100 mx-2" />

          {/* Functional Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className={`flex items-center gap-3 p-1 pr-4 rounded-2xl transition-all group ${isProfileOpen ? "bg-stone-50" : "hover:bg-stone-50"}`}
            >
              <div className="w-10 h-10 rounded-xl bg-stone-900 flex items-center justify-center text-white text-xs font-black shadow-lg shadow-stone-200 overflow-hidden">
                <span className="group-hover:scale-110 transition-transform">
                  AR
                </span>
              </div>
              <div className="text-left hidden sm:block">
                <p className="text-[10px] font-black text-stone-900 uppercase tracking-tight leading-none">
                  Alex Rivers
                </p>
                <p className="text-[9px] text-stone-400 font-bold uppercase tracking-tighter mt-1">
                  Master Admin
                </p>
              </div>
              <ChevronDown
                size={14}
                className={`text-stone-300 transition-transform duration-300 ${isProfileOpen ? "rotate-180 text-stone-900" : ""}`}
              />
            </button>

            {/* Dropdown Menu */}
            {isProfileOpen && (
              <>
                {/* Invisible backdrop to close dropdown when clicking away */}
                <div
                  className="fixed inset-0 z-[-1]"
                  onClick={() => setIsProfileOpen(false)}
                />
                <div className="absolute right-0 mt-3 w-56 bg-white border border-stone-100 rounded-4xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-3 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-4 py-3 mb-2 border-b border-stone-50">
                    <p className="text-[9px] font-black text-stone-400 uppercase tracking-widest">
                      Logged in as
                    </p>
                    <p className="text-xs font-bold text-stone-900">
                      alex.rivers@estore.com
                    </p>
                  </div>

                  <div className="space-y-1">
                    <button className="w-full flex items-center gap-3 px-4 py-3 text-[11px] font-black text-stone-600 uppercase tracking-widest hover:bg-stone-50 hover:text-amber-600 rounded-xl transition-colors">
                      <User size={14} /> My Profile
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 text-[11px] font-black text-stone-600 uppercase tracking-widest hover:bg-stone-50 hover:text-amber-600 rounded-xl transition-colors">
                      <ShieldCheck size={14} /> Permissions
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 text-[11px] font-black text-stone-600 uppercase tracking-widest hover:bg-stone-50 hover:text-amber-600 rounded-xl transition-colors">
                      <Settings size={14} /> Account Settings
                    </button>
                  </div>

                  <div className="mt-2 pt-2 border-t border-stone-50">
                    <button className="w-full flex items-center gap-3 px-4 py-3 text-[11px] font-black text-red-500 uppercase tracking-widest hover:bg-red-50 rounded-xl transition-colors">
                      <LogOut size={14} /> Sign Out
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default AdminHeader;
