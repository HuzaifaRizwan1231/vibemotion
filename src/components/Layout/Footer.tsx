"use client";

import type React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  useEffect(() => {
    // Set current year
    const yearElement = document.getElementById("displayYear");
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear().toString();
    }
  }, []);

  return (
    <div className="footer_container">
      <section className="info_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="info_detail">
                <h4>
                  {" "}
                  <img
                    className="footer_logo"
                    src={"/logo/logo.png"}
                    alt="Vibemotion Logo"
                    style={{
                      height: "80px",
                      width: "auto",
                      objectFit: "contain",
                      display: "block",
                    }}
                  />
                </h4>
                <p>
                  UK-based digital solutions agency offering tailored software
                  consultancy, creative development, project management, and
                  e-commerce services to businesses of all sizes.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mx-auto">
              <div className="info_link_box">
                <h4>Links</h4>
                <div className="info_links">
                  <Link className="" to="/">
                    Home
                  </Link>
                  <Link className="" to="/about">
                    About
                  </Link>
                  <Link className="" to="/services">
                    Services
                  </Link>
                  <Link className="" to="/contact">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-0 ml-auto">
              <div className="info_contact">
                <h4>Contact Info</h4>
                <div className="contact_link_box">
                  <a href="#">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <span>Manchester, United Kingdom</span>
                  </a>
                  <a href="mailto:vibemotionuk@gmail.com">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <span>vibemotionuk@gmail.com</span>
                  </a>
                </div>
              </div>
              <div className="info_social">
                <a href="#">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer_section">
        <div className="container">
          <p>
            &copy; <span id="displayYear"></span> All Rights Reserved By
            <Link to="#"> Vibe Motion Ltd</Link>
          </p>
        </div>
      </footer>

      <style>{`


        @media (max-width: 768px) {
          .footer_logo {
            margin: auto;
          }

        }
      `}</style>
    </div>
  );
};

export default Footer;
