import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function SplashScreen() {
  const navigate = useNavigate();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  setTimeout(() => {
    navigate("/main/");
  }, 3000);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative flex flex-col items-center justify-center h-screen px-6 overflow-hidden bg-zinc-50"
    >
      {/* Decorative Background Blobs */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-amber-100 rounded-full blur-3xl"
      />

      <div className="z-10 text-center max-w-md">
        {/* Animated Brand Icon */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          className="mb-8 mx-auto w-20 h-20 bg-amber-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-amber-200 rotate-3"
        >
          <span className="text-white text-4xl font-black italic">E</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-extrabold text-zinc-900 tracking-tight"
        >
          Discover Your Next <br />
          <span className="text-amber-600">Favorite Find</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-4 text-lg text-zinc-500 leading-relaxed"
        >
          Premium quality essentials delivered straight to your door.
        </motion.p>

        {/* Loading Dots */}
        <motion.div
          variants={itemVariants}
          className="flex flex-row justify-center gap-2 mt-12"
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: index * 0.15,
                ease: "easeInOut",
              }}
              className="w-3 h-3 rounded-full bg-amber-600"
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default SplashScreen;
