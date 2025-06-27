"use client";

import type React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const HeroSlider: React.FC = () => {
  useEffect(() => {
    // Initialize Bootstrap carousel if needed
    const carousel = document.getElementById("customCarousel1");
    if (carousel && (window as any).bootstrap) {
      new (window as any).bootstrap.Carousel(carousel);
    }
  }, []);

  const carouselItems = [
    {
      image: "/images/slider-img.png",
      title: "💡 Digital Solutions Experts",
      subTitle:
        "Vibe Motion delivers tailored software consultancy, creative development, and e-commerce solutions to help your business thrive in the digital space.",
    },
    {
      image: "/images/slider-img-2.png",
      title: "🎨 Creative Meets Code",
      subTitle:
        "From stunning UI/UX to interactive websites and digital campaigns — our creative development team turns ideas into pixel-perfect experiences.",
    },
    {
      image: "/images/slider-img-3.png",
      title: "🚀 Your E-Commerce Launchpad",
      subTitle:
        "We combine expert project management with e-commerce know-how to build powerful, scalable online stores tailored to your business goals.",
    },
  ];

  return (
    <section className="slider_section">
      <div id="customCarousel1" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className={`carousel-item ${index == 0 && "active"}`}
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="img-box">
                      <img src={item.image} alt="" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="detail-box">
                      <h1>{item.title}</h1>
                      <p>{item.subTitle}</p>
                      <div className="btn-box">
                        <Link to="/contact" className="btn1">
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <ol className="carousel-indicators">
          {carouselItems.map((_, index) => (
            <li
              key={index}
              data-target="#customCarousel1"
              data-slide-to={index}
              className={`${index == 0 && `active`}`}
            ></li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HeroSlider;
