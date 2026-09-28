import React from "react";

function Skill(props) {

  return (
    <section className="page-section">

      <div className="section-header">

        <span className="section-tag">
          MY SKILLS
        </span>

        <h1>
          Technical <span>Skills</span>
        </h1>

        <p>
          Technologies and areas that I am learning and working with.
        </p>

      </div>

      <div className="skills-grid">

        {props.skills.map((skill, index) => (

          <div
            className="skill-card"
            key={index}
          >

            <div className="skill-number">
              {String(index + 1).padStart(2, "0")}
            </div>

            <h2>{skill}</h2>

            <div className="skill-line"></div>

            <p>
              Learning and developing my knowledge in {skill}.
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skill;