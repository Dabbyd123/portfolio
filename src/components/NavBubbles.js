import React from 'react';
import { Link } from 'react-router-dom';


const NavBubbles = () => {
    return (
        <div className="bubbles">
            <Link to="/aboutme">
                <button className="nav-bubble" type="button" id="aboutme">
                    About Me
                </button>
            </Link>
            <Link to="/projects">
                <button className="nav-bubble" id="projects">
                    Projects
                </button>
            </Link>
            <Link to="/contact">
                <button className="nav-bubble" id="contact">
                    Contact
                </button>
            </Link>
        </div>
    )
}

export default NavBubbles;