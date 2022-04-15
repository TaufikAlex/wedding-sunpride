import React from "react";
import { FaHeart } from "react-icons/fa";
import "./styles.css";

const Footer = ({ wedding }) => {
  return (
    <div className="footer-container">
      <p>
        Designed &amp; Made with <FaHeart className="icon" /> <br />
        by {wedding.man} &amp; {wedding.ladies}
      </p>
      <p>CopyRight Alex © 2022</p>
      {/* <p>
        See code on{" "}
        <a
          href="https://github.com/ifindev/wedding-invitation-site"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="icon" />
        </a>
      </p> */}
    </div>
  );
};

export default Footer;
