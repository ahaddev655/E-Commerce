import { useState } from "react";
import dummyImage from "../assets/dummy.jpg";
import { Link } from "react-router-dom";
import { Lock, ShieldCheck, CreditCard, Truck } from "lucide-react";

function CheckoutPage() {
  // Mock cart data
  const cartItems = [
    { id: 1, name: "Signature Amber Airbuds", price: 45.0, qty: 1 },
    { id: 2, name: "Amber Protective Case", price: 15.0, qty: 2 },
  ];

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0,
  );
  const shipping = 5.0;
  const total = subtotal + shipping;

  const inputStyle =
    "w-full bg-stone-50 border-stone-100 rounded-xl focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 focus:bg-white transition-all p-3.5 text-sm outline-none border";
  const labelStyle =
    "block text-[11px] font-black uppercase tracking-widest text-stone-400 mb-2 ml-1";

  return (
    <div className="container mx-auto lg:px-12 md:px-6 px-3 py-10">
      <div>
        <header className="mb-12 text-center md:text-left">
          <h2 className="text-4xl font-black text-stone-900 tracking-tight mb-2">
            Checkout
          </h2>
          <p className="text-stone-500 font-medium">
            Review your order and shipping details
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT: Checkout Form */}
          <div className="lg:col-span-7 space-y-6">
            {/* Shipping Section */}
            <section className="bg-white rounded-[2.5rem] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-stone-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-amber-50 p-2.5 rounded-xl">
                  <Truck className="text-amber-700" size={20} />
                </div>
                <h3 className="text-xl font-bold text-stone-900">
                  Shipping Details
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div className="col-span-2 md:col-span-1">
                  <label className={labelStyle}>First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    className={inputStyle}
                  />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label className={labelStyle}>Last Name</label>
                  <input type="text" placeholder="Doe" className={inputStyle} />
                </div>
                <div className="col-span-2">
                  <label className={labelStyle}>Street Address</label>
                  <input
                    type="text"
                    placeholder="123 Signature Way"
                    className={inputStyle}
                  />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label className={labelStyle}>Country</label>
                  <input
                    type="text"
                    placeholder="United States"
                    className={inputStyle}
                  />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label className={labelStyle}>City</label>
                  <input
                    type="text"
                    placeholder="New York"
                    className={inputStyle}
                  />
                </div>
              </div>
            </section>

            {/* Payment Section */}
            <section className="bg-white rounded-[2.5rem] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-stone-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-stone-900 p-2.5 rounded-xl">
                  <CreditCard className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-bold text-stone-900">
                  Payment Method
                </h3>
              </div>

              <div className="p-6 border-2 border-stone-900 rounded-2xl mb-6 relative overflow-hidden">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full border-4 border-stone-900 bg-white" />
                    <span className="font-bold text-stone-900 tracking-tight">
                      Credit / Debit Card
                    </span>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-8 h-5 bg-stone-100 rounded" />
                    <div className="w-8 h-5 bg-stone-100 rounded" />
                  </div>
                </div>

                <div className="space-y-5">
                  <div>
                    <label className={labelStyle}>Card Number</label>
                    <input
                      type="text"
                      placeholder="•••• •••• •••• ••••"
                      className={inputStyle}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelStyle}>Expiry</label>
                      <input
                        type="text"
                        placeholder="MM / YY"
                        className={inputStyle}
                      />
                    </div>
                    <div>
                      <label className={labelStyle}>CVC</label>
                      <input
                        type="text"
                        placeholder="000"
                        className={inputStyle}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* RIGHT: Order Summary */}
          <div className="lg:col-span-5 sticky top-8">
            <div className="bg-stone-900 rounded-[2.5rem] p-8 text-white shadow-2xl">
              <h3 className="text-xl font-bold mb-8 flex justify-between items-center">
                Order Summary
                <span className="bg-stone-800 text-[10px] px-3 py-1 rounded-full">
                  {cartItems.length} Items
                </span>
              </h3>

              <div className="space-y-6 mb-8 max-h-75 overflow-y-auto pr-2 custom-scrollbar">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 items-center group">
                    <div className="relative">
                      <img
                        src={dummyImage}
                        className="w-16 h-20 rounded-2xl object-cover border border-stone-800"
                        alt="product"
                      />
                      <span className="absolute -top-2 -right-2 bg-amber-600 text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">
                        {item.qty}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-stone-100 leading-tight">
                        {item.name}
                      </h4>
                      <p className="text-xs text-stone-400 mt-1">
                        ${item.price.toFixed(2)} each
                      </p>
                    </div>
                    <p className="text-sm font-black text-amber-500">
                      ${(item.price * item.qty).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="space-y-4 border-t border-stone-800 pt-6">
                <div className="flex justify-between text-stone-400 text-sm">
                  <span>Subtotal</span>
                  <span className="text-white">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-stone-400 text-sm">
                  <span>Shipping Cost</span>
                  <span className="text-white">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-stone-800 mt-2">
                  <span className="text-lg font-bold">Total Amount</span>
                  <span className="text-2xl font-black text-amber-500">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

              <Link to={"/success"}>
                <button className="w-full bg-white text-stone-900 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] mt-8 hover:bg-amber-500 hover:text-white transition-all shadow-xl active:scale-[0.98]">
                  Complete Purchase
                </button>
              </Link>

              <div className="mt-8 flex items-center justify-center gap-6 opacity-40">
                <div className="flex items-center gap-1.5 text-[10px] font-bold">
                  <Lock size={12} /> SECURE
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-bold">
                  <ShieldCheck size={12} /> VERIFIED
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
