import React from "react";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link logo" href="https://github.com/GrantEadie/-capstone--gravitone">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link logo" href="https://github.com/GrantEadie/-capstone--gravitone">
              About
            </a>
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
