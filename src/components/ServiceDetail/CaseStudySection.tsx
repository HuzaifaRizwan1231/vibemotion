"use client";

import type React from "react";
import type { CaseStudy } from "../../types";

interface CaseStudySectionProps {
  caseStudy: CaseStudy;
}

const CaseStudySection: React.FC<CaseStudySectionProps> = ({ caseStudy }) => {
  return (
    <section className="case_study_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Success Story</h2>
          <p>See how we've helped businesses achieve their goals</p>
        </div>

        <div className="case_study_card">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="case_study_content">
                <div className="case_study_header">
                  <h3>{caseStudy.title}</h3>
                  <div className="client_info">
                    <span className="client_label">Client:</span>
                    <span className="client_name">{caseStudy.client}</span>
                  </div>
                </div>

                <div className="case_study_details">
                  <div className="detail_section">
                    <h4>
                      <i className="fa fa-exclamation-triangle"></i>
                      Challenge
                    </h4>
                    <p>{caseStudy.challenge}</p>
                  </div>

                  <div className="detail_section">
                    <h4>
                      <i className="fa fa-lightbulb-o"></i>
                      Solution
                    </h4>
                    <p>{caseStudy.solution}</p>
                  </div>

                  <div className="detail_section">
                    <h4>
                      <i className="fa fa-trophy"></i>
                      Results
                    </h4>
                    <div className="results_grid">
                      {caseStudy.results.map((result, index) => (
                        <div key={index} className="result_item">
                          <i className="fa fa-check-circle"></i>
                          <span>{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="case_study_visual">
                <div className="image_container">
                  <img
                    src={caseStudy.image || "/placeholder.svg"}
                    alt={caseStudy.title}
                  />
                  <div className="overlay">
                    <div className="stats_container">
                      {caseStudy.results.slice(0, 2).map((result, index) => (
                        <div key={index} className="stat_item">
                          <div className="stat_icon">
                            <i className="fa fa-arrow-up"></i>
                          </div>
                          <div className="stat_text">{result}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .case_study_section {
          background: #ffffff;
        }

        .case_study_card {
          background: linear-gradient(135deg, #7335b7 0%, #5a2a8f 100%);
          border-radius: 25px;
          padding: 50px;
          color: #ffffff;
          position: relative;
          overflow: hidden;
        }

        .case_study_card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23dots)"/></svg>');
          opacity: 0.3;
        }

        .case_study_content {
          position: relative;
          z-index: 2;
        }

        .case_study_header {
          margin-bottom: 40px;
        }

        .case_study_header h3 {
          font-size: 2.2rem;
          font-weight: bold;
          margin-bottom: 15px;
          color: #ffffff;
        }

        .client_info {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .client_label {
          background: rgba(248, 132, 43, 0.2);
          padding: 5px 12px;
          border-radius: 15px;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .client_name {
          font-size: 1.1rem;
          font-weight: 600;
          color: #f8842b;
        }

        .detail_section {
          margin-bottom: 35px;
        }

        .detail_section h4 {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1.3rem;
          font-weight: bold;
          margin-bottom: 15px;
          color: #f8842b;
        }

        .detail_section h4 i {
          font-size: 1.1rem;
        }

        .detail_section p {
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 0;
        }

        .results_grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }

        .result_item {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(255, 255, 255, 0.1);
          padding: 12px 15px;
          border-radius: 10px;
          backdrop-filter: blur(10px);
        }

        .result_item i {
          color: #28a745;
          font-size: 16px;
          flex-shrink: 0;
        }

        .result_item span {
          color: #ffffff;
          font-weight: 500;
        }

        .case_study_visual {
          position: relative;
          z-index: 2;
        }

        .image_container {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .image_container img {
          width: 100%;
          height: auto;
          display: block;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            45deg,
            rgba(248, 132, 43, 0.8),
            rgba(115, 53, 183, 0.8)
          );
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .image_container:hover .overlay {
          opacity: 1;
        }

        .stats_container {
          text-align: center;
        }

        .stat_item {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          padding: 20px;
          border-radius: 15px;
          margin-bottom: 15px;
        }

        .stat_icon {
          width: 50px;
          height: 50px;
          background: #ffffff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 10px;
        }

        .stat_icon i {
          color: #7335b7;
          font-size: 20px;
        }

        .stat_text {
          color: #ffffff;
          font-weight: 600;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .case_study_card {
            padding: 30px 20px;
          }

          .case_study_header h3 {
            font-size: 1.8rem;
          }

          .client_info {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }

          .detail_section {
            margin-bottom: 25px;
          }

          .detail_section h4 {
            font-size: 1.1rem;
          }

          .case_study_visual {
            margin-top: 30px;
          }
        }
      `}</style>
    </section>
  );
};

export default CaseStudySection;
