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
    <section id="technology" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Technology</span> Stack
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            The right expertise at every layer of your stack.
          </p>
        </motion.div>

        <div className="mt-12">
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
          >
            {items.map((it, index) => (
              <SwiperSlide key={it.title}>
                <motion.div
                  className="h-full p-6 rounded-2xl border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <motion.div
                    className={`h-14 w-14 rounded-xl bg-gradient-to-br ${it.color} text-white grid place-items-center mb-4 shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {it.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{it.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{it.desc}</p>
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
