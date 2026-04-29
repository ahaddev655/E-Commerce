import { useState } from "react";
import { Link } from "react-router-dom";
import dummyImage from "../assets/dummy.jpg";

function CategoryPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const totalItems = 40;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = Array(totalItems)
    .fill()
    .slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      {/* Your Original Grid UI */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {currentItems.map((_, index) => (
          <div key={index} className="group shadow-md p-3 rounded-xl bg-white">
            <div className="relative aspect-square rounded-xl border border-amber-50 overflow-hidden mb-4 group-hover:border-amber-200 transition-colors">
              <div className="w-full h-full flex items-center justify-center text-amber-200 italic font-bold text-2xl">
                <img
                  src={dummyImage}
                  alt="IMG"
                  className="w-full rounded-4xl"
                />
              </div>
              <div className="absolute bottom-0 inset-x-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <Link to={`/main/product/accessories/flowing-airbuds`}>
                  <button className="w-full bg-amber-900 text-white py-2.5 rounded-lg text-sm font-bold shadow-xl">
                    View the Collection
                  </button>
                </Link>
              </div>
            </div>
            <h4 className="text-amber-900 font-bold">Signature Amber Item</h4>
            <p className="text-amber-600 font-medium">$45.00</p>
          </div>
        ))}
      </div>

      {/* 3. Simple Pagination UI - Only shows if totalItems > 12 */}
      {totalItems > itemsPerPage && (
        <div className="flex justify-center items-center gap-2 mt-12">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
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

export default CategoryPage;
