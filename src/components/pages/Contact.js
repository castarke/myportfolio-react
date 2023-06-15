// importing react, state, validate email function, boostrap form styling, and button styling
import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// setting up the Contact function with the fields that it will need and making them have staates
function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [textBody, setTextBody] = useState('');
  const [formErrors, setFormErrors] = useState({});

// handling when a change is inputed into each field
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
// the submission of the form
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const errors = {};

    // checking to make sure that there are not any errors, and if so will return a message
    if (!validateEmail(email)) {
      errors.email = 'Please provide a valid email address';
    }
    if (!firstName) {
      errors.firstName = 'Please provide a First Name';
    }
    if (!lastName) {
      errors.lastName = 'Please provide a Last Name';
    }
    if (!textBody) {
      errors.textBody = 'Please provide a message';
    }
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
// setting each of the fields to blank after submitted
    setFirstName('');
    setLastName('');
    setEmail('');
    setTextBody('');
    setFormErrors({});
  };

  return (
    <div className='contact-container' style={{ textAlign: 'center', marginBottom: '75px' }}>
      <div className='title-container'>
        <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>
          If you wish to contact me, please fill out this form and I will reach back out as soon as possible!
        </h1>
      </div>
      <div className='form-container' style={{ maxWidth: '800px', margin: '0 auto' }}>
        <Form className='contact-form'>
          <Form.Group className='mb-3' controlId='formBasicFirstName'>
            <Form.Control
              value={firstName}
              name='firstName'
              onChange={handleInputChange}
              type='text'
              placeholder='First Name'
              style={{ borderRadius: '8px' }}
            />
            {formErrors.firstName && (
              <p className='error-text' style={{ color: 'red' }}>
                {formErrors.firstName}
              </p>
            )}
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicLastName'>
            <Form.Control
              value={lastName}
              name='lastName'
              onChange={handleInputChange}
              type='text'
              placeholder='Last Name'
              style={{ borderRadius: '8px' }}
            />
            {formErrors.lastName && (
              <p className='error-text' style={{ color: 'red' }}>
                {formErrors.lastName}
              </p>
            )}
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Control
              value={email}
              name='email'
              onChange={handleInputChange}
              type='email'
              placeholder='Email'
              style={{ borderRadius: '8px' }}
            />
            {formErrors.email && (
              <p className='error-text' style={{ color: 'red' }}>
                {formErrors.email}
              </p>
            )}
          </Form.Group>

          <Form.Group className='mb-' controlId='formBasicTextBody'>
            <Form.Control
              value={textBody}
              name='textBody'
              onChange={handleInputChange}
              as='textarea'
              placeholder='Please write your message here'
              style={{ width: '100%', borderRadius: '8px' }}
            />
            {formErrors.textBody && (
              <p className='error-text' style={{ color: 'red' }}>
                {formErrors.textBody}
              </p>
            )}
          </Form.Group>

          <Button variant='primary' type='submit' onClick={handleFormSubmit} style={{ borderRadius: '8px' }}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Contact;
