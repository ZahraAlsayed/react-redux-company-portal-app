import React from 'react';
import { Link } from 'react-router-dom';

import './style.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/companies" className="navbar-link">Companies</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about" className="navbar-link">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
