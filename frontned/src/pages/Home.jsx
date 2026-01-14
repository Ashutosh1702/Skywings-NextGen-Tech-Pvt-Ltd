import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Services from "../components/home/Services";
import Technology from "../components/home/Technology";
import Industries from "../components/home/Industries";
import HowItWorks from "../components/home/HowItWorks";
import Portfolio from "../components/home/Portfolio";
import Contact from "../components/home/Contact";
import OfficeLife from "../components/home/OfficeLife";

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
      <OfficeLife />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
