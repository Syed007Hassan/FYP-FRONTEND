"use client";
import React, { useState } from "react";

const Applicant = () => {
  const [step, setStep] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [desc, setDesc] = useState("");

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1); // Decrement step by 1
  };

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1); // Increment step by 1
  };

  return (
    <div>
      <h1>Applicant</h1>
      <form>
        {step === 0 && (
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="dob">Date of Birth</label>
            <input
              id="dob"
              name="dob"
              type="text"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
            <button type="button" onClick={nextStep}>
              Next
            </button>
          </div>
        )}
        {step === 1 && (
          <div>
            <label htmlFor="desc">Description</label>
            <input
              id="desc"
              name="desc"
              type="text"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <button type="button" onClick={prevStep}>
              Previous
            </button>
            <button type="submit">Submit</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Applicant;
