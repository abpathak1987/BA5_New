import React from 'react';
import './MainContent.css';

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="container content-wrapper">
        <div className="text-content">
          <h1>BA5</h1>
          <h2>Welcome. We built this for you.</h2>
          <button className="see-jobs-btn">
            See jobs
            <span className="arrow">→</span>
          </button>
        </div>
        <div className="image-content">
          <img src= {require('../../images/finalbanyanlogo.JPG')} alt="BA5 Career" />
        </div>
      </div>
    </main>
  );
};

export default MainContent;