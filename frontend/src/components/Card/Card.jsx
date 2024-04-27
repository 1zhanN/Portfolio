import React from "react";
import "./Card.css";
import { assets } from "../../assets/assets";

const Cards = ({ name, description, image, link }) => {
  const handleLink = () => {
    if (link) {
      window.open(link, "_blank"); // Open link in new tab
    } else {
      console.error("No link provided."); // Log an error if link is missing
    }
  };
  return (
    <div className="card-pp">
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-overlay">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="card-text">{description}</p>
        </div>
        <div className="btn-link">
          <button
            type="button"
            className="btn btn-light btn-circle btn-xl"
            onClick={handleLink}
          >
            <img src={assets.external_link} alt="Links" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
