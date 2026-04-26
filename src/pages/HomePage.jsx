import dummyImage from "../assets/dummy.jpg";

function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pb-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-black text-amber-900 leading-tight mb-6 italic tracking-tight">
              Timeless Quality. <br />
              <span className="text-amber-600">Curated Style.</span>
            </h1>
            <p className="text-lg text-amber-800/80 mb-8 max-w-lg leading-relaxed">
              Your one-stop destination for premium goods. We deliver quality,
              style, and reliability straight to your doorstep with an
              unwavering commitment to excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-amber-600 text-white px-10 py-4 rounded-full font-bold hover:bg-amber-700 transition-all duration-250 ease-in-out shadow-lg shadow-amber-200">
                Shop Collection
              </button>
              <button className="bg-white border-2 border-amber-200 text-amber-800 px-10 py-4 rounded-full font-bold hover:bg-amber-50  transition-all duration-250 ease-in-out">
                New Arrivals
              </button>
            </div>
          </div>

          <div className="md:w-1/2 w-full">
            <div className="aspect-4/3 p-3 bg-amber-200/30 rounded-4xl border-4 border-white shadow-2xl flex items-center justify-center relative">
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-24 h-24 bg-amber-400/20 rounded-full blur-3xl"></div>
              <span className="w-full">
                <img
                  src={dummyImage}
                  alt="IMG"
                  className="w-full rounded-4xl"
                />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="pb-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-amber-900 mb-2">
            Shop by Category
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Premium Apparel", "Home Essentials", "Gift Sets"].map((cat) => (
            <div
              key={cat}
              className="group relative h-64 bg-amber-50 rounded-2xl overflow-hidden cursor-pointer hover:shadow-xl transition-all border duration-250 ease-in-out border-amber-100"
            >
              <div className="absolute inset-0 bg-linear-to-t from-amber-900/40 to-transparent group-hover:from-amber-900/60 transition-all duration-250 ease-in-out"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-1">{cat}</h3>
                <p className="text-sm font-medium opacity-90">
                  Explore More &rarr;
                </p>
              </div>
            </div>
          ))}
        </div> */}
      </section>

      {/* Featured Products */}
      <section>
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-amber-900 italic">
            Top Sellers
          </h2>
          <button className="text-amber-600 font-bold border-b-2 border-amber-600 pb-1 hover:text-amber-700 transition">
            View All
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {Array(4)
            .fill()
            .map((i) => (
              <div key={i} className="group shadow-md p-3 rounded-xl bg-white">
                <div className="relative aspect-square rounded-xl border border-amber-50 overflow-hidden mb-4 group-hover:border-amber-200 transition-colors">
                  <div className="w-full h-full flex items-center justify-center text-amber-200 italic font-bold text-2xl">
                    <img
                      src={dummyImage}
                      alt="IMG"
                      className="w-full rounded-4xl"
                    />
                  </div>
                  <div className="absolute bottom-0 inset-x-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button className="w-full bg-amber-900 text-white py-2.5 rounded-lg text-sm font-bold shadow-xl">
                      Add to Cart
                    </button>
                  </div>
                </div>
                <h4 className="text-amber-900 font-bold">
                  Signature Amber Item
                </h4>
                <p className="text-amber-600 font-medium">$45.00</p>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
