import type React from "react";

const AboutSection: React.FC = () => {
  return (
    <section className="about_section layout_padding layout_margin">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="detail-box">
              <div className="heading_container">
                <h2>About Vibemotion</h2>
              </div>
              <p>
                Vibemotion is a Manchester-based digital solutions agency
                offering tailored software consultancy, creative development,
                project management, and e-commerce services to businesses of all
                sizes. Our goal is to deliver smart, scalable solutions that
                empower clients to thrive in the digital space.
              </p>
              <p>
                With years of experience in the digital industry, our team
                combines technical expertise with creative innovation to help
                businesses transform their operations and achieve their goals.
                We pride ourselves on delivering high-quality solutions that
                drive real business value.
              </p>
              <a href="/contact">Get In Touch</a>
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
