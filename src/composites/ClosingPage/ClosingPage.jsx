import React, { useState, useEffect } from 'react';
import './styles.css';
import closingImg from '../../assets/closing-img.png';
import { FaAngleUp } from 'react-icons/fa';

const ClosingPage = ({ wedding }) => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  // changing the showTopBtn state whenever a scroll event happens
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  // fucntion to help scroll to top smoothly
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="closing-container">
      <hr />
      <p className="closing-surah">{wedding.closingText}</p>
      <hr />
      <div className="cl-last-container">
        <p>
          Bismillah~ <br /> <br />
          {wedding.prayText}
        </p>
        <div>
          <img src={closingImg} alt="Closing Prewed" />
        </div>
      </div>
      <div className="top-to-btm">
        {showTopBtn && (
          <FaAngleUp className="icon-position icon-style" onClick={goToTop} />
        )}
      </div>
    </div>
  );
};

export default ClosingPage;
