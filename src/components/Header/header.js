import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">BA5</div>
        <nav className="nav-menu">
          <a href="#jobs">Jobs</a>
          <a href="#areas">Areas of Work</a>
          <a href="#locations">Locations</a>
          <a href="#programs">Career Programs</a>
          <a href="#how-we-work">How We Work</a>
          <a href="#blog">Blog</a>
        </nav>
        <Link to="/login" className="login-btn">Log in</Link>
      </div>
    </header>
  );
};

export default Header;