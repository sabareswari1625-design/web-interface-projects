function Skill(props) {
  return (
    <section className="section">

      <h2>My Skills</h2>

      <div className="skill-container">

        {props.skills.map((skill, index) => (
          <span className="skill" key={index}>
            {skill}
          </span>
        ))}

      </div>

    </section>
  );
}

export default Skill;