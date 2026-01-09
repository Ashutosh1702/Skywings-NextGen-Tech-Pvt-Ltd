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
    <section id="how" className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How it <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">works</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A simple, transparent process from brief to delivery.
          </p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
            >
              <div className="absolute -top-4 left-8">
                <motion.div
                  className={`h-12 w-12 rounded-full bg-gradient-to-br ${step.color} text-white grid place-items-center font-bold text-lg shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {index + 1}
                </motion.div>
              </div>
              <div className="mt-4">
                <motion.div
                  className={`h-16 w-16 rounded-xl bg-gradient-to-br ${step.color} text-white grid place-items-center mb-6 shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {step.icon}
                </motion.div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 text-lg">{step.desc}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform -translate-y-1/2" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
