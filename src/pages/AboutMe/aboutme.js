import React, { useEffect, useState } from 'react';
import NavBar from '../../components/Toolbar/NavBar';
import * as Scroll from 'react-scroll';
import { Link, animateScroll as scroll } from 'react-scroll';
import "./aboutme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import me from "../../images/me.png";

const AboutMe = () => {
    const [scrolled, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100;
            if (isTop !== true) {
                setScroll(true)
            } else {
                setScroll(false)
            }
        })
        return window.removeEventListener('scroll', null)
    })

    return (
        <div name="top" className="about-me">
            <NavBar />
            {scrolled ? <nav className="toTopNav">
                <Link to='top' spy={false} smooth={true} offset={0} duration={900}><FontAwesomeIcon icon={faChevronUp} /></Link>
            </nav> : null}
            <div className="about-me-container">
                <div className="h1-container about-header">
                    <h1>About Me</h1>
                </div>
                <div className="section-bg intro">
                    <img src={me} alt="" />
                    <p className="p-text"><span className="intro-span">Hi! my name is David Brocker </span> and I am a web developer from New Braunfels, Tx.
                            Apart from working full time, taking care of my dog Winnie (more of
                            a small horse now) and hanging out with my fiancée Lauren, most of my free time is spent coding.
                            I have always been fascinated with the progression of
                            technology and it's affect on our
                            everyday lives, but I didn't realize that I could actually learn to code on my own until about two years ago when my codiing journey began.
                    </p>
                    <h4>More about me:</h4>
                    <div className="linksBtn">
                        <Link to="professional" spy={false} smooth={true} offset={0} duration={700}>
                            As a Professional<span className="dots">...</span>
                        </Link>
                        <Link to="developer" spy={false} smooth={true} offset={0} duration={700}>
                            As a Developer<span className="dots">...</span>
                        </Link>
                    </div>
                </div>

                <hr className='vl' />

                <div name="professional" className="professional section-bg">
                    <h3>
                        <span className="dots">...</span> As a Professional
                    </h3>
                    <p className="p-text">
                        In December 2016, I graduated with a degree in psychology from Texas State University.
                        About two months after I graduated, I started working as the admissions representative for New Braunfels Regional Rehabilitation Hospital and within one year I was promoted to the admissions coordinator.
                        During my time here, I had the opportunity to volunteer as a co-leader of a community-based educational class for stroke survivors as well as help with an interdepartmental eductational class for our Neuro team.
                        It has been a tremendous learning experience for me, not only as a young professional, but as a person.
                    </p>
                    <p className="p-text">
                        My day to day tasks are mainly focused around communication between insurance, our liaisons in the field and our hospital staff.  I lead our ops meeting every morning with all the directors of each department in order to make sure that we have the staff and resources
                        needed for the patients that will be coming in that day. Working in a hospital can be very unpredictable.  There is no telling when we will get busy, so I always have to be ready.  This has lead me to develop strong organizational skills so that I am able to keep the same processes
                        whether we have two patients coming in or twenty.
                    </p>
                    <div className="linksBtn">
                        <Link to="professional" spy={false} smooth={true} offset={0} duration={700}>
                            As a Professional<span className="dots">...</span>
                        </Link>
                        <Link to="developer" spy={false} smooth={true} offset={0} duration={700}>
                            As a Developer<span className="dots">...</span>
                        </Link>
                    </div>
                </div>

                <hr className='vl' />

                <div name="developer" id="developer" className="developer section-bg">
                    <h3>
                        <span className="dots">...</span> As a Developer
                    </h3>
                    <div className="lists">
                        <div className="core-skills">
                            <h5 className="list-header">Core Skills</h5>
                            <ul className="developer-ul core-ul">
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>Vanila Javascript</li>
                                <li>React.js</li>
                                <li>Responsive Design</li>
                            </ul>
                        </div>
                        <div className="libraries">
                            <h5 className="list-header">Libraries</h5>
                            <ul className="developer-ul libraries-ul">
                                <li>React Hooks</li>
                                <li>React Router</li>
                                <li>JQuery</li>
                                <li>Bootstrap</li>
                                <li>MD Bootstrap</li>
                                <li>Tacheyons</li>
                            </ul>
                        </div>
                    </div>
                    <p className="p-text">
                        I have a constant hunger to learn.  I love to learn new things but I especially love diving deeper into things that I already know.  Even though I work full time, any free time I have is spent listening to coding podcasts or researching about the web and how it works.
                        I started off by learning basic HTML and CSS and soon after that I started dabbling in Javascript.  After learning the basics of vanilla js and a little jQuery, I began using react and have been using it ever since. I have mainly been creating simple projects for myself, so I have only really focused on front-end developement but I am very interested
                        in server side as well, especially node.js.  To get a better idea about me as a developer please check out my projects page and my Github.
                    </p>
                    <div className="linksBtn">
                        <Link to="professional" spy={false} smooth={true} offset={0} duration={700}>
                            As a Professional<span className="dots">...</span>
                        </Link>
                        <Link to="developer" spy={false} smooth={true} offset={0} duration={700}>
                            As a Developer<span className="dots">...</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='spacer' />
        </div>
    )
}

export default AboutMe;