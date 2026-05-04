import { CircleAlert } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useOutletContext, Link } from "react-router-dom";

// Mock Data
const ALL_PRODUCTS = Array.from({ length: 48 }, (_, i) => ({
  id: i + 1,
  name: `Signature Item ${i + 1}`,
  category: "accessories",
  price: 45.0 + i,
  image: "https://via.placeholder.com/300x300/fcfcfc/92400e?text=Product",
}));

function SearchPage() {
  const { search } = useOutletContext();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const filteredProducts = ALL_PRODUCTS.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  const totalItems = filteredProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const currentItems = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="py-10">
      <div>
        {/* Header Section */}
        <header className="border-b border-gray-200 pb-6">
          <h1 className="text-3xl font-extrabold text-stone-900 tracking-tight">
            {search ? (
              <>
                Results for <span className="text-amber-700">"{search}"</span>
              </>
            ) : (
              "Our Collection"
            )}
          </h1>
          <p className="text-stone-500 mt-2 font-medium">
            {totalItems} items curated for you
          </p>
        </header>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {currentItems.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col bg-white rounded-2xl p-4 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden rounded-xl bg-[#fdfdfd] border border-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay Button */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6">
                  <Link
                    to={`/main/product/${product.category}/${product.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    <button className="w-full bg-stone-900 text-white py-3 rounded-xl text-sm font-bold shadow-2xl hover:bg-stone-800 active:scale-95 transition-all">
                      Quick View
                    </button>
                  </Link>
                </div>
              </div>

              {/* Product Info */}
              <div className="mt-5 flex justify-between items-start px-1">
                <div>
                  <h4 className="text-stone-900 font-bold text-lg group-hover:text-amber-800 transition-colors">
                    {product.name}
                  </h4>
                  <p className="text-stone-400 text-xs uppercase tracking-widest mt-1">
                    {product.category}
                  </p>
                </div>
                <p className="text-stone-900 font-black text-lg">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {totalItems === 0 && (
          <div className="flex flex-col items-center justify-center py-32 text-center">
            <div className="bg-white p-6 rounded-full shadow-sm mb-4 grid place-items-center">
              <CircleAlert size={26} />
            </div>
            <p className="text-stone-500 text-xl font-medium">
              We couldn't find any matches.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 text-amber-700 font-bold underline"
            >
              Clear search
            </button>
          </div>
        )}

        {/* Improved Pagination UI */}
        {totalItems > itemsPerPage && (
          <div className="flex justify-center items-center gap-3 pt-12 border-t border-gray-200">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-12 h-12 rounded-full font-bold transition-all duration-200 ${
                  currentPage === page
                    ? "bg-stone-900 text-white shadow-xl scale-110"
                    : "bg-white text-stone-600 hover:bg-stone-100 border border-stone-200"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchPage;
