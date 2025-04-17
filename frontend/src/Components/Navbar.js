import React from "react";
import { Link } from "react-router-dom";
import "../navbar.css";
import kashmir1 from "./image/kashmirlogo1.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm px-3">
      <div className="container-fluid">

        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={kashmir1} alt="Logo" className="logo me-2" />
        </Link>

        {/* Navbar Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-2">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Aboutus">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/OurServices">Our Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Gallery">Gallery</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contactus">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-danger text-white px-3 rounded-pill" to="/Login">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;