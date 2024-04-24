import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="card parent-property "></div>
        </div>
        <div className="col-md-4">
          <div className="card parent-property "></div>
        </div>
      </div>
    </div>
  );
};
export default Header;
