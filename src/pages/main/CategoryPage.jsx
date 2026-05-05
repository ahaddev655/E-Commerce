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
import dummyImage from "../../assets/dummy.jpg";
import CustomDropdown from "../../components/CustomDropdown";

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Newest Arrivals", value: "newest" },
  { label: "Price: Low to High", value: "low-high" },
  { label: "Price: High to Low", value: "high-low" },
];

function CategoryPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalItems = 40;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const currentItems = Array(totalItems)
    .fill({ title: "Signature Amber Item", price: 45.0 })
    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="py-10">
      <div className="flex flex-col gap-12">
        {/* --- Refined Header Row --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <button className="group flex items-center gap-3 px-8 py-4 bg-white border border-gray-100 rounded-2xl text-[11px] font-black uppercase tracking-widest text-gray-800 hover:border-amber-500 transition-all shadow-sm active:scale-95">
              <Filter size={14} className="group-hover:text-amber-600" />
              Filter Products
            </button>
            <span className="text-gray-400 text-xs font-medium hidden sm:block">
              Showing {currentItems.length} of {totalItems} items
            </span>
          </div>

          <CustomDropdown
            label="Sort By"
            options={sortOptions}
            onSelect={(opt) => console.log(opt.value)}
          />
        </div>

        {/* --- Premium Product Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14">
          {currentItems.map((item, index) => (
            <div key={index} className="group flex flex-col">
              {/* Image Frame */}
              <div className="relative aspect-4/5 rounded-[2.5rem] bg-white border border-gray-100 overflow-hidden transition-all duration-700 ease-out group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] group-hover:-translate-y-2">
                {/* Modern Badge */}
                <div className="absolute top-6 left-6 z-10 bg-white/80 backdrop-blur-md text-amber-900 text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                  New
                </div>

                {/* Favorite Toggle */}
                <button className="absolute top-6 right-6 z-10 p-3 bg-white/80 backdrop-blur-md rounded-full text-gray-400 hover:text-red-500 hover:scale-110 transition-all shadow-sm active:scale-90">
                  <Heart size={18} />
                </button>

                <Link to={`/main/product/accessories/flowing-airbuds`}>
                  <img
                    src={dummyImage}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
                  />
                </Link>

                {/* Animated Action Bar */}
                <div className="absolute bottom-6 inset-x-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  <button className="w-full bg-stone-900 text-white py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-2xl hover:bg-amber-700 transition-colors">
                    <ShoppingBag size={14} /> Add to Bag
                  </button>
                </div>
              </div>

              {/* Enhanced Info Area */}
              <div className="mt-7 px-4 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-1.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      fill={i < 4 ? "#d97706" : "none"}
                      className={i < 4 ? "text-amber-600" : "text-gray-200"}
                    />
                  ))}
                  <span className="text-[11px] text-gray-400 font-bold ml-1 tracking-tighter">
                    (12 REVIEWS)
                  </span>
                </div>

                <h4 className="text-gray-900 font-bold text-base tracking-tight mb-1 group-hover:text-amber-700 transition-colors">
                  {item.title}
                </h4>

                <p className="text-amber-600 font-black text-xl">
                  ${item.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* --- High-End Pagination --- */}
        {totalItems > itemsPerPage && (
          <div className="mt-16 flex justify-center">
            <nav className="inline-flex items-center p-2 bg-white border border-gray-100 rounded-4xl shadow-xl shadow-gray-200/50">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-amber-600 disabled:opacity-20 transition-all rounded-full hover:bg-gray-50"
              >
                <ChevronLeft size={24} strokeWidth={1.5} />
              </button>

              <div className="flex gap-2 px-4">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-full text-[11px] font-black transition-all ${
                        currentPage === page
                          ? "bg-stone-900 text-white shadow-lg scale-110"
                          : "text-gray-400 hover:text-stone-900"
                      }`}
                    >
                      {page.toString().padStart(2, "0")}
                    </button>
                  ),
                )}
              </div>

              <button
                disabled={currentPage === totalPages}
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-amber-600 disabled:opacity-20 transition-all rounded-full hover:bg-gray-50"
              >
                <ChevronRight size={24} strokeWidth={1.5} />
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}

export default CategoryPage;
