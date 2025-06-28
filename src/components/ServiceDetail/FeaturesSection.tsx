"use client";

import type React from "react";
import type { ServiceDetail } from "../../types";

interface FeaturesSectionProps {
  service: ServiceDetail;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ service }) => {
  return (
    <section className="features_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="features_content">
              <div className="heading_container">
                <h2>Key Features</h2>
                <p>
                  Comprehensive solutions designed to meet your specific needs
                </p>
              </div>

              <div className="features_list">
                {service.keyFeatures.map((feature, index) => (
                  <div key={index} className="feature_item">
                    <div className="feature_icon">
                      <i className="fa fa-check-circle"></i>
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="benefits_content">
              <div className="heading_container">
                <h2>Benefits</h2>
                <p>The value you'll gain from our expertise</p>
              </div>

              <div className="benefits_grid">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="benefit_card">
                    <div className="benefit_icon">
                      <i className="fa fa-star"></i>
                    </div>
                    <p>{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .features_section {
          background: #ffffff;
        }

        .features_content, .benefits_content {
          height: 100%;
        }

        .heading_container h2 {
          color: #7335b7;
          margin-bottom: 15px;
          font-weight: bold;
        }

        .heading_container p {
          color: #666;
          margin-bottom: 30px;
        }

        .features_list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .feature_item {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 15px;
          background: #f8f9fa;
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .feature_item:hover {
          background: #e9ecef;
          transform: translateX(10px);
        }

        .feature_icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(45deg, #7335b7, #5a2a8f);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .feature_icon i {
          color: #ffffff;
          font-size: 16px;
        }

        .feature_item span {
          color: #333;
          font-weight: 500;
        }

        .benefits_grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        .benefit_card {
          background: linear-gradient(135deg, #7335b7 0%, #5a2a8f 100%);
          color: #ffffff;
          padding: 25px;
          border-radius: 15px;
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .benefit_card::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(248, 132, 43, 0.1) 0%, transparent 70%);
          transition: all 0.3s ease;
          transform: scale(0);
        }

        .benefit_card:hover::before {
          transform: scale(1);
        }

        .benefit_card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(115, 53, 183, 0.3);
        }

        .benefit_icon {
          width: 50px;
          height: 50px;
          background: rgba(248, 132, 43, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 15px;
          position: relative;
          z-index: 2;
        }

        .benefit_icon i {
          color: #f8842b;
          font-size: 20px;
        }

        .benefit_card p {
          margin: 0;
          line-height: 1.5;
          position: relative;
          z-index: 2;
        }

        @media (max-width: 992px) {
          .features_content, .benefits_content {
            margin-bottom: 40px;
          }

          .feature_item {
            padding: 12px;
          }

          .feature_item:hover {
            transform: none;
          }

          .benefit_card {
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default FeaturesSection;
