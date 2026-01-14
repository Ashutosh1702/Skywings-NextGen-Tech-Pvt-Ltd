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
    secondary:
      "bg-transparent border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 hover:bg-white/5 focus:ring-gray-500",
    ghost:
      "text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10",
  };

  return (
    <motion.button
      className={`${base} ${sizes[size] || sizes.md} ${variants[type] || variants.primary} ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="relative z-10">{text}</span>
      {type === "primary" && (
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      )}
    </motion.button>
  );
};

export default memo(Button);
