import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import logo from "/src/assets/logo.svg";

const Navbar = () => {
  return (
    <div>
      <ul className="nav justify-content-between">
        <li className="nav-item">
          <img src={logo} style={{ padding: "10px" }} />
          1zhanN
        </li>
        <div className="d-flex">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">
              Certificates
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
