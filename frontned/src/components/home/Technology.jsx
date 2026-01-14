import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FiCode, FiServer, FiSmartphone, FiSettings } from "react-icons/fi";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Technology = () => {
  const items = [
    {
      title: "Frontend Experts",
      desc: "React, Next.js, performance, accessibility, and design systems.",
      icon: <FiCode className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Backend Powerhouse",
      desc: "Node.js, Python, Java, microservices, APIs, and databases.",
      icon: <FiServer className="h-6 w-6" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Mobile Experts",
      desc: "React Native and Flutter apps built for performance and scale.",
      icon: <FiSmartphone className="h-6 w-6" />,
      color: "from-indigo-500 to-blue-500",
    },
    {
      title: "DevOps Champions",
      desc: "CI/CD, Kubernetes, cloud infra, monitoring, and reliability.",
      icon: <FiSettings className="h-6 w-6" />,
      color: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section id="technology" className="py-24 bg-slate-950 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Technology</span> Stack
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            The right expertise at every layer of your stack.
            Built with modern tools for speed and reliability.
          </p>
        </motion.div>

        <div className="mt-8">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 4, spaceBetween: 28 },
            }}
            className="pb-12 !px-4"
          >
            {items.map((it, index) => (
              <SwiperSlide key={it.title} className="py-8">
                <motion.div
                  className="h-full p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm transition-all duration-500 group relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, borderColor: "rgba(56, 189, 248, 0.3)" }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${it.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <motion.div
                    className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${it.color} text-white grid place-items-center mb-6 shadow-lg relative z-10`}
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {it.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-200 transition-colors relative z-10">{it.title}</h3>
                  <p className="text-slate-400 text-base leading-relaxed group-hover:text-slate-200 transition-colors relative z-10">{it.desc}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Technology;
