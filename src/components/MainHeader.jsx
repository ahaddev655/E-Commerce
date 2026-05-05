import { Search, X, ShoppingBag } from "lucide-react";
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
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-stone-100">
        <div className="container mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          {/* Logo - Minimalist & Bold */}
          <Link
            to="/"
            className="text-2xl font-black tracking-tighter text-stone-900 flex items-center gap-0.5"
          >
            E<span className="text-amber-600">.</span>
            <span className="text-sm tracking-[0.3em] font-light ml-1 text-stone-400">
              STORE
            </span>
          </Link>

          {/* Desktop Search - Refined Floating Design */}
          <div className="hidden md:flex flex-1 max-w-lg mx-12 relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400 group-focus-within:text-amber-600 transition-colors" />
            <input
              type="text"
              placeholder="Search our collection..."
              className="w-full bg-stone-50 border border-stone-100 rounded-2xl py-3 pl-12 pr-4 text-[13px] font-medium focus:bg-white focus:ring-4 focus:ring-amber-500/5 focus:border-amber-600/30 transition-all outline-none"
              onChange={(e) => {
                setSearch(e.target.value);
                navigate("/main/s");
              }}
            />
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-2 md:gap-4">
            <button
              onClick={() => setSearchToggle(!searchToggle)}
              className="md:hidden p-3 hover:bg-stone-50 rounded-xl transition-colors text-stone-700"
            >
              <Search size={20} />
            </button>

            <button
              onClick={() => setCartToggle(true)}
              className="group relative p-3 hover:bg-stone-900 rounded-2xl transition-all duration-300"
            >
              <ShoppingBag
                size={20}
                className="text-stone-700 group-hover:text-white transition-colors"
              />
              <span className="absolute top-2 right-2 bg-amber-600 text-white text-[9px] font-black w-4 h-4 flex items-center justify-center rounded-full shadow-lg group-hover:scale-110 transition-transform">
                {mockData.length}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Search Input */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out bg-white ${
            searchToggle
              ? "max-h-24 border-b border-stone-100 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-4 px-6">
            <input
              type="text"
              autoFocus
              placeholder="What are you looking for?"
              className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 text-sm outline-none focus:bg-white focus:border-amber-500 transition-all"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </header>

      {/* --- PREMIUM CART SIDEBAR --- */}
      <div
        className={`fixed inset-0 z-60 transition-all duration-500 ${
          cartToggle ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-stone-900/40 backdrop-blur-md transition-opacity duration-500 ${
            cartToggle ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setCartToggle(false)}
        />

        {/* Sidebar Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-full max-w-md bg-[#f8f8f8] shadow-[0_0_80px_rgba(0,0,0,0.1)] transition-transform duration-500 ease-[cubic-bezier(0.32,0,0.07,1)] transform flex flex-col ${
            cartToggle ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="p-8 flex items-center justify-between bg-white border-b border-stone-100">
            <div>
              <h2 className="text-2xl font-black text-stone-900 tracking-tight">
                Cart
              </h2>
              <p className="text-[10px] text-stone-400 font-black uppercase tracking-[0.2em] mt-1">
                {mockData.length} Items Selected
              </p>
            </div>
            <button
              onClick={() => setCartToggle(false)}
              className="p-3 hover:bg-stone-50 rounded-2xl transition-colors border border-stone-100"
            >
              <X size={20} className="text-stone-900" />
            </button>
          </div>

          {/* Items Area */}
          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4 custom-scrollbar">
            {mockData.map((item, i) => (
              <div
                key={i}
                className="bg-white p-2 rounded-3xl border border-stone-100 shadow-sm"
              >
                <CartItem item={item} />
              </div>
            ))}
          </div>

          {/* Footer / Checkout */}
          <div className="p-8 bg-white border-t border-stone-100 shadow-[0_-20px_40px_rgba(0,0,0,0.02)]">
            <div className="flex justify-between items-end mb-8">
              <div>
                <span className="text-[10px] font-black text-stone-400 uppercase tracking-widest block mb-1">
                  Estimated Total
                </span>
                <span className="text-2xl font-black text-stone-900">
                  Rs. 24,500.00
                </span>
              </div>
            </div>

            <Link
              to="/checkout"
              className="block w-full"
              onClick={() => setCartToggle(false)}
            >
              <button className="w-full bg-stone-900 hover:bg-amber-600 text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] transition-all duration-500 shadow-2xl active:scale-[0.98]">
                Proceed to Checkout
              </button>
            </Link>

            <p className="text-center text-[10px] text-stone-400 font-bold uppercase tracking-widest mt-6">
              Free Shipping on all premium orders
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainHeader;
