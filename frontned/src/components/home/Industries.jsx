import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FiHeadphones, FiPackage, FiImage, FiTarget } from "react-icons/fi";
import "swiper/css";

const Industries = () => {
  const items = [
    {
      title: "Support",
      desc: "Customer support solutions and helpdesk tooling.",
      icon: <FiHeadphones className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Manufacturing",
      desc: "IoT dashboards, MES integrations, and analytics.",
      icon: <FiPackage className="h-6 w-6" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Art & Fashion",
      desc: "Immersive brand sites, ecommerce, and lookbooks.",
      icon: <FiImage className="h-6 w-6" />,
      color: "from-indigo-500 to-blue-500",
    },
  ];

  const count = items.length;
  const bp = {
    768: { slidesPerView: Math.min(2, count) },
    1024: { slidesPerView: Math.min(3, count) },
  };

  return (
    <section id="industries" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Industries</span> We Serve
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We tailor our approach to your domain.
          </p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-2 gap-8 items-stretch">
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-8 rounded-2xl border border-gray-200 bg-gradient-to-br from-blue-50 to-indigo-50 h-full hover:shadow-xl transition-all duration-300">
              <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 text-white grid place-items-center mb-6">
                <FiTarget className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Why it matters</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Different industries demand different workflows, compliance, and UX. We adapt our process to fit your context and KPIs.
              </p>
            </div>
          </motion.div>
          <div>
            <Swiper
              direction="vertical"
              loop={count > 3}
              modules={[Autoplay]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              speed={1000}
              allowTouchMove={true}
              slidesPerView={1}
              breakpoints={bp}
              style={{ height: "28rem" }}
              className="h-full"
            >
              {items.map((it, index) => (
                <SwiperSlide key={it.title}>
                  <motion.div
                    className="h-full p-6 rounded-2xl border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <motion.div
                      className={`h-12 w-12 rounded-xl bg-gradient-to-br ${it.color} text-white grid place-items-center mb-4 shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {it.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{it.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{it.desc}</p>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
