import React from "react";

function Profile(props) {

  return (
    <div className="profile-page">

      <div className="profile-card">

        <div className="profile-circle">
          {props.name.charAt(0)}
        </div>

        <h1>{props.name}</h1>

        <h3>{props.role}</h3>

        <p className="profile-location">
          📍 {props.location}
        </p>

      </div>

    </div>
  );
}

export default Profile;