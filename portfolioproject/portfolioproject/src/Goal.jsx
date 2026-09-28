import React from "react";

function Goal(props) {

  return (
    <section className="page-section">

      <div className="section-header">

        <span className="section-tag">
          CAREER GOAL
        </span>

        <h1>
          My Future <span>Goal</span>
        </h1>

        <p>
          What I want to achieve through my career and learning journey.
        </p>

      </div>

      <div className="goal-container">

        <div className="goal-icon">
          🚀
        </div>

        <div className="goal-content">

          <h2>My Career Objective</h2>

          <p>
            {props.objective}
          </p>

          <div className="goal-list">

            <div>
              <span>01</span>
              Become a cybersecurity professional
            </div>

            <div>
              <span>02</span>
              Develop secure applications
            </div>

            <div>
              <span>03</span>
              Improve technical skills
            </div>

            <div>
              <span>04</span>
              Continue learning new technologies
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Goal;