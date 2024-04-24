import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="card header-pp d-flex flex-column justify-content-between">
            <div className="mt-auto">
              <button
                type="button"
                className="btn btn-dark btn-rounded mr-2 mb-2"
                data-mdb-ripple-init
              >
                Contact Me
              </button>
              <button
                type="button"
                className="btn btn-light btn-circle btn-xl mr-2 mb-2"
              >
                <img src={assets.github} alt="GitHub" />
              </button>
              <button
                type="button"
                className="btn btn-light btn-circle btn-xl mr-2 mb-2"
              >
                <img src={assets.insta} alt="Instagram" />
              </button>
              <button
                type="button"
                className="btn btn-light btn-circle btn-xl mb-2"
              >
                <img src={assets.linkedin} alt="LinkedIn" />
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card header-pp">
            <img src={assets.myPic2} alt="my-pic" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
