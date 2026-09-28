import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {

  return (
    <header className="header">

      <div className="header-container">

        <Link to="/" className="logo">
          <span className="logo-icon">S</span>
          <span>My Portfolio</span>
        </Link>

        <nav className="navbar">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Skills
          </NavLink>

          <NavLink
            to="/goal"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Goal
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </NavLink>

        </nav>

      </div>

    </header>
  );
}

export default Header;