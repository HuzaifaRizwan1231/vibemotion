"use client";

import type React from "react";
import { useEffect } from "react";

const HeroSlider: React.FC = () => {
  useEffect(() => {
    // Initialize Bootstrap carousel if needed
    const carousel = document.getElementById("customCarousel1");
    if (carousel && (window as any).bootstrap) {
      new (window as any).bootstrap.Carousel(carousel);
    }
  }, []);

  return (
    <section className="slider_section">
      <div id="customCarousel1" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="img-box">
                    <img src="/src/assets/images/slider-img.png" alt="" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="detail-box">
                    <h1>Digital Marketing Experts</h1>
                    <p>
                      Aenean scelerisque felis ut orci condimentum laoreet.
                      Integer nisi nisl, convallis et augue sit amet, lobortis
                      semper quam.
                    </p>
                    <div className="btn-box">
                      <a href="#" className="btn1">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="img-box">
                    <img src="/src/assets/images/slider-img.png" alt="" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="detail-box">
                    <h1>Digital Marketing Experts</h1>
                    <p>
                      Aenean scelerisque felis ut orci condimentum laoreet.
                      Integer nisi nisl, convallis et augue sit amet, lobortis
                      semper quam.
                    </p>
                    <div className="btn-box">
                      <a href="#" className="btn1">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="img-box">
                    <img src="/src/assets/images/slider-img.png" alt="" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="detail-box">
                    <h1>Digital Marketing Experts</h1>
                    <p>
                      Aenean scelerisque felis ut orci condimentum laoreet.
                      Integer nisi nisl, convallis et augue sit amet, lobortis
                      semper quam.
                    </p>
                    <div className="btn-box">
                      <a href="#" className="btn1">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ol className="carousel-indicators">
          <li
            data-target="#customCarousel1"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#customCarousel1" data-slide-to="1"></li>
          <li data-target="#customCarousel1" data-slide-to="2"></li>
        </ol>
      </div>
    </section>
  );
};

export default HeroSlider;
