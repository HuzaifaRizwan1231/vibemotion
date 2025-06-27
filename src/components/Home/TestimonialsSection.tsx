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

  const testimonials = [
    {
      clientName: "Sarah Johnson",
      remark:
        "Vibe Motion transformed our digital presence with their expert consultancy and creative development. Their project kept everything on track and delivered exceptional results.",
      image: "/images/client-2.jpeg",
    },
    {
      clientName: "David Lee",
      remark:
        "The e-commerce solution Vibe Motion built for us exceeded expectations. Their technical expertise and attention to detail made the entire process smooth and successful.",
      image: "/images/client.jpg",
    },
  ];

  return (
    <section className="client_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Testimonials</h2>
        </div>
      </div>
      <div id="customCarousel2" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`carousel-item ${index == 0 && "active"}`}
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-10 mx-auto">
                    <div className="box">
                      <div className="img-box">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="detail-box">
                        <div className="client_info">
                          <div className="client_name mb-3">
                            <h5>{item.clientName}</h5>
                          </div>
                          <i
                            className="fa fa-quote-left"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <p>{item.remark}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <ol className="carousel-indicators">
          {testimonials.map((_, index) => (
            <li
              key={index}
              data-target="#customCarousel2"
              data-slide-to={index}
              className={`${index == 0 && `active`}`}
            ></li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default TestimonialsSection;
