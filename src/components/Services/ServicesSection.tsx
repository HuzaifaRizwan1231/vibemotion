import type React from "react";
import ServiceCard from "../UI/ServiceCard";
import { serviceSection } from "../../data/services";
import { useState } from "react";
import { Link } from "react-router-dom";

const ServicesSection: React.FC = () => {
  const [visibleServices, setVisibleServices] = useState(4);

  return (
    <section className="service_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>{serviceSection.title}</h2>
          <p>{serviceSection.subTitle}</p>
        </div>
        <div className="row">
          {serviceSection.serviceList
            .slice(0, visibleServices)
            .map((service, index) => (
              <div
                key={index}
                className="col-md-6 col-lg-3"
                style={{ margin: "15px 0" }}
              >
                <Link
                  to={`/service/${service.slug}`}
                  className="service-link h-100"
                >
                  <ServiceCard {...service} />
                </Link>
              </div>
            ))}
        </div>

        {serviceSection.serviceList.length > 4 &&
          visibleServices < serviceSection.serviceList.length && (
            <div className="btn-box">
              <button
                onClick={() => {
                  setVisibleServices((prev) => prev + 4);
                }}
              >
                View More
              </button>
            </div>
          )}
      </div>

      <style>{`
        .service-link {
          text-decoration: none;
          color: inherit;
          display: block;
        }

        .service-link:hover {
          text-decoration: none;
          color: inherit;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
