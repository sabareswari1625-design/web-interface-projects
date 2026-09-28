import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      <div className="hero">
        <h1>Student Report Card</h1>
        <p>Welcome to the Student Academic Portal</p>

        <Link to="/student" className="btn">
          View Student Profile
        </Link>
      </div>
    </div>
  );
}

export default Home;