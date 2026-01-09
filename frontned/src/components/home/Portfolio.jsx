import { useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import portfolioEdtech from "../../assets/portfolio-edtech.svg";
import portfolioMedical from "../../assets/portfolio-medical.svg";
import portfolioIT from "../../assets/portfolio-it.svg";
import portfolioFoodtech from "../../assets/portfolio-foodtech.svg";
import portfolioMarketplace from "../../assets/portfolio-marketplace.svg";

const slides = [
  {
    title: "EdTech Platform",
    tag: "EdTech",
    desc: "Learning at scale with engaging UX.",
    color: "from-violet-500 to-purple-600",
    bgColor: "from-violet-100 to-violet-50",
    image: portfolioEdtech,
  },
  {
    title: "Medical SaaS",
    tag: "Medical",
    desc: "Compliance-first healthcare tools.",
    color: "from-emerald-500 to-teal-600",
    bgColor: "from-emerald-100 to-emerald-50",
    image: portfolioMedical,
  },
  {
    title: "IT Services Site",
    tag: "IT",
    desc: "Professional presence for IT firms.",
    color: "from-blue-500 to-cyan-600",
    bgColor: "from-blue-100 to-blue-50",
    image: portfolioIT,
  },
  {
    title: "FoodTech Delivery",
    tag: "FoodTech",
    desc: "Delightful ordering experiences.",
    color: "from-amber-500 to-orange-600",
    bgColor: "from-amber-100 to-amber-50",
    image: portfolioFoodtech,
  },
  {
    title: "Tech Marketplace",
    tag: "Technology",
    desc: "Scale-ready marketplaces.",
    color: "from-sky-500 to-blue-600",
    bgColor: "from-sky-100 to-sky-50",
    image: portfolioMarketplace,
  },
];

const Portfolio = () => {

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Selected <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">work</span>
          </h2>
          <p className="text-gray-600 text-lg">
            A glimpse of what we build across industries.
          </p>
        </motion.div>

        <div className="mt-8">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={true}
            className="rounded-2xl overflow-hidden"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                    <div className="mb-4">
                      <span
                        className={`inline-block text-sm font-medium px-4 py-2 rounded-full bg-gradient-to-r ${slide.color} text-white shadow-lg`}
                      >
                        {slide.tag}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-3">
                      {slide.title}
                    </h3>
                    <p className="text-white/90 text-lg md:text-xl max-w-2xl">
                      {slide.desc}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
