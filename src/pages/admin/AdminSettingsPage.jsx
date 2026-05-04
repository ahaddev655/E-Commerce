import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Shield,
  Bell,
  User,
  Save,
  RefreshCw,
  Check,
  Lock,
  Mail,
  Smartphone,
  Camera,
} from "lucide-react";

function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState("General");
  const [showToast, setShowToast] = useState(false);

  const tabs = [
    { name: "General", icon: Globe },
    { name: "Security", icon: Shield },
    { name: "Notifications", icon: Bell },
    { name: "Account", icon: User },
  ];

  // Global toast trigger for any form success
  const triggerToast = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  // --- REUSABLE FORM COMPONENTS ---

  const FormWrapper = ({ children, title, desc, onSave }) => {
    const [saving, setSaving] = useState(false);

    const handleInternalSave = () => {
      setSaving(true);
      setTimeout(() => {
        setSaving(false);
        triggerToast();
      }, 1200);
    };

    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-12"
      >
        <div className="border-b border-stone-50 pb-8">
          <h2 className="text-2xl font-black text-stone-900 tracking-tighter uppercase">
            {title}
          </h2>
          <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest mt-1">
            {desc}
          </p>
        </div>

        <div className="min-h-75">{children}</div>

        <div className="pt-10 border-t border-stone-50 flex justify-end">
          <button
            onClick={handleInternalSave}
            disabled={saving}
            className="flex items-center gap-3 bg-stone-900 text-white px-10 py-5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-amber-600 transition-all shadow-xl disabled:opacity-50 active:scale-95"
          >
            {saving ? (
              <RefreshCw size={14} className="animate-spin" />
            ) : (
              <Save size={14} />
            )}
            {saving ? "Updating..." : `Update ${title} Settings`}
          </button>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="p-4 md:p-10 min-h-screen bg-[#f8f8f8]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Page Header */}
        <header>
          <h1 className="text-4xl font-black text-stone-900 tracking-tighter uppercase">
            Configuration
          </h1>
          <p className="text-[11px] text-stone-400 font-black uppercase tracking-[0.3em] mt-2">
            Manage Signature System Parameters
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Side Navigation Tabs */}
          <nav className="flex lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`flex items-center gap-4 px-6 py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all whitespace-nowrap border ${
                  activeTab === tab.name
                    ? "bg-white text-amber-600 shadow-sm border-stone-100"
                    : "text-stone-400 border-transparent hover:text-stone-900 hover:bg-stone-50"
                }`}
              >
                <tab.icon size={18} />
                {tab.name}
              </button>
            ))}
          </nav>

          {/* Form Panel with AnimatePresence */}
          <div className="lg:col-span-3 bg-white rounded-[3rem] border border-stone-100 shadow-sm p-10 md:p-16">
            <AnimatePresence mode="wait">
              {activeTab === "General" && (
                <FormWrapper
                  key="general"
                  title="General"
                  desc="Core store branding and localization"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[9px] font-black text-stone-400 uppercase tracking-widest ml-1">
                        Store Legal Name
                      </label>
                      <input
                        type="text"
                        defaultValue="Signature Boutique Ltd."
                        className="w-full bg-stone-50 border-none rounded-2xl p-5 text-xs font-bold outline-none focus:ring-2 focus:ring-stone-900/5"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] font-black text-stone-400 uppercase tracking-widest ml-1">
                        Support Phone
                      </label>
                      <input
                        type="text"
                        defaultValue="+92 300 1234567"
                        className="w-full bg-stone-50 border-none rounded-2xl p-5 text-xs font-bold outline-none"
                      />
                    </div>
                    <div className="col-span-2 space-y-2">
                      <label className="text-[9px] font-black text-stone-400 uppercase tracking-widest ml-1">
                        Global Meta Description
                      </label>
                      <textarea
                        rows="4"
                        defaultValue="A curated collection of modern essentials for the urban lifestyle."
                        className="w-full bg-stone-50 border-none rounded-2xl p-5 text-xs font-medium outline-none resize-none"
                      />
                    </div>
                  </div>
                </FormWrapper>
              )}

              {activeTab === "Security" && (
                <FormWrapper
                  key="security"
                  title="Security"
                  desc="Password management and access control"
                >
                  <div className="space-y-6 max-w-xl">
                    <div className="p-6 bg-stone-950 rounded-4xl text-white flex items-center justify-between mb-6 shadow-xl">
                      <div className="flex items-center gap-4">
                        <Shield className="text-amber-500" />
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-widest">
                            Enforce 2FA
                          </p>
                          <p className="text-[9px] text-stone-500 font-bold uppercase mt-0.5">
                            Protect admin access
                          </p>
                        </div>
                      </div>
                      <div className="w-12 h-6 bg-amber-600 rounded-full relative">
                        <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-[9px] font-black text-stone-400 uppercase tracking-widest ml-1">
                          New Password
                        </label>
                        <input
                          type="password"
                          placeholder="Min. 12 characters"
                          className="w-full bg-stone-50 border-none rounded-2xl p-5 text-xs font-bold outline-none focus:ring-2 focus:ring-amber-500/10"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-black text-stone-400 uppercase tracking-widest ml-1">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          placeholder="Repeat password"
                          className="w-full bg-stone-50 border-none rounded-2xl p-5 text-xs font-bold outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </FormWrapper>
              )}

              {activeTab === "Notifications" && (
                <FormWrapper
                  key="notifications"
                  title="Notifications"
                  desc="Manage outgoing system alerts"
                >
                  <div className="space-y-3">
                    {[
                      {
                        t: "Marketing Emails",
                        d: "Weekly newsletters and product drops.",
                        on: true,
                      },
                      {
                        t: "Security Alerts",
                        d: "Notify on new logins from unknown devices.",
                        on: true,
                      },
                      {
                        t: "Fulfillment Updates",
                        d: "Alert when orders reach 'Shipped' status.",
                        on: false,
                      },
                    ].map((n, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-6 bg-stone-50 rounded-4xl border border-stone-100 group hover:bg-white transition-all"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center ${n.on ? "bg-amber-100 text-amber-600" : "bg-stone-200 text-stone-400"}`}
                          >
                            <Bell size={18} />
                          </div>
                          <div>
                            <p className="text-xs font-black text-stone-900 uppercase">
                              {n.t}
                            </p>
                            <p className="text-[9px] text-stone-400 font-bold uppercase mt-1">
                              {n.d}
                            </p>
                          </div>
                        </div>
                        <div
                          className={`w-12 h-6 rounded-full relative transition-colors ${n.on ? "bg-stone-900" : "bg-stone-200"}`}
                        >
                          <div
                            className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${n.on ? "right-1" : "left-1"}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </FormWrapper>
              )}

              {activeTab === "Account" && (
                <FormWrapper
                  key="account"
                  title="Account"
                  desc="Your personal administrative profile"
                >
                  <div className="flex flex-col md:flex-row items-center gap-10 mb-10">
                    <div className="relative group">
                      <div className="w-32 h-32 bg-stone-900 rounded-[3rem] flex items-center justify-center text-white text-3xl font-black shadow-2xl overflow-hidden relative">
                        AR
                        <div className="absolute inset-0 bg-amber-600/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                          <Camera size={24} />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4 flex-1">
                      <div className="space-y-2">
                        <label className="text-[9px] font-black text-stone-400 uppercase tracking-widest ml-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          defaultValue="Alex Rivers"
                          className="w-full bg-stone-50 border-none rounded-2xl p-5 text-xs font-bold outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-black text-stone-400 uppercase tracking-widest ml-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          defaultValue="alex.rivers@signature.com"
                          className="w-full bg-stone-50 border-none rounded-2xl p-5 text-xs font-bold outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </FormWrapper>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* SUCCESS FEEDBACK TOAST */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-12 left-1/2 -translate-x-1/2 z-200 bg-stone-900 text-white px-10 py-5 rounded-4xl shadow-2xl flex items-center gap-4 border border-white/10"
          >
            <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
              <Check size={16} strokeWidth={4} />
            </div>
            <span className="text-[11px] font-black uppercase tracking-[0.2em]">
              System State Updated
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default AdminSettingsPage;
