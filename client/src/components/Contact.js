import React, {useState, useRef} from 'react';
// import './Contact.css';
import {TextField} from '@mui/material';
import {MenuItem} from '@mui/material';
import Stack from '@mui/material/Stack';
//import emailjs 
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [messageSent, setMessageSent] = useState(false);

    const validateName = (e) => {
        console.log(e);
        const {name, value} = e.target;
        setName(value);
        if (name === 'name') {
            if (value === '') {
                setName('');
                setErrorMessage(`Please enter a name.`);
            }
        }
        if(value.length > 0) {
            setErrorMessage(``);
        }
    };

    const validateEmail = (e) => {
        e.preventDefault();
        console.log(e);
        const {name, value} = e.target;
        setEmail(value);
        if (name === 'email') {
            if (value === '') {
                setEmail('');
                setErrorMessage(`Please enter a valid email.`);
            }
            const pattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
            console.log(!pattern.test(value));
            if (!pattern.test(value)) {
                setErrorMessage(`Please enter a valid email`);
            } else {
                setErrorMessage('');
            }
        }
       
    };

    const validateMessage = (e) => {
        console.log(e);
        const {name, value} = e.target;
        setMessage(value);
        if (name === 'message') {
            if (value === '') {
                setMessage('');
                setErrorMessage(`Please enter a message.`);
            }
        }
        if(value.length > 0) {
            setErrorMessage(``);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setName('');
        setEmail('');
        setMessage('');
        setMessageSent(true);

        emailjs.sendForm('service_segtnmw', 'template_7q5pd9o', form.current, 'U_zC3viltWoEFtq6o')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <>
            <div>
                <h1 style={{display:'flex', justifyContent: 'center'}}>
                    Contact Us
                </h1>
            </div>
            <form ref={form} style={{display:'flex', justifyContent:'center'}} onSubmit={handleSubmit}>
                <Stack spacing={2}>
                    <MenuItem>
                        <TextField
                            defaultValue={name}
                            onBlur={validateName}
                            id='outlined=basic'
                            fullWidth
                            label='Name'
                            name='name'
                            type='text'
                            variant='outlined'
                            style={{backgroundColor: 'lightgrey'}}
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </MenuItem>
                    <MenuItem>
                        {''}
                        <TextField
                            defaultValue={email}
                            onBlur={validateEmail}
                            id='outlined=basic'
                            fullWidth
                            label='Email Address'
                            name='email'
                            type='email'
                            variant='outlined'
                            style={{backgroundColor: 'lightgrey'}}
                            value={email}

                            onChange={e => setEmail(e.target.value)}
                        />
                    </MenuItem>
                    <MenuItem>
                        <textarea
                            defaultValue={message}
                            onBlur={validateMessage}
                            rows='15'
                            cols='40'
                            id='outlined=basic'
                            label='Message'
                            name='message'
                            type='text'
                            variant='outlined'
                            style={{backgroundColor: 'lightgrey'}}
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            placeholder='Type your message here.'
                        />
                    </MenuItem>
                    {errorMessage && (
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <p className='error-text'>{errorMessage}</p>
                        </div>
                    )}
                    <MenuItem style={{justifyContent: 'center'}}>
                        <button
                            className='hoverButton'
                            id='contact-button'
                            xs={{ width: '100%'}}
                            variant='contained'
                            type='submit'
                        >
                            Send Message
                        </button>
                    </MenuItem>
                </Stack>
            </form>
            {messageSent && (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <p className='success-text'>Message sent successfully!</p>
                </div>
            )}
        </>
    );
}