import type React from "react";
import AboutSection from "../components/Home/AboutSection";
import TestimonialsSection from "../components/Home/TestimonialsSection";
import ServicesSection from "../components/Services/ServicesSection";
import ContactSection from "../components/Contact/ContactSection";

const Home: React.FC = () => {
  return (
    <>
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
};

export default Home;
