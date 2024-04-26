import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import logo from "/src/assets/logo.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <ul className="nav justify-content-between">
      <Link to="/">
      <li className="nav-item">
              <img src={logo} style={{ padding: "10px" }} />
              1zhanN
          </li>
      </Link>

        <div className="d-flex">
          <li className="nav-item">
            <a className="nav-link active" href="#home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <Link to="/certificates">
                Certificates
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
