import { Bell, Calendar } from "lucide-react";

function AdminHeader() {
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
        </div>
      </div>
    </header>
  );
}

export default AdminHeader;
