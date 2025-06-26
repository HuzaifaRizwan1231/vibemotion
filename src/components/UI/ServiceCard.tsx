import type React from "react";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="box h-100">
      <div className="img-box">
        <img src={image || "/placeholder.svg"} alt={title} />
      </div>
      <div className="detail-box">
        <h5>{title}</h5>
        <p>{description}</p>
        <a href="#">
          <span>Read More</span>
          <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
