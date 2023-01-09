import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div>
            <img
              src="https://champs-dashboard.s3.ap-south-1.amazonaws.com/web-assets/logo.png"
              alt="Logo"
              width={180}
              height={48}
              className="d-inline-block align-text-top"
            />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-link active">
                <Link to="/"> Home</Link>
              </li>
              <li className="nav-link">
                <Link to="/bookfreetrial"> Book Free Trial Class</Link>
              </li>
              <li className="nav-link">
                <Link to="/purchasecourse">Purchase Course</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
