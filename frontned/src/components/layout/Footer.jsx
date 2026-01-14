import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiArrowUpRight, FiLinkedin, FiTwitter, FiGithub, FiFacebook } from "react-icons/fi";

const Footer = () => {
  const socialLinks = [
    { icon: <FiLinkedin className="h-6 w-6" />, href: "#", label: "LinkedIn" },
    { icon: <FiTwitter className="h-6 w-6" />, href: "#", label: "Twitter" },
    { icon: <FiGithub className="h-6 w-6" />, href: "#", label: "GitHub" },
    { icon: <FiFacebook className="h-6 w-6" />, href: "#", label: "Facebook" },
  ];

  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 overflow-hidden relative">
       {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              Let's build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                something epic.
              </span>
            </h2>
            <a
              href="mailto:skywingsnextgentechpvtltd@gmail.com"
              className="inline-flex items-center gap-3 text-xl md:text-3xl font-light hover:text-cyan-400 transition-colors group break-all"
            >
              skywingsnextgentechpvtltd@gmail.com
              <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform flex-shrink-0" />
            </a>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 content-end">
             {["Company", "Legal", "Social"].map((title, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <h4 className="text-sm font-semibold text-gray-400 mb-6 uppercase tracking-wider">{title}</h4>
                   <ul className="space-y-4">
                     {title === 'Company' && (
                        <>
                          <li><a href="#home" className="hover:text-cyan-400 transition-colors">Home</a></li>
                          <li><a href="#services" className="hover:text-cyan-400 transition-colors">Services</a></li>
                          <li><a href="#about" className="hover:text-cyan-400 transition-colors">About</a></li>
                        </>
                     )}
                     {title === 'Legal' && (
                        <>
                          <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a></li>
                          <li><a href="#" className="hover:text-cyan-400 transition-colors">Terms</a></li>
                        </>
                     )}
                     {title === 'Social' && socialLinks.map((l) => (
                        <li key={l.label}>
                           <a href={l.href} className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                             {l.label}
                           </a>
                        </li>
                     ))}
                   </ul>
                </motion.div>
             ))}
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
           <p>© 2026 Skywings NextGen Tech Pvt Ltd.</p>
           <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span>All systems operational</span>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
