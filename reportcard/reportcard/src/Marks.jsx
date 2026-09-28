import { Link } from "react-router-dom";

function Marks() {
  return (
    <div className="page">
      <h1>Subject Marks</h1>

      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Marks</th>
            <th>Grade</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Data Structures</td>
            <td>85</td>
            <td>A</td>
          </tr>

          <tr>
            <td>Web Technology</td>
            <td>92</td>
            <td>A+</td>
          </tr>

          <tr>
            <td>Database Management</td>
            <td>88</td>
            <td>A</td>
          </tr>

          <tr>
            <td>Java Programming</td>
            <td>90</td>
            <td>A+</td>
          </tr>

          <tr>
            <td>Mathematics</td>
            <td>78</td>
            <td>B+</td>
          </tr>
        </tbody>
      </table>

      <Link to="/result" className="btn">
        View Final Result
      </Link>
    </div>
  );
}

export default Marks;