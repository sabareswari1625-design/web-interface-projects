function About(props) {
  return (
    <section className="section">

      <h2>About Me</h2>

      <div className="about-box">
        <p>{props.description}</p>
      </div>

    </section>
  );
}

export default About;