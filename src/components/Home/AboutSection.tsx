import type React from "react";

const AboutSection: React.FC = () => {
  return (
    <section className="about_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="detail-box">
              <div className="heading_container">
                <h2>About Us</h2>
              </div>
              <p>
                Vibe Motion is a UK-based digital solutions agency offering
                tailored software consultancy, creative development, project
                management, and e-commerce services to businesses of all sizes.
                Our goal is to deliver smart, scalable solutions that empower
                clients to thrive in the digital space.
              </p>
              <a href="/about">Read More</a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="img-box">
              <img src="/images/about-img.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
