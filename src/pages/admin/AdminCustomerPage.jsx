import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Mail,
  Phone,
  MapPin,
  Trash2,
  X,
  ShieldAlert,
  Users,
} from "lucide-react";

function AdminCustomerPage() {
  // --- 1. STATES ---
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // --- 2. MOCK DATA ---
  const [customers, setCustomers] = useState([
    {
      id: "CUST-101",
      name: "Sophia Chen",
      email: "sophia.c@example.com",
      phone: "+44 20 7946 0958",
      joined: "Jan 12, 2024",
      totalOrders: 12,
      totalSpent: "84,200",
      address: "221B Baker St, London, NW1 6XE",
      status: "Active",
    },
    {
      id: "CUST-102",
      name: "Marcus Wright",
      email: "m.wright@studio.com",
      phone: "+1 213 555 0189",
      joined: "Mar 05, 2024",
      totalOrders: 3,
      totalSpent: "15,500",
      address: "10-B Beverly Hills, CA 90210",
      status: "Active",
    },
  ]);

  // --- 3. HANDLERS ---
  const handleDeleteCustomer = () => {
    setCustomers(customers.filter((c) => c.id !== selectedCustomer.id));
    setIsDeleteModalOpen(false);
    setSelectedCustomer(null);
  };

  const filteredCustomers = customers.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.email.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // --- 4. ANIMATION VARIANTS ---
  const overlay = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
  const modal = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", damping: 25, stiffness: 300 },
    },
    exit: { opacity: 0, scale: 0.98, y: 15, transition: { duration: 0.2 } },
  };

  return (
    <div className="p-4 md:p-10 min-h-screen bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-black text-stone-900 tracking-tighter uppercase">
              Customers
            </h1>
            <p className="text-[11px] text-stone-400 font-black uppercase tracking-[0.3em] mt-2">
              CRM & User Management
            </p>
          </div>
          <div className="bg-white px-6 py-4 rounded-2xl border border-stone-100 shadow-sm">
            <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest">
              Total Customers
            </p>
            <p className="text-2xl font-black text-stone-900">
              {customers.length}
            </p>
          </div>
        </header>

        {/* Search Bar */}
        <div className="relative group">
          <Search
            className="absolute left-5 top-1/2 -translate-y-1/2 text-stone-300 group-focus-within:text-stone-900 transition-colors"
            size={20}
          />
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-stone-100 rounded-3xl py-5 pl-14 pr-6 text-sm font-medium outline-none shadow-sm focus:ring-4 focus:ring-stone-900/5 transition-all"
          />
        </div>

        {/* Table */}
        {filteredCustomers.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-32 px-8 text-center"
          >
            {/* Minimalist Empty State Icon */}
            <div className="w-20 h-20 bg-stone-50 rounded-4xl flex items-center justify-center text-stone-200 mb-6 border border-stone-100">
              <Users size={32} strokeWidth={1.5} />
            </div>

            {/* Typography matches your signature headers */}
            <h3 className="text-xl font-black text-stone-900 tracking-tighter uppercase">
              No Customers Found
            </h3>

            <p className="text-[11px] text-stone-400 font-black uppercase tracking-[0.2em] mt-3 max-w-60 leading-relaxed">
              We couldn't find any matches for your current filters or search
              terms.
            </p>

            {/* Action to reset */}
            <button
              onClick={() => setSearchTerm("")} // or your reset logic
              className="mt-8 px-8 py-4 bg-stone-900 text-white text-[10px] font-black uppercase tracking-widest rounded-2xl hover:bg-amber-600 transition-all duration-300 shadow-xl shadow-stone-200"
            >
              Clear All Filters
            </button>
          </motion.div>
        ) : (
          <div className="bg-white rounded-[3rem] border border-stone-100 shadow-sm overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-stone-50/50 border-b border-stone-100">
                  <th className="py-6 px-8 text-[10px] font-black text-stone-400 uppercase tracking-widest">
                    Customer
                  </th>
                  <th className="py-6 px-8 text-[10px] font-black text-stone-400 uppercase tracking-widest">
                    Account Date
                  </th>
                  <th className="py-6 px-8 text-[10px] font-black text-stone-400 uppercase tracking-widest">
                    Orders
                  </th>
                  <th className="py-6 px-8 text-[10px] font-black text-stone-400 uppercase tracking-widest">
                    Revenue
                  </th>
                  <th className="py-6 px-8 text-right"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-50">
                {filteredCustomers.map((customer) => (
                  <tr
                    key={customer.id}
                    className="group hover:bg-stone-50/20 transition-all cursor-pointer"
                    onClick={() => {
                      setSelectedCustomer(customer);
                      setIsDetailsOpen(true);
                    }}
                  >
                    <td className="py-6 px-8">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center text-stone-400 font-bold text-xs uppercase">
                          {customer.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-stone-900">
                            {customer.name}
                          </p>
                          <p className="text-[10px] text-stone-400 font-medium">
                            {customer.email}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-6 px-8 text-xs font-medium text-stone-600">
                      {customer.joined}
                    </td>
                    <td className="py-6 px-8">
                      <span className="bg-stone-100 text-stone-900 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">
                        {customer.totalOrders} Orders
                      </span>
                    </td>
                    <td className="py-6 px-8 text-sm font-black text-stone-900">
                      Rs. {customer.totalSpent}
                    </td>
                    <td className="py-6 px-8 text-right">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedCustomer(customer);
                          setIsDeleteModalOpen(true);
                        }}
                        className="p-3 text-stone-300 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <AnimatePresence>
        {/* --- CUSTOMER DETAILS MODAL --- */}
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
              className="relative bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl overflow-hidden"
            >
              <div className="p-10 bg-stone-900 text-white flex justify-between items-center">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center text-3xl font-black">
                    {selectedCustomer?.name.charAt(0)}
                  </div>
                  <div>
                    <h2 className="text-2xl font-black tracking-tighter uppercase">
                      {selectedCustomer?.name}
                    </h2>
                    <p className="text-stone-400 text-[10px] font-black uppercase tracking-widest">
                      {selectedCustomer?.id}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsDetailsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-full transition-all"
                >
                  <X />
                </button>
              </div>

              <div className="p-10 grid grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-[10px] font-black text-stone-400 uppercase tracking-widest mb-3">
                      Contact Info
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm font-bold text-stone-900">
                        <Mail size={16} className="text-stone-300" />{" "}
                        {selectedCustomer?.email}
                      </div>
                      <div className="flex items-center gap-3 text-sm font-bold text-stone-900">
                        <Phone size={16} className="text-stone-300" />{" "}
                        {selectedCustomer?.phone}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-stone-400 uppercase tracking-widest mb-3">
                      Primary Address
                    </h4>
                    <div className="flex gap-3 text-sm font-medium text-stone-600 leading-relaxed">
                      <MapPin size={16} className="text-stone-300 shrink-0" />{" "}
                      {selectedCustomer?.address}
                    </div>
                  </div>
                </div>

                <div className="bg-stone-50 rounded-4xl p-8 space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black text-stone-400 uppercase tracking-widest">
                      Total Spending
                    </span>
                    <span className="text-xl font-black text-stone-900">
                      Rs. {selectedCustomer?.totalSpent}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black text-stone-400 uppercase tracking-widest">
                      Loyalty Rank
                    </span>
                    <span className="text-[10px] bg-amber-100 text-amber-700 px-3 py-1 rounded-full font-black uppercase tracking-widest">
                      Platinum
                    </span>
                  </div>
                  <button className="w-full bg-white border border-stone-200 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-stone-900 hover:text-white transition-all">
                    View All Transactions
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* --- DELETE CONFIRMATION --- */}
        {isDeleteModalOpen && (
          <div className="fixed inset-0 z-110 flex items-center justify-center p-6">
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={overlay}
              className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
              onClick={() => setIsDeleteModalOpen(false)}
            />
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modal}
              className="relative bg-white w-full max-w-sm rounded-[2.5rem] p-10 text-center shadow-2xl"
            >
              <div className="w-20 h-20 bg-rose-50 text-rose-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldAlert size={40} />
              </div>
              <h3 className="text-xl font-black text-stone-900 tracking-tight mb-2">
                Restrict Account?
              </h3>
              <p className="text-stone-400 text-xs font-medium mb-8">
                This will suspend access for{" "}
                <span className="text-stone-900 font-bold">
                  "{selectedCustomer?.name}"
                </span>
                . This action can be reversed later.
              </p>
              <div className="flex flex-col gap-3">
                <button
                  onClick={handleDeleteCustomer}
                  className="w-full bg-rose-600 text-white py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-rose-700 transition-all"
                >
                  Confirm Restriction
                </button>
                <button
                  onClick={() => setIsDeleteModalOpen(false)}
                  className="w-full bg-stone-100 text-stone-400 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default AdminCustomerPage;
