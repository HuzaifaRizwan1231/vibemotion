import type React from "react";
import { Link, useLocation } from "react-router-dom";
import HeroSlider from "../Home/HeroSlider";

const Header: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className={isHomePage ? "" : "sub_page"}>
      <div className="hero_area">
        <header className="header_section">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container">
              <Link className="navbar-brand" to="/">
                <span>
                  <img
                    src={"/logo/logo.png"}
                    alt="Vibemotion Logo"
                    style={{
                      height: "60px",
                      width: "auto",
                      objectFit: "contain",
                      display: "block",
                    }}
                  />
                </span>
              </Link>

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className=""></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav">
                  <li
                    className={`nav-item ${
                      location.pathname === "/" ? "active" : ""
                    }`}
                  >
                    <Link className="nav-link" to="/">
                      Home <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${
                      location.pathname === "/about" ? "active" : ""
                    }`}
                  >
                    <Link className="nav-link" to="/about">
                      About
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${
                      location.pathname === "/services" ? "active" : ""
                    }`}
                  >
                    <Link className="nav-link" to="/services">
                      Services
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${
                      location.pathname === "/contact" ? "active" : ""
                    }`}
                  >
                    <Link className="nav-link" to="/contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>
                <div className="quote_btn-container">
                  <Link to="/contact" className="quote_btn">
                    Contact Us
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </header>

        {isHomePage && <HeroSlider />}
      </div>
    </div>
  );
};

export default Header;
