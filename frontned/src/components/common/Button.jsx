import { memo } from "react";
import { motion } from "framer-motion";

const Button = ({ text, type = "primary", size = "md", onClick, className = "" }) => {
  const base =
    "relative inline-flex items-center justify-center rounded-lg font-medium tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 overflow-hidden group";
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variants = {
    primary:
      "bg-cyan-500 text-white hover:bg-cyan-400 focus:ring-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] border border-cyan-400/50",
    primary3d:
      "bg-cyan-500 text-white border-b-4 border-cyan-700 hover:bg-cyan-400 hover:border-cyan-600 active:border-b-0 active:translate-y-1 transition-all",
    secondary:
      "bg-transparent border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 hover:bg-white/5 focus:ring-gray-500",
    ghost:
      "text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10",
  };

  return (
    <motion.button
      className={`${base} ${sizes[size] || sizes.md} ${variants[type] || variants.primary} ${className} relative overflow-hidden`}
      onClick={onClick}
      whileHover={type !== "primary3d" ? { scale: 1.05 } : {}}
      whileTap={type !== "primary3d" ? { scale: 0.95 } : {}}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">{text}</span>
      {type === "primary" && (
        <>
        {/* Shimmer Effect */}
        <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg]"
            initial={{ x: "-150%" }}
            animate={{ x: "150%" }}
            transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 2,
            ease: "easeInOut",
            repeatDelay: 1,
            }}
        />
        {/* Glow/Pulse background */}
        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-cyan-400/20 blur-xl" />
        </>
      )}
    </motion.button>
  );
};

export default memo(Button);
