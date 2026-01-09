import { motion } from "framer-motion";
import { FiTarget, FiUsers, FiTrendingUp, FiAward } from "react-icons/fi";

const About = () => {
  const stats = [
    { icon: <FiUsers className="h-6 w-6" />, value: "100+", label: "Expert Team" },
    { icon: <FiTarget className="h-6 w-6" />, value: "500+", label: "Projects Delivered" },
    { icon: <FiTrendingUp className="h-6 w-6" />, value: "98%", label: "Client Satisfaction" },
    { icon: <FiAward className="h-6 w-6" />, value: "15+", label: "Years Experience" },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">us</span>
            </h2>
            <p className="text-gray-600 mt-4 text-lg leading-relaxed">
              We are a technology partner for ambitious teams. From discovery and
              architecture to delivery and support, we help you ship with speed and
              confidence. Our experts embed with your team or deliver end-to-end
              managed solutions.
            </p>
            <p className="text-gray-600 mt-4 text-lg leading-relaxed">
              With a focus on clarity, ownership, and measurable outcomes, we turn
              complex ideas into reliable digital products.
            </p>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-blue-600 mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600">
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="text-center p-8"
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Your Success, Engineered
                </h3>
                <p className="text-white/90 text-lg">
                  Transforming ideas into digital excellence
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
