import React from 'react'
import Button from 'react-bootstrap/Button';

function Contact() {

    return (

        <section className="my-5" >
            <h1 id="about" className="text-color contact-styling">Contact </h1>
            
            <div>
                <form className="form-s">
                    <label >Name:</label><br></br><br></br>
                    <input className="input-s" placeholder="Your Name..."></input><br></br><br></br>
                    <label>Email Address:</label><br></br><br></br>
                    <input className="input-s" placeholder="example@example.com"></input><br></br><br></br>
                    <label>Message:</label><br></br><br></br>
                    <textarea className="input-s" placeholder="Your message here..."></textarea><br></br><br></br>
                    <Button className="btn" type="submit" value="Submit">Send</Button>
                </form>
            </div>
        </section>
    )
}

export default Contact;