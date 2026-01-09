import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Services from "../components/home/Services";
import Technology from "../components/home/Technology";
import Industries from "../components/home/Industries";
import HowItWorks from "../components/home/HowItWorks";
import Portfolio from "../components/home/Portfolio";
import CandidatePortal from "../components/home/CandidatePortal";
import Contact from "../components/home/Contact";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Technology />
      <Industries />
      <HowItWorks />
      <Portfolio />
      <CandidatePortal />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
