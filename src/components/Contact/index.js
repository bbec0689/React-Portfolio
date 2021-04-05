import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';



function Contact() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    
    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
      }
      
      console.log(formState);
    return (

        <section className="my-5" >
            <h1 id="about" className="text-color contact-styling">Contact </h1>
            
            <div>
                <form className="form-s">
                    <label htmlfor="name">Name:</label><br></br><br></br>
                    <input className="input-s" placeholder="Your Name..." type="text" defaultValue={formState.name} onChange={handleChange} name="name"></input><br></br><br></br>
                    <label htmlFor="email">Email Address:</label><br></br><br></br>
                    <input type="email" name="email"  className="input-s" placeholder="example@example.com" type="email" defaultValue={email} onChange={handleChange} name="email"></input><br></br><br></br>
                    <label htmlFor="message">Message:</label><br></br><br></br>
                    <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" className="input-s" placeholder="Your message here..."></textarea><br></br><br></br>
                    <Button className="btn" type="submit" value="Submit">Send</Button>
                </form>
            </div>
        </section>
    )
}

export default Contact;