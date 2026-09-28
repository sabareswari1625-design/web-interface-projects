import React, { useState } from "react";
import "./FormValidation.css";

function FormValidation() {

  const [formData, setFormData] = useState({
    username: "",
    aadharName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    permanentAddress: "",
    currentAddress: "",
    sameAddress: false,
    photo: null
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  // Handle input changes
  const handleChange = (e) => {

    const { name, value, type, checked, files } = e.target;

    // Photo upload
    if (type === "file") {

      setFormData({
        ...formData,
        photo: files[0]
      });

      setErrors({
        ...errors,
        photo: ""
      });

      return;
    }

    // Mobile number - allow only numbers
    if (name === "phone") {

      if (!/^\d*$/.test(value)) {
        return;
      }

      // Restrict to maximum 10 digits
      if (value.length > 10) {
        return;
      }
    }

    // Same address checkbox
    if (name === "sameAddress") {

      setFormData({
        ...formData,
        sameAddress: checked,
        currentAddress: checked
          ? formData.permanentAddress
          : ""
      });

      setErrors({
        ...errors,
        currentAddress: ""
      });

      return;
    }

    // Normal input
    setFormData({
      ...formData,
      [name]: value
    });

    // Remove error while typing
    setErrors({
      ...errors,
      [name]: ""
    });

    setSuccess("");
  };


  // Permanent address change
  const handlePermanentAddress = (e) => {

    const value = e.target.value;

    setFormData({
      ...formData,
      permanentAddress: value,

      currentAddress: formData.sameAddress
        ? value
        : formData.currentAddress
    });

    setErrors({
      ...errors,
      permanentAddress: ""
    });

    setSuccess("");
  };


  // Validate form
  const validateForm = () => {

    const newErrors = {};


    // Username validation
    if (formData.username.trim() === "") {

      newErrors.username =
        "Username is required";
    }


    // Aadhaar Name validation
    if (formData.aadharName.trim() === "") {

      newErrors.aadharName =
        "Aadhaar Name is required";

    } else if (
      formData.username.trim().toLowerCase() !==
      formData.aadharName.trim().toLowerCase()
    ) {

      newErrors.aadharName =
        "Username and Aadhaar Name do not match";
    }


    // Email validation
    if (formData.email.trim() === "") {

      newErrors.email =
        "Email is required";

    } else if (
      !/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(
        formData.email
      )
    ) {

      newErrors.email =
        "Incorrect! Enter a valid @gmail.com email";
    }


    // Mobile number validation
    if (formData.phone.trim() === "") {

      newErrors.phone =
        "Mobile number is required";

    } else if (
      !/^\d{10}$/.test(formData.phone)
    ) {

      newErrors.phone =
        "Mobile number must contain exactly 10 digits";
    }


    // Password validation
    if (formData.password.trim() === "") {

      newErrors.password =
        "Password is required";
    }


    // Confirm password validation
    if (formData.confirmPassword.trim() === "") {

      newErrors.confirmPassword =
        "Confirm password is required";

    } else if (
      formData.password !==
      formData.confirmPassword
    ) {

      newErrors.confirmPassword =
        "Passwords do not match";
    }


    // Permanent address validation
    if (
      formData.permanentAddress.trim() === ""
    ) {

      newErrors.permanentAddress =
        "Permanent address is required";
    }


    // Current address validation
    if (
      formData.currentAddress.trim() === ""
    ) {

      newErrors.currentAddress =
        "Current address is required";
    }


    // Photo validation
    if (!formData.photo) {

      newErrors.photo =
        "Please upload a photo";

    } else {

      // JPEG validation
      if (
        formData.photo.type !== "image/jpeg"
      ) {

        newErrors.photo =
          "Only JPEG/JPG photos are allowed";

      }

      // 2 MB validation
      else if (
        formData.photo.size >
        2 * 1024 * 1024
      ) {

        newErrors.photo =
          "Photo size must not exceed 2 MB";
      }
    }


    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };


  // Submit
  const handleSubmit = (e) => {

    e.preventDefault();

    setSuccess("");

    const isValid = validateForm();

    if (isValid) {

      setSuccess(
        "Form submitted successfully!"
      );
    }
  };


  // Clear form
  const handleClear = () => {

    setFormData({
      username: "",
      aadharName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      permanentAddress: "",
      currentAddress: "",
      sameAddress: false,
      photo: null
    });

    setErrors({});
    setSuccess("");

    const photoInput =
      document.getElementById("photo");

    if (photoInput) {
      photoInput.value = "";
    }
  };


  return (

    <div className="page">

      <div className="form-container">

        {/* Header */}
        <div className="form-header">

          <h1>Registration Form</h1>

          <p>
            Enter your details carefully
          </p>

        </div>


        <form onSubmit={handleSubmit}>


          {/* Username */}
          <div className="form-group">

            <label>
              Username
            </label>

            <input
              type="text"
              name="username"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}
            />

            {errors.username && (
              <span className="error">
                {errors.username}
              </span>
            )}

          </div>


          {/* Aadhaar Name */}
          <div className="form-group">

            <label>
              Aadhaar Name
            </label>

            <input
              type="text"
              name="aadharName"
              placeholder="Enter name as per Aadhaar"
              value={formData.aadharName}
              onChange={handleChange}
            />

            {errors.aadharName && (
              <span className="error">
                {errors.aadharName}
              </span>
            )}

          </div>


          {/* Email */}
          <div className="form-group">

            <label>
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={handleChange}
            />

            {errors.email && (
              <span className="error">
                {errors.email}
              </span>
            )}

          </div>


          {/* Mobile Number */}
          <div className="form-group">

            <label>
              Mobile Number
            </label>

            <input
              type="text"
              name="phone"
              placeholder="Enter 10 digit mobile number"
              value={formData.phone}
              onChange={handleChange}
              maxLength="10"
            />

            <small>
              Maximum 10 digits allowed
            </small>

            {errors.phone && (
              <span className="error">
                {errors.phone}
              </span>
            )}

          </div>


          {/* Password */}
          <div className="form-group">

            <label>
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
            />

            {errors.password && (
              <span className="error">
                {errors.password}
              </span>
            )}

          </div>


          {/* Confirm Password */}
          <div className="form-group">

            <label>
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              placeholder="Re-enter password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />

            {errors.confirmPassword && (
              <span className="error">
                {errors.confirmPassword}
              </span>
            )}

          </div>


          {/* Address Section */}
          <div className="address-section">

            <h2>
              Address Details
            </h2>


            {/* Permanent Address */}
            <div className="form-group">

              <label>
                Permanent Address
              </label>

              <textarea
                name="permanentAddress"
                placeholder="Enter permanent address"
                value={
                  formData.permanentAddress
                }
                onChange={
                  handlePermanentAddress
                }
              ></textarea>

              {errors.permanentAddress && (
                <span className="error">
                  {errors.permanentAddress}
                </span>
              )}

            </div>


            {/* Checkbox */}
            <div className="checkbox">

              <input
                type="checkbox"
                name="sameAddress"
                checked={
                  formData.sameAddress
                }
                onChange={handleChange}
              />

              <label>
                Current address is same as
                permanent address
              </label>

            </div>


            {/* Current Address */}
            <div className="form-group">

              <label>
                Current Address
              </label>

              <textarea
                name="currentAddress"
                placeholder="Enter current address"
                value={
                  formData.currentAddress
                }
                onChange={handleChange}
                disabled={
                  formData.sameAddress
                }
              ></textarea>

              {errors.currentAddress && (
                <span className="error">
                  {errors.currentAddress}
                </span>
              )}

            </div>

          </div>


          {/* Photo */}
          <div className="form-group">

            <label>
              Upload Photo
            </label>

            <input
              id="photo"
              type="file"
              name="photo"
              accept=".jpg,.jpeg,image/jpeg"
              onChange={handleChange}
            />

            <small>
              Only JPEG/JPG format allowed.
              Maximum size: 2 MB.
            </small>

            {errors.photo && (
              <span className="error">
                {errors.photo}
              </span>
            )}

          </div>


          {/* Success Message */}
          {success && (
            <div className="success">
              {success}
            </div>
          )}


          {/* Buttons */}
          <div className="button-container">

            <button
              type="button"
              className="clear-btn"
              onClick={handleClear}
            >
              Clear
            </button>

            <button
              type="submit"
              className="submit-btn"
            >
              Submit
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default FormValidation;