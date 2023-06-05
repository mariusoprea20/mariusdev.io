import "./CSS/contact.css";
import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {

    const [name, setName] = useState(""); //set name
    const [email, setEmail] = useState("");//set email
    const [message, setMessage] = useState("");//set message
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //define email regex
    const [isValidEmail, setIsValidEmail] = useState(false);//valid email flag
    const [isFormCompleted, setIsFormCompleted] = useState(false);//form completed flag
    const [completed, setCompleted] = useState(false);//completed  flag
    const [formCheck, setFormCheck] = useState(true);//formCheck flag 

    //function to handle the name
    const handleName = (event) => {
        setName(event.target.value);
    }
    //function to handle email
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    //function to handle message
    const handleMessage = (event) => {
        setMessage(event.target.value);
    }

    //check if the user inputs are valid
    useEffect(() => {
        emailRegex.test(email) === true ? setIsValidEmail(true) : setIsValidEmail(false);
        email !== "" || name !== "" || message !== "" ? setIsFormCompleted(true) : setIsFormCompleted(false);

    }, [name, email, message]);

    //define form useRef to get the user inputs
    const form = useRef();

    //send email function
    const sendEmail = (e) => {
        e.preventDefault(); //prevent from reloading
        //if email is valid and the form is completed
        //send the email
        if (isValidEmail && isFormCompleted) {
            emailjs.sendForm('service_51fs1s9', 'template_m13bvbk', form.current, 'cH6fNApyylVL0E2tO')
                .then((result) => {
                    //if email sent
                    //display success message for 3 sconds
                    setCompleted(true);
                    setTimeout(() => {
                        setCompleted(false);
                    }, 3000);
                    //clear out the input form
                    setName("");
                    setEmail("");
                    setMessage("");
                    
                }, (error) => {
                    console.log(error.text);
                    setCompleted(false);
                });
        } else{
            //esle display error message for 3 seconds
            setFormCheck(false);
            setTimeout(() => {
                setFormCheck(true);
            }, 3000);
        }
    };
    //render the form
    return (
        <div className="contact">
            {/**Contact detail */}
            <div className="contactDetails">
                <h2><b>Contact Me</b></h2>
                <p><b>Location:</b> Newcastle Upon Tyne</p>
                <p><b>Email:</b> marius_opr97@yahoo.com</p>
                <p><b>Mobile:</b> 07404547299</p>
            </div>
            {/**Define a form and get the form ref. Also send email on submit event*/}
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <div className="form-group">
                    <input type="text" name="user_name"  value={name} placeholder="Your Name" onChange={handleName} />
                </div>
                <div className="form-group">
                    <input type="text" name="user_email" value={email} placeholder="Your Email" onChange={handleEmail} />
                </div>
                <div className="form-group">
                    <textarea name="message" value={message} placeholder="Your Message" onChange={handleMessage} />
                </div>
                <button type="submit" value="send">Submit</button>
                {completed && 
                <div>
                    <p style={{backgroundColor:"green", border:"none", borderRadius:"10px", textAlign:"center", height:"30px"}}>Message Sent!</p>
                </div>}
                {!formCheck && 
                <div>
                    <p style={{backgroundColor:"red", border:"none", borderRadius:"10px", textAlign:"center", height:"30px"}}>Please complete the form before sending!</p>
                </div>}
            </form>
        </div>
    );
}
export default Contact;