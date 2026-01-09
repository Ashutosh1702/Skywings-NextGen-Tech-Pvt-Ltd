import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../common/Button";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Technology", href: "#technology" },
    { label: "Industries", href: "#industries" },
    { label: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (href) => {
    setOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200"
          : "bg-white/80 backdrop-blur-sm border-b border-gray-100"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a
          href="#home"
          className="flex items-center gap-2 group"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("#home");
          }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.span
            className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white grid place-items-center font-bold text-lg shadow-lg"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            S
          </motion.span>
          <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Skywings NextGen
          </span>
        </motion.a>

        <ul className="hidden md:flex items-center gap-6 font-medium text-gray-700">
          {links.map((l, index) => (
            <motion.li
              key={l.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(l.href);
                }}
                className="relative py-2 hover:text-blue-600 transition-colors group"
              >
                {l.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
              </a>
            </motion.li>
          ))}
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button text="Get Started" size="sm" />
          </motion.li>
        </ul>

        <motion.button
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          whileTap={{ scale: 0.95 }}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="h-5 w-5"
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {open ? (
              <path strokeWidth="2" strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </motion.svg>
        </motion.button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden border-t bg-white/95 backdrop-blur-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="px-6 py-4 space-y-2">
              {links.map((l, index) => (
                <motion.li
                  key={l.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <a
                    href={l.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(l.href);
                    }}
                    className="block py-3 text-gray-800 hover:text-blue-600 hover:bg-blue-50 rounded-lg px-3 transition-colors"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="pt-2"
              >
                <Button text="Get Started" size="md" />
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
