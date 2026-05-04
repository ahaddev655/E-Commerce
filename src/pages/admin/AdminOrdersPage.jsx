import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Filter,
  Eye,
  Truck,
  CheckCircle,
  X,
  User,
  MapPin,
  CreditCard,
  Package,
  Clock,
} from "lucide-react";

function AdminOrdersPage() {
  // --- 1. SEPARATE USESTATES ---
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("All"); // Added for tab filtering
  const [searchQuery, setSearchQuery] = useState(""); // Added for search functionality

  // --- 2. DATA STATES ---
  const [orders, setOrders] = useState([
    {
      id: "ORD-7721",
      customer: "Sophia Chen",
      email: "sophia.c@example.com",
      date: "May 4, 2026",
      amount: "12,400",
      status: "Processing",
      address: "221B Baker St, London, NW1 6XE",
      items: [
        { name: "Urban Hoodie", qty: 1, price: "4,900" },
        { name: "Signature Denim", qty: 1, price: "7,500" },
      ],
    },
    {
      id: "ORD-7722",
      customer: "Marcus Wright",
      email: "m.wright@studio.com",
      date: "May 3, 2026",
      amount: "2,500",
      status: "Shipped",
      address: "10-B Beverly Hills, CA 90210",
      items: [{ name: "Signature Tee", qty: 1, price: "2,500" }],
    },
  ]);

  // --- 3. LOGIC HANDLERS ---
  const handleStatusUpdate = (newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === selectedOrder.id ? { ...order, status: newStatus } : order,
      ),
    );
    setIsStatusModalOpen(false);
  };

  const filteredOrders = orders.filter((order) => {
    const matchesTab = activeTab === "All" || order.status === activeTab;
    const matchesSearch =
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  // --- 4. ANIMATION VARIANTS ---
  const overlay = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
  const modal = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", damping: 25, stiffness: 300 },
    },
    exit: { opacity: 0, scale: 0.98, y: 20, transition: { duration: 0.2 } },
  };

  return (
    <div className="p-4 md:p-10 min-h-screen bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Page Header */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-black text-stone-900 tracking-tighter uppercase">
              Orders
            </h1>
            <p className="text-[11px] text-stone-400 font-black uppercase tracking-[0.3em] mt-2">
              Logistics & Fulfillment
            </p>
          </div>
          <div className="flex gap-3 bg-white p-2 rounded-2xl border border-stone-100 shadow-sm">
            {["All", "Processing", "Shipped", "Delivered"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all ${
                  activeTab === tab
                    ? "bg-stone-900 text-white"
                    : "hover:bg-stone-50 text-stone-400"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </header>

        {/* Search & Utility */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1 group">
            <Search
              className="absolute left-5 top-1/2 -translate-y-1/2 text-stone-300 group-focus-within:text-amber-600 transition-colors"
              size={18}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Order ID or Customer..."
              className="w-full bg-white border border-stone-100 rounded-2xl py-4 pl-14 pr-6 text-sm font-medium outline-none focus:ring-4 focus:ring-stone-900/5 transition-all shadow-sm"
            />
          </div>
          <button className="flex items-center justify-center gap-3 px-8 bg-white border border-stone-100 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:border-amber-600 transition-all">
            <Filter size={18} /> Export
          </button>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-[3rem] border border-stone-100 shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-stone-50/50 border-b border-stone-100">
                <th className="py-6 px-8 text-[10px] font-black text-stone-400 uppercase tracking-widest">
                  Order ID
                </th>
                <th className="py-6 px-8 text-[10px] font-black text-stone-400 uppercase tracking-widest">
                  Customer
                </th>
                <th className="py-6 px-8 text-[10px] font-black text-stone-400 uppercase tracking-widest">
                  Status
                </th>
                <th className="py-6 px-8 text-[10px] font-black text-stone-400 uppercase tracking-widest">
                  Total
                </th>
                <th className="py-6 px-8 text-right"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50">
              {filteredOrders.map((order) => (
                <tr
                  key={order.id}
                  className="group hover:bg-stone-50/20 transition-all"
                >
                  <td className="py-6 px-8 text-xs font-black text-stone-900">
                    {order.id}
                  </td>
                  <td className="py-6 px-8">
                    <p className="text-xs font-bold text-stone-900">
                      {order.customer}
                    </p>
                    <p className="text-[10px] text-stone-400 font-medium">
                      {order.date}
                    </p>
                  </td>
                  <td className="py-6 px-8">
                    <span
                      className={`text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full ${
                        order.status === "Shipped"
                          ? "bg-emerald-50 text-emerald-600"
                          : order.status === "Delivered"
                            ? "bg-stone-900 text-white"
                            : "bg-amber-50 text-amber-600"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="py-6 px-8 text-xs font-black text-stone-900">
                    Rs. {order.amount}
                  </td>
                  <td className="py-6 px-8 text-right">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => {
                          setSelectedOrder(order);
                          setIsDetailsOpen(true);
                        }}
                        className="p-3 text-stone-400 hover:text-stone-900 hover:bg-stone-50 rounded-xl transition-all"
                      >
                        <Eye size={18} />
                      </button>
                      <button
                        onClick={() => {
                          setSelectedOrder(order);
                          setIsStatusModalOpen(true);
                        }}
                        className="p-3 text-stone-400 hover:text-amber-600 hover:bg-stone-50 rounded-xl transition-all"
                      >
                        <Truck size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredOrders.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="py-20 text-center text-stone-400 text-xs font-bold uppercase tracking-widest"
                  >
                    No orders found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* --- MODALS --- */}
      <AnimatePresence>
        {/* 1. ORDER DETAILS POPUP */}
        {isDetailsOpen && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-6">
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={overlay}
              className="absolute inset-0 bg-stone-900/40 backdrop-blur-md"
              onClick={() => setIsDetailsOpen(false)}
            />
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modal}
              className="relative bg-white w-full max-w-4xl rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Left: Shipping & Billing Info */}
              <div className="w-full md:w-[40%] bg-stone-50 p-10 space-y-10 border-r border-stone-100 overflow-y-auto">
                <div className="space-y-4">
                  <h4 className="text-[10px] font-black text-stone-400 uppercase tracking-[0.3em]">
                    Customer Profile
                  </h4>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-stone-100 shadow-sm">
                      <User size={20} className="text-stone-300" />
                    </div>
                    <div>
                      <p className="text-sm font-black text-stone-900">
                        {selectedOrder?.customer}
                      </p>
                      <p className="text-xs text-stone-400 font-medium">
                        {selectedOrder?.email}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-[10px] font-black text-stone-400 uppercase tracking-[0.3em]">
                    Delivery Address
                  </h4>
                  <div className="flex gap-4">
                    <MapPin size={18} className="text-stone-300 shrink-0" />
                    <p className="text-xs text-stone-600 font-medium leading-relaxed">
                      {selectedOrder?.address}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t border-stone-100">
                  <h4 className="text-[10px] font-black text-stone-400 uppercase tracking-[0.3em]">
                    Payment Method
                  </h4>
                  <div className="flex items-center gap-4">
                    <CreditCard size={18} className="text-stone-300" />
                    <p className="text-xs text-stone-600 font-bold uppercase tracking-widest">
                      Mastercard •••• 4412
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Itemized List */}
              <div className="w-full md:w-[60%] p-10 flex flex-col overflow-y-auto">
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <h3 className="text-2xl font-black text-stone-900 tracking-tighter uppercase leading-none">
                      {selectedOrder?.id}
                    </h3>
                    <p className="text-[10px] text-amber-600 font-black mt-2 uppercase tracking-widest">
                      Placed on {selectedOrder?.date}
                    </p>
                  </div>
                  <button
                    onClick={() => setIsDetailsOpen(false)}
                    className="p-2 hover:bg-stone-50 rounded-xl transition-all"
                  >
                    <X />
                  </button>
                </div>

                <div className="flex-1 space-y-6">
                  {selectedOrder?.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center py-4 border-b border-stone-50"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-stone-50 rounded-xl flex items-center justify-center text-stone-200">
                          <Package size={20} />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-stone-900">
                            {item.name}
                          </p>
                          <p className="text-[10px] text-stone-400 font-black uppercase">
                            Qty: {item.qty}
                          </p>
                        </div>
                      </div>
                      <p className="text-xs font-black text-stone-900">
                        Rs. {item.price}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t-2 border-stone-900/5 space-y-3">
                  <div className="flex justify-between text-stone-400 text-[10px] font-black uppercase tracking-widest">
                    <span>Subtotal</span>
                    <span>Rs. {selectedOrder?.amount}</span>
                  </div>
                  <div className="flex justify-between text-stone-900 text-lg font-black tracking-tighter">
                    <span>Total Bill</span>
                    <span>Rs. {selectedOrder?.amount}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* 2. UPDATE STATUS POPUP */}
        {isStatusModalOpen && (
          <div className="fixed inset-0 z-110 flex items-center justify-center p-6">
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={overlay}
              className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
              onClick={() => setIsStatusModalOpen(false)}
            />
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modal}
              className="relative bg-white w-full max-w-sm rounded-[2.5rem] p-10 text-center shadow-2xl"
            >
              <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Truck size={32} />
              </div>
              <h3 className="text-xl font-black text-stone-900 tracking-tight mb-2">
                Update Shipment
              </h3>
              <p className="text-stone-400 text-xs font-medium mb-8">
                Change status for{" "}
                <span className="text-stone-900 font-bold">
                  {selectedOrder?.id}
                </span>
              </p>

              <div className="space-y-3 mb-8">
                {["Processing", "Shipped", "Delivered"].map((status) => (
                  <button
                    key={status}
                    onClick={() => handleStatusUpdate(status)}
                    className={`w-full py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-3 ${
                      selectedOrder?.status === status
                        ? "bg-stone-900 text-white"
                        : "bg-stone-50 hover:bg-stone-100 text-stone-900"
                    }`}
                  >
                    {status === "Delivered" ? (
                      <CheckCircle size={14} />
                    ) : (
                      <Clock size={14} />
                    )}
                    {status}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setIsStatusModalOpen(false)}
                className="text-[10px] font-black text-stone-400 uppercase tracking-widest"
              >
                Cancel
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default AdminOrdersPage;
