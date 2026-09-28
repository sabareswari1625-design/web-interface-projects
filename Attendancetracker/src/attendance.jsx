import { useState } from "react";
import "./attendance.css";

function Attendance() {
  const [students, setStudents] = useState([
    { id: 1, name: "Ananya", status: "Not Marked" },
    { id: 2, name: "Rahul", status: "Not Marked" },
    { id: 3, name: "Priya", status: "Not Marked" },
    { id: 4, name: "Kavin", status: "Not Marked" },
    { id: 5, name: "Meena", status: "Not Marked" }
  ]);

  const markAttendance = (id, status) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? { ...student, status: status }
          : student
      )
    );
  };

  const presentCount = students.filter(
    (student) => student.status === "Present"
  ).length;

  const absentCount = students.filter(
    (student) => student.status === "Absent"
  ).length;

  return (
    <div className="attendance-container">
      <h1>Attendance Tracker</h1>
      <p>Mark today's student attendance</p>

      <div className="summary">
        <div>
          <h3>Total</h3>
          <span>{students.length}</span>
        </div>

        <div>
          <h3>Present</h3>
          <span>{presentCount}</span>
        </div>

        <div>
          <h3>Absent</h3>
          <span>{absentCount}</span>
        </div>
      </div>

      <div className="student-list">
        {students.map((student) => (
          <div className="student-card" key={student.id}>
            <div>
              <h3>{student.name}</h3>
              <p>Status: {student.status}</p>
            </div>

            <div className="actions">
              <button
                className="present"
                onClick={() => markAttendance(student.id, "Present")}
              >
                Present
              </button>

              <button
                className="absent"
                onClick={() => markAttendance(student.id, "Absent")}
              >
                Absent
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Attendance;