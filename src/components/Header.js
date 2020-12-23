import React from "react";
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent border-bottom border-secondary">
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink to='/' className="nav-link logo">
              Home <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/about' className='nav-link logo'>
              About
            </NavLink>
          </li>
          <li className="nav-item ">
            <a className="nav-link logo" href="https://github.com/GrantEadie/-capstone--gravitone">
              GitHub
            </a>
          </li>
        </ul>
        <span className="navbar-text">
          <a className="navbar-brand logo" href="https://github.com/GrantEadie/-capstone--gravitone">
            g r a v i t o n e
          </a>
        </span>
      </div>
    </nav>
  );
}

export default Header;
