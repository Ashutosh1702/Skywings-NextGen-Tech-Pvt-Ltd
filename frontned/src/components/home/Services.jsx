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
import itConsultancyImg from "../../assets/ITConsluntant.jpg";
import appDevImg from "../../assets/AppDevelopment.jpg";
import cloudComputingImg from "../../assets/cloudcomputing.jpg";
import edtechImg from "../../assets/edtechplatform.jpg";
import ecommerceImg from "../../assets/EcommerceApp.jpg";
import fitnessImg from "../../assets/gym.jpg";
import cybersecurityImg from "../../assets/cybercurity.jpg";
import foodDeliveryImg from "../../assets/fooddeleveryapp.jpg";
import healthcareImg from "../../assets/healthcarewebsite.jpg";

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
      objectPosition: "center top",
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Gym & Fitness",
      desc: "Memberships, bookings, training programs, and mobile apps.",
      icon: <FiActivity className="h-6 w-6" />,
      image: fitnessImg,
      objectPosition: "center top",
      color: "from-pink-500 to-pink-600",
    },
    {
      title: "Healthcare Websites",
      desc: "Clinic portals, telemedicine, EMR integrations, HIPAA‑ready.",
      icon: <FiHeart className="h-6 w-6" />,
      image: healthcareImg,
      objectPosition: "center top",
      color: "from-teal-500 to-teal-600",
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-950 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            What we <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">do</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Flexible engagement models to fit your roadmap and budget.
            We build scalable solutions for your business growth.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, index) => (
            <motion.div
              key={s.title}
              className="group relative md:p-6 p-4 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-600/50 backdrop-blur-sm overflow-hidden transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Hover Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {s.image && (
                  <div className="mb-6 rounded-xl overflow-hidden h-48 bg-slate-800 group-hover:shadow-2xl transition-all duration-300">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                      style={{ objectPosition: s.objectPosition || "center center" }}
                    />
                  </div>
                )}
                
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    className={`h-12 w-12 rounded-xl bg-gradient-to-br ${s.color} text-white grid place-items-center shadow-lg`}
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {s.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors">
                    {s.title}
                  </h3>
                </div>

                <p className="text-slate-400 group-hover:text-slate-200 transition-colors leading-relaxed">
                  {s.desc}
                </p>

                {s.platform && (
                  <div className="mt-4 inline-flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium group-hover:border-slate-500 transition-colors">
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
