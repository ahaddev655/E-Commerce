import { Search, ShoppingCart, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import dummyImage from "../assets/dummy.jpg";

// --- New Individual Item Component ---
function CartItem({ item }) {
  const [quantity, setQuantity] = useState(1);
  const basePrice = Number(item.amount);

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex items-center gap-4 bg-white rounded-xl shadow-sm border border-gray-100 p-3 transition-shadow hover:shadow-md">
      <div className="shadow-sm w-20 h-20 shrink-0 bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
        <img
          src={dummyImage}
          alt="Product"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col flex-1 justify-between py-0.5">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-gray-800 line-clamp-1 leading-tight">
              {item.text}
            </h3>
            <button type="button">
              <X
                size={17}
                className="transition-colors duration-250 ease-in-out hover:text-amber-600"
              />
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-0.5">
            Size: {item.size} | Color: {item.color}
          </p>
        </div>

        <div className="flex items-center justify-between mt-2">
          <span className="text-amber-600 font-bold text-sm">
            {/* Calculation: Price * Individual Quantity */}
            Rs.{(basePrice * quantity).toLocaleString()}.00
          </span>
          <div className="flex items-center bg-gray-100 rounded-lg px-2 py-1 gap-3">
            <button
              className="text-xs font-bold text-gray-600 hover:text-amber-600"
              onClick={handleDecrease}
            >
              -
            </button>
            <span className="text-xs font-semibold text-gray-800">
              {quantity}
            </span>
            <button
              className="text-xs font-bold text-gray-600 hover:text-amber-600"
              onClick={handleIncrease}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Main Header Component ---
function MainHeader() {
  const mockData = [
    { text: "Premium Product Name", color: "Amber", size: "M", amount: "49" },
    { text: "Premium Product Name", color: "Amber", size: "M", amount: "49" },
    { text: "Premium Product Name", color: "Amber", size: "M", amount: "49" },
    { text: "Premium Product Name", color: "Amber", size: "M", amount: "49" },
    { text: "Premium Product Name", color: "Amber", size: "M", amount: "49" },
    { text: "Premium Product Name", color: "Amber", size: "M", amount: "49" },
  ];

  const [cartToggle, setCartToggle] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  return (
    <>
      {/* Desktop Header */}
      <div className="bg-white shadow-lg border-b border-gray-200">
        <div className="container mx-auto lg:px-12 md:px-6 px-3 py-6 flex items-center justify-between">
          <div>
            <Link to={"/"} className="text-xl font-bold italic text-amber-600">
              E-Commerce
            </Link>
          </div>
          <div className="w-full max-w-xl relative group md:block hidden">
            {/* Search Icon */}
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400 group-focus-within:text-amber-600 transition-colors" />
            </div>

            {/* Input Field */}
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search for products, brands and more..."
              className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2
              focus:ring-amber-500/20 focus:border-amber-600 focus:bg-white block pl-10 pr-4 py-2.5 outline-none transition-all
              duration-300 placeholder:text-gray-400 shadow-sm hover:shadow-md"
              onChange={(e) => {
                setSearch(e.target.value);
                navigate("/main/s");
              }}
            />
          </div>
          <div className="items-center gap-5 flex">
            <button
              type="button"
              className="md:hidden block"
              onClick={() => setSearchToggle(!searchToggle)}
            >
              <Search className="transition-colors duration-250 ease-in-out text-gray-700 hover:text-amber-600" />
            </button>
            <button type="button" onClick={() => setCartToggle(true)}>
              <ShoppingCart className="transition-colors duration-250 ease-in-out text-gray-700 hover:text-amber-600" />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`w-full absolute group md:hidden block py-3.5 px-3 bg-white shadow-lg transition-all duration-250 ease-in-out ${searchToggle ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0 pointer-events-none"}`}
      >
        {/* Search Icon */}
        <div className="absolute inset-y-0 left-2 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400 group-focus-within:text-amber-600 transition-colors" />
        </div>

        {/* Input Field */}
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for products, brands and more..."
          className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2
              focus:ring-amber-500/20 focus:border-amber-600 focus:bg-white block pl-10 pr-4 py-2.5 outline-none transition-all
              duration-300 placeholder:text-gray-400 shadow-sm hover:shadow-md"
          onChange={(e) => {
            setSearch(e.target.value);
            navigate("/main/s");
          }}
        />
      </div>

      {/* Cart Canvas */}
      <div
        className={`fixed inset-0 z-30 lg:block hidden h-full w-full bg-black/50 backdrop-blur-md transition-all duration-250 ease-in-out ${
          cartToggle
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`relative z-40 h-full min-h-screen w-full ml-auto bg-white/90 py-6 transition-all duration-250 ease-in-out min-[431px]:max-w-90 ${
            cartToggle ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <Link to={"/checkout"}>
            <button
              type="button"
              className="absolute bottom-3 left-5 w-81 bg-amber-900 text-white py-2.5 rounded-lg text-sm font-bold shadow-xl"
            >
              Proceed To Checkout
            </button>
          </Link>
          <div className="text-center flex items-center justify-between px-6">
            <span className="text-2xl font-bold italic text-amber-600">
              E-Commerce
            </span>
            <button type="button" onClick={() => setCartToggle(false)}>
              <X className="transition-colors duration-250 ease-in-out hover:text-amber-600" />
            </button>
          </div>
          <hr className="mt-6 mb-3 border-gray-200" />
          <div className="px-3 flex flex-col gap-3 h-112.5 overflow-y-auto">
            {mockData.map((item, i) => (
              <CartItem key={i} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MainHeader;
