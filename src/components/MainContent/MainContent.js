import React from 'react';
import './MainContent.css';

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="container content-wrapper">
        <div className="text-content">
          <h1>BA5 CAREERS</h1>
          <h2>Connecting the world through AI and other emerging technologies.</h2>
          <button className="see-jobs-btn">
            See jobs
            <span className="arrow">→</span>
          </button>
        </div>
        <div className="image-content">
          <img src="https://source.unsplash.com/random/400x300?tech" alt="BA5 Career" />
        </div>
      </div>
    </main>
  );
};

export default MainContent;