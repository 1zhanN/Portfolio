import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="navbar navbar-expand-md ">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={assets.logo} alt="Logo" className="mr-2" />
          1zhanN
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          {toggleMenu ? (
            <img
              src={assets.cross}
              alt="Close"
              className="navbar-icon menu-icon"
            />
          ) : (
            <img
              src={assets.menu}
              alt="Menu"
              className="navbar-icon menu-icon"
            />
          )}
        </button>

        <div
          className={`collapse navbar-collapse justify-content-end ${
            toggleMenu ? "show" : ""
          }`}
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mx-auto">
              <a
                href="#home"
                className="nav-link"
                onClick={() => setToggleMenu(false)}
              >
                Home
              </a>
            </li>
            <li className="nav-item mx-auto">
              <a
                href="#projects"
                className="nav-link"
                onClick={() => setToggleMenu(false)}
              >
                Projects
              </a>
            </li>
            <li className="nav-item mx-auto">
              <a
                href="#contact"
                className="nav-link"
                onClick={() => setToggleMenu(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
