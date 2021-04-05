import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { validateEmail } from '../../utils/helpers';



function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!errorMessage) {
        setFormState({ [e.target.name]: e.target.value });
        console.log('Form', formState);
      }
    };
  
    const handleChange = (e) => {
      if (e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);
        if (!isValid) {
          setErrorMessage('Your email is invalid.');
        } else {
          setErrorMessage('');
        }
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage('');
        }
      }
    };
      
      
      console.log(formState);
    return (

        <section className="my-5" >
            <h1 id="about" className="text-color contact-styling">Contact </h1>
            
            <div>
                <form className="form-s" onSubmit={handleSubmit}>
                    <label htmlfor="name">Name:</label><br></br><br></br>
                    <input className="input-s" placeholder="Your Name..." type="text" defaultValue={formState.name} onChange={handleChange} name="name"></input><br></br><br></br>
                    <label htmlFor="email">Email Address:</label><br></br><br></br>
                    <input type="email" name="email"  className="input-s" placeholder="example@example.com" type="email" defaultValue={email} onChange={handleChange} name="email"></input><br></br><br></br>
                    <label htmlFor="message">Message:</label><br></br><br></br>
                    <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" className="input-s" placeholder="Your message here..."></textarea><br></br><br></br>
                    <Button  className="btn" type="submit" value="Submit" href="mailto:bbec0689@gmail.com">Send</Button>
                </form>
            </div>
        </section>
    )
}

export default Contact;