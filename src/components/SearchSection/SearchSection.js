import React from 'react';
import './SearchSection.css';

const SearchSection = () => {
  return (
    <section className="search-section">
      <div className="container search-container">
        <div className="search-input">
          <label htmlFor="job-search">Find open jobs</label>
          <input id="job-search" type="text" placeholder="Search by job title/ref. code" />
        </div>
        <div className="search-input">
          <label htmlFor="location-search">Located in</label>
          <input id="location-search" type="text" placeholder="Office, data center or remote locations" />
        </div>
        <button className="search-btn" aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default SearchSection;