import React from "react";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link logo" href="https://github.com/GrantEadie/-capstone--gravitone">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link logo" href="https://github.com/GrantEadie/-capstone--gravitone">
              About
            </a>
          </li>
          <li class="nav-item ">
            <a class="nav-link logo" href="https://github.com/GrantEadie/-capstone--gravitone">
              GitHub
            </a>
          </li>
        </ul>
        <span class="navbar-text">
          <a class="navbar-brand logo" href="https://github.com/GrantEadie/-capstone--gravitone">
            g r a v i t o n e
          </a>
        </span>
      </div>
    </nav>
  );
}

export default Header;
