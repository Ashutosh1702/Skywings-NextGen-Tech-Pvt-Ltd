import { motion } from "framer-motion";
import { FiMessageCircle, FiUsers, FiSend } from "react-icons/fi";

const HowItWorks = () => {
  const steps = [
    {
      title: "Consult",
      desc: "Tell us your needs",
      icon: <FiMessageCircle className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Match",
      desc: "We find the right talent",
      icon: <FiUsers className="h-6 w-6" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Deploy",
      desc: "Work starts immediately",
      icon: <FiSend className="h-6 w-6" />,
      color: "from-indigo-500 to-blue-500",
    },
  ];

  return (
    <section id="how" className="bg-slate-900 py-24 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            How it <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">works</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A simple, transparent process from brief to delivery.
            We streamline complexity so you can focus on growth.
          </p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 hover:border-blue-500/30 transition-all duration-500 group hover:bg-slate-800/80 hover:shadow-2xl hover:shadow-blue-900/10 z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
            >
              <div className="absolute -top-6 left-8">
                <motion.div
                  className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${step.color} text-white grid place-items-center font-bold text-lg shadow-lg ring-4 ring-slate-950 transition-transform duration-500`}
                  whileHover={{ scale: 1.1, rotate: 180 }}
                >
                  {index + 1}
                </motion.div>
              </div>
              <div className="mt-8">
                <motion.div
                  className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${step.color} text-white grid place-items-center mb-6 shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {step.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-200 transition-colors">{step.title}</h3>
                <p className="text-slate-400 text-lg leading-relaxed group-hover:text-slate-300 transition-colors">{step.desc}</p>
              </div>
            </motion.div>
          ))}

          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-[40%] left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-slate-700 to-transparent z-0 opacity-50 border-t border-dashed border-slate-600" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
