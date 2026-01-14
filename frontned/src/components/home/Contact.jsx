import { motion } from "framer-motion";
import { useState } from "react";
import { FiMapPin, FiMail, FiPhone, FiSend } from "react-icons/fi";
import Button from "../common/Button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="bg-slate-950 py-24 px-6 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
        </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Let's <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">talk</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Ready to start your next project? Get in touch with us today.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-8 text-white">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-5 group">
                  <div className="h-14 w-14 rounded-xl bg-slate-900 border border-slate-800 text-blue-400 grid place-items-center flex-shrink-0 group-hover:scale-110 group-hover:border-blue-500/50 transition-all duration-300">
                    <FiMapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-1">Location</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">SKYWINGS NEXTGEN TECH PRIVATE LIMITED<br/>Plot 127, 2 Fl,Kh-15/25/2, RHS PVT 18, Razapur Khurd, D. K. Mohan Garden, New Delhi, West Delhi- 110059, Delhi</p>
                  </div>
                </div>
                <div className="flex items-start gap-5 group">
                  <div className="h-14 w-14 rounded-xl bg-slate-900 border border-slate-800 text-purple-400 grid place-items-center flex-shrink-0 group-hover:scale-110 group-hover:border-purple-500/50 transition-all duration-300">
                    <FiMail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-1">Email</h4>
                    <p className="text-slate-400 text-lg break-all">skywingsnextgentechpvtltd@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-5 group">
                  <div className="h-14 w-14 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400 grid place-items-center flex-shrink-0 group-hover:scale-110 group-hover:border-emerald-500/50 transition-all duration-300">
                    <FiPhone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-1">Phone</h4>
                    <p className="text-slate-400 text-lg">7485043266</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative group">
              <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-300 pointer-events-none z-10" />
              <iframe
                className="w-full h-80 grayscale hover:grayscale-0 transition-all duration-700"
                src="https://maps.google.com/maps?q=New%20Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
                title="Map"
                loading="lazy"
                style={{ filter: "invert(90%) hue-rotate(180deg)" }}
              />
            </div>
          </motion.div>

          <motion.form
            className="bg-slate-900/50 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-slate-800 shadow-xl space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
          >
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2 ml-1">
                Name <span className="text-blue-500">*</span>
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-4 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2 ml-1">
                Email <span className="text-blue-500">*</span>
              </label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-4 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all"
                placeholder="john@company.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2 ml-1">
                Message <span className="text-blue-500">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full p-4 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 resize-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all"
                placeholder="Tell us about your project..."
              />
            </div>
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4 rounded-xl font-bold text-lg hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-blue-900/20"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FiSend className="h-5 w-5" />
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
