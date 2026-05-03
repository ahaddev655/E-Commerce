import { Link } from "react-router-dom";
import { Check, Package, ArrowRight, Mail } from "lucide-react";

function CheckoutSuccessPage() {
  const orderNumber = "AMB-992834";

  return (
    <div className="min-h-screen bg-[#f8f8f8] flex items-center justify-center p-6">
      <div className="max-w-xl w-full">
        {/* Main Success Card */}
        <div className="bg-white shadow-[0_40px_100px_rgba(0,0,0,0.04)] rounded-[3rem] p-10 md:p-16 text-center border border-stone-100 relative overflow-hidden">
          {/* Decorative Background Element */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-linear-to-r from-transparent via-amber-500 to-transparent opacity-20" />

          {/* Icon Section */}
          <div className="flex justify-center mb-10">
            <div className="relative">
              <div className="absolute inset-0 bg-amber-100 rounded-full scale-150 animate-pulse opacity-30" />
              <div className="relative bg-stone-900 p-6 rounded-full shadow-2xl">
                <Check className="w-10 h-10 text-white" strokeWidth={3} />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <h1 className="text-4xl font-black text-stone-900 tracking-tight mb-4">
            Order Confirmed
          </h1>
          <p className="text-stone-500 font-medium leading-relaxed mb-10">
            Thank you for choosing{" "}
            <span className="text-amber-700 font-bold">E.STORE</span>. Your
            signature items are being prepared with care and will be on their
            way shortly.
          </p>

          {/* Digital Receipt Area */}
          <div className="bg-stone-50 rounded-3xl p-6 border border-stone-100 mb-10">
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center border-b border-stone-200 border-dashed pb-3">
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-stone-400">
                  Order Number
                </span>
                <span className="text-sm font-bold text-stone-900">
                  {orderNumber}
                </span>
              </div>
              <div className="flex justify-between items-center pt-1">
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-stone-400">
                  Est. Delivery
                </span>
                <div className="flex items-center gap-2 text-sm font-bold text-amber-700">
                  <Package size={14} />
                  3-5 Business Days
                </div>
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-2 text-[11px] font-bold text-stone-400 uppercase tracking-widest">
              <Mail size={12} className="text-amber-600" />
              Receipt sent to your email
            </div>

            <div className="flex flex-col gap-4 pt-4">
              <Link to="/">
                <button className="group w-full bg-stone-900 text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] shadow-xl hover:bg-amber-600 transition-all flex items-center justify-center gap-3 active:scale-95">
                  Continue Shopping
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </Link>

              <button className="w-full bg-transparent text-stone-400 py-3 rounded-xl font-bold text-xs hover:text-stone-900 transition-colors">
                Track Your Order
              </button>
            </div>
          </div>
        </div>

        {/* Support Footer */}
        <p className="text-center mt-12 text-stone-400 text-xs font-medium">
          Need help? Contact our concierge at{" "}
          <span className="text-stone-900 underline cursor-pointer">
            support@estore.com
          </span>
        </p>
      </div>
    </div>
  );
}

export default CheckoutSuccessPage;
