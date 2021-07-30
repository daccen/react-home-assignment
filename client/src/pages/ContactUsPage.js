import React, { useState } from "react";
import CardContainer from "../components/CardContainer";

const ContactUsPage = () => {
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneErr, setPhoneErr] = useState(false);
  const [designation, setDesignation] = useState("");
  const [location, setLocation] = useState("");
  const [remarks, setRemarks] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    resetValidationErrors();
    validateInputs();
    console.log(name, email, designation, location, remarks);
  };

  const validateInputs = () => {
    if (!name) setNameErr(true);
    if (!email) setEmailErr(true);
    if (!email) setPhoneErr(true);
  };

  const resetValidationErrors = () => {
    setNameErr(false);
    setEmailErr(false);
    setPhoneErr(false);
  };

  return (
    <>
      <h1 className="p-2 m-2 text-center">Contact Us</h1>
      <CardContainer className="mx-4">
        <form method="POST" onSubmit={handleSubmit}>
          <div className="form-group py-1">
            <label htmlFor="name">Name (required)</label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="nameHelp"
              placeholder="Enter first name"
              value={name}
              onChange={({ target }) => {
                setName(target.value);
              }}
            />
            {nameErr && (
              <small id="nameHelp" className="form-text text-danger">
                Please fill in a name.
              </small>
            )}
          </div>

          <div className="form-group py-1">
            <label htmlFor="email">Email (required)</label>
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
              placeholder="Enter Phone No."
              value={phone}
              onChange={({ target }) => {
                setPhone(target.value);
              }}
            />
            {phoneErr && (
              <small id="phoneHelp" className="form-text text-danger">
                Please fill in an Phone No.
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
            Submit
          </button>
        </form>
      </CardContainer>
      <div className="w-100 mb-5">
        <iframe
          title="accenture-map"
          width="100%"
          height="600"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=plyn%C3%A1rensk%C3%A1%207/C,%20Bratislava%20+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
        <a href="https://www.maps.ie/draw-radius-circle-map/">
          Google radius map
        </a>
      </div>
    </>
  );
};

export default ContactUsPage;
