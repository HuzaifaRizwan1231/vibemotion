"use client";

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

  return (
    <div className="sub_page">
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
