import React, { useState } from "react";
import DAGLOGO from '../../images/DAGLOGO.png';
import { FaBars, FaChevronDown } from "react-icons/fa";

import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container" >
        <Link to ="/"className="navbar-logo"><img src={DAGLOGO} alt="" height={68} width={80} padding={10} />
        </Link>
          <div>
          
          <h5><strong> Direct Admission Global</strong> </h5>
          </div>
    
        <src />
        <div className={`menu-icon ${isOpen ? "active" : "Sideview"}`} onClick={toggleMenu}>
          <FaBars />
        </div>
        <ul className={isOpen ? "nav-menu active" : "nav-menu"}   >
          <li className="nav-item">
            {/* <Link to="/" className="nav-link">
              <strong>Home</strong>
            </Link> */}
          </li>
          <li className="nav-item dropdown">
            <span className="nav-link dropdown-toggle" onClick={toggleMenu}>
              <strong> About</strong> <FaChevronDown />
            </span>
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link to="/about" className="dropdown-link">
                  <strong> About US</strong>
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/studyindia" className="dropdown-link">
                  <strong>Study India</strong>
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/studyabroad" className="dropdown-link">
                  <strong>Study Abroad</strong>
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/testimonials" className="dropdown-link">
                  <strong>Testimonials</strong>
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/gallery" className="dropdown-link">
                  <strong>Gallery</strong>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <span className="nav-link dropdown-toggle" onClick={toggleMenu}>
              <strong>Services</strong> <FaChevronDown />
            </span>
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link to="/mbaconsultants" className="dropdown-link">
                  <strong>MBA Counseling</strong>
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/sop" className="dropdown-link">
                  <strong>SOP/LOR</strong>
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/mock" className="dropdown-link">
                  <strong>Mock</strong>
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/awt" className="dropdown-link">
                  <strong>AWT</strong>
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/scholarship" className="dropdown-link">
                  <strong>Scholarship</strong>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <span className="nav-link dropdown-toggle" onClick={toggleMenu}>
              <strong>Reach US</strong><FaChevronDown />
            </span>
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link to="/book" className="dropdown-link">
                  <strong>Book An Appointment</strong>
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/application" className="dropdown-link">
                  <strong>Application Form</strong>
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/payment" className="dropdown-link">
                  <strong>Payment</strong>
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/career" className="dropdown-link">
                  <strong>Career</strong>
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/blog" className="dropdown-link">
                  <strong>Blog</strong>
                </Link>
              </li>
            </ul>
          </li>
          <Link to="/contact" className="nav-link">
              <strong>Contact US</strong>
            </Link>
          <li className="nav-item">
            <button className="NavBtn">
              <Link to="/register" className="nav-link">
                <strong>Register</strong>
              </Link></button>
          </li>
           
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;