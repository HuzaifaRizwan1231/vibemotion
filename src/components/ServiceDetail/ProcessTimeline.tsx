"use client";

import type React from "react";
import { useState } from "react";
import type { ProcessStep } from "../../types";

interface ProcessTimelineProps {
  steps: ProcessStep[];
}

const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ steps }) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <section id="process" className="process_timeline_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Our Process</h2>
          <p>A proven methodology that ensures successful project delivery</p>
        </div>

        <div className="timeline_container">
          <div className="timeline_line"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className={`timeline_item ${
                activeStep === step.step ? "active" : ""
              }`}
              onClick={() => setActiveStep(step.step)}
            >
              <div className="timeline_marker">
                <div className="step_number">{step.step}</div>
                <div className="step_icon">
                  <i className={`fa ${step.icon}`} aria-hidden="true"></i>
                </div>
              </div>

              <div className="timeline_content">
                <div className="step_header">
                  <h3>{step.title}</h3>
                  <span className="duration">{step.duration}</span>
                </div>
                <p>{step.description}</p>

                {activeStep === step.step && (
                  <div className="step_details">
                    <div className="progress_bar">
                      <div className="progress_fill"></div>
                    </div>
                    <div className="step_features">
                      <div className="feature_item">
                        <i className="fa fa-check-circle"></i>
                        <span>Detailed documentation</span>
                      </div>
                      <div className="feature_item">
                        <i className="fa fa-check-circle"></i>
                        <span>Regular updates</span>
                      </div>
                      <div className="feature_item">
                        <i className="fa fa-check-circle"></i>
                        <span>Quality assurance</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .process_timeline_section {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          position: relative;
        }

        .timeline_container {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          padding: 40px 0;
        }

        .timeline_line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(to bottom, #7335b7, #f8842b);
          transform: translateX(-50%);
          border-radius: 2px;
        }

        .timeline_item {
          position: relative;
          margin-bottom: 60px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .timeline_item:nth-child(odd) {
          padding-right: 58%;
        }

        .timeline_item:nth-child(even) {
          padding-left: 58%;
        }

        .timeline_marker {
          position: absolute;
          left: 50%;
          top: 8px;
          transform: translateX(-50%);
          width: 80px;
          height: 80px;
          background: #ffffff;
          border: 4px solid #7335b7;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0 5px 20px rgba(115, 53, 183, 0.3);
          transition: all 0.3s ease;
          z-index: 2;
        }

        .timeline_item.active .timeline_marker {
          background: #7335b7;
          border-color: #f8842b;
          transform: translateX(-50%) scale(1.1);
        }

        .step_number {
          font-size: 14px;
          font-weight: bold;
          color: #7335b7;
          line-height: 1;
        }

        .timeline_item.active .step_number {
          color: #ffffff;
        }

        .step_icon {
          margin-top: 2px;
        }

        .step_icon i {
          font-size: 16px;
          color: #7335b7;
        }

        .timeline_item.active .step_icon i {
          color: #f8842b;
        }

        .timeline_content {
          background: #ffffff;
          padding: 25px;
          border-radius: 15px;
          box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          position: relative;
        }

        .timeline_item:hover .timeline_content {
          transform: translateY(-5px);
          box-shadow: 0 10px 35px rgba(0, 0, 0, 0.15);
        }

        .timeline_item.active .timeline_content {
          border: 2px solid #7335b7;
        }

        .timeline_content::before {
          content: '';
          position: absolute;
          width: 0;
          height: 0;
          border: 15px solid transparent;
        }

        .timeline_item:nth-child(odd) .timeline_content::before {
          right: -30px;
          top: 30px;
          border-left-color: #ffffff;
        }

        .timeline_item:nth-child(even) .timeline_content::before {
          left: -30px;
          top: 30px;
          border-right-color: #ffffff;
        }

        .step_header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }

        .step_header h3 {
          color: #7335b7;
          font-weight: bold;
          margin: 0;
          font-size: 1.3rem;
        }

        .duration {
          background: #f8842b;
          color: #ffffff;
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          text-align:center;
        }

        .timeline_content p {
          color: #666;
          line-height: 1.6;
          margin-bottom: 15px;
        }

        .step_details {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid #eee;
          animation: slideDown 0.3s ease;
        }

        .progress_bar {
          width: 100%;
          height: 6px;
          background: #e9ecef;
          border-radius: 3px;
          margin-bottom: 15px;
          overflow: hidden;
        }

        .progress_fill {
          height: 100%;
          background: linear-gradient(90deg, #7335b7, #f8842b);
          border-radius: 3px;
          animation: fillProgress 1s ease-out;
        }

        .step_features {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
        }

        .feature_item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #666;
          font-size: 0.9rem;
        }

        .feature_item i {
          color: #28a745;
          font-size: 14px;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fillProgress {
          from { width: 0; }
          to { width: 100%; }
        }

        @media (max-width: 768px) {
          .timeline_line {
            left: 30px;
          }

          .timeline_item {
            padding-left: 80px !important;
            padding-right: 0 !important;
            text-align: left !important;
          }

          .timeline_marker {
            left: 30px !important;
            width: 60px;
            height: 60px;
              top: 20px;
          }

          .timeline_content::before {
            left: -30px !important;
            right: auto !important;
            border-right-color: #ffffff !important;
            border-left-color: transparent !important;
          }

          .step_header {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }

          .step_features {
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>
    </section>
  );
};

export default ProcessTimeline;
