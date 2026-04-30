import React, { useState, useEffect } from "react";
import { useOutletContext, Link } from "react-router-dom";

// Placeholder data - Replace with your actual data source
const ALL_PRODUCTS = Array.from({ length: 48 }, (_, i) => ({
  id: i + 1,
  name: `Signature Item ${i + 1}`,
  category: "accessories",
  price: 45.0 + i,
  image: "../assets/dummy.jpg",
}));

function SearchPage() {
  const { search } = useOutletContext();

  // --- Pagination State ---
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Reset to page 1 whenever the search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  // --- Logic ---
  // 1. Filter the master list based on search
  const filteredProducts = ALL_PRODUCTS.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  // 2. Calculate Pagination values
  const totalItems = filteredProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // 3. Slice the filtered list for the current view
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold text-amber-900">
          {search ? `Search Results for: "${search}"` : "All Products"}
        </h1>
        <p className="text-amber-600">{totalItems} items found</p>
      </header>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {currentItems.map((product) => (
          <div
            key={product.id}
            className="group shadow-md p-3 rounded-xl bg-white border border-transparent hover:shadow-xl transition-all"
          >
            <div className="relative aspect-square rounded-xl border border-amber-50 overflow-hidden mb-4 group-hover:border-amber-200 transition-colors">
              <div className="w-full h-full flex items-center justify-center text-amber-200 italic font-bold text-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              <div className="absolute bottom-0 inset-x-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <Link
                  to={`/main/product/${product.category}/${product.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <button className="w-full bg-amber-900 text-white py-2.5 rounded-lg text-sm font-bold shadow-xl hover:bg-amber-800">
                    View the Collection
                  </button>
                </Link>
              </div>
            </div>

            <h4 className="text-amber-900 font-bold truncate">
              {product.name}
            </h4>
            <p className="text-amber-600 font-medium">
              ${product.price.toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {totalItems === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-400 text-lg">
            No products found matching your search.
          </p>
        </div>
      )}

      {/* Pagination UI */}
      {totalItems > itemsPerPage && (
        <div className="flex justify-center items-center gap-2 mt-12">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-4 py-2 rounded-lg font-bold transition-all ${
                currentPage === page
                  ? "bg-amber-900 text-white shadow-lg"
                  : "bg-white text-amber-900 border border-amber-100 hover:bg-amber-50"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
