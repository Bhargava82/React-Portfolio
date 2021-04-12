import React from "react";
import "./About.css";
import PortPic from "../../assets/portfolio-images/me.jpeg";

const About = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row" id="about">
          <div className="col-sm-3">
            <img src={PortPic} alt="resume-pic" id="biopic" />
          </div>
          <div className="col-sm-2"></div>
          <div className="col-sm-6" id="bio">
            <h1>About Me!!</h1>
            <p>
              I was born and raised in India and studied in Boarding School with
              Cultural Code Of Ethics. I am a passionate, competitive, positive
              business owner with exemplary leadership skills. I love working
              with others and also enjoy working autonomously. I am a
              self-starter and find it easy to bring the best out of myself. In
              my spare time, I enjoy spending time with my family, learning new
              skills, and hiking. I studied Banking and Finance at Gainesville
              College. My goal is to put my business skills with the new skills
              I have acquired in Coding from Georgia Tech Coding BootCamp and
              start a new business. I am proficient in the following languages:
              HTML, CSS, JavaScript, JQuery, and Node
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
