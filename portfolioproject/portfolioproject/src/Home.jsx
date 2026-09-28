import React from "react";
import { Link } from "react-router-dom";

function Home(props) {

  return (
    <section className="home">

      <div className="home-content">

        <div className="home-text">

          <p className="small-title">
            WELCOME TO MY PORTFOLIO
          </p>

          <h1>
            Hello, I'm
            <span> {props.name}</span>
          </h1>

          <h2>
            {props.role}
          </h2>

          <p className="home-description">
            A passionate student interested in cybersecurity,
            technology, web development and creating secure
            digital solutions.
          </p>

          <p className="home-location">
            📍 {props.location}
          </p>

          <div className="home-buttons">

            <Link
              to="/about"
              className="primary-button"
            >
              Explore My Profile
            </Link>

            <Link
              to="/contact"
              className="secondary-button"
            >
              Contact Me
            </Link>

          </div>

        </div>

        <div className="home-profile">

          <div className="profile-glow">

            <div className="big-profile-circle">
              {props.name.charAt(0)}
            </div>

          </div>

          <div className="floating-card card-one">
            🔐 Cybersecurity
          </div>

          <div className="floating-card card-two">
            💻 Web Development
          </div>

        </div>

      </div>

      <div className="home-cards">

        <div className="mini-card">
          <div className="mini-icon">🔐</div>
          <h3>Cybersecurity</h3>
          <p>Learning security and ethical hacking.</p>
        </div>

        <div className="mini-card">
          <div className="mini-icon">💻</div>
          <h3>Development</h3>
          <p>Building modern web applications.</p>
        </div>

        <div className="mini-card">
          <div className="mini-icon">🚀</div>
          <h3>Learning</h3>
          <p>Exploring new technologies every day.</p>
        </div>

      </div>

    </section>
  );
}

export default Home;