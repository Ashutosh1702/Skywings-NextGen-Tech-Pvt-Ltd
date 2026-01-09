import { memo } from "react";
import { motion } from "framer-motion";

const Button = ({ text, type = "primary", size = "md", onClick }) => {
  const base =
    "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-lg hover:shadow-xl";
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  const variants = {
    primary:
      "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 focus:ring-blue-300 active:scale-95",
    secondary:
      "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:border-blue-700 focus:ring-blue-200 bg-white active:scale-95",
    ghost:
      "text-blue-600 hover:bg-blue-50 focus:ring-blue-200 active:scale-95",
  };

  const classes = `${base} ${sizes[size] || sizes.md} ${variants[type] || variants.primary}`;

  return (
    <motion.button
      className={classes}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {text}
    </motion.button>
  );
};

export default memo(Button);
