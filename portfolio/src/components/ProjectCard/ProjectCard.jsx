import React from "react";
import "./ProjectCard.css";
// import { Link } from "react-router-dom";

const ProjectCard = ({ name, link, image, description, alt }) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt={alt} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          {/* <Link to={link}>
            <button type="button">Github Repo</button>
          </Link> */}
          <a href={link} className="btn">
            Github Repo
          </a>
        </div>
      </div>
    </>
  );
};
export default ProjectCard;