import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Report Card</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/student">Student</Link>
        <Link to="/marks">Marks</Link>
        <Link to="/result">Result</Link>
      </div>
    </nav>
  );
}

export default Navbar;