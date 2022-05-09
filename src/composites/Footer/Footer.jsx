import React from 'react';
import { FaHeart } from 'react-icons/fa';
import './styles.css';

const Footer = ({ wedding }) => {
  return (
    <div className="footer-container">
      <p>
        Designed &amp; Made with <FaHeart className="icon" /> <br />
        by {wedding.man} &amp; {wedding.ladies}
      </p>
      <p>CopyRight Alex © 2022</p>
    </div>
  );
};

export default Footer;
