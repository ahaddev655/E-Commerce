import {
  Watch,
  Zap,
  Headphones,
  Ear,
  Smartphone,
  LayoutGrid,
  ArrowRight,
  ShoppingBag,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import dummyImage from "../../assets/dummy.jpg";

function HomePage() {
  const categories = [
    { name: "Smartwatches", icon: Watch },
    { name: "New Arrivals", icon: Zap },
    { name: "Headphones", icon: Headphones },
    { name: "Earbuds", icon: Ear },
    { name: "Accessories", icon: Smartphone },
    { name: "All Products", icon: LayoutGrid },
  ];

  return (
    <div className="bg-[#FFFCF8]">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-24 md:pt-20">
        {/* Background Decorative Blob */}
        <div className="absolute top-[-10%] right-[-10%] w-125 h-[5h-125amber-100 rounded-full blur-[120px] -z-10 opacity-60"></div>

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-600 text-xs font-bold uppercase tracking-widest mb-6">
              <Zap size={14} fill="currentColor" /> Premium Collection 2026
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.1] mb-8 tracking-tighter">
              Timeless Quality. <br />
              <span className="text-amber-600 italic font-serif">
                Curated Style.
              </span>
            </h1>
            <p className="text-lg text-gray-500 mb-10 max-w-lg leading-relaxed">
              Your one-stop destination for premium goods. We deliver quality,
              style, and reliability straight to your doorstep with an
              unwavering commitment to excellence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Link to={"/main/category/all-products"}>
                <button className="w-full sm:w-auto bg-gray-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-amber-600 transition-all duration-300 shadow-xl shadow-gray-200 flex items-center justify-center gap-2 group">
                  Shop Collection
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </Link>
              <Link to={"/main/category/new-arrivals"}>
                <button className="w-full sm:w-auto bg-white border border-gray-200 text-gray-900 px-10 py-5 rounded-2xl font-bold hover:bg-gray-50 transition-all duration-300">
                  New Arrivals
                </button>
              </Link>
            </div>
          </div>

          {/* Hero Image Container */}
          <div className="md:w-1/2 w-full order-1 md:order-2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-amber-200/40 rounded-[3rem] blur-2xl group-hover:bg-amber-300/40 transition-colors duration-500"></div>
              <div className="relative aspect-4/3 overflow-hidden rounded-[2.5rem] border-[6px] border-white shadow-2xl">
                <img
                  src={dummyImage}
                  alt="Premium Watch"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-amber-50 hidden lg:block animate-bounce-slow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                    <Star fill="currentColor" size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-gray-900">
                      4.9/5 Rating
                    </p>
                    <p className="text-[10px] text-gray-500 uppercase tracking-tighter">
                      Verified Reviews
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-xs font-black text-amber-600 uppercase tracking-[0.3em] mb-4">
              Discovery
            </h2>
            <h3 className="text-4xl font-black text-gray-900 tracking-tight">
              Shop by Category
            </h3>
            <div className="w-12 h-1.5 bg-amber-500 mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
            {categories.map((cat) => {
              const IconComponent = cat.icon;
              return (
                <Link
                  key={cat.name}
                  to={`/main/category/${cat.name.toLocaleLowerCase().replaceAll(" ", "-")}`}
                  className="group"
                >
                  <div className="flex flex-col items-center">
                    <div className="relative mb-6 w-24 h-24 flex items-center justify-center rounded-3xl bg-zinc-50 border border-zinc-100 transition-all duration-500 group-hover:bg-amber-600 group-hover:rounded-4xl group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-amber-200">
                      <IconComponent
                        size={32}
                        strokeWidth={1.5}
                        className="text-gray-700 group-hover:text-white transition-colors duration-300"
                      />
                    </div>
                    <h3 className="text-[11px] font-black text-gray-400 group-hover:text-amber-600 transition-colors uppercase tracking-[0.2em]">
                      {cat.name}
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Top Sellers Section */}
      <section className="py-24 bg-[#FFFCF8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12 border-b border-gray-100 pb-8">
            <div>
              <h2 className="text-4xl font-black text-gray-900 tracking-tight mb-2">
                Top Sellers
              </h2>
              <p className="text-gray-500 font-medium">
                The most wanted items this week
              </p>
            </div>
            <Link
              to="/main/category/all-products"
              className="text-amber-600 font-bold flex items-center gap-2 hover:gap-4 transition-all uppercase text-xs tracking-widest"
            >
              Explore All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group relative">
                <div className="relative aspect-[1/1.2] rounded-4xl overflow-hidden bg-white border border-gray-100 shadow-sm group-hover:shadow-2xl transition-all duration-500">
                  <img
                    src={dummyImage}
                    alt="Product"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Floating Action Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link to={`/main/product/accessories/flowing-airbuds`}>
                      <button className="bg-white text-gray-900 px-6 py-3 rounded-xl font-bold text-sm shadow-2xl flex items-center gap-2 hover:bg-amber-600 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300">
                        <ShoppingBag size={16} /> Quick View
                      </button>
                    </Link>
                  </div>

                  {/* Hot Tag */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter text-amber-600">
                    Trending
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <h4 className="text-gray-900 font-bold text-lg mb-1 group-hover:text-amber-600 transition-colors">
                    Signature Amber Item
                  </h4>
                  <div className="flex items-center justify-center gap-2">
                    <p className="text-amber-600 font-black text-xl">$45.00</p>
                    <p className="text-gray-300 line-through text-sm">$60.00</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
