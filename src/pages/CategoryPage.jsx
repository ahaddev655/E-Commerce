import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Filter,
  Heart,
  ShoppingBag,
  Star,
} from "lucide-react";
import dummyImage from "../assets/dummy.jpg";
import CustomDropdown from "../components/CustomDropdown";

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Newest Arrivals", value: "newest" },
  { label: "Price: Low to High", value: "low-high" },
  { label: "Price: High to Low", value: "high-low" },
];

function CategoryPage() {
  // --- STATE AND LOGIC MOVED INSIDE ---
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalItems = 40;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = Array(totalItems)
    .fill({ title: "Signature Amber Item", price: 45.0 })
    .slice(indexOfFirstItem, indexOfLastItem);
  // ------------------------------------

  return (
    <div className="bg-[#f8f8f8] min-h-screen p-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Added gap and fixed structure for the header row */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-4">
          {/* Filter Button */}
          <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-2xl text-xs font-bold text-gray-700 hover:border-amber-500 transition-all shadow-sm">
            <Filter size={14} /> Filter Products
          </button>

          {/* Custom Dropdown */}
          <CustomDropdown
            label="Sort Results"
            options={sortOptions}
            onSelect={(opt) => console.log(opt.value)}
          />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {currentItems.map((item, index) => (
            <Link to={`/main/product/accessories/flowing-airbuds`}>
              <div key={index} className="group flex flex-col">
                {/* Image Container */}
                <div className="relative aspect-[4/5] rounded-[2rem] bg-white border border-gray-100 overflow-hidden transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] group-hover:-translate-y-1">
                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-10 bg-amber-600 text-white text-[9px] font-black px-2 py-1 rounded-md uppercase tracking-tighter">
                    New
                  </div>

                  <button className="absolute top-4 right-4 z-10 p-2.5 bg-white/90 backdrop-blur-md rounded-full text-gray-400 hover:text-red-500 transition-all">
                    <Heart size={16} />
                  </button>

                  <img
                    src={dummyImage}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Bottom Action Bar */}
                  <div className="absolute bottom-4 inset-x-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="w-full bg-gray-900 text-white py-3 rounded-2xl text-[11px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl hover:bg-amber-600 transition-colors relative z-20">
                      <ShoppingBag size={14} /> Add to Bag
                    </button>
                  </div>
                </div>

                {/* Info Area */}
                <div className="mt-5 px-2">
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={10}
                        fill={i < 4 ? "#d97706" : "none"}
                        className={i < 4 ? "text-amber-600" : "text-gray-300"}
                      />
                    ))}
                    <span className="text-[10px] text-gray-400 font-bold ml-1">
                      (12)
                    </span>
                  </div>
                  <h4 className="text-gray-900 font-bold text-sm tracking-tight mb-1">
                    {item.title}
                  </h4>
                  <p className="text-amber-600 font-black text-base">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {totalItems > itemsPerPage && (
          <div className="mt-10 flex justify-center">
            <nav className="inline-flex items-center p-1.5 bg-white border border-gray-200 rounded-2xl shadow-sm">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                className="p-2 text-gray-400 hover:text-amber-600 disabled:opacity-30 transition-all"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex gap-1 px-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-9 h-9 rounded-xl text-xs font-black transition-all ${
                        currentPage === page
                          ? "bg-amber-600 text-white shadow-md shadow-amber-200"
                          : "text-gray-400 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                    >
                      {page}
                    </button>
                  ),
                )}
              </div>

              <button
                disabled={currentPage === totalPages}
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                className="p-2 text-gray-400 hover:text-amber-600 disabled:opacity-30 transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}

export default CategoryPage;
