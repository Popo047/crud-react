import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <Link to="/newpost" class="navbar-item">
            NewPost
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
