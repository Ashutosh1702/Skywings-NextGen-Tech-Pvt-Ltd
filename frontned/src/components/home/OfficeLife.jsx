import React from "react";
import { motion } from "framer-motion";

// Importing images
import OfficeTeam from "../../assets/officeArea/OfficeTeam.jpeg";
import DSC_2064 from "../../assets/officeArea/DSC_2064.JPG";
import DSC_2267 from "../../assets/officeArea/DSC_2267.JPG";
import DSC_2279 from "../../assets/officeArea/DSC_2279.JPG";
import MEETING_HALL from "../../assets/officeArea/MEETING_HALL.jpeg";
import mettingArea from "../../assets/officeArea/mettingArea.jpeg";
import mettingarea2 from "../../assets/officeArea/mettingarea2.jpeg";
import officearea from "../../assets/officeArea/officearea.jpeg";

const images = [
  { src: DSC_2064, alt: "Office Workstation", span: "col-span-1 md:col-span-2 row-span-2" },
  { src: MEETING_HALL, alt: "Conference Room", span: "col-span-1 md:col-span-1 row-span-1" },
  { src: OfficeTeam, alt: "Our Team", span: "col-span-1 md:col-span-1 row-span-1" },
  { src: DSC_2267, alt: "Collaboration Area", span: "col-span-1 md:col-span-1 row-span-1" },
  { src: DSC_2279, alt: "Office Environment", span: "col-span-1 md:col-span-1 row-span-1" },
  { src: mettingArea, alt: "Meeting Space", span: "col-span-1 md:col-span-1 row-span-1" },
  { src: mettingarea2, alt: "Discussion Room", span: "col-span-1 md:col-span-1 row-span-1" },
  { src: officearea, alt: "Workspace", span: "col-span-1 md:col-span-2 row-span-1" },
];

const OfficeLife = () => {
  return (
    <section className="py-24 bg-slate-950 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-900/50 to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Life at Skywings
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            A glimpse into our vibrant workspace where innovation meets collaboration. 
            We believe in creating an environment that inspires creativity and fosters growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-xl shadow-lg group ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-semibold text-lg">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficeLife;
