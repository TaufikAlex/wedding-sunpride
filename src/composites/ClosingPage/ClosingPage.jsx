import React from "react";
import "./styles.css";
import closingImg from "../../assets/closing-img.png";

const ClosingPage = ({ wedding }) => {
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
    </div>
  );
};

export default ClosingPage;
