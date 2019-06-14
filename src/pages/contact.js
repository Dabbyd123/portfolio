import React from 'react';
import NavBar from '../components/Toolbar/NavBar';
import { FaGithub, FaGoogle, FaPhoneSquare } from 'react-icons/fa';
import './contact.css';


const Contact = () => {
    return (
        <div className="contact">
            <NavBar />
            <div className="contact-container">
                <h1>Contact</h1>
                <p className="contact-p">
                    <hr />
                    If you have any questions or would like to reach me, please don't hesitate to contact me and I will get back with you as soon as possible.  Thanks for checking out my website!
                    <hr />
                </p>
                <div className="icon-container">
                    <a href="https://github.com/Dabbyd123" className="icon" >
                        <FaGithub className="icon" id="github" />
                        Github
                    </a>
                    <a href="mailto:dbrocker89@gmail.com" className="icon" >
                        <FaGoogle className="icon" id="google" />
                        Gmail
                    </a>
                    <div className="icon">
                        <FaPhoneSquare className="icon" id="phone" />
                        Phone: <span className="phoneNum">(210) 362-4572</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;