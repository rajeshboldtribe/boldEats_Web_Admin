import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BoldTribeLogo from '../../assets/images/BoldTribe Logo.svg';
import './Header.css';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <div className={`hamburger ${isNavOpen ? 'active' : ''}`} onClick={toggleNav}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className="logo-container">
        <img src={BoldTribeLogo} alt="BoldTribe Logo" className="logo" />
      </div>

      <nav className={`nav-menu ${isNavOpen ? 'active' : ''}`}>
        <div className="nav-header">
          <img src={BoldTribeLogo} alt="BoldTribe Logo" className="nav-logo" />
        </div>
        <ul>
          <li>
            <Link to="/admin/dashboard" onClick={toggleNav}>Dashboard</Link>
          </li>
          <li>
            <Link to="/admin/users" onClick={toggleNav}>Users</Link>
          </li>
          <li>
            <Link to="/admin/orders" onClick={toggleNav}>Orders</Link>
          </li>
          <li>
            <Link to="/admin/subscription" onClick={toggleNav}>Subscription</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;