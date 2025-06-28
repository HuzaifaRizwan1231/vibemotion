"use client";

import type React from "react";
import type { PricingTier } from "../../types";
import { Link } from "react-router-dom";

interface PricingSectionProps {
  pricing: PricingTier[];
}

const PricingSection: React.FC<PricingSectionProps> = ({ pricing }) => {
  return (
    <section id="pricing" className="pricing_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Pricing Plans</h2>
          <p>Choose the perfect plan for your project needs</p>
        </div>

        <div className="row justify-content-center">
          {pricing.map((tier, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className={`pricing_card ${tier.popular ? "popular" : ""}`}>
                {tier.popular && (
                  <div className="popular_badge">
                    <span>Most Popular</span>
                  </div>
                )}

                <div className="pricing_header">
                  <h3>{tier.name}</h3>
                  <div className="price">
                    <span className="currency">£</span>
                    <span className="amount">
                      {tier.price
                        .replace("£", "")
                        .replace("/hour", "")
                        .replace("/month", "")}
                    </span>
                    {tier.price.includes("/hour") && (
                      <span className="period">/hour</span>
                    )}
                    {tier.price.includes("/month") && (
                      <span className="period">/month</span>
                    )}
                    {tier.price.includes("Custom") && (
                      <span className="custom">Custom Quote</span>
                    )}
                  </div>
                </div>

                <div className="pricing_features">
                  <ul>
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>
                        <i className="fa fa-check"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pricing_footer">
                  <Link to="/contact" className="pricing_btn">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .pricing_section {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }

        .pricing_card {
          background: #ffffff;
          border-radius: 20px;
          padding: 40px 30px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .pricing_card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
        }

        .pricing_card.popular {
          border: 3px solid #f8842b;
          transform: scale(1.05);
        }

        .pricing_card.popular:hover {
          transform: scale(1.05) translateY(-10px);
        }

        .popular_badge {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(45deg, #f8842b, #ff9f4a);
          color: #ffffff;
          padding: 8px 25px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
          box-shadow: 0 5px 15px rgba(248, 132, 43, 0.3);
        }

        .pricing_header {
          margin-bottom: 30px;
        }

        .pricing_header h3 {
          color: #7335b7;
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 20px;
        }

        .price {
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 5px;
          margin-bottom: 10px;
        }

        .currency {
          font-size: 1.2rem;
          color: #666;
          font-weight: 600;
        }

        .amount {
          font-size: 3rem;
          color: #7335b7;
          font-weight: bold;
          line-height: 1;
        }

        .period {
          font-size: 1rem;
          color: #666;
          font-weight: 500;
        }

        .custom {
          font-size: 1.5rem;
          color: #7335b7;
          font-weight: bold;
        }

        .pricing_features {
          flex-grow: 1;
          margin-bottom: 30px;
        }

        .pricing_features ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .pricing_features li {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 0;
          border-bottom: 1px solid #f0f0f0;
        }

        .pricing_features li:last-child {
          border-bottom: none;
        }

        .pricing_features i {
          color: #28a745;
          font-size: 16px;
          width: 16px;
          flex-shrink: 0;
        }

        .pricing_features span {
          color: #666;
          text-align: left;
          line-height: 1.4;
        }

        .pricing_footer {
          margin-top: auto;
        }

        .pricing_btn {
          display: inline-block;
          background: linear-gradient(45deg, #7335b7, #5a2a8f);
          color: #ffffff;
          padding: 15px 30px;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          width: 100%;
        }

        .pricing_btn:hover {
          background: linear-gradient(45deg, #5a2a8f, #7335b7);
          transform: translateY(-2px);
          color: #ffffff;
          text-decoration: none;
        }

        .pricing_card.popular .pricing_btn {
          background: linear-gradient(45deg, #f8842b, #ff9f4a);
        }

        .pricing_card.popular .pricing_btn:hover {
          background: linear-gradient(45deg, #ff9f4a, #f8842b);
        }

        @media (max-width: 768px) {
          .pricing_card {
            padding: 30px 20px;
            margin-bottom: 30px;
          }

          .pricing_card.popular {
            transform: none;
          }

          .pricing_card.popular:hover {
            transform: translateY(-10px);
          }

          .amount {
            font-size: 2.5rem;
          }

          .pricing_features li {
            padding: 10px 0;
          }
        }
      `}</style>
    </section>
  );
};

export default PricingSection;
