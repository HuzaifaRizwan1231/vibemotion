import type React from "react";
import CaseStudyCard from "../UI/CaseStudyCard";

const CaseStudiesSection: React.FC = () => {
  const caseStudies = [
    {
      image: "/src/assets/images/case-1.jpg",
      title: "Sit amet consectetur adipisicing elit",
      description:
        "Alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
    {
      image: "/src/assets/images/case-2.jpg",
      title: "Excepturi placeat nihil eos maxime",
      description:
        "Alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
  ];

  return (
    <section className="case_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>Our Case Studies</h2>
        </div>
        <div className="row">
          {caseStudies.map((caseStudy, index) => (
            <div key={index} className="col-md-6">
              <CaseStudyCard {...caseStudy} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
