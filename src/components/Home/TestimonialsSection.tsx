"use client";

import type React from "react";
import { useEffect } from "react";

const TestimonialsSection: React.FC = () => {
  useEffect(() => {
    // Initialize Bootstrap carousel if needed
    const carousel = document.getElementById("customCarousel2");
    if (carousel && (window as any).bootstrap) {
      new (window as any).bootstrap.Carousel(carousel);
    }
  }, []);

  return (
    <section className="client_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Testimonials</h2>
        </div>
      </div>
      <div id="customCarousel2" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col-md-10 mx-auto">
                  <div className="box">
                    <div className="img-box">
                      <img src="/images/client.jpg" alt="" />
                    </div>
                    <div className="detail-box">
                      <div className="client_info">
                        <div className="client_name">
                          <h5>Sarah Johnson</h5>
                          <h6>Tech Startup CEO</h6>
                        </div>
                        <i className="fa fa-quote-left" aria-hidden="true"></i>
                      </div>
                      <p>
                        Vibemotion transformed our digital presence with their
                        expert consultancy and creative development. Their
                        project management approach kept everything on track and
                        delivered exceptional results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-md-10 mx-auto">
                  <div className="box">
                    <div className="img-box">
                      <img src="/images/client.jpg" alt="" />
                    </div>
                    <div className="detail-box">
                      <div className="client_info">
                        <div className="client_name">
                          <h5>Michael Chen</h5>
                          <h6>E-commerce Director</h6>
                        </div>
                        <i className="fa fa-quote-left" aria-hidden="true"></i>
                      </div>
                      <p>
                        The e-commerce solution Vibemotion built for us exceeded
                        expectations. Their technical expertise and attention to
                        detail made the entire process smooth and successful.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ol className="carousel-indicators">
          <li
            data-target="#customCarousel2"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#customCarousel2" data-slide-to="1"></li>
        </ol>
      </div>
    </section>
  );
};

export default TestimonialsSection;
