import React from "react";
import {
  TrendingUp,
  ShoppingBag,
  Users,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
} from "lucide-react";

function AdminOverviewPage() {
  const stats = [
    {
      label: "Total Revenue",
      value: "Rs. 842,500",
      change: "+12.5%",
      trend: "up",
      icon: TrendingUp,
    },
    {
      label: "Total Orders",
      value: "1,240",
      change: "+8.2%",
      trend: "up",
      icon: ShoppingBag,
    },
    {
      label: "Active Customers",
      value: "892",
      change: "-2.4%",
      trend: "down",
      icon: Users,
    },
  ];

  const recentOrders = [
    {
      id: "#ORD-7721",
      customer: "Sophia Chen",
      product: "Urban Hoodie",
      amount: "4,900",
      status: "Paid",
    },
    {
      id: "#ORD-7722",
      customer: "Marcus Wright",
      product: "Signature Tee",
      amount: "2,500",
      status: "Pending",
    },
    {
      id: "#ORD-7723",
      customer: "Elena Rossi",
      product: "Premium Denim",
      amount: "8,200",
      status: "Paid",
    },
  ];

  return (
    <div className="p-8 space-y-10 animate-in fade-in duration-700">
      {/* 1. Header & Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white border border-stone-100 p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-500 group"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-4 bg-stone-50 rounded-2xl group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <stat.icon size={24} />
              </div>
              <div
                className={`flex items-center gap-1 text-[11px] font-black uppercase tracking-tighter ${
                  stat.trend === "up" ? "text-emerald-500" : "text-rose-500"
                }`}
              >
                {stat.trend === "up" ? (
                  <ArrowUpRight size={14} />
                ) : (
                  <ArrowDownRight size={14} />
                )}
                {stat.change}
              </div>
            </div>
            <div>
              <p className="text-[10px] font-black text-stone-400 uppercase tracking-[0.2em] mb-1">
                {stat.label}
              </p>
              <h3 className="text-3xl font-black text-stone-900 tracking-tighter">
                {stat.value}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* 2. Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Orders Table */}
        <div className="lg:col-span-2 bg-white border border-stone-100 rounded-[3rem] overflow-hidden shadow-sm">
          <div className="p-8 flex items-center justify-between border-b border-stone-50">
            <div>
              <h3 className="text-sm font-black text-stone-900 uppercase tracking-widest">
                Recent Activity
              </h3>
              <p className="text-[10px] text-stone-400 font-bold uppercase tracking-tighter mt-1">
                Latest store transactions
              </p>
            </div>
            <button className="text-[10px] font-black text-stone-900 uppercase tracking-widest hover:text-amber-600 transition-colors">
              View All
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-stone-50/50">
                  {["Order ID", "Customer", "Amount", "Status", ""].map(
                    (head) => (
                      <th
                        key={head}
                        className="text-left py-5 px-8 text-[10px] font-black text-stone-400 uppercase tracking-widest"
                      >
                        {head}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-50">
                {recentOrders.map((order, i) => (
                  <tr
                    key={i}
                    className="hover:bg-stone-50/30 transition-colors group"
                  >
                    <td className="py-6 px-8 text-xs font-bold text-stone-900">
                      {order.id}
                    </td>
                    <td className="py-6 px-8 text-xs font-medium text-stone-600">
                      {order.customer}
                    </td>
                    <td className="py-6 px-8 text-xs font-black text-stone-900">
                      Rs. {order.amount}
                    </td>
                    <td className="py-6 px-8">
                      <span
                        className={`text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full ${
                          order.status === "Paid"
                            ? "bg-emerald-50 text-emerald-600"
                            : "bg-amber-50 text-amber-600"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="py-6 px-8 text-right">
                      <button className="p-2 hover:bg-white rounded-xl transition-colors">
                        <MoreHorizontal size={16} className="text-stone-300" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sidebar Info Card */}
        <div className="space-y-6">
          <div className="bg-stone-900 rounded-[3rem] p-8 text-white relative overflow-hidden group">
            <div className="relative z-10">
              <h4 className="text-[10px] font-black text-stone-400 uppercase tracking-[0.3em] mb-4">
                Inventory Alert
              </h4>
              <p className="text-xl font-bold leading-tight mb-6">
                5 items are running low on stock.
              </p>
              <button className="w-full bg-white text-stone-900 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-amber-600 hover:text-white transition-all duration-300">
                Restock Now
              </button>
            </div>
            {/* Abstract decorative shape */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-amber-600/20 rounded-full blur-3xl group-hover:bg-amber-600/40 transition-all duration-700" />
          </div>

          <div className="bg-amber-50 rounded-[3rem] p-8 border border-amber-100">
            <h4 className="text-[10px] font-black text-amber-800/50 uppercase tracking-[0.3em] mb-2">
              Performance Tip
            </h4>
            <p className="text-xs font-semibold text-amber-900 leading-relaxed">
              Your "Premium Urban Hoodie" conversion rate is up by 15% this
              week. Consider featuring it on the homepage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminOverviewPage;
