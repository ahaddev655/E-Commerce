import { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function SplashScreen() {
  const navigate = useNavigate();
  const id = localStorage.getItem("id");
  const token = localStorage.getItem("token");
  // Handle navigation with cleanup
  useEffect(() => {
    const timer = setTimeout(() => {
      if (id && token) {
        navigate("/main/");
        return;
      }
      navigate("/auth/");
    }, 3200);
    return () => clearTimeout(timer);
  }, [navigate]);

  const containerVariants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative flex flex-col items-center justify-center h-screen px-6 overflow-hidden bg-[#f8f8f8]"
    >
      {/* Decorative Signature Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-20%] right-[-10%] w-125 h-125 bg-amber-100/50 rounded-full blur-[120px] z-0"
      />

      <div className="z-10 text-center max-w-lg">
        {/* Animated Brand Icon */}
        <motion.div
          variants={itemVariants}
          className="mb-12 mx-auto w-24 h-24 bg-stone-900 rounded-4xl flex items-center justify-center shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] relative"
        >
          <span className="text-white text-4xl font-black tracking-tighter">
            E
          </span>
          <div className="absolute bottom-6 right-7 w-2 h-2 bg-amber-500 rounded-full" />
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl font-black text-stone-900 tracking-tighter leading-[0.9]"
        >
          Signature <br />
          <span className="text-amber-700 font-serif italic font-light">
            Essentials
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-6 text-[11px] font-black uppercase tracking-[0.4em] text-stone-400"
        >
          Est. 2024 — Collection 2026
        </motion.p>

        {/* Sophisticated Progress Loader */}
        <motion.div
          variants={itemVariants}
          className="mt-16 w-48 h-0.5 bg-stone-200 mx-auto overflow-hidden rounded-full relative"
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-stone-900 w-1/2"
          />
        </motion.div>
      </div>

      {/* Footer Branding */}
      <motion.div
        variants={itemVariants}
        className="absolute bottom-12 text-[9px] font-black tracking-[0.5em] text-stone-300 uppercase"
      >
        E.Store Digital Bureau
      </motion.div>
    </motion.div>
  );
}

export default SplashScreen;
