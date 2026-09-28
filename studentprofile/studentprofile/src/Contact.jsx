function Contact(props) {
  return (
    <section className="section">

      <h2>Contact Me</h2>

      <div className="contact-info">

        <p>
          <strong>Email:</strong>
          <span>{props.email}</span>
        </p>

        <p>
          <strong>Phone:</strong>
          <span>{props.phone}</span>
        </p>

      </div>

    </section>
  );
}

export default Contact;