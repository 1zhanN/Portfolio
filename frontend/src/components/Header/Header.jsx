import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { assets } from "../../assets/assets";

const Header = () => {
  const handleGitHubClick = () => {
    window.open("https://github.com/1zhanN", "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/izhan_n", "_blank");
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/izhan-nadeem", "_blank");
  };

  return (
    <div className="container" id="home">
      <div className="row">
        <div className="col-md-8">
          <div className="card stacked-linear header-pp header-m d-flex flex-column justify-content-between p-4">
            <h1 className="mb-4 display-5">
              Hey, I'm Izhan, a Frontend Developer in his humble beginnings.
            </h1>
            <p className="lead">
              I believe in the power of technology to shape the future and
              create engaging experiences, whether it's through captivating game
              worlds or beautifully designed websites.
            </p>

            <div className="mt-auto btn-container mb-2 p-2">
              <button
                onClick={() => {
                  window.location.href = "mailto:izhann000@gmail.com";
                }}
                className="btn btn-dark btn-rounded"
              >
                Contact Me
              </button>
              <div className="contact-icons">
                <button
                  onClick={handleGitHubClick}
                  className="btn btn-light btn-circle btn-xl"
                >
                  <img src={assets.github} alt="GitHub" />
                </button>
                <button
                  onClick={handleInstagramClick}
                  className="btn btn-light btn-circle btn-xl"
                >
                  <img src={assets.insta} alt="Instagram" />
                </button>
                <button
                  onClick={handleLinkedInClick}
                  className="btn btn-light btn-circle btn-xl"
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
