import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { ThemeContext } from '../pages/ThemeContext';

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="container">
      <div className={`flex items-center justify-between p-4 ${theme === "light" ? "bg-slate-400" : "bg-gray-800"
        }`}>
        <ul className="list">
   
          <li>
            <NavLink to="/Todo">Todo</NavLink>
          </li>
          <li>
            <NavLink to="/Second">Form</NavLink>
          </li>
          <li>
            <NavLink to="/Api">API</NavLink>
          </li>
          <li>
            <NavLink to="/Dark">Dark More</NavLink>
          </li>
        </ul>
        <button onClick={toggleTheme} className="theme-toggle-btn">
          Toggle Theme
        </button>
      </div>
    </div>
  );
}

export default Header;
