import { Search, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CartItem from "./CartItem";

function MainHeader({ search, setSearch }) {
  const [cartToggle, setCartToggle] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);
  const navigate = useNavigate();

  const mockData = Array(5).fill({
    text: "Premium Urban Hoodie",
    color: "Amber",
    size: "M",
    amount: "4900",
  });

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-black tracking-tighter text-amber-600 uppercase"
          >
            E<span className="text-gray-900 text-lg">.Store</span>
          </Link>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-8 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search trends..."
              className="w-full bg-gray-100 border-none rounded-full py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-amber-500/20 transition-all"
              onChange={(e) => {
                setSearch(e.target.value);
                navigate("/main/s");
              }}
            />
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setSearchToggle(!searchToggle)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Search size={20} className="text-gray-700" />
            </button>
            <button
              onClick={() => setCartToggle(true)}
              className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ShoppingCart size={20} className="text-gray-700" />
              <span className="absolute top-1 right-1 bg-amber-600 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {mockData.length}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Search Input (Dropdown) */}
        <div
          className={`overflow-hidden transition-all duration-300 bg-white border-b ${searchToggle ? "max-h-20 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="p-4">
            <input
              type="text"
              autoFocus
              placeholder="Search products..."
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none focus:border-amber-500"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </header>

      {/* Cart Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-[60] transition-visibility duration-300 ${cartToggle ? "visible" : "invisible"}`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${cartToggle ? "opacity-100" : "opacity-0"}`}
          onClick={() => setCartToggle(false)}
        />

        {/* Sidebar Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl transition-transform duration-300 transform flex flex-col ${cartToggle ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="p-6 flex items-center justify-between border-b border-gray-100">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Your Cart</h2>
              <p className="text-xs text-gray-500 font-medium">
                {mockData.length} Items Selected
              </p>
            </div>
            <button
              onClick={() => setCartToggle(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 custom-scrollbar">
            {mockData.map((item, i) => (
              <CartItem key={i} item={item} />
            ))}
          </div>

          <div className="p-6 border-t border-gray-100 bg-gray-50/50">
            <div className="flex justify-between mb-4">
              <span className="text-gray-500 font-medium">Subtotal</span>
              <span className="text-xl font-bold text-gray-900">
                Rs. 24,500.00
              </span>
            </div>
            <Link to="/checkout" className="block w-full">
              <button className="w-full bg-gray-900 hover:bg-amber-600 text-white py-4 rounded-2xl font-bold transition-all duration-300 shadow-lg shadow-gray-200 active:scale-[0.98]">
                Checkout Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainHeader