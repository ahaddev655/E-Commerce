import { useState } from "react";
import dummyImage from "../assets/dummy.jpg";
import { Link } from "react-router-dom";

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

  return (
    <div className="container mx-auto lg:px-12 md:px-6 px-3 py-10">
      <h2 className="text-3xl font-bold text-amber-900 mb-8">
        Secure Checkout
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* LEFT: Checkout Form (8 cols) */}
        <div className="lg:col-span-7 space-y-8">
          {/* Shipping Section */}
          <section>
            <h3 className="text-xl font-bold text-amber-900 mb-4 border-b border-amber-100 pb-2">
              Shipping Information
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-medium text-amber-800 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full border-amber-100 rounded-lg focus:ring-amber-500 focus:border-amber-500 p-2.5 bg-white border"
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-medium text-amber-800 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full border-amber-100 rounded-lg focus:ring-amber-500 focus:border-amber-500 p-2.5 bg-white border"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-amber-800 mb-1">
                  Address
                </label>
                <input
                  type="text"
                  className="w-full border-amber-100 rounded-lg focus:ring-amber-500 focus:border-amber-500 p-2.5 bg-white border"
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-medium text-amber-800 mb-1">
                  Country
                </label>
                <input
                  type="text"
                  className="w-full border-amber-100 rounded-lg focus:ring-amber-500 focus:border-amber-500 p-2.5 bg-white border"
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-medium text-amber-800 mb-1">
                  City
                </label>
                <input
                  type="text"
                  className="w-full border-amber-100 rounded-lg focus:ring-amber-500 focus:border-amber-500 p-2.5 bg-white border"
                />
              </div>
            </div>
          </section>

          {/* Payment Section */}
          <section>
            <h3 className="text-xl font-bold text-amber-900 mb-4 border-b border-amber-100 pb-2">
              Payment Method
            </h3>
            <div className="p-4 border border-amber-200 bg-amber-50/30 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <input
                  type="radio"
                  checked
                  readOnly
                  className="text-amber-900 focus:ring-amber-900"
                />
                <span className="font-bold text-amber-900">
                  Credit / Debit Card
                </span>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-amber-800 mb-1">
                    Card Number
                  </label>
                  <input
                    type="text"
                    placeholder="0000 0000 0000 0000"
                    className="w-full border-amber-100 rounded-lg p-2.5 bg-white border"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="border-amber-100 rounded-lg p-2.5 bg-white border"
                  />
                  <input
                    type="text"
                    placeholder="CVC"
                    className="border-amber-100 rounded-lg p-2.5 bg-white border"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* RIGHT: Order Summary (5 cols) */}
        <div className="lg:col-span-5">
          <div className="bg-white shadow-xl rounded-2xl p-6 border border-amber-50 sticky top-10">
            <h3 className="text-xl font-bold text-amber-900 mb-6">
              Order Summary
            </h3>

            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <img
                    src={dummyImage}
                    className="w-16 h-16 rounded-lg object-cover border border-amber-100"
                    alt="product"
                  />
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-amber-900">
                      {item.name}
                    </h4>
                    <p className="text-xs text-amber-600">Qty: {item.qty}</p>
                  </div>
                  <p className="text-sm font-bold text-amber-900">
                    ${(item.price * item.qty).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-amber-100 pt-4 space-y-2">
              <div className="flex justify-between text-amber-800">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-amber-800">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xl font-bold text-amber-900 pt-2 border-t border-amber-100">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <Link to={"/success"}>
              <button className="w-full bg-amber-900 text-white py-4 rounded-xl font-bold mt-8 shadow-lg hover:bg-amber-950 transition-transform active:scale-95">
                Complete Purchase
              </button>
            </Link>

            <p className="text-center text-xs text-amber-600 mt-4">
              🔒 Encrypted & Secure Payments
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
