import React from "react";
import "./Footer.css";
import designSvg from "../../assets/design.svg";

const Footer = () => {
  return (
    <div className="footer-div">
      <span>Design</span>
      <a
        href="https://www.linkedin.com/in/furkan55/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <code className="brand">{"<MFURKAN40/> "}</code>
      </a>
      <img
        id="design"
        src={designSvg}
        alt="design"
        style={{ width: "40px", margin: "0  25px 0 10px" }}
      />
    </div>
  );
};

export default Footer;
