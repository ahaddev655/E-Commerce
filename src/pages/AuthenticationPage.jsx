import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, User, Phone, ArrowRight, Eye, EyeOff } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";

function AuthenticationPage() {
  const [activeTab, setActiveTab] = useState("SignUp");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // setIsLoading(true);

    if (activeTab === "Login") {
      // --- LOGIN VALIDATION ---
      if (!formData.email?.trim()) {
        toast.error("Email is required ...");
        return;
      }

      if (!formData.email?.trim().includes("@")) {
        toast.error("Email is invalid ...");
        return;
      }

      if (!formData.password?.trim()) {
        toast.error("Password is required ...");
        return;
      }
    } else {
      // --- SIGNUP VALIDATION (ALL FIELDS) ---
      if (
        !formData.firstName?.trim() &&
        !formData.lastName?.trim() &&
        !formData.email?.trim() &&
        !formData.password?.trim() &&
        !formData.phoneNumber?.trim()
      ) {
        toast.error("All Fields are required ...");
        return;
      }

      if (!formData.firstName?.trim()) {
        toast.error("Full Name required ...");
        return;
      }

      if (!formData.lastName?.trim()) {
        toast.error("Last Name is required ...");
        return;
      }

      if (!formData.email?.trim()) {
        toast.error("Email is required ...");
        return;
      }

      if (!formData.email?.trim().includes("@")) {
        toast.error("Email is invalid ...");
        return;
      }

      if (!formData.password?.trim()) {
        toast.error("Password is required ...");
        return;
      }

      if (formData.password?.trim().length < 11) {
        toast.error("Password length is invalid ...");
        return;
      }

      if (!formData.phoneNumber?.trim()) {
        toast.error("Phone Number is required ...");
        return;
      }

      if (formData.phoneNumber?.trim().length > 11) {
        toast.error(
          "Phone Number is invalid. Type a valid number or remove the country code",
        );
        return;
      }
    }

    console.log(`${activeTab} Data:`, formData);

    setTimeout(() => {
      toast.success(`${activeTab} Successful!`);
    }, 1500);
  };

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-[#f4f4f4] flex items-center justify-center p-6">
      <ToastContainer autoClose={1500} hideProgressBar position="top-center" />
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-stone-100">
        {/* Left Visual Panel */}
        <div className="hidden md:flex bg-stone-900 p-16 flex-col justify-between relative">
          <div className="z-10">
            <h1 className="text-4xl font-black text-white tracking-tighter uppercase leading-none">
              Signature
              <br />
              <span className="text-amber-500">Boutique</span>
            </h1>
            <p className="text-[10px] text-stone-400 font-black uppercase tracking-[0.4em] mt-4">
              Authorized Personnel Only
            </p>
          </div>

          <div className="space-y-4 z-10">
            <div className="h-1 w-12 bg-amber-600 rounded-full" />
            <p className="text-xs text-stone-400 font-medium leading-relaxed max-w-65">
              Access your global dashboard to manage inventory, track logistics,
              and analyze customer behavior in real-time.
            </p>
          </div>

          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-600/10 rounded-full blur-[80px]" />
        </div>

        {/* Right Form Panel */}
        <div className="p-8 md:p-14 flex flex-col justify-center">
          {/* Tab Switcher */}
          <div className="flex gap-10 mb-10 border-b border-stone-50">
            {["SignUp", "Login"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative pb-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all ${
                  activeTab === tab
                    ? "text-stone-900"
                    : "text-stone-300 hover:text-stone-400"
                }`}
              >
                {tab === "SignUp" ? "Create Account" : "Welcome Back"}
                {activeTab === tab && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-stone-900 rounded-full"
                  />
                )}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Conditional Fields for SignUp */}
                {activeTab === "SignUp" && (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[9px] font-black text-stone-400 uppercase tracking-widest ml-1">
                          First Name
                        </label>
                        <div className="relative">
                          <User
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-300"
                            size={14}
                          />
                          <input
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Jane"
                            className="w-full bg-stone-50 rounded-2xl py-3.5 pl-10 pr-4 text-xs font-bold outline-none focus:ring-2 focus:ring-stone-900/5 transition-all"
                          />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[9px] font-black text-stone-400 uppercase tracking-widest ml-1">
                          Last Name
                        </label>
                        <input
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          type="text"
                          placeholder="Doe"
                          className="w-full bg-stone-50 rounded-2xl py-3.5 px-4 text-xs font-bold outline-none focus:ring-2 focus:ring-stone-900/5 transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[9px] font-black text-stone-400 uppercase tracking-widest ml-1">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-300"
                          size={14}
                        />
                        <input
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                          type="tel"
                          placeholder="+92 000 0000000"
                          className="w-full bg-stone-50 rounded-2xl py-3.5 pl-10 pr-4 text-xs font-bold outline-none focus:ring-2 focus:ring-stone-900/5 transition-all"
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* Common Fields */}
                <div className="space-y-1.5">
                  <label className="text-[9px] font-black text-stone-400 uppercase tracking-widest ml-1">
                    Email Address
                  </label>
                  <div className="relative group">
                    <Mail
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-300 group-focus-within:text-stone-900 transition-colors"
                      size={14}
                    />
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      type="text"
                      placeholder="admin@signature.com"
                      className="w-full bg-stone-50 rounded-2xl py-3.5 pl-10 pr-4 text-xs font-bold outline-none focus:ring-2 focus:ring-stone-900/5 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[9px] font-black text-stone-400 uppercase tracking-widest ml-1">
                    Password
                  </label>
                  <div className="relative group">
                    <Lock
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-300 group-focus-within:text-stone-900 transition-colors"
                      size={14}
                    />
                    <input
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••••••"
                      className="w-full bg-stone-50 rounded-2xl py-3.5 pl-10 pr-12 text-xs font-bold outline-none focus:ring-2 focus:ring-stone-900/5 transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-300 hover:text-stone-900 transition-colors"
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-stone-900 text-white py-4 mt-4 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-amber-600 transition-all shadow-xl flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
                >
                  {isLoading
                    ? "Processing..."
                    : activeTab === "SignUp"
                      ? "Register User"
                      : "Authorize Access"}
                  {!isLoading && <ArrowRight size={14} />}
                </button>
              </form>

              {/* Social Login Section */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-stone-100"></span>
                </div>
                <div className="relative flex justify-center text-[8px] uppercase font-black text-stone-300 bg-white px-4">
                  Secure Social Gateway
                </div>
              </div>

              <button className="w-full border border-stone-100 bg-white text-stone-900 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-stone-50 transition-all flex items-center justify-center gap-3 active:scale-95">
                <svg width="16" height="16" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                {activeTab === "SignUp"
                  ? "Join with Google"
                  : "Login with Google"}
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default AuthenticationPage;
