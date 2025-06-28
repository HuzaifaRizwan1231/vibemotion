"use client";

import type React from "react";
import { Link } from "react-router-dom";
import type { ServiceDetail } from "../../types";

interface ServiceNavigationProps {
  service: ServiceDetail;
}

const ServiceNavigation: React.FC<ServiceNavigationProps> = ({ service }) => {
  const getServiceTitle = (slug: string): string => {
    const titles: { [key: string]: string } = {
      "software-consultancy": "Software Consultancy",
      "creative-development": "Creative Development",
      "project-management": "Project Management",
      "e-commerce-specialist": "E-commerce Specialist",
    };
    return titles[slug] || slug;
  };

  return (
    <section className="service_navigation_section">
      <div className="container">
        <div className="navigation_container">
          <div className="nav_item prev_service">
            {service.prevService && (
              <Link to={`/service/${service.prevService}`} className="nav_link">
                <div className="nav_direction">
                  <i className="fa fa-arrow-left"></i>
                  <span>Previous Service</span>
                </div>
                <div className="nav_title">
                  {getServiceTitle(service.prevService)}
                </div>
              </Link>
            )}
          </div>

          <div className="nav_item center_action">
            <Link to="/services" className="all_services_btn">
              <i className="fa fa-th-large"></i>
              <span>All Services</span>
            </Link>
          </div>

          <div className="nav_item next_service">
            {service.nextService && (
              <Link to={`/service/${service.nextService}`} className="nav_link">
                <div className="nav_direction">
                  <span>Next Service</span>
                  <i className="fa fa-arrow-right"></i>
                </div>
                <div className="nav_title">
                  {getServiceTitle(service.nextService)}
                </div>
              </Link>
            )}
          </div>
        </div>

        <div className="cta_section">
          <div className="cta_content">
            <h3>Ready to Get Started?</h3>
            <p>
              Let's discuss how we can help transform your business with our{" "}
              {service.title.toLowerCase()} expertise.
            </p>
            <div className="cta_buttons">
              <Link to="/contact" className="cta_btn primary">
                <i className="fa fa-envelope"></i>
                Get a Quote
              </Link>
              {/* <a href="tel:+44" className="cta_btn secondary">
                <i className="fa fa-phone"></i>
                Call Us
              </a> */}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .service_navigation_section {
          background: #ffffff;
          padding: 60px 0;
          border-top: 1px solid #e9ecef;
        }

        .navigation_container {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 30px;
          align-items: center;
          margin-bottom: 80px;
        }

        .nav_item {
          display: flex;
          justify-content: center;
        }

        .prev_service {
          justify-content: flex-start;
        }

        .next_service {
          justify-content: flex-end;
        }

        .nav_link {
          display: block;
          padding: 25px 30px;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          border-radius: 15px;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 2px solid transparent;
          min-width: 250px;
        }

        .nav_link:hover {
          background: linear-gradient(135deg, #7335b7 0%, #5a2a8f 100%);
          color: #ffffff;
          text-decoration: none;
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(115, 53, 183, 0.3);
        }

        .nav_direction {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
          color: #666;
          margin-bottom: 8px;
          transition: color 0.3s ease;
        }

        .nav_link:hover .nav_direction {
          color: rgba(255, 255, 255, 0.8);
        }

        .nav_direction i {
          font-size: 14px;
        }

        .nav_title {
          font-size: 1.2rem;
          font-weight: bold;
          color: #333;
          transition: color 0.3s ease;
        }

        .nav_link:hover .nav_title {
          color: #ffffff;
        }

        .next_service .nav_direction {
          flex-direction: row-reverse;
        }

        .next_service .nav_title {
          text-align: right;
        }

        .all_services_btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          padding: 20px;
          background: #f8842b;
          color: #ffffff;
          border-radius: 50%;
          width: 80px;
          height: 80px;
          text-decoration: none;
          transition: all 0.3s ease;
          justify-content: center;
          text-align:center;
        }

        .all_services_btn:hover {
          background: #ff9f4a;
          transform: scale(1.1);
          color: #ffffff;
          text-decoration: none;
          box-shadow: 0 10px 25px rgba(248, 132, 43, 0.3);
        }

        .all_services_btn i {
          font-size: 20px;
        }

        .all_services_btn span {
          font-size: 0.8rem;
          font-weight: 600;
        }

        .cta_section {
          text-align: center;
        }

        .cta_content {
          background: linear-gradient(135deg, #7335b7 0%, #5a2a8f 100%);
          color: #ffffff;
          padding: 60px 40px;
          border-radius: 25px;
          position: relative;
          overflow: hidden;
        }

        .cta_content::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="hexagons" width="28" height="49" patternUnits="userSpaceOnUse"><polygon points="14,1 26,8 26,22 14,29 2,22 2,8" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/></pattern></defs><rect width="100" height="100" fill="url(%23hexagons)"/></svg>');
          opacity: 0.3;
        }

        .cta_content h3 {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 20px;
          position: relative;
          z-index: 2;
        }

        .cta_content p {
          font-size: 1.2rem;
          margin-bottom: 40px;
          color: rgba(255, 255, 255, 0.9);
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          position: relative;
          z-index: 2;
        }

        .cta_buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
          position: relative;
          z-index: 2;
        }

        .cta_btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 18px 35px;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.3s ease;
        }

        .cta_btn.primary {
          background: #f8842b;
          color: #ffffff;
        }

        .cta_btn.primary:hover {
          background: #ff9f4a;
          transform: translateY(-3px);
          color: #ffffff;
          text-decoration: none;
          box-shadow: 0 15px 35px rgba(248, 132, 43, 0.4);
        }

        .cta_btn.secondary {
          background: transparent;
          color: #ffffff;
          border: 2px solid #ffffff;
        }

        .cta_btn.secondary:hover {
          background: #ffffff;
          color: #7335b7;
          transform: translateY(-3px);
          text-decoration: none;
          box-shadow: 0 15px 35px rgba(255, 255, 255, 0.3);
        }

        .cta_btn i {
          font-size: 16px;
        }

        @media (max-width: 768px) {
          .navigation_container {
            grid-template-columns: 1fr;
            gap: 20px;
            text-align: center;
          }

          .nav_item {
            justify-content: center;
          }

          .nav_link {
            min-width: auto;
            width: 100%;
            max-width: 300px;
          }

          .next_service .nav_title {
            text-align: center;
          }

          .cta_content {
            padding: 40px 25px;
          }

          .cta_content h3 {
            font-size: 2rem;
          }

          .cta_content p {
            font-size: 1.1rem;
          }

          .cta_buttons {
            flex-direction: column;
            align-items: center;
          }

          .cta_btn {
            width: 100%;
            max-width: 250px;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default ServiceNavigation;
