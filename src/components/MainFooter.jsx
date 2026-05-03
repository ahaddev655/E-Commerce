import React from "react";
import { Link } from "react-router-dom";
// Restored missing icon imports
import { ArrowRight } from "lucide-react";
import PayPal from "../assets/paypal.jpg";
import Visa from "../assets/visa.jpg";
import MasterCard from "../assets/mastercard.jpg";

function MainFooter() {
  const footerSections = [
    {
      title: "Shop Categories",
      links: ["New Arrivals", "Best Sellers", "Sale Items", "Gift Cards"],
    },
    {
      title: "Customer Support",
      links: ["Shipping Policy", "Returns & Exchanges", "FAQs", "Contact Us"],
    },
    {
      title: "Our Company",
      links: ["About Us", "Sustainability", "Careers", "Terms of Service"],
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto lg:px-12 md:px-6 px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link
              to="/"
              className="text-2xl font-black tracking-tighter text-amber-600 flex items-center gap-2 group"
            >
              <div className="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center text-white rotate-3 group-hover:rotate-0 transition-transform">
                E
              </div>
              <span className="text-gray-900 uppercase">Commerce</span>
            </Link>

            <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
              Redefining your shopping experience with curated premium goods.
              Quality and reliability delivered to your doorstep since 2024.
            </p>

            {/* Social Links - RESTORED AND WORKING */}
            <div className="flex items-center gap-3">
              {[
                {
                  label: "Facebook",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  ),
                },
                {
                  label: "Instagram",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  ),
                },
                {
                  label: "Twitter",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  ),
                },
                {
                  label: "Email",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  ),
                },
              ].map((social, i) => (
                <Link
                  key={i}
                  to="/"
                  aria-label={social.label}
                  className="p-2.5 rounded-xl bg-zinc-50 text-zinc-400 hover:text-white hover:bg-amber-600 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {footerSections.map((section, idx) => (
            <div key={idx} className="lg:col-span-1">
              <h3 className="text-gray-900 font-bold text-xs uppercase tracking-[0.2em] mb-6">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link
                      to="/"
                      className="group flex items-center text-zinc-500 hover:text-amber-600 transition-colors text-sm font-medium"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-amber-600 mr-0 group-hover:mr-2 transition-all duration-300 rounded-full"></span>
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Column */}
          <div className="lg:col-span-1">
            <h3 className="text-gray-900 font-bold text-xs uppercase tracking-[0.2em] mb-6">
              Stay Updated
            </h3>
            <p className="text-zinc-500 text-xs mb-4">
              Get the latest updates on new products and upcoming sales.
            </p>
            <div className="relative group">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-zinc-50 border border-zinc-100 rounded-xl py-3 px-4 text-xs outline-none focus:border-amber-600/30 focus:ring-4 focus:ring-amber-500/5 transition-all"
              />
              <button className="absolute right-2 top-1.5 p-1.5 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors">
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-400 text-[11px] font-medium tracking-wide">
            © 2026 E-COMMERCE. ALL RIGHTS RESERVED.
          </p>

          {/* Payment Logos - Updated with consistent sizing and modern URLs */}
          <div className="flex items-center gap-6">
            <img
              src={PayPal}
              alt="PayPal"
              className="h-5 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer"
            />
            <img
              src={Visa}
              alt="Visa"
              className="h-3 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer"
            />
            <img
              src={MasterCard}
              alt="Mastercard"
              className="h-7 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default MainFooter;
