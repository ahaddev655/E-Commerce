import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Filter,
  Edit3,
  Trash2,
  X,
  Image as ImageIcon,
  AlertCircle,
  Tag,
  Box,
} from "lucide-react";

function AdminProductsPage() {
  // --- 1. INDEPENDENT MODAL STATES ---
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // --- 2. DATA STATES ---
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Premium Urban Hoodie",
      sku: "UH-001",
      price: "4,900",
      stock: 12,
      category: "Apparel",
      desc: "A heavy-weight cotton blend hoodie with dropped shoulders.",
    },
    {
      id: 2,
      name: "Signature Cotton Tee",
      sku: "ST-042",
      price: "2,500",
      stock: 45,
      category: "Apparel",
      desc: "100% organic Peruvian pima cotton for a silky smooth finish.",
    },
  ]);

  // --- NEW: HANDLER FUNCTIONS ---

  const handleAddProduct = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newProduct = {
      id: Date.now(), // Simple unique ID
      name: formData.get("name"),
      sku: formData.get("sku"),
      price: formData.get("price"),
      stock: 0, // Default stock
      category: "New Arrival",
      desc: formData.get("desc"),
    };
    setProducts([...products, newProduct]);
    setIsAddModalOpen(false);
  };

  const handleEditProduct = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedProducts = products.map((p) =>
      p.id === selectedProduct.id
        ? {
            ...p,
            name: formData.get("name"),
            sku: formData.get("sku"),
            price: formData.get("price"),
            desc: formData.get("desc"),
          }
        : p,
    );
    setProducts(updatedProducts);
    setIsEditModalOpen(false);
  };

  const handleDeleteProduct = () => {
    setProducts(products.filter((p) => p.id !== selectedProduct.id));
    setIsDeleteModalOpen(false);
    setSelectedProduct(null);
  };

  // --- 3. ANIMATION VARIANTS ---
  const overlay = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
  const modal = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", damping: 25, stiffness: 300 },
    },
    exit: { opacity: 0, scale: 0.95, y: 10, transition: { duration: 0.2 } },
  };

  return (
    <div className="p-4 md:p-10 min-h-screen bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-black text-stone-900 tracking-tighter uppercase">
              Inventory
            </h1>
            <p className="text-[11px] text-stone-400 font-black uppercase tracking-[0.3em] mt-2">
              Signature Boutique Hub
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="p-4 bg-white border border-stone-100 rounded-2xl text-stone-600 shadow-sm transition-all hover:border-amber-600"
            >
              <Filter size={20} />
            </button>
            <button
              onClick={() => {
                setSelectedProduct(null);
                setIsAddModalOpen(true);
              }}
              className="flex items-center gap-3 bg-stone-900 text-white px-8 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-amber-600 transition-all shadow-xl active:scale-95"
            >
              <Plus size={18} /> New Product
            </button>
          </div>
        </header>

        {/* Table View */}
        <div className="bg-white rounded-[3rem] border border-stone-100 shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-stone-50 bg-stone-50/30">
                <th className="py-6 px-8 text-[10px] font-black text-stone-400 uppercase tracking-widest">
                  Product Listing
                </th>
                <th className="py-6 px-8 text-[10px] font-black text-stone-400 uppercase tracking-widest">
                  Inventory
                </th>
                <th className="py-6 px-8 text-[10px] font-black text-stone-400 uppercase tracking-widest">
                  Price
                </th>
                <th className="py-6 px-8 text-right"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50">
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="group hover:bg-stone-50/20 transition-all"
                >
                  <td className="py-6 px-8">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-stone-50 rounded-2xl flex items-center justify-center text-stone-200 border border-stone-100">
                        <ImageIcon size={24} />
                      </div>
                      <button
                        onClick={() => {
                          setSelectedProduct(product);
                          setIsDetailsOpen(true);
                        }}
                        className="text-left hover:text-amber-600 transition-colors"
                      >
                        <h4 className="text-sm font-bold text-stone-900">
                          {product.name}
                        </h4>
                        <p className="text-[10px] text-stone-400 font-black uppercase tracking-tighter mt-0.5">
                          {product.sku}
                        </p>
                      </button>
                    </div>
                  </td>
                  <td className="py-6 px-8">
                    <span className="text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter bg-stone-100 text-stone-600">
                      {product.stock} Units
                    </span>
                  </td>
                  <td className="py-6 px-8 text-sm font-black text-stone-900">
                    Rs. {product.price}
                  </td>
                  <td className="py-6 px-8 text-right">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => {
                          setSelectedProduct(product);
                          setIsEditModalOpen(true);
                        }}
                        className="p-3 text-stone-400 hover:text-stone-900 hover:bg-stone-50 rounded-xl transition-all"
                      >
                        <Edit3 size={18} />
                      </button>
                      <button
                        onClick={() => {
                          setSelectedProduct(product);
                          setIsDeleteModalOpen(true);
                        }}
                        className="p-3 text-stone-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <AnimatePresence>
        {/* --- ADD & EDIT MODAL --- */}
        {(isAddModalOpen || isEditModalOpen) && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-6">
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={overlay}
              className="absolute inset-0 bg-stone-900/40 backdrop-blur-md"
              onClick={() => {
                setIsAddModalOpen(false);
                setIsEditModalOpen(false);
              }}
            />
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modal}
              className="relative bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl overflow-hidden"
            >
              <form
                onSubmit={
                  isEditModalOpen ? handleEditProduct : handleAddProduct
                }
              >
                <div className="p-10 border-b border-stone-50 bg-stone-50/30 flex justify-between items-center">
                  <h3 className="text-2xl font-black text-stone-900 tracking-tighter uppercase">
                    {isEditModalOpen ? "Edit Listing" : "Create Listing"}
                  </h3>
                  <button
                    type="button"
                    onClick={() => {
                      setIsAddModalOpen(false);
                      setIsEditModalOpen(false);
                    }}
                    className="p-2 hover:bg-white rounded-full transition-all"
                  >
                    <X />
                  </button>
                </div>
                <div className="p-10 grid grid-cols-2 gap-6">
                  <div className="col-span-2 space-y-2">
                    <label className="text-[10px] font-black text-stone-400 uppercase tracking-widest">
                      Product Title
                    </label>
                    <input
                      name="name"
                      required
                      defaultValue={
                        isEditModalOpen ? selectedProduct?.name : ""
                      }
                      className="w-full bg-stone-50 border-none rounded-2xl p-4 text-xs font-bold outline-none focus:ring-2 focus:ring-stone-900/5"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-stone-400 uppercase tracking-widest">
                      SKU Code
                    </label>
                    <input
                      name="sku"
                      required
                      defaultValue={isEditModalOpen ? selectedProduct?.sku : ""}
                      className="w-full bg-stone-50 border-none rounded-2xl p-4 text-xs font-bold outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-stone-400 uppercase tracking-widest">
                      Base Price (Rs.)
                    </label>
                    <input
                      name="price"
                      required
                      defaultValue={
                        isEditModalOpen ? selectedProduct?.price : ""
                      }
                      className="w-full bg-stone-50 border-none rounded-2xl p-4 text-xs font-bold outline-none"
                    />
                  </div>
                  <div className="col-span-2 space-y-2">
                    <label className="text-[10px] font-black text-stone-400 uppercase tracking-widest">
                      Description
                    </label>
                    <textarea
                      name="desc"
                      required
                      defaultValue={
                        isEditModalOpen ? selectedProduct?.desc : ""
                      }
                      className="w-full bg-stone-50 border-none rounded-2xl p-4 text-xs font-medium outline-none h-24 resize-none"
                    />
                  </div>
                </div>
                <div className="p-10 pt-0 flex gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      setIsAddModalOpen(false);
                      setIsEditModalOpen(false);
                    }}
                    className="flex-1 py-4 text-[11px] font-black text-stone-400 uppercase tracking-widest"
                  >
                    Discard
                  </button>
                  <button
                    type="submit"
                    className="flex-2 bg-stone-900 text-white py-5 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-amber-600 transition-all"
                  >
                    {isEditModalOpen ? "Save Changes" : "Create Product"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}

        {/* --- FULL DETAILS POPUP --- */}
        {isDetailsOpen && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-6">
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={overlay}
              className="absolute inset-0 bg-stone-900/60 backdrop-blur-xl"
              onClick={() => setIsDetailsOpen(false)}
            />
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modal}
              className="relative bg-white w-full max-w-4xl rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row"
            >
              <div className="w-full md:w-1/2 bg-stone-50 p-12 flex items-center justify-center border-r border-stone-100">
                <div className="text-stone-200">
                  <ImageIcon size={120} strokeWidth={1} />
                </div>
              </div>
              <div className="w-full md:w-1/2 p-12 space-y-8">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-3xl font-black text-stone-900 tracking-tighter uppercase leading-none">
                      {selectedProduct?.name}
                    </h3>
                    <p className="text-amber-600 text-xs font-bold mt-2 uppercase tracking-widest">
                      {selectedProduct?.sku}
                    </p>
                  </div>
                  <button
                    onClick={() => setIsDetailsOpen(false)}
                    className="p-2 hover:bg-stone-50 rounded-xl transition-all"
                  >
                    <X />
                  </button>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-stone-500">
                    <Tag size={16} />
                    <span className="text-[11px] font-black uppercase tracking-widest">
                      {selectedProduct?.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-stone-500">
                    <Box size={16} />
                    <span className="text-[11px] font-black uppercase tracking-widest">
                      {selectedProduct?.stock} Units Available
                    </span>
                  </div>
                </div>
                <p className="text-xs text-stone-500 leading-relaxed font-medium">
                  {selectedProduct?.desc}
                </p>
                <div className="pt-8 border-t border-stone-50">
                  <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest mb-1">
                    Market Valuation
                  </p>
                  <p className="text-3xl font-black text-stone-900 tracking-tighter">
                    Rs. {selectedProduct?.price}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* --- DELETE MODAL --- */}
        {isDeleteModalOpen && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-6">
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
                <AlertCircle size={40} />
              </div>
              <h3 className="text-xl font-black text-stone-900 tracking-tight mb-2">
                Delete Product?
              </h3>
              <p className="text-stone-400 text-xs font-medium mb-8">
                This will permanently remove{" "}
                <span className="text-stone-900 font-bold">
                  "{selectedProduct?.name}"
                </span>
                .
              </p>
              <div className="flex flex-col gap-2">
                <button
                  onClick={handleDeleteProduct}
                  className="w-full bg-rose-600 text-white py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-rose-700 transition-all"
                >
                  Confirm Delete
                </button>
                <button
                  onClick={() => setIsDeleteModalOpen(false)}
                  className="w-full bg-stone-100 text-stone-400 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-stone-200 transition-all"
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

export default AdminProductsPage;
