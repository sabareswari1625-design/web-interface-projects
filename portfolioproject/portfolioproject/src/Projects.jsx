function Projects() {
  const projects = [
    {
      name: "Student Management System",
      technology: "Java"
    },
    {
      name: "Portfolio Website",
      technology: "React"
    },
    {
      name: "Digital Clock",
      technology: "JavaScript"
    },
    {
      name: "College Website",
      technology: "HTML & CSS"
    }
  ];

  return (
    <section id="projects" className="section">
      <h1>My Projects</h1>

      <div className="cards">
        {projects.map((project) => (
          <div className="card" key={project.name}>
            <h2>{project.name}</h2>
            <p>{project.technology}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;