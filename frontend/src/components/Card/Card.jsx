import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css"; // Import your custom CSS file for card styles

const Card = () => {
  return (
    <div className="card text-dark card-has-bg click-col">
      <div className="card-img"></div>
      <div className="card-img-overlay d-flex flex-column">
        <div className="card-body">
          <small className="card-meta mb-2">Thought Leadership</small>
          <h4 className="card-title mt-0">
            <a className="text-dark" href="https://creativemanner.com">
              Web Development Lorem Ipsum Sit Amet Consectetur dipisi?
            </a>
          </h4>
          <small>
            <i className="far fa-clock"></i> October 15, 2024
          </small>
        </div>
      </div>
    </div>
  );
};

export default Card;
