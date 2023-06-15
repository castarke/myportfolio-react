import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
    <div className="contact-container">
      <div className="title-container">
        <h1>If you wish to contact me, please fill out this form and I will reach back out as soon as possible!</h1>
      </div>
      <div className="form-container">
        <Form className="contact-form">
          <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Control
              value={firstName}
              name="firstName"
              onChange={handleInputChange}
              type="text"
              placeholder="First Name"
            />
            {formErrors.firstName && (
              <p className="error-text">{formErrors.firstName}</p>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Control
              value={lastName}
              name="lastName"
              onChange={handleInputChange}
              type="text"
              placeholder="Last Name"
            />
            {formErrors.lastName && (
              <p className="error-text">{formErrors.lastName}</p>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="Email"
            />
            {formErrors.email && (
              <p className="error-text">{formErrors.email}</p>
            )}
          </Form.Group>

          <Form.Group className="mb-" controlId="formBasicTextBody">
            <Form.Control
              value={textBody}
              name="textBody"
              onChange={handleInputChange}
              as="textarea"
              placeholder="Please write your message here"
            />
            {formErrors.textBody && (
              <p className="error-text">{formErrors.textBody}</p>
            )}
          </Form.Group>

          <Button variant="primary" type="submit" onClick={handleFormSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Contact;
