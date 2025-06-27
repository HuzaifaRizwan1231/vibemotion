"use client";

import type React from "react";
import { useState } from "react";
import type { FAQ } from "../../types";

interface FAQSectionProps {
  faqs: FAQ[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Frequently Asked Questions</h2>
          <p>Get answers to common questions about our services</p>
        </div>

        <div className="faq_container">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq_item ${activeIndex === index ? "active" : ""}`}
            >
              <div className="faq_question" onClick={() => toggleFAQ(index)}>
                <h4>{faq.question}</h4>
                <div className="faq_toggle">
                  <i
                    className={`fa ${
                      activeIndex === index ? "fa-minus" : "fa-plus"
                    }`}
                  ></i>
                </div>
              </div>

              <div className="faq_answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq_cta">
          <div className="cta_content">
            <h3>Still have questions?</h3>
            <p>
              Our team is here to help you find the perfect solution for your
              needs.
            </p>
            <a href="/contact" className="cta_btn">
              <i className="fa fa-envelope"></i>
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .faq_section {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }

        .faq_container {
          max-width: 800px;
          margin: 0 auto;
        }

        .faq_item {
          background: #ffffff;
          border-radius: 15px;
          margin-bottom: 20px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .faq_item:hover {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }

        .faq_item.active {
          border: 2px solid #7335b7;
        }

        .faq_question {
          padding: 25px 30px;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.3s ease;
        }

        .faq_question:hover {
          background: #f8f9fa;
        }

        .faq_item.active .faq_question {
          background: linear-gradient(135deg, #7335b7 0%, #5a2a8f 100%);
          color: #ffffff;
        }

        .faq_question h4 {
          margin: 0;
          font-size: 1.2rem;
          font-weight: 600;
          color: #333;
          transition: color 0.3s ease;
        }

        .faq_item.active .faq_question h4 {
          color: #ffffff;
        }

        .faq_toggle {
          width: 40px;
          height: 40px;
          background: #f8f9fa;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          flex-shrink: 0;
          margin-left: 20px;
        }

        .faq_item.active .faq_toggle {
          background: #f8842b;
        }

        .faq_toggle i {
          color: #7335b7;
          font-size: 16px;
          transition: all 0.3s ease;
        }

        .faq_item.active .faq_toggle i {
          color: #ffffff;
        }

        .faq_answer {
          max-height: 0;
          overflow: hidden;
          transition: all 0.3s ease;
          background: #f8f9fa;
        }

        .faq_item.active .faq_answer {
          max-height: 200px;
          padding: 0 30px 25px;
        }

        .faq_answer p {
          margin: 0;
          padding-top: 20px;
          color: #666;
          line-height: 1.6;
        }

        .faq_cta {
          margin-top: 60px;
          text-align: center;
        }

        .cta_content {
          background: linear-gradient(135deg, #7335b7 0%, #5a2a8f 100%);
          color: #ffffff;
          padding: 50px 40px;
          border-radius: 25px;
          position: relative;
          overflow: hidden;
        }

        .cta_content::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(248, 132, 43, 0.1) 0%, transparent 70%);
          animation: rotate 20s linear infinite;
        }

        .cta_content h3 {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 15px;
          position: relative;
          z-index: 2;
        }

        .cta_content p {
          font-size: 1.1rem;
          margin-bottom: 30px;
          color: rgba(255, 255, 255, 0.9);
          position: relative;
          z-index: 2;
        }

        .cta_btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #f8842b;
          color: #ffffff;
          padding: 15px 30px;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          position: relative;
          z-index: 2;
        }

        .cta_btn:hover {
          background: #ff9f4a;
          transform: translateY(-3px);
          color: #ffffff;
          text-decoration: none;
          box-shadow: 0 10px 25px rgba(248, 132, 43, 0.3);
        }

        .cta_btn i {
          font-size: 16px;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
          .faq_question {
            padding: 20px;
          }

          .faq_question h4 {
            font-size: 1.1rem;
          }

          .faq_toggle {
            width: 35px;
            height: 35px;
            margin-left: 15px;
          }

          .faq_item.active .faq_answer {
            padding: 0 20px 20px;
          }

          .cta_content {
            padding: 40px 25px;
          }

          .cta_content h3 {
            font-size: 1.6rem;
          }

          .cta_content p {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default FAQSection;
