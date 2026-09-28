function Profile(props) {
  return (
    <section className="profile-card">

      <div className="profile-circle">
        {props.name.charAt(0)}
      </div>

      <h2>{props.name}</h2>

      <h3>{props.role}</h3>

      <p className="location">
        📍 {props.location}
      </p>

    </section>
  );
}

export default Profile;