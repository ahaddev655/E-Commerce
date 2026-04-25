import React from "react";
import { Link } from "react-router-dom";

function MainFooter() {
  return (
    <div className="bg-white">
      <div className="container mx-auto lg:px-12 md:px-6 px-3 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        <div className="w-full col-span-2 flex flex-col gap-5">
          {/* Brand Logo */}
          <div>
            <Link
              to="/"
              className="text-2xl font-extrabold italic text-amber-600 tracking-tight"
            >
              E-Commerce
            </Link>
          </div>

          {/* Brand Description */}
          <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
            Your one-stop destination for premium goods. We deliver quality,
            style, and reliability straight to your doorstep.
          </p>

          {/* Social Media Links with Inline SVGs */}
          <div className="flex items-center gap-3 mt-2">
            {/* Facebook */}
            <Link
              to={"/"}
              target="_blank"
              className="group p-2 rounded-lg bg-zinc-100 transition-all duration-300 hover:bg-amber-600"
            >
              <svg
                className="w-5 h-5 fill-zinc-600 group-hover:fill-white transition-colors"
                viewBox="0 0 24 24"
              >
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3l-.5 3H13v6.8c4.56-.93 8-4.96 8-9.8z" />
              </svg>
            </Link>

            {/* Instagram */}
            <Link
              to={"/"}
              target="_blank"
              className="group p-2 rounded-lg bg-zinc-100 transition-all duration-300 hover:bg-amber-600"
            >
              <svg
                className="w-5 h-5 fill-zinc-600 group-hover:fill-white transition-colors"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </Link>

            {/* Twitter/X */}
            <Link
              to={"/"}
              target="_blank"
              className="group p-2 rounded-lg bg-zinc-100 transition-all duration-300 hover:bg-amber-600"
            >
              <svg
                className="w-5 h-5 fill-zinc-600 group-hover:fill-white transition-colors"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
          </div>
        </div>
        {/* Column Item */}
        {[1, 2, 3].map((col) => (
          <div key={col} className="flex flex-col">
            <h3 className="text-gray-600 font-bold font-mono tracking-wider text-sm mb-4">
              Shop Categories
            </h3>
            <ul className="flex flex-col gap-3">
              {["New Arrivals", "Best Sellers", "Sale Items", "Gift Cards"].map(
                (item) => (
                  <li
                    key={item}
                    className="group flex items-center text-zinc-600 hover:text-amber-600 transition-all duration-250 ease-in-out cursor-pointer text-sm font-medium"
                  >
                    {/* Subtle indicator that appears on hover */}
                    <span className="w-0 group-hover:w-2 rounded-4xl h-0.5 bg-amber-600 mr-0 transition-all duration-250 group-hover:mr-2 ease-in-out"></span>
                    <span className="transform transition-transform duration-250 group-hover:translate-x-1 ease-in-out">
                      {item}
                    </span>
                  </li>
                ),
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainFooter;
