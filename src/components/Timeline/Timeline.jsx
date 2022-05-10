import React, { useState } from "react";
import "./styles.css";

import ReactPageScroller from "react-page-scroller";

const Timeline = ({ data, wedding }) => {
  const [state, setState] = useState(0);

  return (
    <div className="timeline-container">
      <div className="opening-timeline">
        <h2>
          Sepenggal Kisah {wedding.callMan} &amp; {wedding.callLadies}
        </h2>
      </div>
      <div className="timeline">
        {/* <ReactPageScroller
          pageOnChange={(page) => setState(page)}
          customPageNumber={state}
        > */}
        {data.map((x) => {
          return (
            <div className={`container ${x.position}`}>
              <div>
                <h3 style={{ color: "#684D3D", marginBottom: "10px" }}>
                  {x.period}
                </h3>
                <img src={x.img} alt="" />
                <p className="textContent">{x.content}</p>
              </div>
            </div>
          );
        })}
        {/* </ReactPageScroller> */}
      </div>
    </div>
  );
};

export default Timeline;
