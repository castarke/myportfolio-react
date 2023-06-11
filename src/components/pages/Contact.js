import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
// import './style.css'

function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [textBody, setTextBody] = useState('');
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (event) => {
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'firstName') {
      setFirstName(inputValue);
    } else if (inputType === 'lastName') {
      setLastName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'textBody') {
      setTextBody(inputValue);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const errors = {};

    if (!validateEmail(email)) {
      errors.email = "Please provide a valid email address";
    } if (!firstName) {
      errors.firstName = "Please provide a First Name";
    } if (!lastName) {
      errors.lastName = "Please provide a Last Name";
    } if (!textBody) {
        errors.textBody = "Please provide a message";
    }if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFirstName('');
    setLastName('');
    setEmail('');
    setTextBody('');
    setFormErrors({});
  };

  return (
    <div>
      <p>If you wish to contact me, please fill out this form and I will reach back out as soon as possible!</p>
      <form className="contactForm">
        <input
          value={firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
        />
        {formErrors.firstName && (
          <p className="error-text">{formErrors.firstName}</p>
        )}
        <input
          value={lastName}
          name="lastName"
          onChange={handleInputChange}
          type="text"
          placeholder="Last Name"
        />
        {formErrors.lastName && (
          <p className="error-text">{formErrors.lastName}</p>
        )}
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        {formErrors.email && (
          <p className="error-text">{formErrors.email}</p>
        )}
        <input
          value={textBody}
          name="textBody"
          onChange={handleInputChange}
          type="text"
          placeholder="Please write your message here"
        />
        {formErrors.textBody && (
          <p className="error-text">{formErrors.textBody}</p>
        )}
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
