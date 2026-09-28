function About() {
  return (
    <main className="about-page">
      <div className="about-card">

        <div className="about-icon">
          ✓
        </div>

        <h1>About TaskFlow</h1>

        <p>
          TaskFlow is a simple and attractive task management
          application built using modern React concepts.
        </p>

        <div className="technology-list">

          <div className="technology">
            <strong>React</strong>
            <span>Component-based UI</span>
          </div>

          <div className="technology">
            <strong>useState</strong>
            <span>Manage application state</span>
          </div>

          <div className="technology">
            <strong>useEffect</strong>
            <span>Save data automatically</span>
          </div>

          <div className="technology">
            <strong>React Router</strong>
            <span>Navigate between pages</span>
          </div>

          <div className="technology">
            <strong>localStorage</strong>
            <span>Store tasks in browser</span>
          </div>

        </div>

      </div>
    </main>
  );
}

export default About;