import React, { useState } from "react";
import axios from "axios";

import CardContainer from "../components/CardContainer";

const RegistrationPage = () => {
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneErr, setPhoneErr] = useState(false);
  const [designation, setDesignation] = useState("");
  const [location, setLocation] = useState("");
  const [course, setCourse] = useState("");
  const [courseErr, setCourseErr] = useState(false);
  const [remarks, setRemarks] = useState("");
  const [successfullySubmited, setSuccessfullySubmited] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    resetValidationErrors();
    const isValid = validateInputs();
    if (isValid) {
      setSuccessfullySubmited(true);

      // Send POST request
      axios
        .post("/register", {
          name,
          email,
          phone,
          designation,
          location,
          course,
          remarks,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

      // Reset inputs
      setName("");
      setEmail("");
      setPhone("");
      setDesignation("");
      setLocation("");
      setCourse("");
      setRemarks("");
    }
  };

  const validateInputs = () => {
    let isError = false;
    if (!name) {
      setNameErr(true);
      isError = true;
    }
    if (!email) {
      setEmailErr(true);
      isError = true;
    }
    if (!phone) {
      setPhoneErr(true);
      isError = true;
    }
    if (!course) {
      setCourseErr(true);
      isError = true;
    }

    return !isError;
  };

  const resetValidationErrors = () => {
    setNameErr(false);
    setEmailErr(false);
    setPhoneErr(false);
    setCourseErr(false);
    setSuccessfullySubmited(false);
  };

  return (
    <>
      <CardContainer>
        {successfullySubmited && (
          <div className="alert alert-success text-center" role="alert">
            Successfully submited!
          </div>
        )}
        <form method="POST" onSubmit={handleSubmit}>
          <h1 className="text-center">Register</h1>
          <div className="form-group py-1">
            <label htmlFor="name">Name (required)</label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="nameHelp"
              placeholder="Enter your name"
              value={name}
              onChange={({ target }) => {
                setName(target.value);
              }}
            />
            {nameErr && (
              <small id="fnameHelp" className="form-text text-danger">
                Please fill in a name.
              </small>
            )}
          </div>

          <div className="form-group py-1">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={email}
              onChange={({ target }) => {
                setEmail(target.value);
              }}
            />
            {emailErr && (
              <small id="emailHelp" className="form-text text-danger">
                Please fill in an email.
              </small>
            )}
          </div>

          <div className="form-group py-1">
            <label htmlFor="phone">Phone No. (required)</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              aria-describedby="phoneHelp"
              placeholder="Enter phone number"
              value={phone}
              onChange={({ target }) => {
                setPhone(target.value);
              }}
            />
            {phoneErr && (
              <small id="phoneHelp" className="form-text text-danger">
                Please fill in a Phone Number.
              </small>
            )}
          </div>

          <div className="form-group py-1">
            <label htmlFor="designation">Designation</label>
            <input
              type="text"
              className="form-control"
              id="designation"
              aria-describedby="designationHelp"
              placeholder="Enter designation"
              value={designation}
              onChange={({ target }) => {
                setDesignation(target.value);
              }}
            />
          </div>

          <div className="form-group py-1">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              className="form-control"
              id="location"
              aria-describedby="locationHelp"
              placeholder="Enter location"
              value={location}
              onChange={({ target }) => {
                setLocation(target.value);
              }}
            />
          </div>
          <div className="form-group py-1">
            <label htmlFor="courses">Course (required)</label>
            <select
              className="form-control"
              id="courses"
              value={course}
              onChange={({ target }) => setCourse(target.value)}
            >
              <option value="">Courses</option>
              <option value="mern">MERN</option>
              <option value="mean">MEAN</option>
              <option value="mevn">MEVN</option>
            </select>
            {courseErr && (
              <small id="courseHelp" className="form-text text-danger">
                Please select a course.
              </small>
            )}
          </div>
          <div className="form-group py-1">
            <label htmlFor="remarks">Remarks</label>
            <input
              type="text"
              className="form-control"
              id="remarks"
              aria-describedby="remarksHelp"
              placeholder="Enter remarks"
              value={remarks}
              onChange={({ target }) => {
                setRemarks(target.value);
              }}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
            // disabled={true}
          >
            Register
          </button>
        </form>
      </CardContainer>
    </>
  );
};

export default RegistrationPage;
