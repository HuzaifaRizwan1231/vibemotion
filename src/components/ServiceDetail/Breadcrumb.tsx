"use client";

import type React from "react";
import { Link } from "react-router-dom";
import type { ServiceDetail } from "../../types";

interface BreadcrumbProps {
  service: ServiceDetail;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ service }) => {
  return (
    <nav className="breadcrumb_section">
      <div className="container">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <i className="fa fa-home"></i> Home
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/services">Services</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {service.title}
          </li>
        </ol>
      </div>

      <style>{`
        .breadcrumb_section {
          background-color: #f8f9fa;
          padding: 15px 0;
          border-bottom: 1px solid #e9ecef;
        }

        .breadcrumb {
          background: transparent;
          padding: 0;
          margin: 0;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          list-style: none;
        }

        .breadcrumb-item {
          display: flex;
          align-items: center;
        }

        .breadcrumb-item + .breadcrumb-item::before {
          content: "/";
          color: #6c757d;
          margin: 0 10px;
        }

        .breadcrumb-item a {
          color: #7335b7;
          text-decoration: none;
          transition: color 0.3s ease;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .breadcrumb-item a:hover {
          color: #f8842b;
        }

        .breadcrumb-item.active {
          color: #6c757d;
        }

        .breadcrumb-item i {
          font-size: 14px;
        }

        @media (max-width: 768px) {
          .breadcrumb {
            font-size: 14px;
          }
          
          .breadcrumb-item + .breadcrumb-item::before {
            margin: 0 5px;
          }
        }
      `}</style>
    </nav>
  );
};

export default Breadcrumb;
