import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import logo from "/src/assets/logo.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <ul className="nav justify-content-between">
        <Link to="/" className="nav-link">
          <li className="nav-item custom-link">
            <img src={logo} />
            1zhanN
          </li>
        </Link>

        <div className="d-flex">
          <li className="nav-item ">
            <a className="nav-link custom-link" href="#home">
              Home
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link custom-link" href="#projects">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link custom-link" href="#contact">
              Contact
            </a>
          </li>
          {/* <li className="nav-item">
            <Link to="/certificates" className="nav-link">
              Certificates
            </Link>
          </li> */}
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
