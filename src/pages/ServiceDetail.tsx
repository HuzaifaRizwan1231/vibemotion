import type React from "react";
import { useParams, Navigate } from "react-router-dom";
import ServiceHero from "../components/ServiceDetail/ServiceHero";
import ProcessTimeline from "../components/ServiceDetail/ProcessTimeline";
import FeaturesSection from "../components/ServiceDetail/FeaturesSection";
import PricingSection from "../components/ServiceDetail/PricingSection";
import CaseStudySection from "../components/ServiceDetail/CaseStudySection";
import FAQSection from "../components/ServiceDetail/FAQSection";
import ServiceNavigation from "../components/ServiceDetail/ServiceNavigation";
import Breadcrumb from "../components/ServiceDetail/Breadcrumb";
import { getServiceBySlug } from "../data/services";

const ServiceDetail: React.FC = () => {
  const { serviceName } = useParams<{ serviceName: string }>();

  if (!serviceName) {
    return <Navigate to="/services" replace />;
  }

  const service = getServiceBySlug(serviceName);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const isGameDevelopment = service.slug === "game-development";

  return (
    <div className="sub_page">
      {isGameDevelopment && (
        <section
          className="w-75 mx-auto text-white mt-4"
          style={{
            background:
              "linear-gradient(90deg, #f8842b 0%, #7335b7 50%, #5a2a8f 100%)",
            padding: "14px 0",
            position: "sticky",
            top: 15,
            zIndex: 9999,
            overflow: "hidden",
            borderRadius: "50px 0 50px 0",
            animation: "pulseGlow 2.5s infinite ease-in-out",
            boxShadow: "0 0 0 rgba(248, 132, 43, 0.4)",
          }}
        >
          <div className="container">
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-between text-center text-md-left">
              {/* Left text */}
              <div>
                <strong style={{ fontSize: "1rem" }}>
                  🎮 Explore our dedicated Game Studio
                </strong>
                <div style={{ fontSize: "0.85rem", opacity: 0.9 }}>
                  See real projects, prototypes & multiplayer games in action
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="https://vibemotion.co.uk/minditgames/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn mt-3 mt-md-0"
                style={{
                  backgroundColor: "#ffffff",
                  color: "#7335b7",
                  fontWeight: 700,
                  borderRadius: "30px",
                  padding: "10px 22px",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                  transition: "all 0.3s ease",
                }}
              >
                Visit MindItGames →
              </a>
            </div>
          </div>
        </section>
      )}
      <Breadcrumb service={service} />
      <ServiceHero service={service} />
      <FeaturesSection service={service} />
      <ProcessTimeline steps={service.process} />
      <PricingSection pricing={service.pricing} />
      <CaseStudySection caseStudy={service.caseStudy} />
      <FAQSection faqs={service.faq} />
      <ServiceNavigation service={service} />
    </div>
  );
};

export default ServiceDetail;
