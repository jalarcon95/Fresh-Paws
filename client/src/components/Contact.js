import React, { useState, useRef } from 'react';
import { TextField, Typography, MenuItem } from '@mui/material';
import Stack from '@mui/material/Stack';
import emailjs from 'emailjs-com'; // Updated import

export default function Contact() {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [messageSent, setMessageSent] = useState(false);

  const validateInput = (name, value) => {
    if (name === 'name') {
      if (value.trim() === '') {
        setErrorMessage('Please enter a name.');
        return false;
      }
    } else if (name === 'email') {
      if (value.trim() === '') {
        setErrorMessage('Please enter a valid email.');
        return false;
      }
      const pattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
      if (!pattern.test(value)) {
        setErrorMessage('Please enter a valid email.');
        return false;
      }
    } else if (name === 'message') {
      if (value.trim() === '') {
        setErrorMessage('Please enter a message.');
        return false;
      }
    }
    setErrorMessage('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isNameValid = validateInput('name', name);
    const isEmailValid = validateInput('email', email);
    const isMessageValid = validateInput('message', message);

    if (isNameValid && isEmailValid && isMessageValid) {
      // Only reset the form if validation is successful
      setName('');
      setEmail('');
      setMessage('');
      setMessageSent(true);

      emailjs
        .sendForm('service_segtnmw', 'template_7q5pd9o', form.current, 'U_zC3viltWoEFtq6o')
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.error('Email sending failed:', error);
            setErrorMessage('Message sending failed. Please try again later.');
          }
        );
    }
  };

  return (
    <>
      <div>
        <Typography variant="h4" align="center">
          Contact Us
        </Typography>
      </div>
      <form ref={form} style={{ display: 'flex', justifyContent: 'center' }} onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <MenuItem>
            <TextField
              label="Name"
              fullWidth
              name="name"
              type="text"
              variant="outlined"
              style={{ backgroundColor: 'lightgrey' }}
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={(e) => validateInput(e.target.name, e.target.value)}
            />
          </MenuItem>
          <MenuItem>
            <TextField
              label="Email Address"
              fullWidth
              name="email"
              type="email"
              variant="outlined"
              style={{ backgroundColor: 'lightgrey' }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={(e) => validateInput(e.target.name, e.target.value)}
            />
          </MenuItem>
          <MenuItem>
            <textarea
              label="Message"
              rows="15"
              cols="40"
              name="message"
              type="text"
              variant="outlined"
              style={{ backgroundColor: 'lightgrey' }}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onBlur={(e) => validateInput(e.target.name, e.target.value)}
              placeholder="Type your message here."
            />
          </MenuItem>
          {errorMessage && (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <MenuItem style={{ justifyContent: 'center' }}>
            <button
              className="hoverButton"
              id="contact-button"
              xs={{ width: '100%' }}
              variant="contained"
              type="submit"
            >
              Send Message
            </button>
          </MenuItem>
        </Stack>
      </form>
      {messageSent && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Typography variant="body1" className="success-text">
            Message sent successfully!
          </Typography>
        </div>
      )}
    </>
  );
}
