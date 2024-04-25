import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="card header-pp d-flex flex-column justify-content-between p-4">
            <h1 className="mb-4">
              Hey, I'm Izhan, a Frontend Developer in his humble beginnings.
            </h1>
            <p>
              I believe in the power of technology to shape the future and
              create engaging experiences, whether it's through captivating game
              worlds or beautifully designed websites.
            </p>

            <div className="mt-auto btn-container mb-2 p-2">
              <button type="button" className="btn btn-dark btn-rounded ">
                Contact Me
              </button>
              <div>
                <button
                  type="button"
                  className="btn btn-light btn-circle btn-xl "
                >
                  <img src={assets.github} alt="GitHub" />
                </button>
                <button
                  type="button"
                  className="btn btn-light btn-circle btn-xl "
                >
                  <img src={assets.insta} alt="Instagram" />
                </button>
                <button
                  type="button"
                  className="btn btn-light btn-circle btn-xl "
                >
                  <img src={assets.linkedin} alt="LinkedIn" />
                </button>
              </div>
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
