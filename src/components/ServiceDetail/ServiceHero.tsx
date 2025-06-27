"use client";

import type React from "react";
import type { ServiceDetail } from "../../types";

interface ServiceHeroProps {
  service: ServiceDetail;
}

const ServiceHero: React.FC<ServiceHeroProps> = ({ service }) => {
  return (
    <section className="service_hero_section">
      <div className="container">
        <div className="row align-items-center hero_row">
          <div className="col-md-6">
            <div className="hero_content">
              <div className="service_icon">
                <i className={`fa ${service.icon}`} aria-hidden="true"></i>
              </div>
              <h1>{service.title}</h1>
              <p className="subtitle">{service.subtitle}</p>
              <p className="overview">{service.overview}</p>
              <div className="hero_buttons">
                <a href="#process" className="btn btn_primary">
                  Our Process
                </a>
                <a href="#pricing" className="btn btn_secondary">
                  View Pricing
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="hero_image">
              <div className="image_container">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                />
                <div className="floating_elements">
                  <div className="floating_icon floating_1">
                    <i className="fa fa-check-circle"></i>
                  </div>
                  <div className="floating_icon floating_2">
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="floating_icon floating_3">
                    <i className="fa fa-rocket"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .service_hero_section {
          background: linear-gradient(135deg, #7335b7 0%, #5a2a8f 100%);
          color: #ffffff;
          padding: 100px 0 80px;
          position: relative;
          overflow: hidden;
          border-radius: 250px 0 250px 0;
        }

        .service_hero_section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="50" cy="10" r="0.5" fill="rgba(255,255,255,0.05)"/><circle cx="20" cy="80" r="0.5" fill="rgba(255,255,255,0.05)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
          opacity: 0.3;
        }

        .hero_content {
          position: relative;
          z-index: 2;
        }

        .service_icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(45deg, #f8842b, #ff9f4a);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 30px;
          box-shadow: 0 10px 30px rgba(248, 132, 43, 0.3);
        }

        .service_icon i {
          font-size: 36px;
          color: #ffffff;
        }

        .hero_content h1 {
          font-size: 3.5rem;
          font-weight: bold;
          margin-bottom: 15px;
          line-height: 1.2;
        }

        .subtitle {
          font-size: 1.4rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 25px;
          font-weight: 300;
        }

        .overview {
          font-size: 1.1rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 35px;
        }

        .hero_buttons {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .btn {
          padding: 15px 30px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .btn_primary {
          background-color: #f8842b;
          color: #ffffff;
          border-color: #f8842b;
        }

        .btn_primary:hover {
          background-color: transparent;
          border-color: #f8842b;
          color: #f8842b;
          transform: translateY(-2px);
        }

        .btn_secondary {
          background-color: transparent;
          color: #ffffff;
          border-color: #ffffff;
        }

        .btn_secondary:hover {
          background-color: #ffffff;
          color: #7335b7;
          transform: translateY(-2px);
        }

        .hero_image {
          position: relative;
          z-index: 2;
        }

        .image_container {
          position: relative;
          text-align: center;
        }

        .image_container img {
          max-width: 100%;
          height: auto;
          filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3));
        }

        .floating_elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        .floating_icon {
          position: absolute;
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: float 3s ease-in-out infinite;
        }

        .floating_icon i {
          color: #f8842b;
          font-size: 20px;
        }

        .floating_1 {
          top: 20%;
          right: 10%;
          animation-delay: 0s;
        }

        .floating_2 {
          top: 60%;
          left: 5%;
          animation-delay: 1s;
        }

        .floating_3 {
          bottom: 20%;
          right: 20%;
          animation-delay: 2s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @media (max-width: 768px) {
          .service_hero_section {
            padding: 80px 10px 60px;
            border-radius: 150px 0 150px 0;
          }

          .hero_row {
            gap: 25px;
          }

          .hero_content h1 {
            font-size: 2.5rem;
          }

          .subtitle {
            font-size: 1.2rem;
          }

          .hero_buttons {
            justify-content: center;
          }

          .btn {
            padding: 12px 25px;
            font-size: 0.9rem;
          }

          .floating_icon {
            width: 40px;
            height: 40px;
          }

          .floating_icon i {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
};

export default ServiceHero;
