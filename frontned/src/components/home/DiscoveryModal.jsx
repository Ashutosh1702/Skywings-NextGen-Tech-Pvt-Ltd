import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGlobe, FiSmartphone, FiLayers, FiCloud, FiX } from "react-icons/fi";

export const options = [
  {
    id: "website",
    title: "Website",
    icon: <FiGlobe className="w-8 h-8" />,
    desc: "Corporate, Landing Pages, Portfolio",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "mobile",
    title: "Mobile App",
    icon: <FiSmartphone className="w-8 h-8" />,
    desc: "iOS, Android, Cross-platform",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "saas",
    title: "SaaS Platform",
    icon: <FiLayers className="w-8 h-8" />,
    desc: "Dashboard, CRM, Web App",
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: "cloud",
    title: "Cloud / DevOps",
    icon: <FiCloud className="w-8 h-8" />,
    desc: "AWS, Azure, Scalable Infra",
    color: "from-orange-500 to-amber-500",
  },
];

const DiscoveryModal = ({ isOpen, onClose, onSelect }) => {
  const [selectedId, setSelectedId] = useState(null);

  const handleSelect = (id) => {
    setSelectedId(id);
    // Visual feedback delay before proceeding
    setTimeout(() => {
      // Logic managed by parent via onSelect
      if (onSelect) onSelect(id);
      setSelectedId(null);
    }, 600);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
          onClick={onClose}
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-slate-900/95 border border-slate-700/50 rounded-3xl shadow-2xl backdrop-blur-xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-full transition-colors z-50"
          >
            <FiX className="w-5 h-5" />
          </button>

          <div className="p-6 md:p-12 text-center overflow-y-auto">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              What do you want to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">build?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto"
            >
              Select a category to get started with your project consultation.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {options.map((opt, index) => {
                const isSelected = selectedId === opt.id;
                const isDimmed = selectedId && !isSelected;

                return (
                  <motion.div
                    key={opt.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: isDimmed ? 0.4 : 1, 
                      y: 0,
                      scale: isSelected ? 1.05 : 1
                    }}
                    transition={{ duration: 0.3 }}
                    whileHover={!selectedId ? { y: -5, scale: 1.02 } : {}}
                    whileTap={!selectedId ? { scale: 0.98 } : {}}
                    className={`
                      group relative p-6 rounded-2xl transition-all cursor-pointer text-left
                      ${isSelected 
                        ? "bg-slate-800 border-2 border-blue-500 shadow-xl shadow-blue-500/20" 
                        : "bg-slate-800/30 border border-slate-700/50 hover:border-slate-500/50 hover:bg-slate-800/60"}
                    `}
                    onClick={() => handleSelect(opt.id)}
                  >
                    <div className={`mb-4 w-14 h-14 rounded-2xl bg-gradient-to-br ${opt.color} p-[1px] shadow-lg transition-shadow ${isSelected ? "shadow-cyan-500/30" : "group-hover:shadow-xl group-hover:shadow-cyan-500/10"}`}>
                       <div className={`w-full h-full rounded-2xl flex items-center justify-center transition-all ${isSelected ? "bg-transparent text-white" : "bg-slate-900 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-white"}`}>
                          {opt.icon}
                       </div>
                    </div>
                    <h3 className={`text-xl font-bold mb-2 transition-colors ${isSelected ? "text-white" : "text-white group-hover:text-cyan-300"}`}>{opt.title}</h3>
                    <p className={`text-sm transition-colors ${isSelected ? "text-slate-300" : "text-slate-400 group-hover:text-slate-300"}`}>{opt.desc}</p>
                    
                    {/* Hover Glow / Active Background */}
                    {!isSelected && (
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${opt.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default DiscoveryModal;
