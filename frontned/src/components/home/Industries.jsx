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
    <section id="industries" className="py-24 bg-slate-950 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Industries</span> We Serve
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We tailor our approach to your domain.
            Deep expertise across key sectors.
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
            <div className="p-8 rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 h-full hover:shadow-2xl hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-blue-500/20 transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white grid place-items-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FiTarget className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-bold mb-6 text-white">Why it matters</h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Different industries demand different workflows, compliance, and UX. We adapt our process to fit your context and KPIs, ensuring that the solution isn't just code, but a strategic asset.
                </p>
              </div>
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
                    className="h-full p-8 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:border-slate-600 hover:bg-slate-800/80 transition-all duration-500 group relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 10, borderColor: "rgba(99, 102, 241, 0.3)" }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${it.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    <div className="flex items-start gap-6 relative z-10">
                      <motion.div
                        className={`h-14 w-14 rounded-xl bg-gradient-to-br ${it.color} text-white grid place-items-center shadow-lg flex-shrink-0`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        {it.icon}
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-200 transition-colors">{it.title}</h3>
                        <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors text-sm md:text-base">{it.desc}</p>
                      </div>
                    </div>
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
