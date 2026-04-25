import { ShoppingCart, TextAlignJustify, UserCircle, X } from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import dummyImage from "../assets/dummy.jpg";

function MainHeader() {
  const links = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "Categories",
      link: "/main/categories",
    },
    {
      text: "New Arrivals",
      link: "/main/new",
    },
  ];
  const [menuToggle, setMenuToggle] = useState(false);
  const [cartToggle, setCartToggle] = useState(false);
  return (
    <>
      {/* -------------------- Desktop Header -------------------- */}
      <div className="bg-white shadow-lg border-b border-gray-200">
        <div className="container mx-auto lg:px-12 md:px-6 px-3 py-6 flex items-center justify-between">
          <div>
            <Link to={"/"} className="text-xl font-bold italic text-amber-600">
              E-Commerce
            </Link>
          </div>
          <div className="lg:block hidden">
            <ul className="flex items-center gap-3">
              {links.map((item, i) => (
                <li
                  key={i}
                  className="text-gray-700 font-semibold hover:text-amber-600 transition-colors duration-250 ease-in-out after:w-0 after:h-0.5 after:bg-amber-600 after:block after:rounded-4xl after:transition-all after:duration-250 after:ease-in-out hover:after:w-full"
                >
                  <Link to={item.link}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden items-center gap-5 lg:flex">
            <button type="button" onClick={() => setCartToggle(true)}>
              <ShoppingCart className="transition-colors duration-250 ease-in-out text-gray-700 hover:text-amber-600" />
            </button>
            <button type="button">
              <Link to={"/main/profile"}>
                <UserCircle className="transition-colors duration-250 ease-in-out text-gray-700 hover:text-amber-600" />
              </Link>
            </button>
          </div>
          <button type="button" className="lg:hidden block">
            <TextAlignJustify
              className="transition-colors duration-250 ease-in-out hover:text-amber-600"
              onClick={() => setMenuToggle(true)}
            />
          </button>
        </div>
      </div>
      {/* -------------------- Mobile Canvas -------------------- */}
      <div
        className={`fixed inset-0 z-30 h-full w-full bg-black/50 backdrop-blur-md transition-all duration-250 ease-in-out ${
          menuToggle
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`relative z-40 h-full min-h-screen w-full bg-white/90 py-6 transition-all duration-250 ease-in-out min-[431px]:max-w-70 ${
            menuToggle ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="text-center flex items-center justify-between px-6">
            <Link to="/" className="text-2xl font-bold italic text-amber-600">
              E-Commerce
            </Link>
            <button type="button">
              <X
                className="transition-colors duration-250 ease-in-out hover:text-amber-600"
                onClick={() => setMenuToggle(false)}
              />
            </button>
          </div>

          <div className="mt-6 px-6">
            <ul className="flex flex-col gap-3">
              {links.map((item, i) => (
                <li
                  onClick={() => setMenuToggle(false)}
                  key={i}
                  className="after:rounded-4xl transition-colors after:duration-250 hover:text-amber-600 relative w-fit font-semibold text-gray-700 duration-250 ease-in-out after:block after:h-0.5 after:w-0 after:bg-amber-600 after:transition-all after:ease-in-out hover:after:w-full"
                >
                  <Link to={item.link}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </div>

          <hr className="mt-6 mb-3 border-gray-200" />

          <div className="flex items-center justify-around gap-5 px-6">
            <button type="button" onClick={() => setMenuToggle(false)}>
              <Link to={"/main/cart"}>
                <ShoppingCart className="text-gray-700 transition-colors duration-250 ease-in-out hover:text-amber-600" />
              </Link>
            </button>
            <button type="button" onClick={() => setMenuToggle(false)}>
              <Link to="/main/profile">
                <UserCircle className="text-gray-700 transition-colors duration-250 ease-in-out hover:text-amber-600" />
              </Link>
            </button>
          </div>
        </div>
      </div>
      {/* -------------------- Cart Canvas -------------------- */}
      <div
        className={`fixed inset-0 z-30 lg:block hidden h-full w-full bg-black/50 backdrop-blur-md transition-all duration-250 ease-in-out ${
          cartToggle
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`relative z-40 h-full min-h-screen w-full bg-white/90 py-6 transition-all duration-250 ease-in-out min-[431px]:max-w-90 ${
            cartToggle ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="text-center flex items-center justify-between px-6">
            <Link to="/" className="text-2xl font-bold italic text-amber-600">
              E-Commerce
            </Link>
            <button type="button">
              <X
                className="transition-colors duration-250 ease-in-out hover:text-amber-600"
                onClick={() => setCartToggle(false)}
              />
            </button>
          </div>
          <hr className="mt-6 mb-3 border-gray-200" />
          <div className="px-3">
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
                  <h3 className="text-sm font-bold text-gray-800 line-clamp-1 leading-tight">
                    Premium Product Name
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Size: M | Color: Amber
                  </p>
                </div>

                <div className="flex items-center justify-between mt-2">
                  <span className="text-amber-600 font-bold text-sm">
                    $49.00
                  </span>
                  <div className="flex items-center bg-gray-100 rounded-lg px-2 py-1 gap-3">
                    <button className="text-xs font-bold text-gray-600 hover:text-amber-600">
                      -
                    </button>
                    <span className="text-xs font-semibold text-gray-800">
                      1
                    </span>
                    <button className="text-xs font-bold text-gray-600 hover:text-amber-600">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainHeader;
