function Result() {
  return (
    <div className="page">
      <h1>Final Result</h1>

      <div className="result-card">
        <div className="result-item">
          <h3>Total Marks</h3>
          <p>433 / 500</p>
        </div>

        <div className="result-item">
          <h3>Percentage</h3>
          <p>86.6%</p>
        </div>

        <div className="result-item">
          <h3>Grade</h3>
          <p>A</p>
        </div>

        <div className="result-item">
          <h3>Status</h3>
          <p className="pass">PASS</p>
        </div>
      </div>
    </div>
  );
}

export default Result;