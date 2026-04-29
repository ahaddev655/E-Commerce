import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dummyImage from "../assets/dummy.jpg";

function ProductDetails() {
  const [selectedImage, setSelectedImage] = useState(0);

  const product = {
    name: "Signature Amber Airbuds",
    brand: "ZERO SERIES",
    price: 45.0,
    description:
      "Experience high-fidelity sound wrapped in our signature amber aesthetic. Featuring advanced active noise cancellation, 24-hour battery life, and a premium ergonomic fit designed for all-day comfort.",
    images: [dummyImage, dummyImage, dummyImage, dummyImage],
    specs: [
      "Bluetooth 5.3",
      "Water Resistant",
      "Touch Controls",
      "USB-C Charging",
    ],
  };

  const saveToLocal = (id) => {
    const existingData = localStorage.getItem("collection") || "[]";

    const collection = JSON.parse(existingData);

    if (!collection.includes(id)) {
      collection.push(id);

      localStorage.setItem("collection", JSON.stringify(collection));
      return;
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] selection:bg-amber-200">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* LEFT SIDE: Image Gallery (Span 7) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="relative aspect-4/5 rounded-3xl overflow-hidden bg-white shadow-2xl shadow-amber-900/5 border border-zinc-100">
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedImage}
                src={product.images[selectedImage]}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full object-contain p-8"
              />
            </AnimatePresence>
          </div>

          <div className="flex gap-4 justify-center lg:justify-start overflow-x-auto pb-2">
            {product.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative shrink-0 w-20 h-20 rounded-xl overflow-hidden transition-all duration-300 ${
                  selectedImage === index
                    ? "ring-2 ring-amber-600 ring-offset-2 scale-105"
                    : "opacity-50 hover:opacity-100"
                }`}
              >
                <img
                  src={img}
                  className="w-full h-full object-cover"
                  alt="preview"
                />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: Product Info (Span 5) */}
        <div className="lg:col-span-5 pt-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-amber-600 uppercase">
                {product.brand}
              </span>
              <h1 className="text-5xl font-serif text-zinc-900 mt-2 leading-tight">
                {product.name}
              </h1>
              <p className="text-3xl font-light text-zinc-500 mt-4">
                ${product.price.toFixed(2)}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-400">
                Description
              </h3>
              <p className="text-zinc-600 leading-relaxed text-lg">
                {product.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 py-6 border-y border-zinc-100">
              {product.specs.map((spec, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                  </div>
                  <span className="text-sm font-medium text-zinc-700">
                    {spec}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <button
                className="group relative w-full bg-zinc-900 text-white py-5 rounded-2xl font-bold transition-all hover:bg-amber-600 active:scale-[0.98] shadow-xl shadow-zinc-200"
                onClick={saveToLocal(product.name)}
              >
                Add to Collection
                <span className="ml-2 transition-transform group-hover:translate-x-1 inline-block">
                  →
                </span>
              </button>
              <p className="text-center text-xs text-zinc-400">
                Free shipping on all premium orders.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
