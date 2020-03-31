import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/style.scss";

const NavBar = () => (
  <nav className="navbar navbar-expand-md sticky-top mt-5">
    <Link className="navbar-brand ml-3" to="/">
      Hira.
    </Link>
    <div className="navbar-nav ml-auto">
      <Link className="nav-item nav-link" to="/about">
        About
      </Link>

      <Link className="nav-item nav-link" to="/work-list">
        Work
      </Link>

      <Link className="nav-item nav-link" to="/contact">
        Contact
      </Link>
    </div>
  </nav>
);

export default NavBar;
