import { motion } from "framer-motion";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";
import Button from "../common/Button";
import aboutImage1 from "../../assets/ITConsluntant.jpg";
import aboutImage2 from "../../assets/AppDevelopment.jpg";

const About = () => {
  const features = [
    "Trusted Expertise",
    "Results-Driven", 
    "Tailored Solutions"
  ];

  return (
    <section id="about" className="py-24 bg-slate-900 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Composition */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
             <div className="relative z-10">
               <img 
                 src={aboutImage1} 
                 alt="Our Team" 
                 className="w-4/5 rounded-2xl shadow-2xl border border-slate-700/50"
               />
               <motion.div 
                 className="absolute -bottom-12 -right-4 w-2/3 rounded-2xl overflow-hidden border-4 border-slate-900 shadow-2xl"
                 initial={{ y: 20, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 transition={{ delay: 0.3, duration: 0.6 }}
               >
                 <img 
                   src={aboutImage2} 
                   alt="Office Life" 
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
               </motion.div>
             </div>
             
             {/* Decorative Elements */}
             <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10" />
             <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
               <span className="h-px w-8 bg-blue-500" />
               <span className="text-blue-400 font-bold tracking-wider text-sm uppercase">About Us</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Transforming Businesses Through <br/>
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Digital Excellence</span>
            </h2>
            
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              At Skywings NextGen, we're more than just a web and digital marketing agency — we're your strategic partner in building impactful online experiences. Our mission is to empower businesses of all sizes to achieve growth by leveraging cutting-edge <strong className="text-white font-semibold">Web Development, Mobile Apps, SEO, and Social Media Strategies.</strong>
            </p>

            <div className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <FiCheckCircle className="h-6 w-6 text-blue-500 flex-shrink-0" />
                  <span className="text-white font-medium text-lg">{feature}</span>
                </motion.div>
              ))}
            </div>

            <Button text="Learn More" size="lg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
