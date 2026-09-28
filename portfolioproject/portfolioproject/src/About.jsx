import React from "react";

function About(props) {

  return (
    <section className="page-section">

      <div className="section-header">
        <span className="section-tag">ABOUT ME</span>

        <h1>
          Get to Know <span>Me</span>
        </h1>

        <p>
          A little information about my interests and passion.
        </p>
      </div>

      <div className="about-card">

        <div className="about-icon">
          👩‍💻
        </div>

        <div className="about-content">

          <h2>Who Am I?</h2>

          <p>
            {props.description}
          </p>

          <div className="about-points">

            <div>
              <span>✓</span>
              Passionate Learner
            </div>

            <div>
              <span>✓</span>
              Technology Enthusiast
            </div>

            <div>
              <span>✓</span>
              Cybersecurity Student
            </div>

            <div>
              <span>✓</span>
              Problem Solver
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;