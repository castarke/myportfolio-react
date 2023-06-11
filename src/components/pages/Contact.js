import React, {useState} from "react";
import { validateEmail } from "../../utils/helpers";
// import './style.css'
function Contact() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('')
    const [textBody, setTextBody] = useState('');
    const [errorMessage, setErrorMessage] = useState('')
   
    const handleInputChange = (event) => {
      
        const {target} = event;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'firstName') {
            setFirstName(inputValue)
        } else if (inputType === 'lastName'){
            setLastName(inputValue);
        } else if (inputType === 'email'){
            setEmail(inputValue)
        } else if (inputType === 'textBody'){
            setTextBody(inputValue)
        }
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (!validateEmail(email) || !firstName || !lastName) {
            setErrorMessage('Please provide a correct email and be sure that the first name and last name fields are filled out')

            return;
        }
        setFirstName('');
        setLastName('');
        setEmail('');
        setTextBody('');
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
                <input
                value={lastName}
                name="lastName"
                onChange={handleInputChange}
                type="text"
                placeholder="Last Name"
                />
                <input
                value={email}
                name="email"
                onChange={handleInputChange}
                type="email"
                placeholder="email"
                />
                <input
                value={textBody}
                name="textBody"
                onChange={handleInputChange}
                type="text"
                placeholder="Please write your message here"
                />
            <button type="button" onClick={handleFormSubmit}>Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                    </div>
            )}
        </div>
    );
}

export default Contact;