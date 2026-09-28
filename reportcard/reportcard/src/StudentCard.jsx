import { Link } from "react-router-dom";

function StudentCard() {
  return (
    <div className="page">
      <h1>Student Profile</h1>

      <div className="student-card">
        <div className="student-icon">👩‍🎓</div>

        <h2>Sabareswari M</h2>

        <p><b>Roll Number:</b> 23CS001</p>
        <p><b>Department:</b> CSE - Cybersecurity</p>
        <p><b>Year:</b> II Year</p>
        <p><b>Semester:</b> III</p>

        <Link to="/marks" className="btn">
          View Marks
        </Link>
      </div>
    </div>
  );
}

export default StudentCard;