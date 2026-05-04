import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PayPal from "../assets/paypal.jpg";
import Visa from "../assets/visa.jpg";
import MasterCard from "../assets/mastercard.jpg";

function MainFooter() {
  const footerSections = [
    {
      title: "Discovery",
      links: ["New Arrivals", "Best Sellers", "Sale Items", "Gift Cards"],
    },
    {
      title: "Support",
      links: ["Shipping Policy", "Returns & Exchanges", "FAQs", "Contact Us"],
    },
    {
      title: "Company",
      links: ["Our Story", "Sustainability", "Careers", "Legal"],
    },
  ];

  const socialLinks = [
    {
      label: "Facebook",
      path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
    },
    {
      label: "Instagram",
      path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
      isInsta: true, // Special handling for the Instagram rect and line
    },
    {
      label: "Twitter",
      path: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
    },
    {
      label: "Email",
      path: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
      isEmail: true, // Special handling for the email polyline
    },
  ];

  return (
    <footer className="bg-white border-t border-stone-100">
      <div className="container mx-auto lg:px-12 md:px-8 px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-16 mb-20">
          {/* Brand Identity */}
          <div className="lg:col-span-2 space-y-8">
            <Link
              to="/"
              className="text-2xl font-black tracking-tighter text-stone-900 flex items-center gap-0.5"
            >
              E<span className="text-amber-600">.</span>
              <span className="text-sm tracking-[0.3em] font-light ml-1 text-stone-400">
                STORE
              </span>
            </Link>

            <p className="text-stone-500 text-[13px] leading-relaxed max-w-xs font-medium">
              Redefining your digital shopping experience with curated premium
              goods. Quality and minimalist style delivered since 2024.
            </p>

            {/* Social Links using custom SVGs */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social, i) => (
                <Link
                  key={i}
                  to="/"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-2xl bg-stone-50 text-stone-400 hover:text-white hover:bg-stone-900 hover:-translate-y-1 transition-all duration-500 flex items-center justify-center border border-stone-100"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {social.isInsta && (
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    )}
                    <path d={social.path} />
                    {social.isInsta && (
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    )}
                    {social.isEmail && <polyline points="22,6 12,13 2,6" />}
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Sections */}
          {footerSections.map((section, idx) => (
            <div key={idx} className="lg:col-span-1">
              <h3 className="text-stone-900 font-black text-[10px] uppercase tracking-[0.3em] mb-8">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link
                      to="/"
                      className="text-stone-500 hover:text-amber-700 transition-colors text-[13px] font-semibold flex items-center group"
                    >
                      <span className="w-0 h-1 bg-amber-500 rounded-full group-hover:w-1.5 group-hover:mr-2 transition-all duration-300" />
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="text-stone-900 font-black text-[10px] uppercase tracking-[0.3em] mb-8">
              Stay Connected
            </h3>
            <p className="text-stone-500 text-[11px] mb-6 font-medium leading-relaxed">
              Join our concierge list for exclusive drops and seasonal updates.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-stone-50 border border-stone-100 rounded-[1.2rem] py-4 px-5 text-[12px] font-medium outline-none focus:bg-white focus:border-amber-600/30 transition-all"
              />
              <button className="absolute right-2 top-2 p-2.5 bg-stone-900 text-white rounded-xl hover:bg-amber-600 transition-all duration-300">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Utility */}
        <div className="pt-10 border-t border-stone-50 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-stone-400 text-[9px] font-black tracking-[0.2em] uppercase">
            © 2026 E.STORE SIGNATURE. ALL RIGHTS RESERVED.
          </p>

          <div className="flex items-center gap-8">
            <img
              src={PayPal}
              alt="PayPal"
              className="h-4 grayscale opacity-30 hover:opacity-100 hover:grayscale-0 transition-all duration-500 cursor-pointer"
            />
            <img
              src={Visa}
              alt="Visa"
              className="h-3 grayscale opacity-30 hover:opacity-100 hover:grayscale-0 transition-all duration-500 cursor-pointer"
            />
            <img
              src={MasterCard}
              alt="Mastercard"
              className="h-6 grayscale opacity-30 hover:opacity-100 hover:grayscale-0 transition-all duration-500 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default MainFooter;
