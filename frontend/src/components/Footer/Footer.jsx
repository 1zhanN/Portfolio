import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  const handleGitHubClick = () => {
    window.open("https://github.com/1zhanN", "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/izhan_n", "_blank");
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/izhan-nadeem", "_blank");
  };

  const handleContactMeClick = () => {
    window.location.href = "mailto:izhann000@gmail.com";
  };

  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card stacked-linear footer-pp d-flex flex-column justify-content-between p-4">
              <h1 className="mb-4">Want to Collaborate?</h1>
              <p className="lead">
                Feel free to reach out to me if you have any questions or need
                assistance. I'm here to help! <br />
                izhann000@gmail.com
              </p>

              <div className="mt-auto btn-container mb-2 p-2">
                <button
                  type="button"
                  className="btn btn-dark btn-rounded"
                  onClick={handleContactMeClick}
                  data-mdb-ripple-init
                >
                  Contact Me
                </button>
                <div>
                  <button
                    type="button"
                    className="btn btn-light btn-circle btn-xl"
                    onClick={handleGitHubClick}
                  >
                    <img src={assets.github} alt="GitHub" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-light btn-circle btn-xl"
                    onClick={handleInstagramClick}
                  >
                    <img src={assets.insta} alt="Instagram" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-light btn-circle btn-xl"
                    onClick={handleLinkedInClick}
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
