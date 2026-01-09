import { motion } from "framer-motion";
import {
  FiBriefcase,
  FiSmartphone,
  FiCloud,
  FiBook,
  FiShield,
  FiShoppingCart,
  FiTruck,
  FiActivity,
  FiHeart,
} from "react-icons/fi";
import itConsultancyImg from "../../assets/it-consultancy.svg";
import appDevImg from "../../assets/app-development.svg";
import cloudComputingImg from "../../assets/cloud-computing.svg";
import edtechImg from "../../assets/edtech.svg";
import cybersecurityImg from "../../assets/cybersecurity.svg";
import ecommerceImg from "../../assets/ecommerce.svg";
import foodDeliveryImg from "../../assets/food-delivery.svg";
import fitnessImg from "../../assets/fitness.svg";
import healthcareImg from "../../assets/healthcare.svg";

const Services = () => {
  const services = [
    {
      title: "IT Consultancy",
      desc: "Strategy, architecture, delivery excellence, and transformation.",
      icon: <FiBriefcase className="h-6 w-6" />,
      image: itConsultancyImg,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "App Development",
      desc: "Web and mobile apps built for performance, scale, and UX.",
      icon: <FiSmartphone className="h-6 w-6" />,
      image: appDevImg,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Cloud Computing",
      desc: "Design, migrate, and optimize workloads on the cloud.",
      platform: "AWS",
      icon: <FiCloud className="h-6 w-6" />,
      image: cloudComputingImg,
      color: "from-indigo-500 to-indigo-600",
    },
    {
      title: "Ed‑Tech Solutions",
      desc: "LMS, content delivery, assessments, virtual classrooms, and analytics.",
      icon: <FiBook className="h-6 w-6" />,
      image: edtechImg,
      color: "from-emerald-500 to-emerald-600",
    },
    {
      title: "Cybersecurity",
      desc: "Security audits, AppSec, compliance, SOC readiness, and hardening.",
      icon: <FiShield className="h-6 w-6" />,
      image: cybersecurityImg,
      color: "from-red-500 to-red-600",
    },
    {
      title: "E‑commerce",
      desc: "Storefronts, catalog, payments, checkout, and ERP/OMS integrations.",
      icon: <FiShoppingCart className="h-6 w-6" />,
      image: ecommerceImg,
      color: "from-amber-500 to-amber-600",
    },
    {
      title: "Food Delivery",
      desc: "On‑demand ordering, dispatch, live tracking, and partner portals.",
      icon: <FiTruck className="h-6 w-6" />,
      image: foodDeliveryImg,
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Gym & Fitness",
      desc: "Memberships, bookings, training programs, and mobile apps.",
      icon: <FiActivity className="h-6 w-6" />,
      image: fitnessImg,
      color: "from-pink-500 to-pink-600",
    },
    {
      title: "Healthcare Websites",
      desc: "Clinic portals, telemedicine, EMR integrations, HIPAA‑ready.",
      icon: <FiHeart className="h-6 w-6" />,
      image: healthcareImg,
      color: "from-teal-500 to-teal-600",
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What we <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">do</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Flexible engagement models to fit your roadmap and budget.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((s, index) => (
            <motion.div
              key={s.title}
              className="group relative p-6 rounded-2xl border border-gray-200 bg-white hover:border-transparent overflow-hidden transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative z-10">
                <div className="mb-4 rounded-xl overflow-hidden h-32 bg-gray-100 group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src={s.image} 
                    alt={s.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div
                  className={`h-14 w-14 rounded-xl bg-gradient-to-br ${s.color} text-white grid place-items-center mb-4 shadow-lg`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {s.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-white transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white/90 transition-colors leading-relaxed">
                  {s.desc}
                </p>
                {s.platform && (
                  <div className="mt-4 inline-flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs font-medium group-hover:bg-white/20 group-hover:text-white group-hover:border-white/30 transition-colors">
                      Platform: {s.platform}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
