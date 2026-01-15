import { useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Corrected Imports
import portfolioEdtech from "../../assets/edtechplatform.jpg";
import portfolioMedical from "../../assets/healthcarewebsite.jpg"; // Fixed
import portfolioIT from "../../assets/ITConsluntant.jpg";
import portfolioFoodtech from "../../assets/fooddeleveryapp.jpg"; // Fixed
import portfolioMarketplace from "../../assets/EcommerceApp.jpg";

const slides = [
  {
    title: "EdTech Platform",
    tag: "EdTech",
    desc: "Learning at scale with engaging UX.",
    color: "from-violet-500 to-purple-600",
    image: portfolioEdtech,
  },
  {
    title: "Medical SaaS",
    tag: "Medical",
    desc: "Compliance-first healthcare tools.",
    color: "from-emerald-500 to-teal-600",
    image: portfolioMedical,
  },
  {
    title: "IT Services Site",
    tag: "IT",
    desc: "Professional presence for IT firms.",
    color: "from-blue-500 to-cyan-600",
    image: portfolioIT,
  },
  {
    title: "FoodTech Delivery",
    tag: "FoodTech",
    desc: "Delightful ordering experiences.",
    color: "from-amber-500 to-orange-600",
    image: portfolioFoodtech,
  },
  {
    title: "Tech Marketplace",
    tag: "Technology",
    desc: "Scale-ready marketplaces.",
    color: "from-sky-500 to-blue-600",
    image: portfolioMarketplace,
  },
];

const Portfolio = () => {

  return (
    <section id="portfolio" className="py-24 bg-slate-950 relative overflow-hidden">
       {/* Background Noise/Gradient */}
       <div className="absolute inset-0 bg-[#0f172a]" />
       <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
       <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Work</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl">
              A showcase of our digital craftsmanship across various industries.
            </p>
          </div>
          
          {/* Custom Navigation Buttons could go here */}
        </motion.div>

        <div className="mt-8">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: {
                 slidesPerView: 2,
              },
              1280: {
                slidesPerView: 2.5,
              }
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{ clickable: true, dynamicBullets: true }}
            className="pb-12 !px-2"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <motion.div 
                  className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer border border-white/10 bg-slate-900/40 backdrop-blur-md hover:border-cyan-500/30 transition-all duration-500 shadow-2xl hover:shadow-[0_20px_50px_rgba(6,182,212,0.15)]"
                  whileHover={{ y: -10, rotateX: 2, rotateY: 2 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="absolute inset-0 z-0">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent opacity-90 transition-opacity duration-300" />
                    {/* Glossy Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 z-10 w-full">
                    <div className="flex justify-between items-start w-full">
                        <motion.span
                        className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 bg-gradient-to-r ${slide.color} text-white shadow-lg`}
                        whileHover={{ scale: 1.05 }}
                        >
                        {slide.tag}
                        </motion.span>
                        {index < 2 && (
                            <span className="px-2 py-1 bg-red-500/20 text-red-400 text-[10px] font-bold uppercase rounded border border-red-500/30 animate-pulse">
                                Featured
                            </span>
                        )}
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors drop-shadow-md">
                      {slide.title}
                    </h3>
                    <p className="text-slate-300 text-base line-clamp-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0">
                      {slide.desc}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-cyan-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      View Case Study <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
