import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Bulma"
            width="112"
            height="28"
          />
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/newpost" className="navbar-item">
            NewPost
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
