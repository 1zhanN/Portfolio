import React from "react";
import "./Cards.css";
import { assets } from "../../assets/assets";

const Cards = () => {
  return (
    <div id="projects">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card card-pp d-flex flex-column  position-relative">
              <div className="position-absolute top-0 end-0 p-3">
                <button
                  type="button"
                  className="btn btn-light btn-circle btn-xl"
                >
                  <img src={assets.external_link} alt="LinkedIn" />
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-pp d-flex flex-column  position-relative">
              <div className="position-absolute top-0 end-0 p-3">
                <button
                  type="button"
                  className="btn btn-light btn-circle btn-xl"
                >
                  <img src={assets.external_link} alt="LinkedIn" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
