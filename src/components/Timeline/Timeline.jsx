import React from 'react';
import './styles.css';

const Timeline = ({ data, wedding }) => {
  return (
    <div className="timeline-container">
      <div className="opening-timeline">
        <h2>
          Sepenggal Kisah {wedding.callMan} &amp; {wedding.callLadies}
        </h2>
      </div>
      <div className="timeline">
        {data.map((x) => {
          return (
            <div className={`container ${x.position}`}>
              <div className="content">
                <h2 style={{ color: '#684D3D', marginBottom: '20px' }}>
                  {x.period}
                </h2>
                <img src={x.img} alt="" />
                <p className="textContent">{x.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
