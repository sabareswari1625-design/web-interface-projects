import { NavLink } from "react-router-dom";

function Navbar() {

  return (

    <aside className="sidebar">

      <div className="brand">

        <div className="brand-icon">
          ✓
        </div>

        <div>
          <h2>TaskFlow</h2>
          <span>Productivity</span>
        </div>

      </div>

      <nav className="navigation">

        <p className="nav-title">
          WORKSPACE
        </p>

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
          end
        >
          <span>⌂</span>
          Home
        </NavLink>

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <span>▦</span>
          Dashboard
        </NavLink>

        <NavLink
          to="/daily"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <span>☀</span>
          Daily
        </NavLink>

        <NavLink
          to="/weekly"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <span>▤</span>
          Weekly
        </NavLink>

        <NavLink
          to="/calendar"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <span>▦</span>
          Calendar
        </NavLink>

      </nav>

      <div className="sidebar-bottom">

        <div className="productivity-card">

          <div className="productivity-circle">
            ✦
          </div>

          <strong>
            Stay productive
          </strong>

          <p>
            Plan your day and accomplish more.
          </p>

        </div>

      </div>

    </aside>
  );
}

export default Navbar;