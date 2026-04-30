import { X, Plus, Minus } from "lucide-react";
import { useState } from "react";
import dummyImage from "../assets/dummy.jpg";

// --- Individual Cart Item Component ---
export default function CartItem({ item }) {
  const [quantity, setQuantity] = useState(1);
  const basePrice = Number(item.amount);

  return (
    <div className="group flex items-center gap-4 bg-white rounded-2xl p-3 border border-gray-100 hover:border-amber-200 transition-all duration-300 shadow-sm">
      <div className="w-20 h-20 shrink-0 bg-gray-50 rounded-xl overflow-hidden border border-gray-50">
        <img
          src={dummyImage}
          alt={item.text}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="flex flex-col flex-1 min-w-0">
        <div className="flex justify-between items-start">
          <h3 className="text-sm font-bold text-gray-900 truncate pr-2 leading-tight">
            {item.text}
          </h3>
          <button className="text-gray-400 hover:text-red-500 transition-colors p-1">
            <X size={16} />
          </button>
        </div>

        <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mt-1">
          {item.size} / {item.color}
        </p>

        <div className="flex items-center justify-between mt-3">
          <span className="text-amber-600 font-bold text-sm">
            Rs. {(basePrice * quantity).toLocaleString()}
          </span>

          <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg p-1">
            <button
              onClick={() => quantity > 1 && setQuantity((q) => q - 1)}
              className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-amber-600 transition-colors"
            >
              <Minus size={12} strokeWidth={3} />
            </button>
            <span className="w-8 text-center text-xs font-bold text-gray-700">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-amber-600 transition-colors"
            >
              <Plus size={12} strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
