import React from "react";

function Contact(props) {

  return (
    <section className="page-section">

      <div className="section-header">

        <span className="section-tag">
          CONTACT
        </span>

        <h1>
          Let's <span>Connect</span>
        </h1>

        <p>
          Feel free to reach out through the details below.
        </p>

      </div>

      <div className="contact-grid">

        <div className="contact-card">

          <div className="contact-icon">
            📧
          </div>

          <h3>Email</h3>

          <p>
            {props.email}
          </p>

        </div>

        <div className="contact-card">

          <div className="contact-icon">
            📱
          </div>

          <h3>Phone</h3>

          <p>
            {props.phone}
          </p>

        </div>

        <div className="contact-card">

          <div className="contact-icon">
            📍
          </div>

          <h3>Location</h3>

          <p>
            {props.location}
          </p>

        </div>

      </div>

    </section>
  );
}

export default Contact;