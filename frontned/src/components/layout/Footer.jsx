import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone, FiLinkedin, FiTwitter, FiGithub, FiFacebook } from "react-icons/fi";

const Footer = () => {
  const socialLinks = [
    { icon: <FiLinkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <FiTwitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <FiGithub className="h-5 w-5" />, href: "#", label: "GitHub" },
    { icon: <FiFacebook className="h-5 w-5" />, href: "#", label: "Facebook" },
  ];

  const handleLinkClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-950 to-black text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <motion.span
                className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 text-white grid place-items-center font-bold text-lg shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                S
              </motion.span>
              <span className="text-xl font-bold text-white">Skywings NextGen</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Delivering scalable IT talent and managed services to help you win.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-lg bg-gray-800 text-gray-400 hover:text-white hover:bg-blue-600 grid place-items-center transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4 text-lg">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("#home");
                  }}
                  className="hover:text-white transition-colors inline-block"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("#services");
                  }}
                  className="hover:text-white transition-colors inline-block"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("#careers");
                  }}
                  className="hover:text-white transition-colors inline-block"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("#contact");
                  }}
                  className="hover:text-white transition-colors inline-block"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4 text-lg">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors inline-block">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors inline-block">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors inline-block">
                  Cookies
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-4 text-lg">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <FiMapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <span>New Delhi, India</span>
              </li>
              <li className="flex items-start gap-3">
                <FiMail className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@skywingsnextgen.com"
                  className="hover:text-white transition-colors"
                >
                  info@skywingsnextgen.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FiPhone className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <span>Available on request</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2026 Skywings NextGen Tech Pvt Ltd. All rights reserved.</p>
            <p className="text-xs">
              Built with ❤️ for innovation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
