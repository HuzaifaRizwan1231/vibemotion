"use client";

import type React from "react";
import ContactForm from "./ContactForm";

const ContactSection: React.FC = () => {
  return (
    <section className="contact_section layout_padding">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 col-lg-4 offset-md-1">
            <ContactForm />
          </div>
          <div className="col-md-6 col-lg-7 px-0">
            <div className="contact_info_section">
              <div className="contact_info_content">
                <div className="heading_container">
                  <h2>Get In Touch</h2>
                  <p>
                    Ready to transform your digital presence? We'd love to hear
                    from you.
                  </p>
                </div>

                <div className="contact_details">
                  <div className="contact_item">
                    <div className="contact_icon">
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                    </div>
                    <div className="contact_text">
                      <h5>Location</h5>
                      <p>Manchester, United Kingdom</p>
                    </div>
                  </div>

                  <div className="contact_item">
                    <div className="contact_icon">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                    </div>
                    <div className="contact_text">
                      <h5>Email</h5>
                      <p>
                        <a href="mailto:vibemotionuk@gmail.com">
                          vibemotionuk@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* <div className="contact_item">
                    <div className="contact_icon">
                      <i className="fa fa-phone" aria-hidden="true"></i>
                    </div>
                    <div className="contact_text">
                      <h5>Let's Talk</h5>
                      <p>
                        Drop us a message and we'll get back to you within 24
                        hours
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
