import type React from "react";
import ServicesSection from "../components/Home/ServicesSection";
import AboutSection from "../components/Home/AboutSection";
import CaseStudiesSection from "../components/Home/CaseStudiesSection";
import TestimonialsSection from "../components/Home/TestimonialsSection";
import ContactSection from "../components/Home/ContactSection";

const Home: React.FC = () => {
  return (
    <>
      <ServicesSection />
      <AboutSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
};

export default Home;
