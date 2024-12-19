import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="container header_container">
        <ul className="list">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Todo">1-masalaga o'tish</NavLink>
          </li>
          <li>
            <NavLink to="/Second">2-masalaga o'tish</NavLink>
          </li>
          <li>
            <NavLink to="/Api">3-masalaga o'tish</NavLink>
          </li>
          <li>
            <NavLink to="/Dark">5-masalaga o'tish</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
