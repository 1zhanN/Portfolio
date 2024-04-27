import React from "react";
import "./MainContent.css";
import Card from "../Card/Card";
import { project_list } from "../../assets/assets";

const MainContent = () => {
  return (
    <div className="container" id="projects">
      <div className="row">
        {project_list.map((project, index) => (
          <div key={index} className="col-md-6">
            <Card
              name={project.name}
              description={project.description}
              image={project.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainContent;
