import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-nav">Copyright© Bhargava Patel 2021</div>
      <ul>
        <i className="fas fa-phone"></i>
        678-549-4567
      </ul>
      <a
        href="mailto: bethpresten@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fas fa-envelope-square"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/bhargav-patel-41b11b6a"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin"></i>
      </a>
      <a
        href="https://github.com/Bhargava82"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github-square"></i>
      </a>
      {/* <a
        href="http://docs.google.com/document/d/1oMV8w_DrJdxOmNKOcHkWDbjSya_bKIwns5g80yeGr5M/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fas fa-file"></i>
      </a> */}
    </footer>
  );
}

export default Footer;
