import type React from "react";
import ServiceCard from "../UI/ServiceCard";

const ServicesSection: React.FC = () => {
  const services = [
    {
      image: "/src/assets/images/s1.png",
      title: "Test Building",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
      image: "/src/assets/images/s2.png",
      title: "On page SEO",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
      image: "/src/assets/images/s3.png",
      title: "Online Marketing",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
      image: "/src/assets/images/s4.png",
      title: "Email Marketing",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
  ];

  return (
    <section className="service_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>Our Services</h2>
          <p>
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
        <div className="btn-box">
          <a href="#">View More</a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
