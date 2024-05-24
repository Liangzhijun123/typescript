import React, { useState } from "react";

// setting the form to a React.FC type
const ProfileForm: React.FC = () => {
  // States:

  // using type of Profile.ts i just made and set to empty and it holds the form data of Profile
  const [profile, setProfile] = useState<Profile>({
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    measurements: {
      wrist: 0,
      shoulder: 0,
      waist: 0,
      chest: 0,
      leg: 0,
    },
  });

  // check if submitted
  const [submitted, setSubmitted] = useState(false);

  // this function update the state when input values changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    // update profile to the name of value
    setProfile({
      // spread in profiles
      ...profile,

      // retrieve the value of name
      [name]: value,
    });
  };

  // this updates the state when user input values
  const handleMeasurementChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // the name corresponds to the keys in profile state
    const { name, value } = e.target;
    setProfile({
      // ... spread existence of profile and it perserve
      ...profile,
      measurements: {
        ...profile.measurements,

        // pareseFloat -> to convert measurement values to number because the input values are strings
        [name]: parseFloat(value),
      },
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="">
      <h2>Create Profile</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="input-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={profile.username}
            onChange={handleChange}
            className="input-form"
          />
        </div>

        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className="input-form"
          />
        </div>

        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={profile.password}
            onChange={handleChange}
            className="input-form"
          />
        </div>

        <div className="input-group">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={profile.firstName}
            onChange={handleChange}
            className="input-form"
          />
        </div>

        <div className="input-group">
          <label>Middle Name/Initial (Optional):</label>
          <input
            type="text"
            name="middleName"
            value={profile.middleName || ""}
            onChange={handleChange}
            className="input-form"
          />
        </div>

        <div className="input-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={profile.lastName}
            onChange={handleChange}
            className="input-form"
          />
        </div>

        <hr />

        <div className="input-group">
          <h2>Measurements</h2>
          <label>Wrist:</label>
          <input
            type="number"
            name="wrist"
            value={profile.measurements.wrist}
            onChange={handleMeasurementChange}
            className="input-form"
          />
        </div>

        <div className="input-group">
          <label>Shoulder:</label>
          <input
            type="number"
            name="shoulder"
            value={profile.measurements.shoulder}
            onChange={handleMeasurementChange}
            className="input-form"
          />
        </div>

        <div className="input-group">
          <label>Waist:</label>
          <input
            type="number"
            name="waist"
            value={profile.measurements.waist}
            onChange={handleMeasurementChange}
            className="input-form"
          />
        </div>

        <div className="input-group">
          <label>Chest:</label>
          <input
            type="number"
            name="chest"
            value={profile.measurements.chest}
            onChange={handleMeasurementChange}
            className="input-form"
          />
        </div>

        <div className="input-group">
          <label>Leg:</label>
          <input
            type="number"
            name="leg"
            value={profile.measurements.leg}
            onChange={handleMeasurementChange}
            className="input-form"
          />
        </div>

        <hr />
        <div className="input-group">
          <h2>Inch Conversion</h2>
          <label>Inches:</label>
          <input type="number" name="inches" className="input-form" />
        </div>

        <button type="submit" className="submit-btn">
          Create Profile
        </button>
      </form>

      {/* this is only after submitted and it renders out */}
      {/* this will render after submitted is true */}
      {submitted && (
        <div className="Submit">
          <div>
            <h2>Submitted Profile</h2>
            <p>Username: {profile.username}</p>
            <p>Email: {profile.email}</p>
            <p>Password: {profile.password}</p>
            <p>First Name: {profile.firstName}</p>
            {/* if middle name not provided it prints NA */}
            <p>Middle Name/Initial: {profile.middleName || "N/A"}</p>
            <p>Last Name: {profile.lastName}</p>{" "}
          </div>

          <div>
            <h2>Measurements:</h2>
            <p>Wrist: {profile.measurements.wrist}</p>
            <p>Shoulder: {profile.measurements.shoulder}</p>
            <p>Waist: {profile.measurements.waist}</p>
            <p>Chest: {profile.measurements.chest}</p>
            <p>Leg: {profile.measurements.leg}</p>{" "}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileForm;
