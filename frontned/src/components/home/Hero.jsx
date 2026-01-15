import { useState } from "react";
import { motion } from "framer-motion";
import Button from "../common/Button";
import { FiArrowRight } from "react-icons/fi";
import { FaRocket } from "react-icons/fa";
import DiscoveryModal from "./DiscoveryModal";
import ConsultationModal from "../common/ConsultationModal";

const Hero = () => {
  const [isDiscoveryOpen, setIsDiscoveryOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  // Handle flow: Discovery Selection -> Open Consultation
  const handleDiscoveryClose = (shouldProceed, serviceId = null) => {
      setIsDiscoveryOpen(false);
      if (shouldProceed && serviceId) {
          setSelectedService(serviceId);
          setTimeout(() => setIsConsultationOpen(true), 300); // Small delay for smooth transition
      }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950">
      {/* ... (background effects same as before) ... */}
      
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 bg-[#0f172a]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      
      {/* Animated Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3], 
          x: [0, 50, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, -50, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" 
      />
      
      {/* Grid Pattern with Fade */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 z-10 w-full pt-10 md:pt-0">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="text-center max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-300 text-xs md:text-sm font-medium mb-8 backdrop-blur-sm shadow-xl shadow-cyan-900/10 cursor-default hover:bg-white/10 transition-colors"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Accepting New Projects for Q1 2026
          </motion.div>

          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-white leading-[1.1] mb-8 drop-shadow-2xl">
            Build the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 animate-gradient-x">
              Future Today
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light px-4">
             We engineer exceptional digital experiences. From scalable cloud architectures to intuitive mobile apps, we help ambitious brands win.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
             <motion.div 
               className="w-full sm:w-auto"
               animate={{ y: [-5, 5, -5] }}
               transition={{
                 duration: 4,
                 repeat: Infinity,
                 ease: "easeInOut"
               }}
             >
               <Button 
                type="premium"
                text={
                  <span className="flex items-center gap-2">
                    <FaRocket className="w-5 h-5" /> Start Your Project
                  </span>
                } 
                onClick={() => setIsDiscoveryOpen(true)}
                size="lg" 
                className="w-full sm:w-auto shadow-lg shadow-cyan-900/50" 
               />
             </motion.div>
             <a href="#portfolio" className="group flex items-center justify-center gap-2 text-white font-medium hover:text-cyan-400 transition-colors px-6 py-3 rounded-lg w-full sm:w-auto hover:bg-white/5">
               View our work
               <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
             </a>
          </div>
        </motion.div>

        {/* Trusted By Ticker */}
        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1, duration: 1 }}
           className="mt-24 md:mt-32 border-t border-slate-800/50 pt-12"
        >
           <p className="text-center text-sm text-slate-500 uppercase tracking-widest mb-8 font-semibold">Trusted by innovative companies</p>
           <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {['Acme Corp', 'GlobalTech', 'Nebula', 'Velocity', 'Quantum'].map(name => (
                <span key={name} className="text-xl md:text-2xl font-bold font-mono text-slate-400 hover:text-white transition-colors cursor-default">{name}</span>
             ))}
           </div>
        </motion.div>
      </div>

      <DiscoveryModal 
        isOpen={isDiscoveryOpen} 
        onClose={() => handleDiscoveryClose(false)} 
        onSelect={(id) => handleDiscoveryClose(true, id)}
      />
      <ConsultationModal 
        isOpen={isConsultationOpen} 
        onClose={() => setIsConsultationOpen(false)} 
        selectedServiceId={selectedService}
      />
    </section>
  );
};

export default Hero;
