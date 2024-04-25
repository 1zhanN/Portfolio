import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card footer-pp d-flex flex-column justify-content-between p-4">
              <h1 className="mb-4">Want to Collaborate?</h1>
              <p>
                Feel free to reach out to me at if you have any questions or
                need assistance. I'm here to help! <br />
                izhann000@gmail.com
              </p>

              <div className="mt-auto btn-container mb-2 p-2">
                <button
                  type="button"
                  className="btn btn-dark btn-rounded "
                  data-mdb-ripple-init
                >
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
        </div>
      </div>
    </div>
  );
};

export default Footer;
